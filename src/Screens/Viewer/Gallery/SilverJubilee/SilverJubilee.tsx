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
import { SILVER_JUBILEE } from '../../../../Constants/Constant';

const screenWidth = Dimensions.get('window').width;

const SilverJubilee: FC = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [loadingImage, setLoadingImage] = useState(true);

  const imageSources = [
    {
      uri: SILVER_JUBILEE.SILVER_JUBILEE1,
    },
    {
      uri: SILVER_JUBILEE.SILVER_JUBILEE2,
    },
    {
      uri: SILVER_JUBILEE.SILVER_JUBILEE3,
    },
    {
      uri: SILVER_JUBILEE.SILVER_JUBILEE4,
    },
    {
      uri: SILVER_JUBILEE.SILVER_JUBILEE5,
    },
    {
      uri: SILVER_JUBILEE.SILVER_JUBILEE6,
    },
    {
      uri: SILVER_JUBILEE.SILVER_JUBILEE7,
    },
    {
      uri: SILVER_JUBILEE.SILVER_JUBILEE8,
    },
    {
      uri: SILVER_JUBILEE.SILVER_JUBILEE9,
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
      {/* <StatusBar
        backgroundColor={COLORS.PrimaryColor}
        barStyle="light-content"
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: COLORS.PrimaryColor,
          paddingHorizontal: 10,
          height: 80,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          elevation: 4,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{padding: 4, marginRight: 15}}>
          <Ionicons name="arrow-back" size={24} color={COLORS.White} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: FONT_SIZE.font_18,
            fontWeight: 'bold',
            color: COLORS.White,
            flex: 1,
            textAlign: 'center',
            marginLeft: -20,
          }}>
          25 ஆண்டு வெள்ளி விழா கொண்டாட்டம்
        </Text>
      </View> */}

      <Header
        title="25 ஆண்டு வெள்ளி விழா கொண்டாட்டம்"
        screen="SILVER_JUBILEE"
      />

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

export default SilverJubilee;
