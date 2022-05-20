import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const CreateNewPasswordScreen = () => {
  return (
    <View>
      <View>
        <Image source={require("../../../assets/images/aqualogo.png")} />
        <Text>Create New Password</Text>
      </View>

      <Text style={styles.label}>New Password</Text>
      <View style={styles.locationContainer}>
        <TextInput
          style={styles.locationInput}
          autoCorrect={false}
          secureTextEntry
          placeholder="New Password"
          placeholderTextColor="#C4C4C4"
          onChangeText={onChange}
        />
        <Entypo name="eye-with-line" size={24} color="#C4C4C4C4" />
      </View>

      <Text style={styles.label}>Confirm Password</Text>
      <View style={styles.locationContainer}>
        <TextInput
          style={styles.locationInput}
          autoCorrect={false}
          secureTextEntry
          placeholder="Confirm Password"
          placeholderTextColor="#C4C4C4"
          onChangeText={onChange}
        />
        <Entypo name="eye-with-line" size={24} color="#C4C4C4C4" />
      </View>

      <ButtonComponents title="Reset Password" primary />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center", marginRight: -10 }}>
          Already have an account?
        </Text>
        <ButtonComponents title="Sign Up" />
      </View>
    </View>
  );
};

export default CreateNewPasswordScreen;

const styles = StyleSheet.create({});
