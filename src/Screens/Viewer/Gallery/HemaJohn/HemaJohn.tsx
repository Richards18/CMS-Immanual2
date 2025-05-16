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
import { HEMA_JOHN } from '../../../../Constants/Constant';

const screenWidth = Dimensions.get('window').width;

const HemaJohn: FC = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [loadingImage, setLoadingImage] = useState(true);

  const imageSources = [
    {
      uri: HEMA_JOHN.HEMA_JOHN1,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN2,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN3,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN4,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN5,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN6,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN7,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN8,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN9,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN10,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN11,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN12,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN13,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN14,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN15,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN16,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN17,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN18,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN19,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN20,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN21,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN22,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN23,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN24,
    },
    {
      uri: HEMA_JOHN.HEMA_JOHN25,
    },

  ];

  // Handle image click
  const openModal = (image: any) => {
    console.log('Selected Image:', image); // Debugging: Log selected image
    setSelectedImage(image);
    setModalVisible(true);
  };

  // Close the modal
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
      <Header title="ஹேமா ஜான் இசை நிகழ்ச்சி 2023" />

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
                  <ActivityIndicator size="large" color={COLORS.PrimaryColor} />
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
export default HemaJohn;
