import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts, Manrope_400Regular, Manrope_700Bold, Manrope_300Light, Manrope_500Medium } from '@expo-google-fonts/manrope';

import IncomingOrderItem from '../../../../components/IncomingOrderItem';

const modalId = "consumer-details-modal";
function ConsumerDetailsModal() {

    let [data, setData] = useState({
        requester: "",
        quantity: 0,
        phone: "",
        address: "",
        description: ""
    })

    let [fontsLoaded] = useFonts({
        Manrope_400Regular,
        Manrope_700Bold,
        Manrope_300Light,
        Manrope_500Medium
    });

    if (!fontsLoaded) {
        return  (
            <View
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>loading...</Text>
            </View>
        );
    }

    return (
        <ActionSheet 
            id={modalId}
            onBeforeShow={(data) => {
                setData(data);
            }}
            >
            <View style={{ height: '70%' }}>
                <View style={{
                    height: 4,
                    width: '20%',
                    backgroundColor: '#EBEBEB',
                    alignSelf: 'center',
                    marginVertical: 15,
                    borderRadius: 2
                }} />
                <View style={{
                    flexDirection: 'row',
                    paddingBottom: 15,
                    borderBottomColor: '#EBEBEB',
                    borderBottomWidth: 1
                }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 14, 
                            color: '#21334F',
                            fontFamily: 'Manrope_700Bold'
                        }}>Order details</Text>
                    </View>
                    <TouchableOpacity style={{
                        position: 'absolute',
                        right: 20,
                        top: 0
                    }} onPress={() => {
                        SheetManager.hide(modalId);
                    }}>
                        <MaterialCommunityIcons name="close" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: '100%',
                    height: 149,
                    padding: 10,
                    paddingHorizontal: 20
                }}>
                    <View style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#21334F0A',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                        <Image source={require('../../../../../assets/orders/image2.png')} />
                        <Text style={{
                            marginTop: 5,
                            fontFamily: 'Manrope_700Bold',
                            color: '#21334F'
                        }}>Bottle water pack</Text>

                    </View>
                </View>
                <View style={{
                    padding: 20,
                    paddingHorizontal: 30
                }}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', marginBottom: 15}}>
                        <Text style={{fontSize: 14, fontFamily: 'Manrope_400Regular'}}>Requester:</Text>
                        <Text style={{fontSize: 14, fontFamily: 'Manrope_400Regular', flexShrink: 1, textAlign: 'right'}}>{data.requester}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', marginBottom: 15}}>
                        <Text style={{fontSize: 14, fontFamily: 'Manrope_400Regular'}}>Quatity:</Text>
                        <Text style={{fontSize: 14, fontFamily: 'Manrope_400Regular', flexShrink: 1, textAlign: 'right'}}>{data.quantity} pack(s) of bottle water</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', marginBottom: 15}}>
                        <Text style={{fontSize: 14, fontFamily: 'Manrope_400Regular'}}>Phone number:</Text>
                        <Text style={{fontSize: 14, fontFamily: 'Manrope_400Regular', flexShrink: 1, textAlign: 'right'}}>{data.phone}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', marginBottom: 15}}>
                        <Text style={{fontSize: 14, fontFamily: 'Manrope_400Regular'}}>Address:</Text>
                        <Text style={{fontSize: 14, fontFamily: 'Manrope_400Regular', flexShrink: 1, textAlign: 'right'}}>{data.address}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', marginBottom: 15}}>
                        <Text style={{fontSize: 14, fontFamily: 'Manrope_400Regular'}}>Description:</Text>
                        <Text style={{fontSize: 14, fontFamily: 'Manrope_400Regular', flexShrink: 1, textAlign: 'right'}}>{data.description}</Text>
                    </View>
                </View>
                <TouchableOpacity style={{paddingHorizontal: 30}}>
                    <View style={{width: '100%', height: 46, backgroundColor: '#147DF5', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 14, fontFamily: 'Manrope_700Bold', color: '#fff'}}>Confirm Order</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ActionSheet>
    );
}

function IncomingOrder(props) {

    let [fontsLoaded] = useFonts({
        Manrope_400Regular,
        Manrope_700Bold,
        Manrope_300Light,
        Manrope_500Medium
    });

    if (!fontsLoaded) {
        return  (
            <View
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>loading...</Text>
            </View>
        );
    }

    const data = [
        {
            title: "Bottle water pack",
            name: "Abimbola Thomas",
            location: "Magodo, Lagos",
            qty: "10",
            date: "4/04/2022"
        },
        {
            title: "Bottle water pack",
            name: "Gabriel Tayo",
            location: "Magodo, Lagos",
            qty: "10",
            date: "4/04/2022"
        },
        {
            title: "Bottle water pack",
            name: "Abimbola Thomas",
            location: "Magodo, Lagos",
            qty: "10",
            date: "4/04/2022"
        },
        {
            title: "Bottle water pack",
            name: "Gabriel Tayo",
            location: "Magodo, Lagos",
            qty: "10",
            date: "4/04/2022"
        },
        {
            title: "Bottle water pack",
            name: "Abimbola Thomas",
            location: "Magodo, Lagos",
            qty: "10",
            date: "4/04/2022"
        },
        {
            title: "Bottle water pack",
            name: "Gabriel Tayo",
            location: "Magodo, Lagos",
            qty: "10",
            date: "4/04/2022"
        },
        {
            title: "Bottle water pack",
            name: "Abimbola Thomas",
            location: "Magodo, Lagos",
            qty: "10",
            date: "4/04/2022"
        }
    ];

    return (
        <ScrollView style={{
            flex: 1,
            // paddingTop: 20,
            backgroundColor: '#fff',
        }}>
            {data.map((el, i) => {
                return (
                    <IncomingOrderItem key={i} 
                        image={require('../../../../../assets/orders/image1.png')} 
                        location={el.location} 
                        title={el.title} 
                        qty={el.qty} 
                        name={el.name} 
                        date={el.date}
                        modalId={modalId}
                        showModal={(id, data) => { SheetManager.show(id, data) }}
                        fonts={{
                            Manrope_400Regular,
                            Manrope_700Bold,
                            Manrope_300Light,
                            Manrope_500Medium
                        }} />
                )
            })}
            <ConsumerDetailsModal />
        </ScrollView>
    );
}

export default IncomingOrder;