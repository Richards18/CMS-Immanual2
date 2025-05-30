import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Dimensions, Image } from 'react-native';
import { COLORS } from '../../../Constants/Colors';
import { FONT_SIZE } from '../../../Constants/FontSize';
import Header from '../../../Header/Header';
import { BASE_URL } from '../../../Constants/Constant';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';


const stripHtmlTags = (html: string): string => {
  return html
    .replace(/<br\s*\/?>/gi, '\n') 
    .replace(/<[^>]*>/g, '')      
    .replace(/&nbsp;/g, ' ')
    .trim();
};

const FullNewsViewer = ({ route }: any) => {
  const { title, details, image, date } = route.params;
  const screenWidth = Dimensions.get('window').width;

  const [isLoading, setIsLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
      }, []);

  const formatDate = (isoDate: string): string => {
    const [year, month, day] = isoDate.split('-');
    return `${day}-${month}-${year}`;
  };
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
        <Header title={title}/>
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
        <ScrollView contentContainerStyle={{ padding: 10 }}>
            <View style={{ padding: 10 }}>
                <Text style={{color: COLORS.ButtonColor, fontSize: FONT_SIZE.font_18, fontWeight: 'bold'}}>
                    முகப்பு / செய்திகள்
                </Text>

                <Text
                    style={{
                    fontSize: FONT_SIZE.font_15,
                    color: COLORS.PrimaryColor,
                    lineHeight: 26,
                    textAlign: 'justify',
                    fontWeight: '500',
                    marginTop: 10,
                    }}
                >
                    {stripHtmlTags(details)}
                </Text>

                <Text style={{ color: COLORS.PrimaryColor, fontSize: FONT_SIZE.font_16, fontWeight: 'bold', marginTop: 10 }}>
                    {formatDate(date)}
                </Text>
                {/* Render Image if available */}
                {image ? (
                    <Image
                    source={{ uri: BASE_URL + image }}
                    style={{
                        width: screenWidth - 40,
                        height: 200,
                        borderRadius: 10,
                        marginTop: 15,
                        resizeMode: 'cover',
                    }}
                    />
                ) : null}
            </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default FullNewsViewer;
