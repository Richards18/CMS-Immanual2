import React, { FC } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import { FONT_SIZE } from '../Constants/FontSize';
import { COLORS } from '../Constants/Colors';

interface Props { }

const DonationModal: FC<Props> = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 20,
        borderRadius: 20,
        // marginTop: 20,
      }}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}

      {/* Image at the Top */}
      <View style={{ alignItems: 'center', }}>
        <Image
          source={require('../Assets/Donation.png')}
          style={{ width: 250, height: 200 }}
          resizeMode="contain"
        />
      </View>

      {/* Title Section */}
      <View style={{ marginBottom: 10, alignItems: 'center' }}>
        <Text
          style={{
            fontSize: FONT_SIZE.font_22,
            fontWeight: 'bold',
            color: COLORS.Black,
            textAlign: 'center',
          }}>
          சமூக மண்டபம் கட்டுமான பணி
        </Text>
        <Text
          style={{
            fontSize: FONT_SIZE.font_18,
            fontWeight: '900',
            color: COLORS.Black,
            textAlign: 'center',
            marginTop: 5,
          }}>
          (Community Hall Building Work)
        </Text>
      </View>

      {/* Description Section */}
      <View style={{ marginBottom: 10 }}>
        <Text
          style={{
            fontSize: FONT_SIZE.font_16,
            color: COLORS.Black,
            lineHeight: 24,
            textAlign: 'justify',
            fontWeight: '400',
          }}>
          நமது ஆலய சிறப்பு ஆராதனைகள் மற்றும் சிறப்பு கூடுகைகளுக்காகவும்,
          நமது குடும்பங்களின் சொந்த நிகழ்வுகளுக்கு உதவவும் ஒரு சமூக
          மண்டபத்தை உருவாக்க இணைவோம். உங்கள் ஜெபங்களும் நன்கொடைகளும்
          கிறிஸ்துவின் அன்பின் மூலம் நமது ஆலய வளர்ச்சியை மேம்படுத்த உதவும்.
          கீழே உள்ள லிங்கை பயன்படுத்தி நீங்கள் வாக்களிக்கும் தொகையினை
          (Commitment Amount in Rs.) எங்களிடம் தெரியப்படுத்த வேண்டுகிறோம்.
        </Text>
      </View>

      {/* Call to Action */}
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: COLORS.ButtonColor,
            paddingVertical: 14,
            paddingHorizontal: 35,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 5,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 6,
          }}
          onPress={() => {
            Linking.openURL(
              'https://docs.google.com/forms/d/e/1FAIpQLScr6G8SPCqJdLLrvJdqMlPYx-08VzOgpmAYF7wLthXUbU08fg/viewform',
            );
          }}>
          <Text
            style={{
              fontSize: FONT_SIZE.font_16,
              fontWeight: 'bold',
              color: COLORS.White,
              textAlign: 'center',
            }}>
            வாக்களிக்கும் தொகை
          </Text>
        </TouchableOpacity>
      </View>

      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default DonationModal;
