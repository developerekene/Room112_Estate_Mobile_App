import React from 'react';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomerNavigation from '../../navigators/consumer-navigators/CustomerNavigation';

function Customer(props) {
    return (
        <SafeAreaView style={{width: '100%', height: '100%', backgroundColor: "#FFF"}}>
            <CustomerNavigation />
        </SafeAreaView>
    );
}

export default Customer;