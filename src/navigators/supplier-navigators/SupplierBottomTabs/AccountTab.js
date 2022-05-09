import React from 'react';
import { View, Text } from 'react-native';

import SupplierHeader from "../../../components/SupplierHeader";

export const accountName = "Account";
function AccountTab({ navigation }) {
    return (
      <View style={{flex: 1, backgroundColor: '#fff' }}>
        <SupplierHeader title="Account" />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Account Tab</Text>
        </View>
    </View>
    );
}

export default AccountTab;