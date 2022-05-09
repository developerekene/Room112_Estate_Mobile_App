import React from 'react';
import { View, Text } from 'react-native';

import SupplierHeader from "../../../components/SupplierHeader";

export const homeName = "Home";
function HomeTab({ navigation }) {
    return (
      <View style={{flex: 1, backgroundColor: '#fff' }}>
        <SupplierHeader title="Home" />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Home Screen</Text>
        </View>
    </View>
    );
}

export default HomeTab;