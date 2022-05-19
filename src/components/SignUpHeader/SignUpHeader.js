import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const SignUpHeader = () => {
  return (
    <View>
      <Image
        source={require("../../../assets/images/aqualogo.png")}
        style={styles.logo}
      />

      <Text style={styles.titleText}>Sign up your account</Text>
    </View>
  );
};

export default SignUpHeader;

const styles = StyleSheet.create({
  logo: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    alignSelf: "center",
    padding: 10,
  },

  titleText: {
    fontSize: 22,
    fontWeight: "600",
    marginVertical: 20,
  },
});
