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

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const SignupSchema = Yup.object().shape({

    firstname: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lastname: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
    phone: Yup.string().min(11, "Too Short!").max(15, "Too Long!").matches(phoneRegExp, 'Invalid Phone number!').required("Required"),
    //noOfWaterBottles: Yup.number().moreThan(0, "Invalid Number").lessThan(51, "Too Many Water Bottles").required("Required")
});

const ConsumerRegisterationScreen = ({navigation, route}) => {
//   console.log(route.params.userType);

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
          
          <Formik
            initialValues={{
                userType: route.params.userType,
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                phone: "",
                //noOfWaterBottles: ""
                street: "",
                city: "",
                state: ""
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => console.log(values)}>

              {
                ({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                  <>
                  <View style={{ marginTop: 10 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        marginVertical: 5,
                      }}
                    >
                      First Name
                    </Text>
                    <TextInput
                      autoCorrect={false}
                      autoCapitalize="none"
                      placeholder="First Name"
                      color="#000"
                      onChangeText={handleChange("firstname")}
                      onBlur={handleBlur("firstname")}
                      value={values.firstname}
                      style={{
                        height: 48,
                        borderWidth: 0.5,
                        borderColor: (errors.firstname && touched.firstname) ? "tomato" : "rgba(33, 51, 79, 0.2)",
                        padding: 10,
                        fontFamily: "Manrope_400Regular",
                      }}
                    />
                    {(errors.firstname && touched.firstname) && <Text
                        style={{
                          fontSize: 14,
                          fontFamily: "Manrope_400Regular",
                          color: "tomato",
                          marginVertical: 2,
                        }}
                      >
                        { errors.firstname }
                      </Text>}
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        marginVertical: 5,
                      }}
                    >
                      Last Name
                    </Text>
                    <TextInput
                      autoCorrect={false}
                      autoCapitalize="none"
                      placeholder="Last Name"
                      color="#000"
                      onChangeText={handleChange("lastname")}
                      onBlur={handleBlur("lastname")}
                      value={values.lastname}
                      style={{
                        height: 48,
                        borderWidth: 0.5,
                        borderColor: (errors.lastname && touched.lastname) ? "tomato" : "rgba(33, 51, 79, 0.2)",
                        padding: 10,
                        fontFamily: "Manrope_400Regular",
                      }}
                    />
                    {(errors.lastname && touched.lastname) && <Text
                        style={{
                          fontSize: 14,
                          fontFamily: "Manrope_400Regular",
                          color: "tomato",
                          marginVertical: 2,
                        }}
                      >
                        { errors.lastname }
                      </Text>}
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
                      keyboardType="email-address"
                      autoCapitalize="none"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      style={{
                        height: 48,
                        borderWidth: 0.5,
                        borderColor: (errors.email && touched.email) ? "tomato" : "rgba(33, 51, 79, 0.2)",
                        padding: 10,
                        fontFamily: "Manrope_400Regular",
                      }}
                    />
                    {(errors.email && touched.email) && <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        color: "tomato",
                        marginVertical: 2,
                      }}
                    >
                      { errors.email }
                    </Text>}
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
                      autoCapitalize="none"
                      autoCorrect={false}
                      secureTextEntry
                      placeholder="Password"
                      textContentType="password"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      style={{
                        height: 48,
                        borderWidth: 0.5,
                        borderColor: (errors.password && touched.password) ? "tomato" : "rgba(33, 51, 79, 0.2)",
                        padding: 10,
                        fontFamily: "Manrope_400Regular",
                      }}
                    />
                    {(errors.password && touched.password) && <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        color: "tomato",
                        marginVertical: 2,
                      }}
                    >
                      { errors.password }
                    </Text>}
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
                      keyboardType="numeric"
                      onChangeText={handleChange("phone")}
                      onBlur={handleBlur("phone")}
                      value={values.phone}
                      style={{
                        height: 48,
                        borderWidth: 0.5,
                        borderColor: (errors.phone && touched.phone) ? "tomato" : "rgba(33, 51, 79, 0.2)",
                        padding: 10,
                        fontFamily: "Manrope_400Regular",
                      }}
                    />
                    {(errors.phone && touched.phone) && <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        color: "tomato",
                        marginVertical: 2,
                      }}
                    >
                      { errors.phone }
                    </Text>}
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        marginVertical: 5,
                      }}
                    >
                      Address
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 0.5,
                        borderColor: "rgba(33, 51, 79, 0.2)",
                        padding: 10,
                        paddingHorizontal: 5,
                        marginRight: 240
                      }}
                    >
                      {/* <MaterialCommunityIcons
                        name="map-marker-outline"
                        size={24}
                        color="#C4C4C4"
                      /> */}
                      <TextInput
                        placeholder="Street"
                        underlineColorAndroid="transparent"
                        style={{
                          flex: 1,
                          fontFamily: "Manrope_400Regular",
                          paddingHorizontal: 5,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 0.5,
                        borderColor: "rgba(33, 51, 79, 0.2)",
                        padding: 10,
                        paddingHorizontal: 5,
                        marginRight: 120,
                        marginLeft: 140,
                        position: 'absolute',
                        marginTop: 29
                      }}
                    >
                      {/* <MaterialCommunityIcons
                        name="map-marker-outline"
                        size={24}
                        color="#C4C4C4"
                      /> */}
                      <TextInput
                        placeholder="City"
                        underlineColorAndroid="transparent"
                        style={{
                          flex: 1,
                          fontFamily: "Manrope_400Regular",
                          paddingHorizontal: 5,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 0.5,
                        borderColor: "rgba(33, 51, 79, 0.2)",
                        padding: 10,
                        paddingHorizontal: 5,
                        marginRight: 5,
                        marginLeft: 260,
                        position: 'absolute',
                        marginTop: 29
                      }}
                    >
                      {/* <MaterialCommunityIcons
                        name="map-marker-outline"
                        size={24}
                        color="#C4C4C4"
                      /> */}
                      <TextInput
                        placeholder="State"
                        underlineColorAndroid="transparent"
                        style={{
                          flex: 1,
                          fontFamily: "Manrope_400Regular",
                          paddingHorizontal: 5,
                        }}
                      />
                    </View>
                  </View>
                  {/* <View style={{ marginTop: 10 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        marginVertical: 5,
                      }}
                    >
                      Number of Water Bottles
                    </Text>
                    <TextInput
                      placeholder="1"
                      keyboardType="numeric"
                      onChangeText={handleChange("noOfWaterBottles")}
                      onBlur={handleBlur("noOfWaterBottles")}
                      value={values.noOfWaterBottles}
                      style={{
                        height: 48,
                        borderWidth: 0.5,
                        borderColor: (errors.noOfWaterBottles && touched.noOfWaterBottles) ? "tomato" : "rgba(33, 51, 79, 0.2)",
                        padding: 10,
                        fontFamily: "Manrope_400Regular",
                      }}
                    />
                    {(errors.noOfWaterBottles && touched.noOfWaterBottles) && <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        color: "tomato",
                        marginVertical: 2,
                      }}
                    >
                      { errors.noOfWaterBottles }
                    </Text>}
                  </View> */}
                  <TouchableHighlight
                    style={{ marginTop: 20 }}
                    underlayColor="#114E93"
                    onPress={(e) => {
                      // navigation.navigate("ConfirmEmail")
                      handleSubmit(e)
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
                  </>
                )
              }

          </Formik>
          
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

export default ConsumerRegisterationScreen;
