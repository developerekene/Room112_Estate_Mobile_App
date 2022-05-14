import React from "react";
import { StyleSheet, View, Text, TextInput, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather, Entypo } from "@expo/vector-icons";

function ConsumerHeader({ title }) {
  return (
    <View style={styles.consumerHeader}>
      <View style={styles.toolbar}>
        <Text style={styles.toolbarTxt}>Hi, Godswill 👋</Text>
        <View style={styles.consumerHeaderCart}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="cart-outline"
            size={24}
            color="white"
          />
          <Ionicons
            name="notifications-outline"
            style={styles.icon}
            size={24}
            color="white"
          />
        </View>
      </View>
      <View style={styles.topContainer}>
        <View style={styles.searchBar__unclicked}>
          <Feather
            name="search"
            size={20}
            color="lightgrey"
            style={{ marginLeft: 1 }}
          />
          <TextInput style={styles.input} placeholder="Search for suppliers" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  consumerHeader: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#147DF5",
    height: 120,
  },
  toolbar: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  consumerHeaderCart: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
  },
  toolbarTxt: {
    color: "#fff",
    fontSize: 16,
    marginHorizontal: 20,
  },
  topContainer: {
    paddingHorizontal: 70,
    justifyContent: "center",
  },
  topContainerTxt: {
    fontSize: 10,
    fontWeight: "bold",
  },
  input: {
    fontSize: 14,
    marginLeft: 10,
    width: Dimensions.get("window").width - 100,
    borderWidth: 1,
    borderColor: "white",
    height: 48,
    opacity: 0.4,
    padding: 20,
  },
  searchBar__unclicked: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 0,
    alignItems: "center",
  },
  icon: {
    paddingLeft: 10,
  },
});

export default ConsumerHeader;
