import React, { FC } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import { FONT_SIZE } from '../Constants/FontSize';
import { COLORS } from '../Constants/Colors';

interface Props { }

const DonationModal: FC<Props> = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 20,
        borderRadius: 20,
        marginTop: 20,
      }}>
      {/* Title Section */}
      <View style={{ marginBottom: 10, alignItems: 'center' }}>
        <Text
          style={{
            fontSize: FONT_SIZE.font_24,
            fontWeight: 'bold',
            color: '#4caf50', // Elegant green for the title
            textAlign: 'center',
            textShadowColor: '#b0b0b0', // Soft shadow for depth
            textShadowOffset: { width: 0, height: 2 },
            textShadowRadius: 4,
          }}>
          சமூக மண்டபம் கட்டுமான பணி
        </Text>
        <Text
          style={{
            fontSize: FONT_SIZE.font_18,
            fontWeight: '900',
            color: '#757575',
            textAlign: 'center',
            marginTop: 8,
          }}>
          (Community Hall Building Work)
        </Text>
      </View>

      {/* Description Section */}
      <View style={{ marginBottom: 10 }}>
        <Text
          style={{
            fontSize: FONT_SIZE.font_16,
            color: '#616161',
            lineHeight: 24,
            textAlign: 'justify',
            fontWeight: '500'

          }}>
          நமது ஆலய சிறப்பு ஆராதனைகள் மற்றும் சிறப்பு கூடுகைகளுக்காகவும், நமது
          குடும்பங்களின் சொந்த நிகழ்வுகளுக்கு உதவவும் ஒரு சமூக மண்டபத்தை
          உருவாக்க இணைவோம். உங்கள் ஜெபங்களும் நன்கொடைகளும் கிறிஸ்துவின் அன்பின்
          மூலம் நமது ஆலய வளர்ச்சியை மேம்படுத்த உதவும். கீழே உள்ள லிங்கை
          பயன்படுத்தி நீங்கள் வாக்களிக்கும் தொகையினை (Commitment Amount in Rs.)
          எங்களிடம் தெரியப்படுத்த வேண்டுகிறோம்.
        </Text>
      </View>

      {/* Donation Image Section */}
      <View style={{ marginBottom: 5, alignItems: 'center' }}>
        <Image
          source={require('../Assets/Donation.png')}
          style={{ width: 300, height: 150 }}
          resizeMode="contain"
        />
      </View>

      {/* Call to Action */}
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            backgroundColor: '#81c784', // Pastel green button
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
              color: '#fff', // White text for the button
              textAlign: 'center',
            }}>
            வாக்களிக்கும் தொகை
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DonationModal;
