import React from "react";
import { StyleSheet, Text, View} from "react-native";
import InputComponents from "../../components/InputComponents";
import ButtonComponents from "../../components/ButtonComponents";

const ForgotPasswordScreen = () => {
  return (
    <View>
      <View>
        <Text style={styles.titleText}>Reset Password</Text>
      </View>

      <Text>
        Enter the email associated with your account and we’ll send an email
        with instruction to reset your password
      </Text>

      <Text style={styles.label}>Email</Text>
      <View>
        <InputComponents
          label="Eamil"
          placeholder="abayomitunde@gmail.com"
          onChangeText={onChange}
        />
      </View>

      <ButtonComponents title="Reset Password" primary />
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({});
