import React, { FC, useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../../Constants/Colors';
import { FONT_SIZE } from '../../../Constants/FontSize';
import { SCREENS } from '../../../Constants/ScreenNames';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Header from '../../../Header/Header';
import { GALLERY_IMAGES } from '../../../Constants/Constant';

interface Props {
  navigation: any;
}

const GalleryViewer: FC<Props> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const galleryItems = [
    {
      screen: SCREENS.WOMENS_FEST,
      image: {
        uri: GALLERY_IMAGES.WOMENS_FEST,
      },
      title: 'பெண்கள் பண்டிகை 2023',
    },
    {
      screen: SCREENS.HEMA_JOHN,
      image: {
        uri: GALLERY_IMAGES.HEMA_JOHN,
      },
      title: 'ஹேமா ஜான் இசை நிகழ்ச்சி 2023',
    },
    {
      screen: SCREENS.BHAJAN_SERMON_2013,
      image: {
        uri: GALLERY_IMAGES.BHAJAN_SERMON,
      },
      title: 'பஜனை பிரசங்கம் 2023',
    },
    {
      screen: SCREENS.ASANAM_2023,
      image: {
        uri: GALLERY_IMAGES.ASANAM_2023,
      },
      title: 'பிரதிஷ்டை மற்றும் அசன பண்டிகை 2023',
    },
    {
      screen: SCREENS.DIAMOND_JUBILEE,
      image: {
        uri: GALLERY_IMAGES.DIAMOND_JUBILEE,
      },
      title: 'வைர விழா பூத்தக வெளியீட்டு 2023',
    },
    {
      screen: SCREENS.PASTOR_HOUSE_DEDICATION,
      image: {
        uri: GALLERY_IMAGES.PASTOR_HOUSE_DEDICATION,
      },
      title: 'ஊழியர் இல்ல பிரதிஷ்டை விழா',
    },
    {
      screen: SCREENS.VBS_2023,
      image: {
        uri: GALLERY_IMAGES.VBS_2023,
      },
      title: 'பவள விழா மண்டபம் தரப்பு மற்றும் V.B.S கலை நிகழ்ச்சிகள் 2023',
    },
    {
      screen: SCREENS.NEW_YEAR_2018,
      image: {
        uri: GALLERY_IMAGES.NEW_YEAR_2018,
      },
      title: 'புது வருட ஆராதனை 2018',
    },
    
    {
      screen: SCREENS.XMAS_SERVICE_2018,
      image: {
        uri: GALLERY_IMAGES.XMAS_SERVICE_2018,
      },
      title: 'கிறிஸ்துமஸ் சிறப்பு ஆராதனை 2018',
    },
    {
      screen: SCREENS.XMAS_2018,
      image: {
        uri: GALLERY_IMAGES.XMAS_2018,
      },
      title: 'கிறிஸ்துமஸ் மரவிழா கொண்டாட்டம் 2018',
    },
    {
      screen: SCREENS.HILL_PEOPLE,
      image: {
        uri: GALLERY_IMAGES.HILLS_PEOPLE,
      },
      title: 'மலை வாழ் மக்கள் சுற்றுப்பயணம் 2014',
    },
    {
      screen: SCREENS.XMAS_2013,
      image: {
        uri: GALLERY_IMAGES.XMAS_2013,
      },
      title: 'மரம் நடும் விழா மற்றும் கிறிஸ்துமஸ் மரம் கொண்டாட்டம் 2013',
    },
    {
      screen: SCREENS.THIDAPPADUTHAL_SERVICE_2013,
      image: {
        uri: GALLERY_IMAGES.THIDAPPADUTHAL_SERVICE_2013,
      },
      title: 'திடப்படுத்தல் ஆராதனை 2013',
    },
    {
      screen: SCREENS.XMAS_2012,
      image: {
        uri: GALLERY_IMAGES.XMAS_2012,
      },
      title: 'கிறிஸ்துமஸ் மரவிழா கொண்டாட்டம் 2012',
    },
    {
      screen: SCREENS.NEW_TEMPLE_CEREMONY,
      image: {
        uri: GALLERY_IMAGES.NEW_TEMPLE_DEDICATION,
      },
      title: 'புதிய ஆலயம் பிரதிஷ்டை விழா',
    },
    {
      screen: SCREENS.TEMPLE_TOWER_CEREMONY,
      image: {
        uri: GALLERY_IMAGES.TEMPLE_TOWER_CEREMONY,
      },
      title: 'கோவில் கோபுர அடிக்கல் நடு விழா',
    },
    {
      screen: SCREENS.GOLDEN_JUBILEE,
      image: {
        uri: GALLERY_IMAGES.GOLDEN_JUBILEE,
      },
      title: 'பொன் விழா படங்கள்',
    },
    {
      screen: SCREENS.PUSHPARAJ,
      image: {
        uri: GALLERY_IMAGES.PUSHPARAJ_FN,
      },
      title: 'டாக்டர் புஷ்பராஜ் கூட்டம்',
    },
    {
      screen: SCREENS.SILVER_JUBILEE,
      image: {
        uri: GALLERY_IMAGES.SILVER_JUBILEE,
      },
      title: '25 ஆண்டு வெள்ளி விழா கொண்டாட்டம்',
    },
    // {
    //   screen: SCREENS.TEMPLE_TOWER_CEREMONY,
    //   image: {
    //     uri: GALLERY_IMAGES.TEMPLE_TOWER_CEREMONY,
    //   },
    //   title: '25 ஆண்டு வெள்ளி விழா கொண்டாட்டம்',
    // },
    // {
    //   screen: SCREENS.TEMPLE_TOWER_CEREMONY,
    //   image: {
    //     uri: GALLERY_IMAGES.TEMPLE_TOWER_CEREMONY,
    //   },
    //   title: '25 ஆண்டு வெள்ளி விழா கொண்டாட்டம்',
    // },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      {/* Header */}

      <Header title="நிகழ்வுகளின் புகைப்படத்தொகுப்பு" screen="GALLERY_SCREEN" />

      {/* Loading Skeleton or Content */}
      {isLoading ? (
        <View style={{ flex: 1, padding: 16 }}>
          <SkeletonPlaceholder borderRadius={10}>
            <SkeletonPlaceholder.Item flexDirection="column">
              {[...Array(6)].map((_, index) => (
                <SkeletonPlaceholder.Item key={index} marginBottom={16}>
                  <SkeletonPlaceholder.Item width="100%" height={180} borderRadius={10} />
                  <SkeletonPlaceholder.Item
                    marginTop={10}
                    height={20}
                    width="70%"
                    alignSelf="center"
                    borderRadius={4}
                  />
                </SkeletonPlaceholder.Item>
              ))}
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder>
        </View>
      ) : (
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          <Text
            style={{
              fontSize: FONT_SIZE.font_14,
              color: COLORS.PrimaryColor,
              marginBottom: 20,
              textAlign: 'justify',
            }}>
            CMS பரி. இம்மானுவேல் தேவாலயத்தை ஆத்துமாக்களை தேவ அன்பிற்குள்ளாக
            இணைக்கும் இடமாக்கிய ஆராதனை மற்றும் சிறப்பு பண்டிகை கொண்டாட்டங்களை
            காண புகைப்படத் தொகுப்பை புரட்டுங்கள்.
          </Text>

          {galleryItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              onPress={() => navigation.navigate(item.screen)}
              style={{
                backgroundColor: '#f9f9f9',
                borderRadius: 10,
                overflow: 'hidden',
                marginBottom: 16,
                elevation: 2,
              }}>
              <Image
                source={item.image}
                style={{ width: '100%', height: 180 }}
                resizeMode="cover"
              />
              <View style={{ padding: 10 }}>
                <Text
                  style={{
                    fontSize: FONT_SIZE.font_14,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: COLORS.PrimaryColor,
                  }}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default GalleryViewer;
