import React, { FC, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
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
import { TEMPLE_TOWER_CEREMONY } from '../../../../Constants/Constant';


const screenWidth = Dimensions.get('window').width;

const TempleTowerCeremony: FC = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ uri: string } | null>(null);
  const [loadingImage, setLoadingImage] = useState(true);

  // Dynamically create array of image sources from SILVER_JUBILEE object values
  const imageSources = Object.values(TEMPLE_TOWER_CEREMONY).map(uri => ({ uri }));

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
      <Image
        source={item}
        style={{ width: '100%', height: 150 }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <Header
        title="கோவில் கோபுர அடிக்கல் நடு விழா"
        screen='TEMPLE_TOWER_CEREMONY'
      />

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

      <FlatList
        data={imageSources}
        renderItem={renderImageItem}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 8, paddingBottom: 20 }}
      />

      <Modal
        visible={modalVisible}
        transparent
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

export default TempleTowerCeremony;
