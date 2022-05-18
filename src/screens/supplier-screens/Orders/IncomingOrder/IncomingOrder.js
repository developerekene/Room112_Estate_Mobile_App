import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
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
        <ActionSheet id={modalId}
            onBeforeShow={(data) => {
                setData(data);
            }}
            >
            <View style={{ height: '70%' }}>
                <View style={styles.consumerDetailsModal.dash} />
                <View style={styles.consumerDetailsModal.header}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.consumerDetailsModal.headerText}>Order details</Text>
                    </View>
                    <TouchableOpacity style={styles.consumerDetailsModal.close} onPress={() => {
                        SheetManager.hide(modalId);
                    }}>
                        <MaterialCommunityIcons name="close" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.consumerDetailsModal.modalImageContainer}>
                    <View style={styles.consumerDetailsModal.modalImageRow}>

                        <Image source={require('../../../../../assets/orders/image2.png')} style={{width: 162, height: 87, resizeMode: 'contain'}} />
                        <Text style={{
                            marginTop: 5,
                            fontFamily: 'Manrope_700Bold',
                            color: '#21334F'
                        }}>Bottle water pack</Text>

                    </View>
                </View>
                <View style={{ padding: 20, paddingHorizontal: 30 }}>
                    <View style={styles.consumerDetailsModal.row}>
                        <Text style={styles.consumerDetailsModal.rowText}>Requester:</Text>
                        <Text style={styles.consumerDetailsModal.rowInfoText}>{data.requester}</Text>
                    </View>
                    <View style={styles.consumerDetailsModal.row}>
                        <Text style={styles.consumerDetailsModal.rowText}>Quatity:</Text>
                        <Text style={styles.consumerDetailsModal.rowInfoText}>{data.quantity} pack(s) of bottle water</Text>
                    </View>
                    <View style={styles.consumerDetailsModal.row}>
                        <Text style={styles.consumerDetailsModal.rowText}>Phone number:</Text>
                        <Text style={styles.consumerDetailsModal.rowInfoText}>{data.phone}</Text>
                    </View>
                    <View style={styles.consumerDetailsModal.row}>
                        <Text style={styles.consumerDetailsModal.rowText}>Address:</Text>
                        <Text style={styles.consumerDetailsModal.rowInfoText}>{data.address}</Text>
                    </View>
                    <View style={styles.consumerDetailsModal.row}>
                        <Text style={styles.consumerDetailsModal.rowText}>Description:</Text>
                        <Text style={styles.consumerDetailsModal.rowInfoText}>{data.description}</Text>
                    </View>
                </View>
                <TouchableOpacity style={{paddingHorizontal: 30}}>
                    <View style={styles.consumerDetailsModal.confirmOrderBtn}>
                        <Text style={styles.consumerDetailsModal.confirmOrderBtnText}>Confirm Order</Text>
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
            id: 1,
            title: "Bottle water pack",
            image: require('../../../../../assets/orders/image1.png'),
            name: "Abimbola Thomas",
            location: "Magodo, Lagos",
            qty: "10",
            date: "4/04/2022"
        },
        {
            id: 2,
            title: "Bottle water pack",
            image: require('../../../../../assets/orders/image1.png'),
            name: "Gabriel Tayo",
            location: "Magodo, Lagos",
            qty: "10",
            date: "4/04/2022"
        },
        {
            id: 3,
            title: "Bottle water pack",
            image: require('../../../../../assets/orders/image1.png'),
            name: "Abimbola Thomas",
            location: "Magodo, Lagos",
            qty: "10",
            date: "4/04/2022"
        },
        {
            id: 4,
            title: "Bottle water pack",
            image: require('../../../../../assets/orders/image1.png'),
            name: "Gabriel Tayo",
            location: "Magodo, Lagos",
            qty: "10",
            date: "4/04/2022"
        },
        {
            id: 5,
            title: "Bottle water pack",
            image: require('../../../../../assets/orders/image1.png'),
            name: "Abimbola Thomas",
            location: "Magodo, Lagos",
            qty: "10",
            date: "4/04/2022"
        },
        {
            id: 6,
            title: "Bottle water pack",
            image: require('../../../../../assets/orders/image1.png'),
            name: "Gabriel Tayo",
            location: "Magodo, Lagos",
            qty: "10",
            date: "4/04/2022"
        },
        {
            id: 7,
            title: "Bottle water pack",
            image: require('../../../../../assets/orders/image1.png'),
            name: "Abimbola Thomas",
            location: "Magodo, Lagos",
            qty: "10",
            date: "4/04/2022"
        }
    ];

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', }}>
            <FlatList 
                data={data}
                keyExtractor={i => i.id}
                renderItem={({ item }) => {
                    return (
                        <IncomingOrderItem key={item.id} 
                            image={item.image} 
                            location={item.location} 
                            title={item.title} 
                            qty={item.qty} 
                            name={item.name} 
                            date={item.date}
                            modalId={modalId}
                            showModal={(id, data) => { SheetManager.show(id, data) }}
                            />
                    );
                }}/>
            <ConsumerDetailsModal />
        </View>
    );
}

const styles = StyleSheet.create({
    consumerDetailsModal: {
        dash: {
            height: 4,
            width: '20%',
            backgroundColor: '#EBEBEB',
            alignSelf: 'center',
            marginVertical: 15,
            borderRadius: 2
        },
        header: {
            flexDirection: 'row',
            paddingBottom: 15,
            borderBottomColor: '#EBEBEB',
            borderBottomWidth: 1
        },
        headerText: {
            fontSize: 14, 
            color: '#21334F',
            fontFamily: 'Manrope_700Bold'
        },
        close: {
            position: 'absolute',
            right: 20,
            top: 0
        },
        modalImageContainer: {
            width: '100%',
            height: 149,
            padding: 10,
            paddingHorizontal: 20
        },
        modalImageRow: {
            width: '100%',
            height: '100%',
            backgroundColor: '#21334F0A',
            justifyContent: 'center',
            alignItems: 'center'
        },
        row: { 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignContent: 'center', 
            marginBottom: 15
        },
        rowText: {
            fontSize: 14, 
            fontFamily: 'Manrope_400Regular'
        },
        rowInfoText: {
            fontSize: 14, 
            fontFamily: 'Manrope_400Regular', 
            flexShrink: 1, textAlign: 'right'
        },
        confirmOrderBtn: {
            width: '100%', 
            height: 46, 
            backgroundColor: '#147DF5', 
            justifyContent: 'center', 
            alignItems: 'center'
        },
        confirmOrderBtnText: {
            fontSize: 14, 
            fontFamily: 'Manrope_700Bold', 
            color: '#fff'
        }
    }
})

export default IncomingOrder;