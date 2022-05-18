import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "./Colors";
function ListItemForTotalSupply({ num, title }) {
  return (
    <View style={styles.list}>
      <View style={styles.v}>
        <Text style={styles.first}>{num}</Text>
      </View>
      <View style={styles.v}>
        <Text style={styles.second}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    // display:'flex',
    flexDirection: "row",
    padding: 10,
    borderBottomColor: Colors.gray,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: Colors.white,
    borderRadius: 7,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.02)",
  },
  second: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 19,
    marginTop: 5,
  },
  first: {
    color: "#21334f",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 33,
    fontStyle: "normal",
    backgroundColor: "#eee",
  },
  v: {
    textAlign: "center",
  },
});

export default ListItemForTotalSupply;
