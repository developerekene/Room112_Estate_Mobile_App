import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ButtonComponents from "../../components/ButtonComponents";

const CheckMailScreen = () => {
  return (
    <View>
      <View>
        <Image
          source={require("../../../assets/images/aquamail.png")}
          style={styles.logo}
        />
        <Text style={styles.titleText}>Check your mail</Text>
      </View>

      <Text style={styles.mailText}>
        Check your mail We have sent a password recover instruction to your
        account. Open email app
      </Text>

      <ButtonComponents title="Open email app" primary />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center", marginRight: -10 }}>
          Did not receive the email? Check your spam filter, or
        </Text>
        <ButtonComponents title="try another email" />
      </View>
    </View>
  );
};

export default CheckMailScreen;

const styles = StyleSheet.create({});
