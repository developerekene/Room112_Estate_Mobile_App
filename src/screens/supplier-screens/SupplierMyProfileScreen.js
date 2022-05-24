import React from "react";
import {
  View,
  Platform,
  StyleSheet,
  Text,
  Image,
  Button,
  Pressable,
  TouchableHighlight,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import logo from "../../../assets/supplier.png";
import ListItemSupplierProfile from "../../components/ListItemSupplierProfile";
import LogoutScreen from "../LogoutScreen";

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
  const [logoutConfirmation, updateLogoutConfirmation] = React.useState(false);

  function closeLogoutConfirmation() {
    updateLogoutConfirmation(false)
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.section_blue}>
          <Text style={styles.bigTex}>My Profile</Text>
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
        <View style={{
          width: '100%',
        }}>
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
          </View>
        </View>
      </View>
      <TouchableHighlight style={styles.logout_btn} underlayColor="#114E9310" onPress={()=>{
        updateLogoutConfirmation(true);
      }}>
        <>
          <MaterialCommunityIcons name="logout" size={24} color="#147df5" />
          <Text style={styles.lout_text}>Logout </Text>
        </>
      </TouchableHighlight>
      { logoutConfirmation && <LogoutScreen close={closeLogoutConfirmation} /> }
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  main: {
    padding: 20,
    paddingVertical: 0,
    marginTop: 20
  },
  section_blue: {
    backgroundColor: "#147df5",
    height: 215,
    paddingTop: 30,
    paddingBottom: 30,
    paddingEnd: 16,
    paddingStart: 16,
  },
  bigTex: {
    color: "#ffffff",
    fontSize: 24,
    fontFamily: "Manrope_700Bold",
    lineHeight: 33,
    fontStyle: "normal",
  },
  middle_blue_view: {
    display: "flex",
    flexDirection: "row",
    marginTop: 24,
  },
  edit_photo_button: {
    width: 90,
    height: 30,
    borderColor: "#ffff",
    justifyContent: "center",
    borderWidth: 2,
    marginTop: 12,

    textAlign: "center",
  },
  btn_text: {
    color: "#ffff",
  },
  edit_btn_text: {
    color: "#ffff",
    fontFamily: "Manrope_700Bold",
    textAlign: "center",
  },
  blue_side_text_view: {
    marginLeft: 18,
    paddingTop: 10,
  },
  supplier_name: {
    color: "#ffffff",
    fontFamily: "Manrope_700Bold",
    lineHeight: 22,
    fontSize: 16,
    fontStyle: "normal",
  },
  supplier_email: {
    color: "#ffffff",
    fontSize: 12,
    fontFamily: "Manrope_400Regular",
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
    marginBottom: 30
    // height: 50,
  },
  lout_text: {
    color: "#147df5",
    margin: 10,
  },
});

export default SupplierMyProfileScreen;
