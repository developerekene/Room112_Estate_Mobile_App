import React from 'react';
import {Text, SafeAreaView, View, Image, TextInput, Button} from 'react-native'

function Login(props) {

    return (
        <SafeAreaView>
          
          <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 80
              }}>
              <Image source={require('./src/assets/bluelogo.png')}/>
            
          
          </View>
          <View style={{
                
              }}>
            <Text style={{
              fontSize: 25,
              marginTop: 20,
              marginLeft: 15
            }}>Login to your Account</Text>
          </View>
          <View style={{
              }}>
            <Text style={{
              marginTop: 20,
              marginLeft: 15,
              fontSize: 20
            }}>Email</Text>
          </View>
          <View style={{
            height: 40,
            marginLeft: 15,
            marginRight: 15,
            borderWidth: 0.5,
            height: 50
              }}>
            <TextInput 
            placeholder='Email'
            color='#000'
            style={{
              height: 40
            }}/>
          </View>

          <View style={{
              }}>
            <Text style={{
              marginTop: 20,
              marginLeft: 15,
              fontSize: 20
            }}>Password</Text>
          </View>
          <View style={{
            height: 40,
            marginLeft: 15,
            marginRight: 15,
            borderWidth: 0.5,
            height: 50
              }}>
            <TextInput 
            placeholder='Password'
            underlineColorAndroid="transparent"
            style={{
              height: 40
            }}/>
          </View>
          <View style={{
              }}>
            <Text style={{
              marginTop: 5,
              marginLeft: 15,
              fontSize: 15,
              color: '#147DF5'
            }}>Forgot Password?</Text>
          </View>

          <View style={{
            marginLeft: 15,
            marginRight: 15,
            marginTop: 15,
          }}>
          <Button
          style={{
            color: '#147DF5',
            height: 50
          }}
        title="Login"
        
        // onPress={() => Alert.alert('Simple Button pressed')}
      />
          </View>

          <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30
              }}>
            <Text>Don't have an account? <Text style={{
              color: '#147DF5',
            }}>Sign Up</Text></Text>
            
          
          </View>
              
        </SafeAreaView>
    );
}

export default Login;