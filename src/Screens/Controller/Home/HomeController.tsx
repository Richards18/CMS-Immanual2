import React from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import HomeViewer from '../../Viewer/Home/HomeViewer';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const HomeController: React.FC<IProps> = ({ navigation }) => {
  const renderMenuIcon = () => {
    // console.log('Menu Icon pressed');
    // This is the correct way to open the drawer
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return <HomeViewer renderMenuIcon={renderMenuIcon} />;
};

export default HomeController;