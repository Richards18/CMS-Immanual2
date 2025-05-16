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
import { ASANAM_2023 } from '../../../../Constants/Constant';

const screenWidth = Dimensions.get('window').width;

const Asanam2023: FC = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [loadingImage, setLoadingImage] = useState(true);

  const imageSources = [
    {
      uri: ASANAM_2023.ASANAM_2023_1,
    },
    {
      uri: ASANAM_2023.ASANAM_2023_2,
    },
    {
      uri: ASANAM_2023.ASANAM_2023_3,
    },
    {
      uri: ASANAM_2023.ASANAM_2023_4,
    },
    {
      uri: ASANAM_2023.ASANAM_2023_5,
    },
    {
      uri: ASANAM_2023.ASANAM_2023_6,
    },
    {
      uri: ASANAM_2023.ASANAM_2023_7,
    },
    {
      uri: ASANAM_2023.ASANAM_2023_8,
    },
    {
      uri: ASANAM_2023.ASANAM_2023_9,
    },
    {
      uri: ASANAM_2023.ASANAM_2023_10,
    },
    {
      uri: ASANAM_2023.ASANAM_2023_11,
    },
    {
      uri: ASANAM_2023.ASANAM_2023_12,
    },
    {
      uri: ASANAM_2023.ASANAM_2023_13,
    },
    {
      uri: ASANAM_2023.ASANAM_2023_14,
    },
    {
      uri: ASANAM_2023.ASANAM_2023_15,
    },
    {
      uri: ASANAM_2023.ASANAM_2023_16,
    },
    {
      uri: ASANAM_2023.ASANAM_2023_17,
    },
    {
      uri: ASANAM_2023.ASANAM_2023_18,
    },
    {
      uri: ASANAM_2023.ASANAM_2023_19,
    },
    {
      uri: ASANAM_2023.ASANAM_2023_20,
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
      <Header title="பிரதிஷ்டை மற்றும் அசன பண்டிகை 2023" screen="ASANAM_2023" />

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

export default Asanam2023;
