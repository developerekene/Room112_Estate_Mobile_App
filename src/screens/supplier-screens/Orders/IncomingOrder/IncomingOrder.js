import React from 'react';
import { ScrollView } from 'react-native';
import IncomingOrderItem from '../../../../components/IncomingOrderItem';

function IncomingOrder(props) {
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
                        date={el.date} />
                )
            })}
        </ScrollView>
    );
}

export default IncomingOrder;