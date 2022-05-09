import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import SupplierNavigation from '../../navigators/supplier-navigators/SupplierNavigation';

function Supplier(props) {

    return (
        <SafeAreaView style={{width: '100%', height: '100%'}}>
            <SafeAreaProvider>
                <SupplierNavigation />
            </SafeAreaProvider>
        </SafeAreaView>
    );
}

export default Supplier;