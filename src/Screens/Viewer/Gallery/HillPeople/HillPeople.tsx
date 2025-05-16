import React, { FC, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { FONT_SIZE } from '../../../../Constants/FontSize';
import { COLORS } from '../../../../Constants/Colors';
import Header from '../../../../Header/Header';
import { HILLS_PEOPLE } from '../../../../Constants/Constant';

const screenWidth = Dimensions.get('window').width;

const HillPeople: FC = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [loadingImage, setLoadingImage] = useState(true);

  const imageSources = [
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE1,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE2,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE3,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE4,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE5,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE6,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE7,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE8,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE9,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE10,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE11,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE12,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE13,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE14,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE15,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE16,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE17,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE18,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE19,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE20,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE21,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE22,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE23,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE24,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE25,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE26,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE27,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE28,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE29,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE30,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE31,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE32,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE33,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE34,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE35,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE36,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE37,
    },
    {
      uri: HILLS_PEOPLE.HILLS_PEOPLE38,
    },

  ];

  const openModal = (image: any) => {
    setSelectedImage(image);
    setLoadingImage(true);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  const renderImageItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      onPress={() => openModal(item)}
      style={{
        width: (screenWidth - 48) / 2,
        margin: 8,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: COLORS.TextInput,
      }}>
      <Image
        source={item}
        style={{ width: '100%', height: 150 }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <Header title="மலை வாழ் மக்கள் சுற்றுப்பயணம் 2014" screen="HILL_PEOPLE" />

      {/* Title */}
      <View style={{ padding: 16 }}>
        <Text
          style={{
            color: COLORS.ButtonColor,
            fontSize: FONT_SIZE.font_18,
            fontWeight: 'bold',
          }}>
          முகப்பு / புகைப்படத் தொகுப்பு
        </Text>
      </View>

      {/* Grid of Images */}
      <FlatList
        data={imageSources}
        renderItem={renderImageItem}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 8, paddingBottom: 20 }}
      />

      {/* Image Preview Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={closeModal}
              style={{ position: 'absolute', top: 50, right: 30, zIndex: 2 }}>
              <Ionicons name="close-circle" size={44} color={COLORS.White} />
            </TouchableOpacity>

            {selectedImage ? (
              <>
                {loadingImage && (
                  <ActivityIndicator size="large" color={COLORS.White} />
                )}
                <Image
                  source={selectedImage}
                  style={{
                    width: '90%',
                    height: '80%',
                    borderRadius: 10,
                  }}
                  resizeMode="contain"
                  onLoadEnd={() => setLoadingImage(false)}
                />
              </>
            ) : (
              <Text style={{ color: 'white' }}>Loading image...</Text>
            )}
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};
export default HillPeople;
