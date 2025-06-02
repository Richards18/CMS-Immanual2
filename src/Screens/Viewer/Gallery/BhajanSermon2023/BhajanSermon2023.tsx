import React, { FC, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { BHAJAN_SERMON } from '../../../../Constants/Constant';
import { COLORS } from '../../../../Constants/Colors';
import Header from '../../../../Header/Header';
import { FONT_SIZE } from '../../../../Constants/FontSize';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const screenWidth = Dimensions.get('window').width;

// Individual Image Card with skeleton placeholder
const ImageCard: FC<{
  source: any;
  onPress: (image: any) => void;
}> = ({ source, onPress }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => onPress(source)}
      style={{
        width: (screenWidth - 48) / 2,
        margin: 8,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: COLORS.TextInput,
      }}>
      {!isLoaded && (
        <SkeletonPlaceholder borderRadius={10}>
          <SkeletonPlaceholder.Item width="100%" height={150} />
        </SkeletonPlaceholder>
      )}
      <Image
        source={source}
        style={{
          width: '100%',
          height: 150,
          position: isLoaded ? 'relative' : 'absolute',
        }}
        resizeMode="cover"
        onLoadEnd={() => setIsLoaded(true)}
      />
    </TouchableOpacity>
  );
};

const BhajanSermon2013: FC = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [loadingImage, setLoadingImage] = useState(true);

  const imageSources = [
    { uri: BHAJAN_SERMON.BHAJAN_SERMON1 },
    { uri: BHAJAN_SERMON.BHAJAN_SERMON2 },
    { uri: BHAJAN_SERMON.BHAJAN_SERMON3 },
    { uri: BHAJAN_SERMON.BHAJAN_SERMON4 },
    { uri: BHAJAN_SERMON.BHAJAN_SERMON5 },
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
    <ImageCard source={item} onPress={openModal} />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
      <Header title="பஜனை பிரசங்கம் 2023" screen="BHAJAN_SERMON" />

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

export default BhajanSermon2013;
