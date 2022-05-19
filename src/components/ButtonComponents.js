import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ButtonComponents = ({ title, primary }) => {
  const getVariant = (variant) => {
    if (variant === "primary") {
      return "#147DF5";
    }
    if (variant === "secondary") {
      return "transparent";
    }
  };
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: primary ? "#147DF5" : "transparent" },
      ]}
    >
      <Text style={[styles.text, { color: primary ? "#FFFF" : "#147DF5" }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponents;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 4,
    marginVertical: 15,
  },
  text: {
    color: "#FFFF",
    textAlign: "center",
  },
});
