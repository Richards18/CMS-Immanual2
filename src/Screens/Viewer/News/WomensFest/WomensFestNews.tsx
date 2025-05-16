import React, { FC, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { FONT_SIZE } from '../../../../Constants/FontSize';
import { COLORS } from '../../../../Constants/Colors';
import { SCREENS } from '../../../../Constants/ScreenNames';
import { WOMENS_FESTIVAL } from '../../../../Constants/Constant';
import Header from '../../../../Header/Header';

const screenWidth = Dimensions.get('window').width;

const WomensFestNews: FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>

      <Header title='பெண்கள் பண்டிகை 20.5.2023' screen='WOMENS_FEST_NEWS' />
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
            75 ஆம் ஆண்டு பவள விழாவை முன்னிட்டு முதல் நிகழ்ச்சியாக பெண்கள்
            பண்டிகை 20.5.2023 அன்று காலை 9:00 மணிக்கு ஆரம்பமானது. அவ்வாராதனையிலே
            சுவிசேஷகர் D.கென்னடி பிரேமா அவர்கள் தேவசெய்தி கொடுத்தார்கள்.
            ஆராதனையிலே பொருட்கள் படைக்கப்பட்டு ஏலம் விடப்பட்டது. வந்திருந்த
            ஊழியர் குடும்பத்தாரை நமது சபையின் பெண்கள் கவுரவித்தார்கள்.
          </Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              navigation.navigate(SCREENS.WOMENS_FEST);
            }}
            style={{
              backgroundColor: COLORS.ButtonColor,
              width: 180,
              height: 30,
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ color: COLORS.White, fontWeight: 'bold' }}>
              ஆல்பத்தை காண
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: '#666',
              fontStyle: 'italic',
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            20-05-2023
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
            source={{ uri: WOMENS_FESTIVAL.WOMENS_FEST3 }}
            style={{
              width: screenWidth - 32,
              height: 250,
              borderRadius: 10,
            }}
            resizeMode="cover"
          />
        </View>
        <Text style={{ fontWeight: 'bold' }}>
          Published on: 19-04-2025 08:04 pm
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default WomensFestNews;
