import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import Menu from "../../../components/ConsumerAccount/Menu";

const AccountScreen = ({ navigation }) => {
  return (
    <View style={styles.homeheader}>
      <View style={styles.profileHeader}>
        <Text style={styles.title}>My Profile</Text>
        <View style={styles.headerprofile}>
          <Image
            style={styles.avatar}
            source={require("../../../../assets/avatarpix.png")}
          />
          <View style={styles.profiledetails}>
            <Text style={styles.name}>Abimbola Thomas</Text>
            <Text style={styles.email}>abimbolathomas@gmail.com</Text>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>Edit Photo</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Menu style={styles.menu} />
      <Pressable style={styles.btnprimary}>
        <Image
          style={styles.btnImage}
          source={require("../../../../assets/Sign-out.png")}
        />
        <Text style={styles.btnPrimaryText}>LogOut</Text>
      </Pressable>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  homeheader: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileHeader: {
    backgroundColor: "#147DF5",
    display: "flex",
    flex: 1,
    width: "100%",
    height: 222,
    position: "absolute",
    top: 0,
  },
  avatar: {
    height: 94,
    width: 94,
    position: "absolute",
    left: 16,
    top: 90,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    height: 33,
    position: "absolute",
    width: 116,
    left: 16,
    top: 40,
  },
  name: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    position: "absolute",
    height: 22,
    width: 200,
    top: 90,
    left: 126,
  },
  email: {
    height: 16,
    width: 220,
    left: 126,
    position: "absolute",
    top: 110,
    color: "white",
  },
  btn: {
    position: "absolute",
    height: 20,
    width: 80,
    left: 126,
    top: 130,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
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
    position: "absolute",
    left: 10,
  },
  menu: {
    flex: 1,
  },
  btnprimary: {
    width: 329,
    height: 50,
    borderWidth: 2,
    borderColor: "#147DF5",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
  },
  btnPrimaryText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    color: "#147DF5",
    paddingLeft: 5,
  },
  btnImage: {
    width: 24,
    height: 24,
  },
});
