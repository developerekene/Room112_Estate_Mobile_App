import React from 'react';
import { View, Text } from 'react-native';

import SupplierMyProfileScreen from "../../../screens/supplier-screens/SupplierMyProfileScreen";
import SupplierHeader from "../../../components/SupplierHeader";
import HomeScreen from '../../../screens/consumer-screens/ConsumerDetails/HomeScreen';
import AccountScreen from '../../../screens/consumer-screens/ConsumerDetails/AccountScreen';

function AccountTab({ navigation }) {
    return (
        <View style={{flex: 1, backgroundColor: '#fff' }}>
            <AccountScreen />
        </View>
    );
}

export default AccountTab;