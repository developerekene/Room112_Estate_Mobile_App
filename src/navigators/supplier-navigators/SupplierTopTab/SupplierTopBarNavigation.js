import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
//import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScrollView } from "react-native";
//import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
//import { useSafeAreaInsets } from "react-native-safe-area-context";
const Tab = createMaterialTopTabNavigator();
function ProfileDetails() {
  return (
    <ScrollView>
      <View style={styles.contain}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="donjazzyagain@gmail.com"
          keyboardType="email-address"
        ></TextInput>
        <Text style={styles.after}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="donjazzyagain@gmail.com"
          keyboardType="default"
        ></TextInput>
        <Text style={styles.after}>Password</Text>
        <View style={styles.input}>
          <TextInput placeholder="******" style={styles.input_area}></TextInput>
          <View>
            <Ionicons
              name="ios-eye-off"
              size={24}
              color="black"
              style={{ alignSelf: "flex-end" }}
            />
          </View>
        </View>

        <Text style={styles.after}>Phone Number</Text>
        <TextInput
          style={styles.input_w_b}
          placeholder="07033524389"
          keyboardType="numeric"
        ></TextInput>
        <Text style={styles.after}>Address</Text>
        <TextInput
          style={styles.input_w_b}
          placeholder="4B, Adeola Odeku street, VI, Lagos"
          keyboardType="default"
        ></TextInput>
        <Pressable style={styles.last_btn}>
          <Text style={styles.btn_txt}>Done</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
function MyProducts() {
  return (
    <View style={{ height: 200 }}>
      <Text>Add Product</Text>
    </View>
  );
}
function MyTabs() {
  //const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Profile Details"
      screenOptions={{
        labelStyle: { fontSize: 14 },
        //style: { backgroundColor: "#147df5", marginTop: 20 },
        tabBarInactiveTintColor: "gray",
        activeTintColor: "#147df5",
        activeBackgroundColor: "#147df5",
        tabBarActiveTintColor: "#147df5",
        tabBarLabelStyle: { fontSize: 12 },
        // headerStyle: { backgroundColor: "blue" },
      }}
    >
      <Tab.Screen
        name="Profile Details"
        component={ProfileDetails}
        options={{
          tabBarLabel: "Profile Details",
        }}
      />
      <Tab.Screen
        name="My Products"
        component={MyProducts}
        options={{ tabBarLabel: "My Products" }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  contain: {
    paddingStart: 16,
    paddingEnd: 16,
    flex: 1,
    paddingTop: 32,
    paddingBottom: 56,
    backgroundColor: "#ffffff",
    height: "100%",
  },
  input: {
    width: "100%",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    height: 48,
    backgroundColor: "rgba(33, 51, 79, 0.04)",
    borderWidth: 1,
    borderColor: "rgba(33, 51, 79, 0.2)",
    paddingHorizontal: 24,
    marginTop: 4,
  },
  input_w_b: {
    width: "100%",
    alignItems: "center",
    height: 48,
    borderWidth: 1,
    borderColor: "rgba(33, 51, 79, 0.2)",
    paddingHorizontal: 24,
    marginTop: 4,
  },
  label: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 19,
    color: "#21334f",
  },
  after: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 19,
    color: "#21334f",
    marginTop: 14,
  },
  last_btn: {
    height: 50,
    width: "100%",
    marginTop: 24,
    backgroundColor: "#147df5",
    alignItems: "center",
    justifyContent: "center",
  },
  btn_txt: {
    color: "#ffffff",
    fontStyle: "normal",
    lineHeight: 19,
    fontSize: 14,
    fontWeight: "600",
  },
  input_area: {
    flex: 1,
    paddingEnd: 5,
  },
  /*
  font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 19px;
  */
});

// function SupplierTopBarNavigation(props) {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }

export default MyTabs;
