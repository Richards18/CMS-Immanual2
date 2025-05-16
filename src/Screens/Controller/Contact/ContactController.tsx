import React from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import HomeViewer from '../../Viewer/Home/HomeViewer';
import ContactViewer from '../../Viewer/Contact/ContactViewer';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const ContactController: React.FC<IProps> = () => {
  return <ContactViewer />;
};
export default ContactController;
