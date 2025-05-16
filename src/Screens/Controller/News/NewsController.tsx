import React from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import NewsViewer from '../../Viewer/News/NewsViewer';

const NewsController: React.FC = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return <NewsViewer navigation={navigation} />;
};
export default NewsController;
