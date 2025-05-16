import React, {FC} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../Constants/Colors';
import {FONT_SIZE} from '../../../Constants/FontSize';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../../Header/Header';

const ContactViewer: FC = () => {
  const navigation = useNavigation();

  const renderInputField = (
    icon: string,
    placeholder: string,
    multiline: boolean = false,
    keyboardType: any = 'default',
  ) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: multiline ? 'flex-start' : 'center',
        borderWidth: 1,
        borderColor: COLORS.BorderColor,
        borderRadius: 8,
        marginBottom: 15,
        backgroundColor: COLORS.White,
        paddingHorizontal: 10,
        height: multiline ? 120 : 44,
      }}>
      <Ionicons
        name={icon}
        size={20}
        color={COLORS.Grey2}
        style={{marginTop: multiline ? 10 : 0, marginRight: 8}}
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.Grey2}
        multiline={multiline}
        keyboardType={keyboardType}
        numberOfLines={multiline ? 5 : 1}
        textAlignVertical={multiline ? 'top' : 'center'}
        style={{
          flex: 1,
          fontSize: FONT_SIZE.font_16,
          color: COLORS.Black,
          paddingTop: multiline ? 10 : 0,
        }}
      />
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.White}}>
      
      <Header title="தொடர்பு கொள்ள" screen="CONTACT_SCREEN" />

      <ScrollView contentContainerStyle={{padding: 16}}>
        <Text
          style={{
            fontSize: FONT_SIZE.font_16,
            color: '#333',
            marginBottom: 20,
            lineHeight: 22,
          }}>
          மேலும் விபரங்கள் தேவைப்பட்டால், கீழே கொடுக்கப்பட்டுள்ள விவரங்களை
          பூர்த்தி செய்து சமர்ப்பிக்கவும். உங்களை தொடர்புகொள்வதில் மிக்க
          மகிழ்ச்சி அடைகிறோம்.
        </Text>

        <View
          style={{
            backgroundColor: COLORS.White,
            borderRadius: 10,
            padding: 16,
            elevation: 3,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.1,
            shadowRadius: 4,
          }}>
          {renderInputField('person', 'பெயர்')}
          {renderInputField('location', 'இடம்/முகவரி')}
          {renderInputField('mail', 'மின்னஞ்சல்')}
          {renderInputField('call', 'கைபேசி எண்', false, 'numeric')}
          {renderInputField('document-text', 'குறிப்புகள்', true)}

          <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={[COLORS.ButtonColor, '#6a11cb']}
              style={{
                borderRadius: 10,
                paddingVertical: 12,
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: COLORS.White,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                சமர்ப்பிக்கவும்
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactViewer;
