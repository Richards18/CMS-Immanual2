import React, {FC} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../Constants/Colors';
import {FONT_SIZE} from '../../../Constants/FontSize';
import Header from '../../../Header/Header';

interface Props {
  navigation: any;
}

const OurChurchViewer: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.White}}>
      <Header title="நமது சபை" screen="OUR_CHURCH" />
      <ImageBackground
        source={require('../../../Assets/ChurchImg.jpg')}
        resizeMode="stretch"
        style={{flex: 1}}
        imageStyle={{
          borderRadius: 12,
          opacity: 0.3,
        }}>
        <ScrollView contentContainerStyle={{padding: 20}}>
          {/* Church Details */}

          <View style={{marginBottom: 20}}>
            <Text
              style={{
                fontSize: FONT_SIZE.font_22,
                fontWeight: '900',
                color: COLORS.PrimaryColor,
                marginBottom: 10,
              }}>
              சி.எம்.எஸ். சுத்தாங்க சுவிசேஷ சபை
            </Text>
            <Text
              style={{
                fontSize: FONT_SIZE.font_16,
                color: COLORS.PrimaryColor,
                marginBottom: 5,
                fontWeight: '900',
              }}>
              பரி.இம்மானுவேல் ஆலயம்
            </Text>
            <Text
              style={{
                fontSize: FONT_SIZE.font_16,
                color: COLORS.PrimaryColor,
                marginBottom: 20,
                fontWeight: '600',
              }}>
              செந்தியம்பலம், சாயர்புரம்.
            </Text>
          </View>

          {/* Church History */}
          <View style={{marginBottom: 20}}>
            <Text
              style={{
                fontSize: FONT_SIZE.font_16,
                color: COLORS.PrimaryColor,
                lineHeight: 24,
                marginBottom: 15,
                fontWeight: '500',
              }}>
              1948ஆம் ஆண்டு ஏப்ரல் மாதம் 4ஆம் தேதி(04-04-1948) தென்னிந்திய
              திருச்சபையின் ஐக்கியத்திலிருந்து வெளியேறி இதே இடத்தில் தட்டிக்
              கோயில் அமைத்து ஆராதனை நடத்தப்பட்டது.
            </Text>
            <Text
              style={{
                fontSize: FONT_SIZE.font_16,
                color: COLORS.PrimaryColor,
                lineHeight: 24,
                marginBottom: 15,
                fontWeight: '500',
              }}>
              2.5.1948- கோயில் கட்ட தீர்மானிக்கப்பட்டது.
            </Text>
            <Text
              style={{
                fontSize: FONT_SIZE.font_16,
                color: COLORS.PrimaryColor,
                lineHeight: 24,
                marginBottom: 15,
                fontWeight: '500',
              }}>
              8. 9. 1948 ஆம் ஆண்டு கனம் ஜே. என்.எஸ் பொன்னுச்சாமி குருவானவர்
              அவர்களால் பிரதிஷ்டை செய்யப்பட்டு பரி இம்மானுவேல் ஆலயம் என
              பெயரிடப்பட்டது.
            </Text>
            <Text
              style={{
                fontSize: FONT_SIZE.font_16,
                color: COLORS.PrimaryColor,
                lineHeight: 24,
                marginBottom: 15,
                fontWeight: '500',
              }}>
              28.05.1950 ஆம் ஆண்டு C.M.S சுத்தாங்க சுவிசேஷ சபை குருவானவர் கனம்
              எம்.இராஜமணி பொன்னையா அவர்களை அழைத்து ஆராதனை நடத்தப்பட்டது.
            </Text>
            <Text
              style={{
                fontSize: FONT_SIZE.font_16,
                color: COLORS.PrimaryColor,
                lineHeight: 24,
                marginBottom: 15,
                fontWeight: '500',
              }}>
              முக்கியஸ்தர்கள் கூடிய தீர்மானித்து 11.06.1950 முதல் திருநெல்வேலி
              C.M.S சுத்தாங்க சுவிசேஷ சபையில் இணைந்து செயல்பட்டு வருகிறது.
            </Text>
            <Text
              style={{
                fontSize: FONT_SIZE.font_16,
                color: COLORS.PrimaryColor,
                lineHeight: 24,
                marginBottom: 15,
                fontWeight: '500',
              }}>
              1971 ஆம் ஆண்டு தூர பார்வைக்கு நல்ல தோற்றமளிக்கும் ஆலயம் கட்ட
              தீர்மானிக்கப்பட்டது.
            </Text>
            <Text
              style={{
                fontSize: FONT_SIZE.font_16,
                color: COLORS.PrimaryColor,
                lineHeight: 24,
                marginBottom: 15,
                fontWeight: '500',
              }}>
              22.01.1990 திங்கள் அன்று C.M.S.சுத்தாங்க சுவிசேஷ சபை தலைமை
              குருவானவர் கனம் இராஜமணி பொன்னையா அவர்களால் ஜெபம் செய்து அடிக்கல்
              நாட்டப்பட்டது.
            </Text>
            <Text
              style={{
                fontSize: FONT_SIZE.font_16,
                color: COLORS.PrimaryColor,
                lineHeight: 24,
                marginBottom: 15,
                fontWeight: '500',
              }}>
              10. 2.1990 திங்களன்று பழைய ஆலயம் இடிக்கபட்டது.
            </Text>
            <Text
              style={{
                fontSize: FONT_SIZE.font_16,
                color: COLORS.PrimaryColor,
                lineHeight: 24,
                marginBottom: 15,
                fontWeight: '500',
              }}>
              20.10.1990 அன்று சனிக்கிழமை எழில்மிகு புதிய ஆலயம் கனம் இராஜமணி
              பொன்னையா அவர்களால் பிரதிஷ்டை செய்யப்பட்டது.
            </Text>
            <Text
              style={{
                fontSize: FONT_SIZE.font_16,
                color: COLORS.PrimaryColor,
                lineHeight: 24,
                marginBottom: 15,
                fontWeight: '500',
              }}>
              22.5.1992 காலை தஞ்சாவூர் பாகவதர் திரு. வேதநாயகம் சாஸ்திரியார்
              அவர்களால் மணிக்கூண்டு கோயில் கட்ட அஸ்திபாரம் போடப்பட்டது.
            </Text>
            <Text
              style={{
                fontSize: FONT_SIZE.font_16,
                color: COLORS.PrimaryColor,
                lineHeight: 24,
                marginBottom: 15,
                fontWeight: '500',
              }}>
              21.5.1993 வெள்ளிக்கிழமை இரவு 7 மணியளவில் திரு. வேதநாயகம்
              சாஸ்திரியார் அவர்களாலேயே மணிக்கூண்டு கோபுரம் பிரதிஷ்டை
              செய்யப்பட்டது.
            </Text>
            <Text
              style={{
                fontSize: FONT_SIZE.font_16,
                color: COLORS.PrimaryColor,
                lineHeight: 24,
                marginBottom: 15,
                fontWeight: '500',
              }}>
              புதிய ஆலய மணிக்கூண்டு கோபுர கட்டுமானங்களை (லேட்
              )திரு.ஆ.ஞா.பிரகாசம் அவர்கள் தலைவராக இருந்து திறம்பட முடித்துக்
              கொடுத்தது பாராட்டுக்குரியது.
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OurChurchViewer;
