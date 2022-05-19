import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import Menu from "../../../components/ConsumerAccount/Menu";
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

const AccountScreen = ({ navigation }) => {
  return (
    <>
    <View style={styles.homeheader}>
      <View style={styles.profileHeader}>
        <Text style={styles.title}>My Profile</Text>
        <View style={styles.headerprofile}>
          <View style={{height: 100, width: 100, borderRadius: 50, borderWidth: 3, borderColor: "#fff"}}>
            <Image
              style={styles.avatar}
              source={require("../../../../assets/customers/customer-profile-pic.jpg")}
            />
          </View>
          <View style={styles.profiledetails}>
            <Text style={styles.name}>Abimbola Thomas</Text>
            <Text style={styles.email}>abimbolathomas@gmail.com</Text>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>Edit Photo</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: "space-between"}}>
        <Menu style={styles.menu} />
        <Pressable style={{ paddingHorizontal: 20, marginBottom: 30 }}>
          <View style={styles.btnprimary}>
            <Feather name="log-out" size={24} color="#147DF5" />
            <Text style={styles.btnPrimaryText}>Logout</Text>
          </View>
        </Pressable>
      </View>
    </View>
    </>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  homeheader: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  profileHeader: {
    backgroundColor: "#147DF5",
    display: "flex",
    width: "100%",
    height: 242,
    padding: 20,
    paddingVertical: 30
  },
  avatar: {
    height: "100%",
    width: "100%",
    borderRadius: 50,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontFamily: "Manrope_700Bold",
    color: "#FFFFFF",
  },
  headerprofile: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25
  },
  profiledetails: {
    marginLeft: 10
  },
  name: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Manrope_600SemiBold",
  },
  email: {
    fontFamily: "Manrope_400Regular",
    color: "white",
  },
  btn: {
    width: 100,
    padding: 3,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  btnText: {
    color: "white",
    fontFamily: "Manrope_700Bold",
  },
  iconavatar: {
    height: 22,
    width: 22,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    padding: 14,
  },
  profilebtn: {
    width: 14,
    height: 8,
  },
  menu: {
    flex: 1,
  },
  btnprimary: {
    width: "100%",
    height: 50,
    fontFamily: "Manrope_600SemiBold",
    borderWidth: 2,
    borderColor: "#147DF5",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnPrimaryText: {
    fontSize: 16,
    fontFamily: "Manrope_600SemiBold",
    textAlign: "left",
    color: "#147DF5",
    paddingLeft: 5,
  },
  btnImage: {
    width: 24,
    height: 24,
  },
});
