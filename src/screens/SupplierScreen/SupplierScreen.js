import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import InputComponents from "../../components/InputComponents";
import ButtonComponents from "../../components/ButtonComponents";
import SignUpHeader from "../../components/SignUpHeader/SignUpHeader";
import { SimpleLineIcons } from "@expo/vector-icons";

const SupplierScreen = () => {
  const onChange = () => {};
  return (
    <View>
      <SignUpHeader />

      <InputComponents
        label="Company Name"
        placeholder="Company Name"
        onChangeText={onChange}
      />

      <InputComponents
        label="Email"
        placeholder="Email"
        onChangeText={onChange}
      />
      <InputComponents
        label="Password"
        placeholder="Password"
        onChangeText={onChange}
        secureEntryText
      />
      <InputComponents
        label="Phone Number"
        placeholder="Phone Number"
        onChangeText={onChange}
        keyboardType={"number-pad"}
      />

      <Text style={styles.label}>Location</Text>
      <View style={styles.locationContainer}>
        <SimpleLineIcons name="location-pin" size={24} color="#C4C4C4C4" />
        <TextInput
          style={styles.locationInput}
          autoCorrect={false}
          secureTextEntry
          placeholder="Use current location"
          placeholderTextColor="#C4C4C4"
          onChangeText={onChange}
        />
      </View>

      <ButtonComponents title="Sign Up" primary />

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
        <ButtonComponents title="Sign In" />
      </View>
    </View>
  );
};

export default SupplierScreen;

const styles = StyleSheet.create({
  locationContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
    borderWidth: 2,
    borderColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  locationInput: {
    padding: 10,
    flex: 1,
  },
  label: {
    padding: 4,
    color: "#21334F",
  },
});
