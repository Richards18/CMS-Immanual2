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
import { HEMA_JOHN } from '../../../../Constants/Constant';
import Header from '../../../../Header/Header';

const screenWidth = Dimensions.get('window').width;

const HemaJohnConcert: FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>

      <Header title='சகோதரி ஹேமா ஜான் அவர்களின் இன்னிசை நிகழ்ச்சி 2023' />

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
            75 ஆம் ஆண்டு பவள விழாவை முன்னிட்டு 20.5.2023 அன்று இரவு 6.00
            மணியளவில் சகோதரி ஹேமா ஜான் அவர்களின் இன்னிசை நிகழ்ச்சி நடைபெற்றது
            சபை பாகுபாடின்றி அனைவரும் கலந்து கொண்டனர். ஹேமா ஜான் குழவினரின்
            இனிமையான பாடல்கள் அனைவரின் கவனத்தையும் ஈர்த்தது. தனது சாட்சியையும்
            சகோதரி அவர்கள் பகிர்ந்து கொண்டார்கள்.
          </Text>
          <Text
            style={{ color: '#666', fontStyle: 'italic', fontWeight: 'bold' }}>
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
            source={{ uri: HEMA_JOHN.HEMA_JOHN1 }}
            style={{
              width: screenWidth - 32,
              height: 250,
              borderRadius: 10,
            }}
            resizeMode="cover"
          />
        </View>
        <Text style={{ fontWeight: 'bold' }}>
          Published on: 19-04-2025 09:21 pm
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HemaJohnConcert;
