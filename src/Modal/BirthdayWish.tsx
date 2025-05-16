import React, { FC } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import { COLORS } from '../Constants/Colors';
import { FONT_SIZE } from '../Constants/FontSize';

interface Props { }

const BirthdayWish: FC<Props> = () => {
  const today = new Date();
  const dayOfMonth = today.getDate();
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];
  const month = monthNames[today.getMonth()];
  const formattedDate = `${dayOfMonth} ${month}`;

  const peopleWithSameBirthday = [
    { name: 'Mr. Immanuel Jacob J' },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFF9F6',
        padding: 20,
        marginTop: 20
      }}>

      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Text
          style={{
            flex: 1,
            fontSize: 20,
            fontWeight: '700',
            color: '#D95D39',
          }}>
          இன்றைய பிறந்த நாள் வாழ்த்துக்கள்
        </Text>
        <Image
          source={require('../Assets/birthday-1.png')}
          style={{ width: 60, height: 60 }}
        />
      </View>

      {/* Message */}
      <Text
        style={{
          fontSize: 16,
          lineHeight: 24,
          color: COLORS.Grey2,
          textAlign: 'justify',
          marginVertical: 15,
          fontWeight: '500'

        }}>
        இன்றைய நாளில் தங்களது பிறந்த நாளினை கொண்டாடும் எங்கள் அன்புக்குரிய திருச்சபை குடும்ப உறுப்பினர்களை ஆண்டவருடை நாமத்தில் அன்போடு வாழ்த்துகிறோம். கர்த்தர் இந்த புதிய வருடத்திலே உங்களை ஆசீர்வதிப்பாராக!!
      </Text>

      {/* People List */}
      <FlatList
        data={peopleWithSameBirthday}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#fff',
              padding: 14,
              borderRadius: 12,
              elevation: 3,
              shadowColor: '#000',
              shadowOpacity: 0.05,
              shadowRadius: 4,
              shadowOffset: { width: 0, height: 2 },
            }}>
            {/* Image + Date */}
            <View style={{ position: 'relative', marginRight: 15 }}>
              <Image
                source={require('../Assets/bday-male.png')}
                style={{ width: 55, height: 55, borderRadius: 28 }}
              />
              <Image
                source={require('../Assets/Calendar.png')}
                style={{
                  width: 45,
                  height: 40,
                  position: 'absolute',
                  top: -22,
                  left: -22,
                }}
              />
              <Text
                style={{
                  position: 'absolute',
                  top: -5,
                  left: -16,
                  fontSize: 11,
                  fontWeight: 'bold',
                  color: '#D95D39',
                }}>
                {formattedDate}
              </Text>
            </View>

            {/* Name */}
            <Text
              style={{
                flex: 1,
                fontSize: FONT_SIZE.font_19,
                color: '#333',
                fontWeight: '600',
              }}>
              {item.name}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default BirthdayWish;
