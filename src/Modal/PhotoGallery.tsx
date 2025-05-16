import React, {FC} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';

interface Props {}

const PhotoGallery: FC<Props> = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>முக்கிய நிகழ்வுகளின் புகைப்படத்தொகுப்பு</Text>
      </View>
      <View>
        <Text>
          CMS பரி. இம்மானுவேல் திருச்சபை குடும்பதினரை தேவ அன்பிற்குள்ளாக
          இணைக்கும் இடமாகிய ஆலய சிறப்பு ஆராதனைகள் மற்றும் பண்டிகை கொண்டாட்டங்களை
          புகைப்படத் தொகுப்பாக கொடுத்துள்ளோம். அனைவரும் கண்டு ஆண்டவரின் நாமத்தை
          மகிமைப்படுத்துங்கள்.
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default PhotoGallery;
