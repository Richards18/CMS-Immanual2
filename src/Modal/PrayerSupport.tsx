import React, { FC } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import { COLORS } from '../Constants/Colors';
import { FONT_SIZE } from '../Constants/FontSize';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../Constants/ScreenNames';

interface Props { }

const PrayerSupport: FC<Props> = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <View
        style={{
          borderRadius: 15,
          padding: 20,
          // marginBottom: 20,
          // marginTop: 15,
        }}>
        {/* Heading Section */}
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={require('../Assets/Prayer_support.png')}
              style={{ width: 200, height: 200 }}
              resizeMode="contain"
            />
          </View>
          <View style={{ flex: 0.7 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: COLORS.PrimaryColor,
                textAlign: 'center',
                marginBottom: 10,
              }}>
              ஜெப ஆதரவை நாடுகிறீர்களா?
            </Text>
          </View>

        </View>

        {/* Content Text Section */}
        <Text
          style={{
            fontSize: FONT_SIZE.font_16,
            color: COLORS.PrimaryColor,
            lineHeight: 24,
            textAlign: 'justify',
            marginBottom: 20,
            fontWeight: '400'
          }}>
          நீங்கள் ஒரு சவாலான நேரத்தை கடந்து கொண்டிருக்கிறீர்களா? உங்களுடைய
          விண்ணப்பத்திற்கு எங்களது ஜெப உதவி தேவை என நினைக்கிறீர்களா?
          விசுவாசத்துடன் உங்களுக்குத் துணையாக நின்று ஆண்டவருடன் ஜெபிக்க நாங்கள்
          இங்கே இருக்கிறோம். உங்கள் ஜெப விண்ணப்பம் எவ்வளவு பெரியதாக இருந்தாலும்
          சிறியதாக இருந்தாலும், அதை எங்களுடைய ஊழியர்களுடன் பகிர்வதன் மூலம்,
          உங்களுக்காக நாங்கள் ஊக்கமாக ஜெபிக்க அழைக்கப்பட்டிருக்கிறோம். சரீர
          குணத்தை, ஆவிக்கான வழிகாட்டுதலை ஜெபத்தின் மூலமாக நாடுவோம். நினைவில்
          கொள்ளுங்கள், நீங்கள் தனியாக இல்லை, நாங்கள் உங்களுடன் ஜெபிப்போம்,
          தேவைப்படும் நேரங்களில் ஆறுதலையும் நம்பிக்கையையும் கொடுப்போம். கர்த்தர்
          நிச்சயமாக பதில் கொடுப்பார்.
        </Text>

        {/* Send Prayer Button */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate(SCREENS.PRAY_REQUEST)}
          style={{
            backgroundColor: COLORS.ButtonColor,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 6,
            elevation: 5,
            marginBottom: 8,
          }}>
          <Text
            style={{
              color: COLORS.White,
              fontSize: FONT_SIZE.font_16,
              fontWeight: 'bold',
              letterSpacing: 1,
            }}>
            Send Your Prayer Request
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PrayerSupport;
