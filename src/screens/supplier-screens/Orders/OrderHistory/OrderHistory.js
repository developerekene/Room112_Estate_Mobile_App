import React from 'react';
import { Text, ScrollView } from 'react-native';
import OrderHistoryItem from '../../../../components/OrderHistoryItem/OrderHistoryItem';

function OrderHistory(props) {
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
                        subtitle={el.subtitle} />
                )
            })}
        </ScrollView>
    );
}

export default OrderHistory;