import React, { FC } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { FONT_SIZE } from '../../../../Constants/FontSize';
import { COLORS } from '../../../../Constants/Colors';
import { DIAMOND_JUBILEE, VBS_2023 } from '../../../../Constants/Constant';
import Header from '../../../../Header/Header';

const screenWidth = Dimensions.get('window').width;

const DiamondJubileeNews: FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>

      <Header title='பவளவிழா மண்டபம் பிரதிஷ்டை & V.B.S கலை நிகழ்ச்சி 2023' />

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* Breadcrumb */}
        <Text
          style={{
            color: COLORS.ButtonColor,
            fontSize: FONT_SIZE.font_18,
            fontWeight: 'bold',
            marginBottom: 12,
          }}>
          முகப்பு / செய்திகள்
        </Text>

        {/* News Content */}
        <View
          style={{
            backgroundColor: '#f9f9f9',
            padding: 16,
            borderRadius: 10,
            marginBottom: 20,
            // elevation: 1,
          }}>
          <Text
            style={{
              fontSize: FONT_SIZE.font_16,
              lineHeight: 24,
              color: '#333',
              marginBottom: 10,
            }}>
            75ஆம் ஆண்டு பவள விழாவின் ஆரம்ப நிகழ்ச்சியாக பவளவிழா மண்டபம்
            19.5.2023 அன்று மாலை 6 மணியளவில் நமது தலைமை போதகர் ஐயா
            Rev.G.அல்பர்ட் கெர்சோன் அவர்களால் பிரதிஷ்டை செய்யப்பட்டது. நமது சபை
            ஊழியர் திரு.C.சைலஸ் ராஜன் அவர்கள் ஜெபம் செய்து V.B.S கலை
            நிகழ்ச்சிகளை தொடங்கி வைத்தார். கலை நிகழ்ச்சிகளில் மாணவ மாணவிகள்
            தங்கள் திறமைகளை திறம்பட வெளிப்படுத்தினர். V.B.S. தேர்வில் வெற்றி
            பெற்றவர்களுக்கும் கலந்து கொண்ட அனைவருக்கும் பரிசுகள் வழங்கப்பட்டது.
          </Text>
          <Text
            style={{ color: '#666', fontStyle: 'italic', fontWeight: 'bold' }}>
            19-05-2023
          </Text>
        </View>

        {/* Image */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          <Image
            source={{ uri: VBS_2023.VBS_2023_2 }}
            style={{
              width: screenWidth - 32,
              height: 250,
              borderRadius: 10,
            }}
            resizeMode="cover"
          />
        </View>
        <Text style={{ fontWeight: 'bold' }}>
          Published on: 19-04-2025 09:23 pm
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiamondJubileeNews;
