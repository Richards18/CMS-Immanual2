import React, {FC} from 'react';
import {View, Text, SafeAreaView, ScrollView, Pressable} from 'react-native';
import {COLORS} from '../Constants/Colors';
import {FONT_SIZE} from '../Constants/FontSize';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../Constants/ScreenNames';

interface Props {}

const Events: FC<Props> = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.White}}>
      <View>
        <Text>நிகழ்வுகள்</Text>{' '}
      </View>
    </SafeAreaView>
  );
};

export default Events;
