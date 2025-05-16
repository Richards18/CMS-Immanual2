import React from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import GalleryViewer from '../../Viewer/Gallery/GalleryViewer';

const GalleryController: React.FC = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return <GalleryViewer navigation={navigation} />;
};

export default GalleryController;
