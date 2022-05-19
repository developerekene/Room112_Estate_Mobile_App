import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';



const InputComponents = ({label, placeholder, onChangeText, secureEntryText, keyboardType}) => {
  return (
    <View style={styles.container}>
      
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>

       <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor="#C4C4C4"
          onChangeText={onChangeText}
          secureTextEntry={secureEntryText}
          keyboardType = {keyboardType}

          />
    </View>
  )
}

export default InputComponents

const styles = StyleSheet.create({
  textInput:{
    borderWidth: 2,
    padding: 20,
    borderRadius: 4,
    borderColor: '#E5E5E5',
},

label:{
  padding: 4,
  color:'#21334F',
}
})