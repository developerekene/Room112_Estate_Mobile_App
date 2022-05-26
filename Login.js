import React from 'react';
import {Text, View, Image, TextInput, Button, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

function Login({navigation}) {

    return (
        <SafeAreaView style={{height: "100%", width: "100%", backgroundColor: "#FFF"}}>
          
          <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 53
              }}>
              <Image source={require('./src/assets/bluelogo.png')}/>
          </View>

          <View style={{paddingHorizontal: 20, marginTop: 30}}>
            <Text style={{
              fontSize: 20,
              fontFamily: "Manrope_700Bold"
            }}>Login to your Account</Text>

            <View style={{marginTop: 20}}>
              <Text style={{
                fontSize: 14,
                fontFamily: "Manrope_400Regular",
                marginVertical: 5
              }}>Email</Text>
              <TextInput 
                placeholder='Email'
                color='#000'
                style={{
                  height: 48,
                  borderWidth: 0.5,
                  borderColor: "rgba(33, 51, 79, 0.2)",
                  padding: 10,
                  fontFamily: "Manrope_400Regular"
              }}/>
            </View>

            <View style={{marginTop: 10}}>
              <Text style={{
                  fontSize: 14,
                  fontFamily: "Manrope_400Regular",
                  marginVertical: 5
                }}>Password</Text>
              
              <View style={{
                flexDirection: "row",
                alignItems: "center",
                height: 48,
                borderWidth: 0.5,
                borderColor: "rgba(33, 51, 79, 0.2)",
                padding: 10,
              }}>
                <TextInput 
                  secureTextEntry
                  placeholder='Password'
                  underlineColorAndroid="transparent"
                  style={{
                    flex: 1,
                    fontFamily: "Manrope_400Regular"
                  }}/>
                  <Entypo name="eye-with-line" size={20} color="black" />
              </View>
            </View>

            <TouchableWithoutFeedback onPress={ () => {
                navigation.navigate("ForgotPassword")
              } }>
              <Text style={{
                fontSize: 12,
                color: '#147DF5',
                fontFamily: "Manrope_400Regular",
                marginVertical: 3
              }}>Forgot Password?</Text>
            </TouchableWithoutFeedback>

            <TouchableHighlight style={{marginTop: 20}} underlayColor="#114E93" onPress={() => {
              // navigation.navigate("Customer");
              navigation.navigate("Supplier");
            }} >
              <View style={{
                backgroundColor: "#147DF5",
                height: 48,
                justifyContent: "center",
                alignItems: "center",
              }}>
                <Text style={{color: "#FFF", fontFamily: "Manrope_700Bold"}}>Login</Text>
              </View>
            </TouchableHighlight>

            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: "row",
              marginTop: 30
            }}>
              <Text style={{fontFamily: "Manrope_400Regular"}}>Don't have an account?</Text>
              <TouchableWithoutFeedback onPress={ () => {
                navigation.navigate("SignUp")
              } }>
                <Text style={{
                  color: '#147DF5',
                  fontFamily: "Manrope_700Bold"
                }}> Sign Up</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
              
        </SafeAreaView>
    );
}

export default Login;