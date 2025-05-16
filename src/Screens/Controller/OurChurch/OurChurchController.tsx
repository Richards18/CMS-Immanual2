import React from 'react';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import OurChurchViewer from '../../Viewer/OurChurch/OurChurchViewer';

const OurChurchController: React.FC = () => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    return (
        <OurChurchViewer navigation={navigation} />
    );
}

export default OurChurchController;
