import React, { FC, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import FastImage from 'react-native-fast-image';
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
  const [selectedImage, setSelectedImage] = useState<{ uri: string } | null>(null);
  const [loadingImage, setLoadingImage] = useState(true);

  const imageSources: { uri: string }[] = Object.values(HEMA_JOHN).map(uri => ({ uri }));

  const openModal = (image: { uri: string }) => {
    setSelectedImage(image);
    setLoadingImage(true);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  const renderImageItem = ({ item }: { item: { uri: string } }) => (
    <TouchableOpacity
      onPress={() => openModal(item)}
      style={{
        width: (screenWidth - 48) / 2,
        margin: 8,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: COLORS.TextInput,
      }}>
      <FastImage
        source={{ uri: item.uri, priority: FastImage.priority.normal }}
        style={{ width: '100%', height: 150 }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <StatusBar barStyle="dark-content" />
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
                <FastImage
                  source={{ uri: selectedImage.uri, priority: FastImage.priority.high }}
                  style={{
                    width: '90%',
                    height: '80%',
                    borderRadius: 10,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
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
