import React, { FC } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  StatusBar,
} from 'react-native';
import { COLORS } from '../../../Constants/Colors';
import { FONT_SIZE } from '../../../Constants/FontSize';
import Header from '../../../Header/Header';

interface Props {
  navigation: any;
}

const PrayReqViewer: FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.White} />
      <Header title="ஜெப விண்ணப்பம்" screen="PRAY_REQUEST" />

      <ScrollView
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 40,
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>

        {/* Description */}
        <Text
          style={{
            fontSize: FONT_SIZE.font_16,
            color: COLORS.Black,
            textAlign: 'center',
            lineHeight: 26,
            marginBottom: 25,
            letterSpacing: 0.2,
          }}>
          உங்களுக்கு ஜெப உதவி தேவையெனில், கீழே கொடுக்கப்பட்டுள்ள விவரங்களை type
          செய்து சமர்ப்பிக்கவும். உங்களுக்காக ஜெபிக்கப்படும்.
        </Text>

        <View
          style={{
            backgroundColor: COLORS.PrayRequest,
            borderRadius: 12,
            padding: 18,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          }}>
          {/* Name */}
          <View style={{ marginBottom: 18 }}>
            <Text
              style={{
                fontSize: FONT_SIZE.font_14,
                color: COLORS.Black,
                marginBottom: 6,
                fontWeight: '600',
              }}>
              பெயர்
            </Text>
            <TextInput
              placeholder="பெயர்"
              placeholderTextColor={COLORS.Gray}
              style={{
                height: 44,
                borderColor: COLORS.Gray,
                borderWidth: 1,
                borderRadius: 10,
                paddingHorizontal: 12,
                fontSize: FONT_SIZE.font_16,
                color: COLORS.Black,
                backgroundColor: COLORS.White,
              }}
            />
          </View>

          {/* Phone Number */}
          <View style={{ marginBottom: 18 }}>
            <Text
              style={{
                fontSize: FONT_SIZE.font_14,
                color: COLORS.Black,
                marginBottom: 6,
                fontWeight: '600',
              }}>
              கைபேசி எண்
            </Text>
            <TextInput
              placeholder="கைபேசி எண்"
              placeholderTextColor={COLORS.Gray}
              keyboardType="phone-pad"
              style={{
                height: 44,
                borderColor: COLORS.Gray,
                borderWidth: 1,
                borderRadius: 10,
                paddingHorizontal: 12,
                fontSize: FONT_SIZE.font_16,
                color: COLORS.Black,
                backgroundColor: COLORS.White,
              }}
            />
          </View>

          {/* Prayer Request Notes */}
          <View style={{ marginBottom: 18 }}>
            <Text
              style={{
                fontSize: FONT_SIZE.font_14,
                color: COLORS.Black,
                marginBottom: 6,
                fontWeight: '600',
              }}>
              குறிப்புகள்
            </Text>
            <TextInput
              placeholder="ஜெப விண்ணப்பம் குறிப்புகள்"
              placeholderTextColor={COLORS.Gray}
              multiline
              numberOfLines={5}
              textAlignVertical="top"
              style={{
                height: 120,
                borderColor: COLORS.Gray,
                borderWidth: 1,
                borderRadius: 10,
                paddingHorizontal: 12,
                paddingTop: 12,
                fontSize: FONT_SIZE.font_16,
                color: COLORS.Black,
                backgroundColor: COLORS.White,
              }}
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            onPress={() => { }}
            activeOpacity={0.8}
            style={{
              backgroundColor: COLORS.PrimaryColor,
              paddingVertical: 14,
              borderRadius: 10,
              alignItems: 'center',
              shadowColor: COLORS.PrimaryColor,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 4,
            }}>
            <Text
              style={{
                color: COLORS.White,
                fontSize: FONT_SIZE.font_16,
                fontWeight: 'bold',
              }}>
              சமர்ப்பிக்கவும்
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrayReqViewer;
