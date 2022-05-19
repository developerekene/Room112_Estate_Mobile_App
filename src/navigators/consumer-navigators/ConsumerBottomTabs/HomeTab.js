import React from 'react';
import { View, Text } from 'react-native';

import HomeScreen from '../../../screens/consumer-screens/ConsumerDetails/HomeScreen';

function HomeTab({ navigation }) {
    return (
        <View style={{flex: 1, backgroundColor: '#fff' }}>
            <HomeScreen />
        </View>
    );
}

export default HomeTab;