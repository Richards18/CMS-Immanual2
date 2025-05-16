import React, {FC} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../Constants/Colors';

interface Props {}

const WorshipOrders: FC<Props> = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.WorshipCards,
        marginTop: 15,
        borderRadius: 20,
      }}>
      <ScrollView contentContainerStyle={{padding: 16}}>
        {/* Header */}
        <View style={{marginBottom: 15}}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '900',
              color: COLORS.Black,
              marginBottom: 8,
            }}>
            ஆராதனை ஒழுங்குகள்:
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: COLORS.Black,
            }}>
            எங்களோடு ஆராதனையில் இணைவதற்கு அன்புடன் அழைக்கிறோம்.
          </Text>
        </View>

        {[
          {
            title: 'நன்றி, ஸ்தோத்திர ஆராதனை - மாதத்தின் முதலாம் நாள்',
            time: '5:00 AM',
          },
          {
            title:
              'ஞாயிறு ஆராதனை - மாதத்தின் முதலாம், நான்காம், ஐந்தாம் ஞாயிறு',
            time: '9:00 - 11:00 AM',
          },
          {
            title: 'துதி ஆராதனை - மாதத்தின் இரண்டாம் ஞாயிறு',
            time: '9:00 - 11:00 AM',
          },
          {
            title: 'அப்பம் பிட்கும் ஆராதனை - மாதத்தின் மூன்றாம் ஞாயிறு',
            time: '9:00 - 11:00 AM',
          },
        ].map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: COLORS.White,
              borderRadius: 12,
              padding: 16,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
              marginTop: index === 0 ? 0 : 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 12,
              }}>
              <MaterialCommunityIcons
                name="calendar"
                size={26}
                color={COLORS.PrimaryColor}
                style={{marginRight: 10}}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: COLORS.Black,
                  flex: 1,
                  flexShrink: 1,
                }}
                numberOfLines={0}>
                {item.title}
              </Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="clock-time-nine-outline"
                size={26}
                color={COLORS.PrimaryColor}
                style={{marginRight: 10}}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: COLORS.Black,
                }}>
                {item.time}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default WorshipOrders;
