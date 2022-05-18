import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ConsumerHeader({ title }) {
  return (
    <View style={styles.consumerHeader}>
      <View style={styles.toolbar}>
        <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        <Text style={styles.toolbarTxt}>Back</Text>
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.topContainerTxt}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  consumerHeader: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    top: 0,
  },
  toolbarTxt: {
    color: "#21334F",
    fontSize: 10,
    marginHorizontal: 5,
  },
  topContainer: {
    paddingHorizontal: 70,
    justifyContent: "center",
  },
  topContainerTxt: {
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default ConsumerHeader;
