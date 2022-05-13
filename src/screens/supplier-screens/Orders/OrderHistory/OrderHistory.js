import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useFonts, Manrope_400Regular, Manrope_700Bold, Manrope_300Light, Manrope_500Medium } from '@expo-google-fonts/manrope';

import OrderHistoryItem from '../../../../components/OrderHistoryItem/OrderHistoryItem';

function OrderHistory(props) {

    let [fontsLoaded] = useFonts({
        Manrope_400Regular,
        Manrope_700Bold,
        Manrope_300Light,
        Manrope_500Medium
    });

    if (!fontsLoaded) {
        return (
            <View
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>loading...</Text>
            </View>
        );
    }

    const data = [
        {
            title: "Arizona Inc.",
            subtitle: "6 packs of big bottle water",
            status: {text: "Delivered", color: "#38B000", bgColor: "#38B0000D"},
            date: "23/3/2022"
        },
        {
            title: "Arizona Inc.",
            subtitle: "6 packs of big bottle water",
            status: {text: "Failed", color: "#EF233C", bgColor: "#EF233C0D"},
            date: "23/3/2022"
        },
        {
            title: "Arizona Inc.",
            subtitle: "6 packs of big bottle water",
            status: {text: "Delivered", color: "#38B000", bgColor: "#38B0000D"},
            date: "23/3/2022"
        },
        {
            title: "Arizona Inc.",
            subtitle: "6 packs of big bottle water",
            status: {text: "Failed", color: "#EF233C", bgColor: "#EF233C0D"},
            date: "23/3/2022"
        },
        {
            title: "Arizona Inc.",
            subtitle: "6 packs of big bottle water",
            status: {text: "Delivered", color: "#38B000", bgColor: "#38B0000D"},
            date: "23/3/2022"
        },
        {
            title: "Arizona Inc.",
            subtitle: "6 packs of big bottle water",
            status: {text: "Failed", color: "#EF233C", bgColor: "#EF233C0D"},
            date: "23/3/2022"
        }
    ];
    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: '#fff'
        }}>
            {data.map((el, i) => {
                return (
                    <OrderHistoryItem key={i} 
                        image={require('../../../../../assets/orders/image1.png')}
                        title={el.title} 
                        status={el.status} 
                        date={el.date} 
                        subtitle={el.subtitle}
                        fonts={{
                            Manrope_400Regular,
                            Manrope_700Bold,
                            Manrope_300Light,
                            Manrope_500Medium
                        }} />
                )
            })}
        </ScrollView>
    );
}

export default OrderHistory;