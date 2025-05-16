import React, { FC } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../Constants/Colors';
import { FONT_SIZE } from '../Constants/FontSize';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../Constants/ScreenNames';

interface Props { }

const HistoryOfChurch: FC<Props> = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 10,
        borderRadius: 20,
        overflow: 'hidden',
      }}>
      <LinearGradient
        colors={[COLORS.WorshipCards, '#2575fc']}
        style={{
          flex: 1,
          borderRadius: 20,
          overflow: 'hidden',
        }}>
        {/* Header Banner */}
        <ImageBackground
          source={require('../Assets/History.png')}
          style={{
            width: '100%',
            height: 400,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          imageStyle={{ opacity: 0.3 }}></ImageBackground>

        {/* Content Card */}
        <View
          style={{
            backgroundColor: '#fff',
            margin: 15,
            borderRadius: 20,
            padding: 15,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.15,
            shadowRadius: 6,
            elevation: 5,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: COLORS.Black,
              textAlign: 'center',
            }}>
            CMS பரி. இம்மானுவேல் திருச்சபை வரலாறு
          </Text>
          <Text
            style={{
              fontSize: FONT_SIZE.font_16,
              color: '#444',
              textAlign: 'justify',
              lineHeight: 26,
              marginTop: 10,
            }}>
            நமது திருச்சபையானது ஆரம்பகால விசுவாச தகப்பன்மார்களால் 1948ஆம் வருடம்
            ஆரம்பிக்கப்பட்டு, புதிய ஆலயம் கட்டி, பிரதிஷ்டை செய்யப்பட்டு, பரி.
            இம்மானுவேல் ஆலயம் என் பெயரிடப்பட்ட்து. 1950இல் திருநெல்வேலி
            சி.எம்.எஸ்.(CMS) சுத்தாங்க சுவிசேஷ சபையில் இணைக்கப்பட்டு CMS
            குருவானவர்கள் தலைமையில் இன்றுவரை ஊழியங்கள், ஆராதனைகள் நடைபெற்று
            சிறப்புடன் செயல்பட்டு வருகிறது. 1973ஆம் வருடம் வெள்ளி விழா
            நிகழ்வுகளும், 1998ஆம் வருடம் பொன்விழா நிகழ்வுகளும், 2023ஆம் வருடம்
            பவள விழா நிகழ்வுகளும், சிறப்பாக நடைபெற்றன. 1990ஆம் வருடம் இப்போது
            அமைத்துள்ள புதிய ஆலயமானது கட்டி பிரதிஷ்டை செய்யப்பட்டு ஆராதனைகள்
            சிறப்புடன் நடைபெற்று வருகிறது.
          </Text>

          {/* Gradient Button */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ marginTop: 20 }}
            onPress={() => {
              navigation.navigate(SCREENS.OUR_CHURCH);
            }}>
            <LinearGradient
              colors={[COLORS.ButtonColor, '#2575fc']} // Button gradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                paddingVertical: 14,
                borderRadius: 12,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: FONT_SIZE.font_14,
                  fontWeight: 'bold',
                  letterSpacing: 0.5,
                  textAlign: 'center',
                }}>
                நமது சபை - தோற்றமும் வளர்ச்சியும்
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HistoryOfChurch;
