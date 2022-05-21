import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import {Picker} from '@react-native-picker/picker';
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

const RegisterScreen = ({navigation}) => {
  const onChange = () => {};
  return (
      <ScrollView style={{ flex: 1, backgroundColor: "#FFF", marginTop: 0}}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={require("./src/assets/bluelogo.png")} />
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Manrope_700Bold",
            }}
          >
            Sign up your account
          </Text>

          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Manrope_400Regular",
                marginVertical: 5,
              }}
            >
              User Type
            </Text>
            <View
              style={{
                height: 48,
                borderWidth: 0.5,
                borderColor: "#21334F33",
              }}
            >
              <Picker
                // selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) => {}}
              >
                <Picker.Item label="Select" value="" />
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Manrope_400Regular",
                marginVertical: 5,
              }}
            >
              Company Name
            </Text>
            <TextInput
              placeholder="Company name"
              color="#000"
              style={{
                height: 48,
                borderWidth: 0.5,
                borderColor: "rgba(33, 51, 79, 0.2)",
                padding: 10,
                fontFamily: "Manrope_400Regular",
              }}
            />
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
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Manrope_400Regular",
                marginVertical: 5,
              }}
            >
              Password
            </Text>
            <TextInput
              placeholder="Password"
              underlineColorAndroid="transparent"
              style={{
                height: 48,
                borderWidth: 0.5,
                borderColor: "rgba(33, 51, 79, 0.2)",
                padding: 10,
                fontFamily: "Manrope_400Regular",
              }}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Manrope_400Regular",
                marginVertical: 5,
              }}
            >
              Phone Number
            </Text>
            <TextInput
              placeholder="Phone number"
              underlineColorAndroid="transparent"
              style={{
                height: 48,
                borderWidth: 0.5,
                borderColor: "rgba(33, 51, 79, 0.2)",
                padding: 10,
                fontFamily: "Manrope_400Regular",
              }}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Manrope_400Regular",
                marginVertical: 5,
              }}
            >
              Location
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "rgba(33, 51, 79, 0.2)",
                padding: 10,
                paddingHorizontal: 5,
              }}
            >
              <MaterialCommunityIcons
                name="map-marker-outline"
                size={24}
                color="#C4C4C4"
              />
              <TextInput
                placeholder="Use current location"
                underlineColorAndroid="transparent"
                style={{
                  flex: 1,
                  fontFamily: "Manrope_400Regular",
                  paddingHorizontal: 5,
                }}
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: 12,
              color: "#147DF5",
              fontFamily: "Manrope_400Regular",
              marginVertical: 3,
            }}
          >
            Forgot Password?
          </Text>
          <TouchableHighlight
            style={{ marginTop: 20 }}
            underlayColor="#114E93"
            onPress={() => {
              navigation.navigate("ConfirmEmail")
            }}
          >
            <View
              style={{
                backgroundColor: "#147DF5",
                height: 48,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#FFF", fontFamily: "Manrope_700Bold" }}>
                Sign Up
              </Text>
            </View>
          </TouchableHighlight>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            <Text style={{ fontFamily: "Manrope_400Regular" }}>
              Already have an account?
            </Text>
            <TouchableWithoutFeedback onPress={() => {
              navigation.navigate("Login")
            }}>
              <Text
                style={{
                  color: "#147DF5",
                  fontFamily: "Manrope_700Bold",
                }}
              > Sign in </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
  );
};

export default RegisterScreen;
