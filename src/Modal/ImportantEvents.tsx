import React, { FC, useRef, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../Constants/Colors';
import { FONT_SIZE } from '../Constants/FontSize';

interface Props { }

const videoLinks = [
  {
    url: 'https://www.youtube.com/watch?v=ts5PEZ-doRc',
    image: { uri: 'https://cmsimmanuelchurch.com/img/celeb-1.9d219e25.png' },
  },
  {
    url: 'https://www.youtube.com/watch?v=f_R448k8Fh0',
    image: { uri: 'https://cmsimmanuelchurch.com/img/celeb-2.be6c6793.png' },
  },
  {
    url: 'https://www.youtube.com/watch?v=9ClEXUPc1Ko',
    image: { uri: 'https://cmsimmanuelchurch.com/img/celeb-3.beba6103.png' },
  },
  {
    url: 'https://www.youtube.com/watch?v=HVN89IZZBKA',
    image: { uri: 'https://cmsimmanuelchurch.com/img/celeb-4.707a7c33.png' },
  },
  {
    url: 'https://www.youtube.com/watch?v=n4KEniEEtCA',
    image: { uri: 'https://cmsimmanuelchurch.com/img/celeb-5.5ac61df0.png' },
  },
  {
    url: 'https://www.youtube.com/watch?v=-r-9IfJn3BU',
    image: { uri: 'https://cmsimmanuelchurch.com/img/celeb-6.7eb50b9f.png' },
  },
];

const ImportantEvents: FC<Props> = () => {
  const scrollRef = useRef<ScrollView>(null);
  const [scrollX, setScrollX] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const scrollStep = 235;

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = event.nativeEvent.contentOffset.x;
    setScrollX(x);
  };

  const handleScrollRight = () => {
    scrollRef.current?.scrollTo({ x: scrollX + scrollStep, animated: true });
  };

  const handleScrollLeft = () => {
    scrollRef.current?.scrollTo({
      x: Math.max(scrollX - scrollStep, 0),
      animated: true,
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 15,
        backgroundColor: COLORS.PrimaryColor,
        borderRadius: 20,
        marginTop: 15,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontSize: FONT_SIZE.font_24,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 20,
            color: COLORS.White,
          }}>
          மறக்க முடியா முக்கிய நிகழ்வுகள்
        </Text>

        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            textAlign: 'justify',
            marginBottom: 20,
            color: COLORS.White,
          }}>
          நமது ஆலய வரலாற்றில் ஆண்டவர் அருளின ஒருசில தருணங்களை, நீங்கள்
          வாழ்நாளெல்லாம் நினைவு கொள்வதற்கென காணொளிகளாக தொகுத்திருக்கிறோம்.
          கீழ்கண்ட வலையொளி வாயிலாக அதனை கண்டுகளித்து ஆண்டவருடைய நாமத்தை
          மகிமைப்படுத்துங்கள்.
        </Text>

        {/* Video Scroll with arrows */}
        <View
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}>

          {/* Back arrow - visible only if scrollX > 0 */}
          {scrollX > 0 && (
            <TouchableOpacity onPress={handleScrollLeft} activeOpacity={0.8}>
              <Icon
                name="chevron-back"
                size={28}
                color="#FFF"
              // style={{ paddingHorizontal: 4 }}
              />
            </TouchableOpacity>
          )}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            ref={scrollRef}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            onContentSizeChange={(w, _) => setContentWidth(w)}
            contentContainerStyle={{
              paddingHorizontal: 15,
              alignItems: 'center',
            }}
            style={{
              flex: 1,
              // marginHorizontal: 5,
            }}>
            {videoLinks.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => Linking.openURL(item.url)}
                activeOpacity={0.8}
                style={{
                  marginRight: 15,
                }}>
                <Image
                  source={item.image}
                  style={{
                    width: 220,
                    height: 170,
                    borderRadius: 10,
                  }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Forward arrow - visible only if not at the end */}
          {scrollX + containerWidth < contentWidth && (
            <TouchableOpacity onPress={handleScrollRight} activeOpacity={0.8}>
              <Icon
                name="chevron-forward"
                size={28}
                color="#FFF"
              // style={{ paddingHorizontal: 4 }}
              />
            </TouchableOpacity>
          )}
        </View>

        {/* See All Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          onPress={() =>
            Linking.openURL('https://www.youtube.com/@cmsimmanuel4864/streams')
          }
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 20,
            paddingVertical: 12,
            borderWidth: 2,
            borderColor: COLORS.ButtonColor,
            backgroundColor: isPressed ? COLORS.ButtonColor : COLORS.White,
            borderRadius: 20,
            width: 250,
            height: 50,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginRight: 8,
              color: isPressed ? COLORS.White : COLORS.ButtonColor,
            }}>
            அனைத்தையும் காண
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ImportantEvents;