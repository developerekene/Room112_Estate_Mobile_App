import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeTab, { homeName } from "./SupplierBottomTabs/HomeTab";
import OrdersTab, { ordersName } from "./SupplierBottomTabs/OrdersTab";
import AccountTab, { accountName } from "./SupplierBottomTabs/AccountTab";

const Tab = createBottomTabNavigator();

function SupplierNavigation(props) {

  return (
    <NavigationContainer>
      <Tab.Navigator
        safeAreaInsets={{
          bottom: 10
        }}
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === ordersName) {
              iconName = focused ? "shopping" : "shopping-outline";
            } else if (rn === accountName) {
              iconName = focused ? "account" : "account";
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />
          },
          activeTintColor: "#21334F",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, paddingTop: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        })}
      >
        <Tab.Screen name={homeName} component={HomeTab} />
        <Tab.Screen name={ordersName} component={OrdersTab} />
        <Tab.Screen name={accountName} component={AccountTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default SupplierNavigation;
