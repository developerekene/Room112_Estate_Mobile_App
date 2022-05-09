import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts, Manrope_400Regular, Manrope_700Bold, Manrope_300Light, Manrope_500Medium } from '@expo-google-fonts/manrope';
import AppLoading from 'expo-app-loading';

function IncomingOrderItem({image, title, location, qty, name, date}) {

    let [fontsLoaded] = useFonts({
        Manrope_400Regular,
        Manrope_700Bold,
        Manrope_300Light,
        Manrope_500Medium
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <TouchableOpacity style={styles.container}>
            <Image source={image} />
            <View style={styles.section}>
                <View style={styles.nameSection}>
                    <Text style={styles.text12}>{name}</Text>
                    <Text style={styles.text12}>{date}</Text>
                </View>
                <View style={styles.itemDetailsSection}>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.location}>{location}</Text>
                        <Text style={styles.qty}>QTY: {qty}</Text>
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={24} color="black" />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 94,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5'
    },
    section: {
        flex: 1,
        paddingHorizontal: 10
    },
    itemDetailsSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    nameSection: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text12: {
        fontFamily: 'Manrope_400Regular',
        fontSize: 12,
        color: '#21334F'
    },
    title: {
        fontFamily: 'Manrope_700Bold',
        fontSize: 14,
    },
    location: {
        fontFamily: 'Manrope_400Regular',
        fontSize: 14,
    },
    qty: {
        fontFamily: 'Manrope_400Regular',
        fontSize: 14,
    }
});

export default IncomingOrderItem;