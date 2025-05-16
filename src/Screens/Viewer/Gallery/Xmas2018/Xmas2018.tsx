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
import { XMAS_2018 } from '../../../../Constants/Constant';

const screenWidth = Dimensions.get('window').width;

const Xmas2018: FC = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [loadingImage, setLoadingImage] = useState(true);

  const imageSources = [
    {
      uri: XMAS_2018.XMAS_2018_1,
    },
    {
      uri: XMAS_2018.XMAS_2018_2,
    },
    {
      uri: XMAS_2018.XMAS_2018_3,
    },
    {
      uri: XMAS_2018.XMAS_2018_4,
    },
    {
      uri: XMAS_2018.XMAS_2018_5,
    },
    {
      uri: XMAS_2018.XMAS_2018_6,
    },
    {
      uri: XMAS_2018.XMAS_2018_7,
    },
    {
      uri: XMAS_2018.XMAS_2018_8,
    },
    {
      uri: XMAS_2018.XMAS_2018_9,
    },
    {
      uri: XMAS_2018.XMAS_2018_10,
    },
    {
      uri: XMAS_2018.XMAS_2018_11,
    },
    {
      uri: XMAS_2018.XMAS_2018_12,
    },
    {
      uri: XMAS_2018.XMAS_2018_13,
    },
    {
      uri: XMAS_2018.XMAS_2018_14,
    },
    {
      uri: XMAS_2018.XMAS_2018_15,
    },
    {
      uri: XMAS_2018.XMAS_2018_16,
    },
    {
      uri: XMAS_2018.XMAS_2018_17,
    },
    {
      uri: XMAS_2018.XMAS_2018_18,
    },
    {
      uri: XMAS_2018.XMAS_2018_19,
    },
    {
      uri: XMAS_2018.XMAS_2018_20,
    },
    {
      uri: XMAS_2018.XMAS_2018_21,
    },
    {
      uri: XMAS_2018.XMAS_2018_22,
    },
    {
      uri: XMAS_2018.XMAS_2018_23,
    },
    {
      uri: XMAS_2018.XMAS_2018_24,
    },
    {
      uri: XMAS_2018.XMAS_2018_25,
    },
    {
      uri: XMAS_2018.XMAS_2018_26,
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
      <Header title="கிறிஸ்துமஸ் மரவிழா கொண்டாட்டம் 2018" screen="XMAS_2018" />

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

export default Xmas2018;
