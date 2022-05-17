import React from "react";
import {
  View,
  Platform,
  StyleSheet,
  Text,
  Image,
  Button,
  Pressable,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import logo from "../../../assets/supplier.png";
import ListItemSupplierProfile from "../../components/ListItemSupplierProfile";

const messages = [
  {
    id: 1,
    title: "Profile",
    material: (
      <MaterialCommunityIcons
        name="account-circle-outline"
        size={24}
        color="black"
      />
    ),
    empto: "chevron-right",
  },
  {
    id: 2,
    title: "Notification",
    material: <Feather name="bell" size={24} color="black" />,
    empto: "chevron-right",
  },
  {
    id: 3,
    title: "Setting",
    material: <Feather name="settings" size={24} color="black" />,
    empto: "chevron-right",
  },
  {
    id: 4,
    title: "Help",
    material: <AntDesign name="questioncircleo" size={24} color="black" />,
    empto: "chevron-right",
  },
];

function SupplierMyProfileScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.section_blue}>
        <Text style={styles.bigTex}> My Profile</Text>
        <View style={styles.middle_blue_view}>
          <View>
            <Image source={logo} style={{ width: 94, height: 94 }} />
          </View>
          <View style={styles.blue_side_text_view}>
            <Text style={styles.supplier_name}>Don Jazzy</Text>
            <Text style={styles.supplier_email}>donjazzyagain@gmail.com</Text>
            <Pressable
              style={styles.edit_photo_button}
              onPress={() => console.log("hello world the great minds")}
            >
              <Text style={styles.edit_btn_text}>Edit Photo</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItemSupplierProfile
              title={item.title}
              iconname={item.material}
              arrowIcon={item.empto}
            />
          )}
        />
        {/* <ListItemSupplierProfile
      title={messages[0].title}
      iconname={messages[0].material}
      arrowIcon={messages[0].empto}
    /> */}
      </View>
      <Pressable style={styles.logout_btn}>
        <Text style={styles.lout_text}>Logout </Text>
        <MaterialCommunityIcons name="logout" size={24} color="#147df5" />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 20 : 0,

    flex: 1,
    // backgroundColor: "blue",
  },
  main: {
    // backgroundColor: Colors.white,
    padding: 20,
  },
  section_blue: {
    backgroundColor: "#147df5",
    height: 215,
    paddingTop: 32,
    paddingBottom: 32,
    paddingEnd: 16,
    paddingStart: 16,
  },
  bigTex: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 33,
    fontStyle: "normal",
  },
  middle_blue_view: {
    display: "flex",
    flexDirection: "row",
    marginTop: 24,
  },
  edit_photo_button: {
    width: 100,
    // height: 16,
    borderColor: "#ffff",
    borderWidth: 2,
    marginTop: 12,

    textAlign: "center",
  },
  btn_text: {
    color: "#ffff",
  },
  edit_btn_text: {
    color: "#ffff",
    textAlign: "center",
  },
  blue_side_text_view: {
    marginLeft: 18,
    paddingTop: 10,
  },
  supplier_name: {
    color: "#ffffff",
    fontWeight: "700",
    lineHeight: 22,
    fontSize: 16,
    fontStyle: "normal",
  },
  supplier_email: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 15,
    fontStyle: "italic",
  },
  logout_btn: {
    marginEnd: 20,
    marginStart: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 120,
    paddingRight: 120,
    borderColor: "#147df5",
    borderWidth: 2,
    marginTop: 100,
    // height: 50,
  },
  lout_text: {
    color: "#147df5",
    margin: 10,
  },
});

export default SupplierMyProfileScreen;
