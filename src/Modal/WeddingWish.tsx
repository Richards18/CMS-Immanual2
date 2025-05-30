import React, { FC, useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
  ActivityIndicator,
  Linking,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../Constants/Colors';
import { FONT_SIZE } from '../Constants/FontSize';
import axios from 'axios';

interface Props {}

const WeddingWish: FC<Props> = () => {
  const [weddingList, setWeddingList] = useState<{ name: string}[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { width } = Dimensions.get('window');

  const today = new Date();
  const dayOfMonth = today.getDate();
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = monthNames[today.getMonth()];
  const formattedDate = `${dayOfMonth} ${month}`;

  useEffect(() => {
    fetchTodaysWeddingList();
  }, []);

  const fetchTodaysWeddingList = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        'http://cmsimmanuelchurch.com/manageMember.php',
        { action: 'TodaysAnniversaryList' },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // console.log('we', JSON.stringify(response))

      const members = response?.data || [];
      const formatted = members.map((member: any) => ({
        name: member.nameTitle1 + '.' + member.husbandName + ' & ' + member.nameTitle2 + '.' + member.wifeName,
      }));

      setWeddingList(formatted);
    } catch (err) {
      setError('Failed to fetch data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const sendWish = () => {
    const message = '💐 திருமண நாள் வாழ்த்துக்கள்! உங்கள் குடும்பம் கர்த்தரின் ஆசீர்வாதத்தில் மகிழ்ச்சியுடன் இருக்கட்டும்!';
    const phoneNumber = '7868834428';
  
    Alert.alert(
      'வாழ்த்து அனுப்ப',
      'திருமண நாள் வாழ்த்தை அனுப்ப விரும்பும் வழியைத் தேர்ந்தெடுக்கவும்:',
      [
        {
          text: 'WhatsApp',
          onPress: () => {
            const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
            Linking.openURL(url).catch(() => {
              Alert.alert('பிழை', 'WhatsAppஐத் திறக்க முடியவில்லை.');
            });
          },
        },
        {
          text: 'SMS',
          onPress: () => {
            const url = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
            Linking.openURL(url).catch(() => {
              Alert.alert('பிழை', 'SMS அனுப்ப முடியவில்லை.');
            });
          },
        },
        { text: 'ரத்து', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
      {/* Header */}
      {!loading && weddingList.length > 0 && (
        <View style={{flex: 1, backgroundColor: '#FFF9F6', padding: 10, borderRadius: 20}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Text style={{ flex: 1, fontSize: 20, fontWeight: '700', color: '#D95D39' }}>
          இன்றைய திருமண நாள் வாழ்த்துக்கள்
        </Text>
        <Image source={require('../Assets/Anniversary.png')} style={{ width: 60, height: 60 }} />
      </View>

      {/* Message */}
      <Text
        style={{
          fontSize: 16,
          lineHeight: 24,
          color: COLORS.Grey2,
          textAlign: 'justify',
          marginVertical: 15,
          fontWeight: '500',
        }}
      >
        இன்றைய நாளில் தங்களது திருமண நாளினை கொண்டாடி தம்பதிகளாக புதிய ஆண்டில் அடி எடுத்து வைக்கும் குடும்பதினரை ஆண்டவராகிய இயேசு கிறிஸ்துவின் நாமத்தில் அன்போடு வாழ்த்துகிறோம். தேவனுடைய கிருபை, அன்பு, சமாதானம் மற்றும் மகிழ்ச்சியுடன் வரும் ஆண்டில் ஆசீர்வாதமாக இருக்க வாழ்த்துகிறோம்!
      </Text>

      {/* Loading */}
      {loading && <ActivityIndicator size="large" color="#D95D39" style={{ marginTop: 20 }} />}

      {/* People List */}
      <FlatList
          data={weddingList}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ paddingBottom: width * 0.07 }}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                padding: width * 0.04,
                borderRadius: 12,
                elevation: 3,
                shadowColor: '#000',
                shadowOpacity: 0.05,
                shadowRadius: 4,
                shadowOffset: { width: 0, height: 2 },
                marginVertical: width * 0.015,
                alignItems: 'center',
              }}
            >
              {/* Image + Date */}
              <View style={{ position: 'relative', marginRight: width * 0.04, marginLeft: width * 0.05 }}>
                <Image
                  source={require('../Assets/Couple.png')}
                  style={{
                    width: width * 0.12,
                    height: width * 0.12,
                    borderRadius: (width * 0.15) / 2,
                  }}
                  resizeMode="cover"
                />
                <Image
                  source={require('../Assets/Calendar.png')}
                  style={{
                    width: width * 0.09,
                    height: width * 0.09,
                    position: 'absolute',
                    top: -width * 0.04,
                    left: -width * 0.03,
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    position: 'absolute',
                    left: -width * 0.025,
                    fontSize: 9,
                    fontWeight: 'bold',
                    color: '#D95D39',
                  }}
                >
                  {formattedDate}
                </Text>
              </View>

              {/* Name + Button */}
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: FONT_SIZE.font_17,
                    color: '#333',
                    fontWeight: '600',
                    marginBottom: width * 0.015,
                  }}
                >
                  {item.name}
                </Text>

                <TouchableOpacity
                  // onPress={sendWish}
                  activeOpacity={0.6}
                  style={{
                    backgroundColor: '#D95D39',
                    paddingVertical: width * 0.015,
                    paddingHorizontal: width * 0.015,
                    borderRadius: 20,
                    flexDirection: 'row',
                    alignSelf: 'flex-end',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 3,
                  }}
                >
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: width * 0.022,
                      fontWeight: '700',
                      
                    }}
                  >
                    வாழ்த்து தெரிவிக்க
                  </Text>
                </TouchableOpacity>

              </View>
            </View>
          )}
        />


      </View>
    )}
    </SafeAreaView>
  );
};

export default WeddingWish;
