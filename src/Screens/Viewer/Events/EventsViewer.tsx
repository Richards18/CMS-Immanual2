import React, { FC, useEffect, useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { COLORS } from '../../../Constants/Colors';
import Header from '../../../Header/Header';
import { FONT_SIZE } from '../../../Constants/FontSize';
import { SCREENS } from '../../../Constants/ScreenNames';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';


interface Props {
    navigation: any;
    newsList: any;
}


const EventsViewer: FC<Props> = ({ navigation, newsList }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.White }}>
            <Header title="நிகழ்வுகள்" screen="NEWS_SCREEN" />

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: COLORS.Black, fontSize: FONT_SIZE.font_16 }}>மேலும் நிகழ்வுகள் விரைவில் வரவுள்ளன.</Text>
            </View>
        </SafeAreaView>
    )
}

export default EventsViewer;