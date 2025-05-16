import React, {FC} from 'react';
import {View, Text, SafeAreaView, ScrollView, Pressable} from 'react-native';
import {COLORS} from '../Constants/Colors';
import {FONT_SIZE} from '../Constants/FontSize';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../Constants/ScreenNames';

interface Props {}

const UpcomingPrayers: FC<Props> = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.White}}>
      <ScrollView
        contentContainerStyle={{
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 10,
        }}>
        <View
          style={{
            backgroundColor: '#FAFAFA',
            padding: 20,
            borderRadius: 16,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.1,
            shadowRadius: 6,
            elevation: 4,
          }}>
          {/* Title */}
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              color: COLORS.PrimaryColor,
              textAlign: 'center',
              marginBottom: 10,
            }}>
            வரவிருக்கும் தேவாலய சிறப்பு கூடுகைகள் மற்றும் பண்டிகை ஆராதனைகள் &
            செய்திகள்
          </Text>

          {/* Description */}
          <Text
            style={{
              fontSize: FONT_SIZE.font_16,
              color: COLORS.Black,
              textAlign: 'justify',
              marginBottom: 12,
              lineHeight: 24,
            }}>
            தேவாலய சிறப்பு கூடுகைகள், பண்டிகை ஆராதனைகள் மற்றும் நிகழ்வுகள்
            குறித்த செய்திகளை அறிந்து கொள்ள வாருங்கள். ஆண்டவரை மகிழ்விக்க ஒன்றாக
            ஒன்று சேர்வோம்.
          </Text>

          <Text
            style={{
              fontSize: FONT_SIZE.font_16,
              color: COLORS.Black,
              textAlign: 'justify',
              lineHeight: 24,
              marginBottom: 20,
            }}>
            கடந்த நிகழ்வுகளின் செய்திகளையும் பார்க்கலாம்.
          </Text>

          {/* Buttons */}
          <Pressable
            onPress={() => {
              // navigation.navigate(SCREENS.EVENTS_SCREEN);
            }}
            style={({pressed}) => ({
              backgroundColor: pressed ? COLORS.ButtonColor : COLORS.White,
              borderColor: COLORS.ButtonColor,
              borderWidth: 1.5,
              paddingVertical: 14,
              borderRadius: 12,
              alignItems: 'center',
              marginBottom: 12,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.15,
              shadowRadius: 4,
              elevation: 2,
            })}>
            {({pressed}) => (
              <Text
                style={{
                  color: pressed ? COLORS.White : COLORS.ButtonColor,
                  fontSize: FONT_SIZE.font_16,
                  fontWeight: '600',
                  letterSpacing: 0.5,
                }}>
                நிகழ்வுகள் காண
              </Text>
            )}
          </Pressable>

          <Pressable
            onPress={() => {
              navigation.navigate(SCREENS.NEWS_SCREEN);
            }}
            style={({pressed}) => ({
              backgroundColor: pressed ? COLORS.ButtonColor : COLORS.White,
              borderColor: COLORS.ButtonColor,
              borderWidth: 1.5,
              paddingVertical: 14,
              borderRadius: 12,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.15,
              shadowRadius: 4,
              elevation: 2,
            })}>
            {({pressed}) => (
              <Text
                style={{
                  color: pressed ? COLORS.White : COLORS.ButtonColor,
                  fontSize: FONT_SIZE.font_16,
                  fontWeight: '600',
                  letterSpacing: 0.5,
                }}>
                செய்திகள் காண
              </Text>
            )}
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpcomingPrayers;
