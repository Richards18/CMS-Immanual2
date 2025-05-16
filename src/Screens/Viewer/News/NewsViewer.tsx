import React, {FC} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FONT_SIZE} from '../../../Constants/FontSize';
import {COLORS} from '../../../Constants/Colors';
import {SCREENS} from '../../../Constants/ScreenNames';
import Header from '../../../Header/Header';

interface Props {
  navigation: any;
}

const NewsViewer: FC<Props> = ({navigation}) => {
  const newsData = [
    {
      title: 'பவளவிழா மண்டபம் பிரதிஷ்டை & V.B.S கலை நிகழ்ச்சி 2023',
      description:
        '75ஆம் ஆண்டு பவள விழாவின் ஆரம்ப நிகழ்ச்சியாக பவளவிழா மண்டபம் 19.5.2023 அன்று மாலை 6 மணியளவில் நமது தலைமை போதகர் ஐயா Rev.G.அல்பர்ட் கெர்சோன் அவர்களால் பிரதிஷ்டை செய்யப்பட்டது. நமது சபை ஊழியர் திரு.C.சைலஸ் ராஜன் அவர்கள் ஜெபம் செய்து V.B.S கலை நிகழ்ச்சிகளை தொடங்கி வைத்தார்...',
      screen: SCREENS.DIAMONDJUBI_NEWS,
    },
    {
      title: 'சகோதரி ஹேமா ஜான் அவர்களின் இன்னிசை நிகழ்ச்சி 2023',
      description:
        '75 ஆம் ஆண்டு பவள விழாவை முன்னிட்டு 20.5.2023 அன்று இரவு 6.00 மணியளவில் சகோதரி ஹேமா ஜான் அவர்களின் இன்னிசை நிகழ்ச்சி நடைபெற்றது. சபை பாகுபாடின்றி அனைவரும் கலந்து கொண்டனர்...',
      screen: SCREENS.HEMA_JOHN_NEWS,
    },
    {
      title: 'பெண்கள் பண்டிகை 20.5.2023',
      description:
        '75 ஆம் ஆண்டு பவள விழாவை முன்னிட்டு முதல் நிகழ்ச்சியாக பெண்கள் பண்டிகை 20.5.2023 அன்று காலை 9:00 மணிக்கு ஆரம்பமானது. அவ்வாராதனையிலே சுவிசேஷகர் D.கென்னடி பிரேமா அவர்கள் தேவசெய்தி கொடுத்தார்கள்...',
      screen: SCREENS.WOMENS_FEST_NEWS,
    },
  ];

  const getShortText = (text: string, wordCount: number) => {
    const words = text.split(' ');
    return words.length > wordCount
      ? words.slice(0, wordCount).join(' ') + '...'
      : text;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.White}}>
      <Header title="செய்திகள்" screen="NEWS_SCREEN" />

      {/* News List */}
      <ScrollView contentContainerStyle={{padding: 16}}>
        {newsData.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate(item.screen)}>
            <View
              key={index}
              style={{
                backgroundColor: '#f2f4f5',
                borderRadius: 18,
                padding: 20,
                marginBottom: 20,
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowRadius: 8,
                elevation: 4,
              }}>
              <Text
                style={{
                  fontSize: FONT_SIZE.font_16,
                  fontWeight: '700',
                  color: COLORS.PrimaryColor,
                  marginBottom: 10,
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: FONT_SIZE.font_14,
                  color: '#555',
                  marginBottom: 14,
                  lineHeight: 22,
                }}>
                {getShortText(item.description, 20)}
              </Text>
              <View
                style={{
                  alignSelf: 'flex-start',
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                  backgroundColor: COLORS.ButtonColor,
                  borderRadius: 12,
                }}>
                <Text
                  style={{
                    color: COLORS.White,
                    fontSize: FONT_SIZE.font_14,
                    fontWeight: '500',
                  }}>
                  மேலும் வாசிக்க
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsViewer;
