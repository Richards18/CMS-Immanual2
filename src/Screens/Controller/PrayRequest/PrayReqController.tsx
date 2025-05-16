import React from 'react';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import PrayReqViewer from '../../Viewer/PrayRequest/PrayReqViewer';

const PrayReqController: React.FC = () => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    return (
        <PrayReqViewer navigation={navigation} />
    );
}

export default PrayReqController;
