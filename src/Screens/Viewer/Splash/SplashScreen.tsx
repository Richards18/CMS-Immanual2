import React, { useEffect } from 'react';
import { View, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../../Constants/Colors';
import { SCREENS } from '../../../Constants/ScreenNames';
import { WOMENS_FESTIVAL } from '../../../Constants/Constant';

const SplashScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { height, width } = Dimensions.get('window');

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(SCREENS.HOME_SCREEN);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../../Assets/Church.jpeg')}
          style={{ width: width, height: height }}
        resizeMode="stretch"
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
