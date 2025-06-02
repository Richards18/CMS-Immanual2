import React, { FC, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Linking,
  Modal,
  FlatList,
  StyleSheet,
} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { COLORS } from '../Constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FONT_SIZE } from '../Constants/FontSize';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../Constants/ScreenNames';
import { useTranslation } from 'react-i18next';
import i18next from '../Translation/i18next';

interface Props {
  navigation: any;
}

const CustomMenuBar: FC<Props> = props => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  const languages = [
    { code: 'ta', label: 'தமிழ்' },
    { code: 'en', label: 'English' },
  ];
  const changeLanguage = (langCode: string) => {
    // setLang(langCode)
    i18next.changeLanguage(langCode);
    setVisible(false);
    props.navigation.closeDrawer();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      {/* Header Section with Profile Image and Cancel Icon */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingTop: 10,
        }}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Icon name="close" size={30} color={COLORS.PrimaryColor} />
        </TouchableOpacity>
      </View>

      {/* Drawer Content */}
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ paddingTop: 20 }}>
        {/* Drawer Items with Modern Design */}
        <DrawerItem
          label="முகப்பு"
          onPress={() => {
            navigation.navigate(SCREENS.HOME_SCREEN);
          }}
          labelStyle={{
            color: COLORS.PrimaryColor,
            fontSize: FONT_SIZE.font_15,
          }}
          icon={() => (
            <Icon name="home" size={22} color={COLORS.PrimaryColor} />
          )}
          style={{
            marginVertical: 5,
          }}
        />

        <DrawerItem
          label="செய்திகள்"
          onPress={() => {
            navigation.navigate(SCREENS.NEWS_SCREEN);
          }}
          labelStyle={{
            color: COLORS.PrimaryColor,
            fontSize: FONT_SIZE.font_15,
          }}
          icon={() => (
            <Icon name="newspaper" size={22} color={COLORS.PrimaryColor} />
          )}
          style={{
            marginVertical: 5,
          }}
        />

        <DrawerItem
          label="நிகழ்வுகள்"
          onPress={() => { navigation.navigate(SCREENS.EVENTS_SCREEN) }}
          labelStyle={{
            color: COLORS.PrimaryColor,
            fontSize: FONT_SIZE.font_15,
          }}
          icon={() => (
            <Icon name="calendar" size={22} color={COLORS.PrimaryColor} />
          )}
          style={{
            marginVertical: 5,
          }}
        />

        <DrawerItem
          label="புகைப்படங்கள்"
          onPress={() => {
            navigation.navigate(SCREENS.GALLERY_SCREEN);
          }}
          labelStyle={{
            color: COLORS.PrimaryColor,
            fontSize: FONT_SIZE.font_15,
          }}
          icon={() => (
            <Icon name="image" size={22} color={COLORS.PrimaryColor} />
          )}
          style={{
            marginVertical: 5,
          }}
        />

        <DrawerItem
          label="ஜெப விண்ணப்பம்"
          onPress={() => {
            navigation.navigate(SCREENS.PRAY_REQUEST);
          }}
          labelStyle={{
            color: COLORS.PrimaryColor,
            fontSize: FONT_SIZE.font_14,
          }}
          icon={() => (
            <FontAwesome5 name="pray" size={23} color={COLORS.PrimaryColor} />
          )}
          style={{
            marginVertical: 5,
          }}
        />

        <DrawerItem
          label="நமது சபை"
          onPress={() => {
            navigation.navigate(SCREENS.OUR_CHURCH);
          }}
          labelStyle={{
            color: COLORS.PrimaryColor,
            fontSize: FONT_SIZE.font_15,
          }}
          icon={() => (
            <FontAwesome5
              name="church"
              size={20}
              color={COLORS.PrimaryColor}
            />
          )}
          style={{
            marginVertical: 5,
          }}
        />

        <DrawerItem
          label="தொடர்பு கொள்ள"
          onPress={() => {
            navigation.navigate(SCREENS.CONTACT_SCREEN);
          }}
          labelStyle={{
            color: COLORS.PrimaryColor,
            fontSize: FONT_SIZE.font_14,
          }}
          icon={() => (
            <Icon name="call" size={22} color={COLORS.PrimaryColor} />
          )}
          style={{
            marginVertical: 5,
          }}
        />

        <DrawerItem
          label={t('change_language')}
          onPress={() => {
            setVisible(true);
          }}
          labelStyle={{
            color: COLORS.PrimaryColor,
            fontSize: FONT_SIZE.font_14,
          }}
          icon={() => (
            <Icon name="language" size={22} color={COLORS.PrimaryColor} />
          )}
          style={{
            marginVertical: 5,
          }}
        />
        <Modal visible={visible} transparent animationType="slide">
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '85%',
                maxHeight: '70%',
                backgroundColor: '#fff',
                borderRadius: 16,
                paddingVertical: 20,
                paddingHorizontal: 16,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 16,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: COLORS.PrimaryColor,
                  }}>
                  {t('select_language')}
                </Text>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    right: 0,
                    padding: 12,
                    zIndex: 1,
                  }}
                  onPress={() => setVisible(false)}>
                  <Icon name="close" size={28} color={COLORS.PrimaryColor} />
                </TouchableOpacity>
              </View>

              <FlatList
                data={languages}
                keyExtractor={item => item.code}
                contentContainerStyle={{ paddingBottom: 10 }}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      paddingVertical: 12,
                      paddingHorizontal: 16,
                      borderRadius: 10,
                      backgroundColor: COLORS.PrimaryColor,
                      marginBottom: 10,
                      alignItems: 'center',
                    }}
                    onPress={() => changeLanguage(item.code)}>
                    <Text
                      style={{ fontSize: 16, color: 'white', fontWeight: '500' }}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </Modal>

        {/* Admin Login with a Distinct Background Color */}
        <DrawerItem
          label="Admin Login"
          onPress={() => {
            Linking.openURL('https://cmsimmanuelchurch.com/#/admin');
          }}
          labelStyle={{
            color: COLORS.White,
            fontSize: 18,
            marginLeft: -10,
          }}
          icon={() => <Icon name="log-in" size={22} color={COLORS.White} />}
          style={{
            marginVertical: 5,
            paddingVertical: 10,
            backgroundColor: '#FF5722', // Unique background for Admin Login
            borderRadius: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#e0e0e0',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
          }}
        />

        {/* Footer Section */}
        <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
          <Text
            style={{
              color: COLORS.PrimaryColor,
              fontSize: 14,
              textAlign: 'center',
            }}>
            Version 1.0
          </Text>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default CustomMenuBar;
