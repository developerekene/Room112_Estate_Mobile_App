import React from 'react';
import {Text, View, Image, TextInput, Button, TouchableHighlight} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

function Login(props) {

    return (
        <SafeAreaView style={{height: "100%", width: "100%"}}>
          
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
              
              <TextInput 
                placeholder='Password'
                underlineColorAndroid="transparent"
                style={{
                  height: 48,
                  borderWidth: 0.5,
                  borderColor: "rgba(33, 51, 79, 0.2)",
                  padding: 10,
                  fontFamily: "Manrope_400Regular"
                }}/>
            </View>

            <Text style={{
              fontSize: 12,
              color: '#147DF5',
              fontFamily: "Manrope_400Regular",
              marginVertical: 3
            }}>Forgot Password?</Text>

            <TouchableHighlight style={{marginTop: 20}} underlayColor="#114E93" onPress={() => {}} >
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
              <Text style={{
                color: '#147DF5',
                fontFamily: "Manrope_700Bold"
              }}> Sign Up</Text>
            </View>
          </View>
              
        </SafeAreaView>
    );
}

export default Login;