import React, { useState } from 'react';
import {Text, View, Image, TextInput, Button, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, Feather } from '@expo/vector-icons';
import SnackBar from '../../components/SnackBar/SnackBar';

function CreateNewPasswordScreen({navigation}) {
    const [snackBarStatus, updateSnackBar] = useState(false);

    function showSnackBar(duration = 3000) {
      updateSnackBar(true)
      setTimeout(() => {
        updateSnackBar(false)
      }, duration)
    }

    return (
        <SafeAreaView style={{height: "100%", width: "100%", backgroundColor: "#FFF"}}>
          
          <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 40
              }}>
              <Image source={require('../../assets/bluelogo.png')}/>
          </View>

          <View style={{paddingHorizontal: 20, marginTop: 30}}>
            <Text style={{
              fontSize: 20,
              fontFamily: "Manrope_700Bold"
            }}>Create New Password</Text>

            <View style={{marginTop: 10}}>
              <Text style={{
                  fontSize: 14,
                  fontFamily: "Manrope_400Regular",
                  marginVertical: 5
                }}>New Password</Text>
              
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
                  placeholder='New Password'
                  underlineColorAndroid="transparent"
                  style={{
                    flex: 1,
                    fontFamily: "Manrope_400Regular"
                  }}/>
                  <Entypo name="eye-with-line" size={20} color="black" />
              </View>
            </View>

            <View style={{
              marginVertical: 3,
              flexDirection: "row",
              alignItems: "center"
            }}>
              <Feather name="info" size={14} color="#C4C4C4" />
              <Text style={{
                fontSize: 12,
                color: '#C4C4C4',
                fontFamily: "Manrope_400Regular",
              }}> Must be at least 8 characters.</Text>
            </View>

            <View style={{marginTop: 10}}>
              <Text style={{
                  fontSize: 14,
                  fontFamily: "Manrope_400Regular",
                  marginVertical: 5
                }}>Confirm Password</Text>
              
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
                  placeholder='Confirm Password'
                  underlineColorAndroid="transparent"
                  style={{
                    flex: 1,
                    fontFamily: "Manrope_400Regular"
                  }}/>
                  <Entypo name="eye-with-line" size={20} color="black" />
              </View>
            </View>

            <View style={{
              marginVertical: 3,
              flexDirection: "row",
              alignItems: "center"
            }}>
              <Feather name="info" size={14} color="#C4C4C4" />
              <Text style={{
                fontSize: 12,
                color: '#C4C4C4',
                fontFamily: "Manrope_400Regular",
              }}> Both password must match.</Text>
            </View>

            <TouchableHighlight style={{marginTop: 20}} underlayColor="#114E93" onPress={() => {
              showSnackBar()
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

            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: "row",
              marginTop: 30
            }}>
              <Text style={{fontFamily: "Manrope_400Regular"}}>Don't have an account?</Text>
              <TouchableWithoutFeedback onPress={ () => {
                navigation.navigate("Home")
              } }>
                <Text style={{
                  color: '#147DF5',
                  fontFamily: "Manrope_700Bold"
                }}> Sign Up</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>

          { snackBarStatus && <SnackBar text="Password reset successfully" icon="check-circle" iconColor="#38B000" /> }
        </SafeAreaView>
    );
}

export default CreateNewPasswordScreen;