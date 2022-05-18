import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const MenuItem = (props) => {
  const { icon, tag } = props.menu;
  return (
    <View style={styles.menu}>
      <View style={styles.iconsection}>
        <Image style={styles.menuicon} source={icon} />
        <Text style={styles.title}>{tag}</Text>
      </View>
      <Pressable style={styles.profilebtn}>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  menu: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 20,
  },
  iconsection: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 20,
  },
  menuicon: {
    height: 23,
    width: 23,
  },
  profilebtn: {
    paddingRight: 20,
  },
  title: {
    paddingLeft: 15,
    color: "#21334F",
    fontSize: 14,
    fontWeight: 400,
  },
});
