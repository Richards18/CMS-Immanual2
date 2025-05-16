import React, {FC, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../Constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const CARD_WIDTH = Dimensions.get('window').width * 0.5;

const colors = {
  background: '#F9F9FB',
  card: '#FFFFFF',
  accent: '#4B7BE5',
  textPrimary: '#1A1A1A',
  textSecondary: '#555',
  header: '#303F9F',
};

const worshipItems = [
  {
    id: '1',
    title: 'பரிசுத்த நற்கருணை',
    description:
      'ஒவ்வொரு மாதத்தின் மூன்றாவது ஞாயிற்றுக்கிழமையும், பரிசுத்த நற்கருணையில் ஒருமனதோடு பங்கு கொண்டு, இயேசு கிறிஸ்துவுடனான புதிய உடன்படிக்கையை நினைவுகூருகிறோம்.',
    image: require('../Assets/Communion.png'),
  },
  {
    id: '2',
    title: 'ஞானஸ்நானம்',
    description:
      'ஞானஸ்நானம் கிறிஸ்துவுக்குள்ளான புதிய வாழ்வின் தொடக்கமாக, விசுவாச வாழ்க்கை பயணத்தின் முதற்படியாக நாம் அனைவரும் சாட்சியுள்ள வாழ்கை வாழ உதவுகிறது.',
    image: require('../Assets/Gnanasnaanam.png'),
  },
  {
    id: '3',
    title: 'ஆண்கள் கூடுகை',
    description:
      'திருச்சபை ஆண்கள் ஆலய வளர்ச்சி மற்றும் குடும்ப ஆலோசனைகளில் வேதபூர்வ ஆலோசனை பெற ஒன்றிணைந்து செயல்படுகிறார்கள்.',
    image: require('../Assets/men_group.png'),
  },
  {
    id: '4',
    title: 'பெண்கள் கூடுகை',
    description:
      'பெண்கள் குடும்ப வளர்ச்சி மற்றும் ஆலயத்தின் தேவைகளுக்கு ஆதரவாக வேத பூர்வமாக செயல்படுகிறார்கள்.',
    image: require('../Assets/women_group.png'),
  },
  {
    id: '5',
    title: 'வாலிபர் கூடுகை',
    description:
      'வாலிபர் ஆண்டவரை பற்றிய விழிப்புணர்வில் வளர்ந்து அவருக்காக பெரும் காரியங்களை செய்ய ஊக்கப்படுத்தப்படுகிறார்கள்.',
    image: require('../Assets/YouthWorship.png'),
  },
  {
    id: '6',
    title: 'ஞாயிறு பள்ளி',
    description:
      'சிறுவர்களுக்கான கதைகள், பாடல்கள் மற்றும் செயல்பாடுகள் மூலம் கிறிஸ்துவின் அன்பை அறிந்துகொள்ள உதவுகிறது.',
    image: require('../Assets/SundayClass.png'),
  },
];

const SpecialWorships: FC = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollForward = () => {
    if (flatListRef.current) {
      const nextIndex = Math.min(currentIndex + 1, worshipItems.length - 1);
      flatListRef.current.scrollToIndex({
        animated: true,
        index: nextIndex,
      });
      setCurrentIndex(nextIndex);
    }
  };

  const handleScrollBack = () => {
    if (flatListRef.current) {
      const prevIndex = Math.max(currentIndex - 1, 0);
      flatListRef.current.scrollToIndex({
        animated: true,
        index: prevIndex,
      });
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.PrimaryColor,
        marginTop: 15,
        borderRadius: 20,
      }}>
      {/* Title */}
      <View style={{marginTop: 20, marginBottom: 10, paddingHorizontal: 16}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: COLORS.White,
            textAlign: 'center',
          }}>
          ஆராதனை & சிறப்பு கூடுகைகள்
        </Text>
      </View>

      {/* Description Box */}
      <View
        style={{
          backgroundColor: '#ffffff20',
          marginHorizontal: 16,
          padding: 17,
          borderRadius: 12,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: {width: 0, height: 4},
          shadowRadius: 8,
          elevation: 3,
        }}>
        <Text
          style={{
            fontSize: 15,
            lineHeight: 22,
            color: COLORS.White,
            textAlign: 'center',
          }}>
          CMS பரி. இம்மானுவேல் தேவாலயத்தில், ஞாயிறு ஆராதனைகள் மற்றும் சிறப்பு
          கூடுகைகள் மூலம் கர்த்தரின் அன்பைப் பகிர்ந்து கொள்வதற்கு நாங்கள்
          அர்ப்பணிக்கப்பட்டிருக்கிறோம். நீங்கள் அனைத்து நிகழ்வுகளிலும் கலந்து
          கொண்டு ஆண்டவரின் ஆசீர்வாதத்தினை பெற்றுக்கொள்ள அன்புடன் அழைக்கிறோம்.
        </Text>
      </View>

      {/* Cards */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 25,
        }}>
        <TouchableOpacity onPress={handleScrollBack}>
          <Icon
            name="chevron-back"
            size={20}
            color="#FFF"
            style={{paddingHorizontal: 4}}
          />
        </TouchableOpacity>

        <FlatList
          ref={flatListRef}
          data={worshipItems}
          horizontal
          keyExtractor={item => item.id}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 5, paddingHorizontal: 5}}
          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: colors.card,
                width: CARD_WIDTH,
                marginHorizontal: 10,
                borderRadius: 16,
                padding: 16,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowOffset: {width: 0, height: 4},
                shadowRadius: 10,
                elevation: 3,
                marginBottom: 10,
              }}>
              <Image
                source={item.image}
                style={{width: 100, height: 60, marginBottom: 16}}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: colors.accent,
                  marginBottom: 8,
                  textAlign: 'center',
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: colors.textSecondary,
                  textAlign: 'center',
                  lineHeight: 20,
                }}>
                {item.description}
              </Text>
            </View>
          )}
        />

        <TouchableOpacity onPress={handleScrollForward}>
          <Icon
            name="chevron-forward"
            size={20}
            color="#FFF"
            style={{paddingHorizontal: 4}}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SpecialWorships;
