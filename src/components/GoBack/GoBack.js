import React from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

function GoBack({ navigation }) {
    return (
        <TouchableWithoutFeedback onPress={() => {
            navigation.goBack()
        }}>
            <View style={[styles.toolbar, {marginTop: Constants.statusBarHeight}]}>
                <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
                <Text style={styles.toolbarTxt}>Back</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    toolbar: {
      width: "100%",
      height: 68,
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white"
    },
    toolbarTxt: {
      fontFamily: "Manrope_400Regular",
      fontSize: 14,
    },
});

export default GoBack;