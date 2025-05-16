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
import { XMAS_2012 } from '../../../../Constants/Constant';

const screenWidth = Dimensions.get('window').width;

const Xmas2012: FC = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [loadingImage, setLoadingImage] = useState(true);

  const imageSources = [
    {
      uri: XMAS_2012.XMAS_2012_1,
    },
    {
      uri: XMAS_2012.XMAS_2012_2,
    },
    {
      uri: XMAS_2012.XMAS_2012_3,
    },
    {
      uri: XMAS_2012.XMAS_2012_4,
    },
    {
      uri: XMAS_2012.XMAS_2012_5,
    },
    {
      uri: XMAS_2012.XMAS_2012_6,
    },
    {
      uri: XMAS_2012.XMAS_2012_7,
    },
    {
      uri: XMAS_2012.XMAS_2012_8,
    },
    {
      uri: XMAS_2012.XMAS_2012_9,
    },
    {
      uri: XMAS_2012.XMAS_2012_10,
    },
    {
      uri: XMAS_2012.XMAS_2012_11,
    },
    {
      uri: XMAS_2012.XMAS_2012_12,
    },
    {
      uri: XMAS_2012.XMAS_2012_13,
    },
    {
      uri: XMAS_2012.XMAS_2012_14,
    },
    {
      uri: XMAS_2012.XMAS_2012_15,
    },
    {
      uri: XMAS_2012.XMAS_2012_16,
    },
    {
      uri: XMAS_2012.XMAS_2012_17,
    },
    {
      uri: XMAS_2012.XMAS_2012_18,
    },
    {
      uri: XMAS_2012.XMAS_2012_19,
    },
    {
      uri: XMAS_2012.XMAS_2012_20,
    },
    {
      uri: XMAS_2012.XMAS_2012_21,
    },
    {
      uri: XMAS_2012.XMAS_2012_22,
    },
    {
      uri: XMAS_2012.XMAS_2012_23,
    },
    {
      uri: XMAS_2012.XMAS_2012_24,
    },
    {
      uri: XMAS_2012.XMAS_2012_25,
    },
    {
      uri: XMAS_2012.XMAS_2012_26,
    },
    {
      uri: XMAS_2012.XMAS_2012_27,
    },
    {
      uri: XMAS_2012.XMAS_2012_28,
    },
    {
      uri: XMAS_2012.XMAS_2012_29,
    },
    {
      uri: XMAS_2012.XMAS_2012_30,
    },
    {
      uri: XMAS_2012.XMAS_2012_31,
    },
    {
      uri: XMAS_2012.XMAS_2012_32,
    },
    {
      uri: XMAS_2012.XMAS_2012_33,
    },
    {
      uri: XMAS_2012.XMAS_2012_34,
    },
    {
      uri: XMAS_2012.XMAS_2012_35,
    },
    {
      uri: XMAS_2012.XMAS_2012_36,
    },
    {
      uri: XMAS_2012.XMAS_2012_37,
    },
    {
      uri: XMAS_2012.XMAS_2012_38,
    },
    {
      uri: XMAS_2012.XMAS_2012_39,
    },
    {
      uri: XMAS_2012.XMAS_2012_40,
    },
    {
      uri: XMAS_2012.XMAS_2012_41,
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
      <Header title="கிறிஸ்துமஸ் மரவிழா கொண்டாட்டம் 2012" screen="XMAS_2012" />

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

export default Xmas2012;
