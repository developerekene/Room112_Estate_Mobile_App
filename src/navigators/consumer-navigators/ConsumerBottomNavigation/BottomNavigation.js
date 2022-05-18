import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import HomeScreen from "../../../screens/consumer-screens/ConsumerDetails/HomeScreen";
import TransactionsScreen from "../../../screens/consumer-screens/ConsumerDetails/TransactionsScreen";
import AccountScreen from "../../../screens/consumer-screens/ConsumerDetails/AccountScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../../constants/index";

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <NavigationContainer style={styles.navigationContainer}>
      <Tab.Navigator
        labelled={false}
        barStyle={{
          width: Dimensions.get("window").width,
          backgroundColor: "white",
          justifyContent: "space-between",
        }}
        activeColor="#147DF5"
        inactiveColor="lightgrey"
        style={{ width: "100%" }}
      >
        <Tab.Screen
          component={HomeScreen}
          name="Home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          component={TransactionsScreen}
          name="Transactions"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="clipboard"
                size={26}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          component={AccountScreen}
          name="Acccount"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" size={26} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
