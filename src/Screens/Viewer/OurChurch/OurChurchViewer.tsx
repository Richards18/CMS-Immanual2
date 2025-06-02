import React, { FC } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { COLORS } from '../../../Constants/Colors';
import { FONT_SIZE } from '../../../Constants/FontSize';
import Header from '../../../Header/Header';

interface Props {
  navigation: any;
}

const OurChurchViewer: FC<Props> = ({ navigation }) => {
  const historyData = [
    '1948ஆம் ஆண்டு ஏப்ரல் மாதம் 4ஆம் தேதி(04/04/1948) தென்னிந்திய திருச்சபையின் ஐக்கியத்திலிருந்து வெளியேறி இதே இடத்தில் தட்டிக் கோயில் அமைத்து ஆராதனை நடத்தப்பட்டது.',
    '02/05/1948- கோயில் கட்ட தீர்மானிக்கப்பட்டது.',
    '08/09/1948 - கனம் ஜே. என்.எஸ் பொன்னுச்சாமி குருவானவர் அவர்களால் பிரதிஷ்டை செய்யப்பட்டு பரி இம்மானுவேல் ஆலயம் என பெயரிடப்பட்டது.',
    '28/05/1950 - C.M.S சுத்தாங்க சுவிசேஷ சபை குருவானவர் கனம் எம்.இராஜமணி பொன்னையா அவர்களை அழைத்து ஆராதனை நடத்தப்பட்டது.',
    'முக்கியஸ்தர்கள் கூடிய தீர்மானித்து 11/06/1950 முதல் திருநெல்வேலி C.M.S சுத்தாங்க சுவிசேஷ சபையில் இணைந்து செயல்பட்டு வருகிறது.',
    '1971 ஆம் ஆண்டு தூர பார்வைக்கு நல்ல தோற்றமளிக்கும் ஆலயம் கட்ட தீர்மானிக்கப்பட்டது.',
    '22/01/1990 திங்கள் அன்று C.M.S.சுத்தாங்க சுவிசேஷ சபை தலைமை குருவானவர் கனம் இராஜமணி பொன்னையா அவர்களால் ஜெபம் செய்து அடிக்கல் நாட்டப்பட்டது.',
    '10/02/1990 - திங்களன்று பழைய ஆலயம் இடிக்கப்பட்டது.',
    '20/10/1990 - அன்று சனிக்கிழமை எழில்மிகு புதிய ஆலயம் கனம் இராஜமணி பொன்னையா அவர்களால் பிரதிஷ்டை செய்யப்பட்டது.',
    '22/05/1992 - காலை தஞ்சாவூர் பாகவதர் திரு. வேதநாயகம் சாஸ்திரியார் அவர்களால் மணிக்கூண்டு கோயில் கட்ட அஸ்திபாரம் போடப்பட்டது.',
    '21/05/1993 - வெள்ளிக்கிழமை இரவு 7 மணியளவில் திரு. வேதநாயகம் சாஸ்திரியார்  அவர்களாலேயே மணிக்கூண்டு கோபுரம் பிரதிஷ்டை செய்யப்பட்டது.',
    'புதிய ஆலய மணிக்கூண்டு கோபுர கட்டுமானங்களை (லேட் )திரு.ஆ.ஞா.பிரகாசம் அவர்கள் தலைவராக இருந்து திறம்பட முடித்துக் கொடுத்தது பாராட்டுக்குரியது.',
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <Header title="நமது சபை" screen="OUR_CHURCH" />

      <ImageBackground
        source={require('../../../Assets/ChurchImg.jpg')}
        resizeMode="stretch"
        style={{ flex: 1 }}
        imageStyle={{ borderRadius: 12, opacity: 0.2 }}
      >
        <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 60 }}>
          {/* Church Header Info */}
          <View style={{ marginBottom: 20, alignItems: 'center' }}>
            <Text
              style={{
                fontSize: FONT_SIZE.font_14,
                fontWeight: '900',
                color: COLORS.PrimaryColor,
                marginBottom: 8,
                textAlign: 'center',
              }}
            >
              சி.எம்.எஸ் சுத்தாங்க சுவிசேஷ சபை
            </Text>

            <Text
              style={{
                fontSize: FONT_SIZE.font_23,
                fontWeight: '900',
                color: COLORS.PrimaryColor,
                marginBottom: 5,
                textAlign: 'center',
              }}
            >
              பரி. இம்மானுவேல் ஆலயம்
            </Text>

            <Text
              style={{
                fontSize: FONT_SIZE.font_15,
                fontWeight: '700',
                color: COLORS.PrimaryColor,
                marginBottom: 15,
                textAlign: 'center',
              }}
            >
              செந்தியம்பலம், சாயர்புரம்.
            </Text>
          </View>

          {/* History Section */}
          <View style={{ marginBottom: 20 }}>
            {historyData.map((text, index) => (
              <Text
                key={index}
                style={{
                  fontSize: FONT_SIZE.font_16,
                  fontWeight: '700',
                  color: COLORS.PrimaryColor,
                  lineHeight: 24,
                  marginBottom: 15,
                  textAlign: 'left',
                }}
              >
                {text}
              </Text>
            ))}
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OurChurchViewer;
