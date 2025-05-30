import React, { FC } from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../Constants/Colors';
import { FONT_SIZE } from '../Constants/FontSize';

const Header: FC<{ title: string; screen?: string }> = ({ title, screen }) => {
  const navigation = useNavigation();

  return (
    <View>
      <StatusBar
        backgroundColor={COLORS.PrimaryColor}
        barStyle="light-content"
      />

      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: COLORS.PrimaryColor,
          paddingHorizontal: 10,
          height: 80,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          elevation: 4,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ padding: 4, marginRight: 15, marginTop: 5 }}>
          <Ionicons name="arrow-back" size={28} color={COLORS.White} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize:
              screen === 'BHAJAN_SERMON' ||
                screen === 'WOMENS_FEST' ||
                screen === 'ASANAM_2023' ||
                screen === 'XMAS_2018' ||
                screen === 'XMAS_2012' ||
                screen === 'HILL_PEOPLE' ||
                screen === 'SILVER_JUBILEE' ||
                screen === 'CONTACT_SCREEN' ||
                screen === 'NEWS_SCREEN' ||
                screen === 'PRAY_REQUEST' ||
                screen === 'OUR_CHURCH' || 
                screen === 'WOMENS_FEST_NEWS' || 
                screen === 'GOLDEN_JUBILEE' || 
                screen === 'PUSHPARAJ' ||
                screen === 'NEW_YEAR_2018' ||
                screen === 'XMAS_SERVICE_2018'
                ? FONT_SIZE.font_19
                : FONT_SIZE.font_16,
            fontWeight: 'bold',
            color: COLORS.White,
            flex: 1,
            textAlign: 'center',
            marginLeft: -22,
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Header;
