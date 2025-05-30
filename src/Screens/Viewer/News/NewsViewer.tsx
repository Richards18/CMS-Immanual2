import React, { FC, useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Vibration,
  FlatList,
} from 'react-native';
import { COLORS } from '../../../Constants/Colors';
import Header from '../../../Header/Header';
import { FONT_SIZE } from '../../../Constants/FontSize';
import { SCREENS } from '../../../Constants/ScreenNames';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';


interface Props {
  navigation: any;
  newsList: any;
}

const stripHtmlAndLimitWords = (html: string, wordLimit: number = 20): string => {
  const text = html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
  const words = text.split(/\s+/);
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
};

const NewsViewer: FC<Props> = ({ navigation, newsList }) => {
  const publishedNews = newsList?.filter((item: any) => item.status === 'Published');

  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 2000);
      return () => clearTimeout(timer);
    }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <Header title="செய்திகள்" screen="NEWS_SCREEN" />

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
        <FlatList
          data={publishedNews}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                navigation.navigate(SCREENS.FULL_NEWS, {
                  title: item.title,
                  details: item.details,
                  image: item.image,
                  date: item.date
                });
              }}
              style={{
                backgroundColor: '#f2f4f5',
                borderRadius: 18,
                padding: 20,
                marginBottom: 20,
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowRadius: 8,
                elevation: 4,
              }}
            >
              <Text style={{ fontSize: FONT_SIZE.font_16, fontWeight: '700', color: COLORS.PrimaryColor, marginBottom: 10 }}>
                {item.title}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: COLORS.Grey2,
                  lineHeight: 22,
                }}
              >
                {stripHtmlAndLimitWords(item.details, 20)}
              </Text>

              <View
                style={{
                  alignSelf: 'flex-start',
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                  backgroundColor: COLORS.ButtonColor,
                  borderRadius: 12,
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    color: COLORS.White,
                    fontSize: FONT_SIZE.font_14,
                    fontWeight: '500',
                  }}
                >
                  மேலும் வாசிக்க
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default NewsViewer;
