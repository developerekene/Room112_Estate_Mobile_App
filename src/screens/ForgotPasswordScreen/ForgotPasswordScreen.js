import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from "react-native";

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <View style={{ paddingHorizontal: 10, paddingTop: 30, backgroundColor: "#FFF", flex: 1 }}>
      <View>
        <Text style={{ fontFamily: "Manrope_700Bold", fontSize: 20 }}>Reset Password</Text>
        <Text style={{ fontFamily: "Manrope_400Regular", fontSize: 14 }}>Enter the email associated with your account and we'll send an email with instruction to reset your password</Text>
      </View>

      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Manrope_400Regular",
            marginVertical: 5,
          }}
        >
          Email
        </Text>
        <TextInput
          placeholder="Email"
          color="#000"
          style={{
            height: 48,
            borderWidth: 0.5,
            borderColor: "rgba(33, 51, 79, 0.2)",
            padding: 10,
            fontFamily: "Manrope_400Regular",
          }}
          value="abayomitunde@gmail.com"
        />
      </View>

      <TouchableHighlight style={{marginTop: 20}} underlayColor="#114E93" onPress={() => {
        navigation.navigate("CheckMail")
      }} >
        <View style={{
          backgroundColor: "#147DF5",
          height: 48,
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Text style={{color: "#FFF", fontFamily: "Manrope_700Bold"}}>Reset Password</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({});
