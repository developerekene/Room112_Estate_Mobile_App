import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IncomingOrder from '../../screens/supplier-screens/Orders/IncomingOrder';
import OrderHistory from '../../screens/supplier-screens/Orders/OrderHistory';

const Tab = createMaterialTopTabNavigator();

function Tabs(props) {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator 
            initialRouteName="IncomingOrder"
            screenOptions={{
                tabBarActiveTintColor: '#21334F',
                tabBarLabelStyle: { fontSize: 14 },
                tabBarStyle: { marginTop: insets.top },
            }}
            >
            <Tab.Screen
                name="IncomingOrder"
                component={IncomingOrder}
                options={{ 
                    tabBarLabel: 'Incoming Order',
                }}
            />
            <Tab.Screen
                name="OrderHistory"
                component={OrderHistory}
                options={{ tabBarLabel: 'Order History' }}
            />
        </Tab.Navigator>
    );
}

export default function OrdersTabNavigation() {
    return (
        <Tabs />
    );
}