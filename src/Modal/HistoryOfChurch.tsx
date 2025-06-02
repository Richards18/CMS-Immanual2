import React, { FC } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import { COLORS } from '../Constants/Colors';
import { FONT_SIZE } from '../Constants/FontSize';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../Constants/ScreenNames';

interface Props { }

const HistoryOfChurch: FC<Props> = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Top Banner Image */}
        <Image
          source={require('../Assets/History.png')}
          style={{
            width: '100%',
            height: 200,
            borderRadius: 12,
            marginBottom: 20,
          }}
          resizeMode="contain"
        />

        {/* Title */}
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: COLORS.PrimaryColor,
            textAlign: 'center',
            marginBottom: 16,
          }}>
          CMS பரி. இம்மானுவேல் திருச்சபை வரலாறு
        </Text>

        {/* Content Text */}
        <Text
          style={{
            fontSize: FONT_SIZE.font_16,
            color: COLORS.Black,
            lineHeight: 26,
            textAlign: 'justify',
          }}>
          நமது திருச்சபையானது ஆரம்பகால விசுவாச தகப்பன்மார்களால் 1948ஆம் வருடம்
          ஆரம்பிக்கப்பட்டு, புதிய ஆலயம் கட்டி, பிரதிஷ்டை செய்யப்பட்டு, பரி.
          இம்மானுவேல் ஆலயம் என் பெயரிடப்பட்ட்து. 1950இல் திருநெல்வேலி
          சி.எம்.எஸ். சுத்தாங்க சுவிசேஷ சபையில் இணைக்கப்பட்டு CMS குருவானவர்கள்
          தலைமையில் இன்றுவரை ஊழியங்கள், ஆராதனைகள் நடைபெற்று சிறப்புடன்
          செயல்பட்டு வருகிறது. 1973ஆம் வருடம் வெள்ளி விழா, 1998ஆம் வருடம்
          பொன்விழா, 2023ஆம் வருடம் பவள விழா நிகழ்வுகள் சிறப்பாக நடைபெற்றன.
          1990ஆம் வருடம் இப்போது அமைத்துள்ள புதிய ஆலயம் கட்டப்பட்டு
          பிரதிஷ்டைசெய்யப்பட்டு, ஆராதனைகள் சிறப்பாக நடைபெற்று வருகிறது.
        </Text>

        {/* Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate(SCREENS.OUR_CHURCH)}
          style={{
            marginTop: 15,
            backgroundColor: COLORS.ButtonColor,
            paddingVertical: 14,
            borderRadius: 10,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 4,
          }}>
          <Text
            style={{
              color: COLORS.White,
              fontSize: FONT_SIZE.font_14,
              fontWeight: 'bold',
              letterSpacing: 0.5,
            }}>
            நமது சபை - தோற்றமும் வளர்ச்சியும்
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HistoryOfChurch;
