import React, { FC, useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import { COLORS } from '../Constants/Colors';
import { FONT_SIZE } from '../Constants/FontSize';
import axios from 'axios';

interface Props { }

const BirthdayWish: FC<Props> = () => {
  const [birthdayList, setBirthdayList] = useState<{ nameTitle: string, name: string, gender: string, mobileNumber: number }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { width, height } = Dimensions.get('window');

  const today = new Date();
  const dayOfMonth = today.getDate();
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];
  const month = monthNames[today.getMonth()];
  const formattedDate = `${dayOfMonth} ${month}`;

  useEffect(() => {
    fetchTodaysBirthdayList();
  }, []);

  const fetchTodaysBirthdayList = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        'http://cmsimmanuelchurch.com/manageMember.php',
        { action: 'TodaysBirthdayList' },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const members = response?.data || [];
      // console.log('members', JSON.stringify(members));

      const formatted = members.map((member: any) => ({
        nameTitle: member.nameTitle,
        name: member.fullName,
        gender: member.gender,
        mobileNumber: member.mobileNumber
      }));

      setBirthdayList(formatted);
    } catch (err) {
      setError('Failed to fetch data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const sendWish = (mobileNumber: number) => {
    const message = '🎉 பிறந்த நாள் வாழ்த்துகள்! உங்கள் வாழ்க்கையில் கர்த்தரின் ஆசீர்வாதம் நிரம்பி வழியட்டும்!';

    Alert.alert(
      'வாழ்த்து அனுப்ப',
      'பிறந்த நாள் வாழ்த்தை அனுப்ப விரும்பும் வழியைத் தேர்ந்தெடுக்கவும்:',
      [
        {
          text: 'WhatsApp',
          onPress: () => {
            const url = `whatsapp://send?phone=${mobileNumber}&text=${encodeURIComponent(message)}`;
            Linking.openURL(url).catch(() => {
              Alert.alert('பிழை', 'WhatsAppஐத் திறக்க முடியவில்லை.');
            });
          },
        },
        {
          text: 'SMS',
          onPress: () => {
            const url = `sms:${mobileNumber}?body=${encodeURIComponent(message)}`;
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
    <SafeAreaView style={{ flex: 1 }}>

      {/* Header */}
      {!loading && birthdayList.length > 0 && (
        <View style={{ flex: 1, backgroundColor: '#FFF9F6', padding: width * 0.05 }}>
          <View
            style={{
              marginBottom: width * 0.03,
            }}
          >
            <Image
              source={require('../Assets/birthday-1.png')}
              style={{ width: width * 0.45, height: width * 0.45, position: 'absolute', alignSelf: 'flex-end' }}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: width * 0.055,
                fontWeight: '700',
                color: '#D95D39',
                marginTop: 90
              }}
            >
              இன்றைய {'\n'}பிறந்த நாள் {'\n'}வாழ்த்துக்கள்
            </Text>
          </View>

          {/* Message */}
          <Text
            style={{
              fontSize: width * 0.04,
              lineHeight: width * 0.06,
              color: COLORS.Black,
              textAlign: 'justify',
              fontWeight: '500',
            }}
          >
            இன்றைய நாளில் தங்களது பிறந்த நாளினை கொண்டாடும் எங்கள் அன்புக்குரிய திருச்சபை குடும்ப உறுப்பினர்களை ஆண்டவருடை நாமத்தில் அன்போடு வாழ்த்துகிறோம். கர்த்தர் இந்த புதிய வருடத்திலே உங்களை ஆசீர்வதிப்பாராக!!
          </Text>

          {/* Loading State */}
          {loading && (
            <ActivityIndicator
              size="large"
              color="#D95D39"
              style={{ marginTop: width * 0.04 }}
            />
          )}

          {/* People List */}
          <FlatList
            data={birthdayList}
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
                    source={
                      item?.gender === 'Female'
                        ? require('../Assets/bday-female.png')
                        : require('../Assets/bday-male.png')
                    }
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
                      left: -width * 0.020,
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
                    {item.nameTitle + ". " + item.name}
                  </Text>

                  <TouchableOpacity
                    onPress={() => sendWish(item.mobileNumber)}
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

export default BirthdayWish;