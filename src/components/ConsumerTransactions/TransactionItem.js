import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

const TransactionItem = (props) => {
  const { supplier, quantity, price, date, imgUrl } = props.menu;
  return (
    <View style={styles.transRow}>
      <View style={styles.transfirst}>
        <Image style={styles.transImage} source={imgUrl} />
        <View style={styles.transText}>
          <Text style={styles.supplierText}>{supplier}</Text>
          <Text style={styles.quantityText}>{quantity}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.priceText}>{price}</Text>
        <Text style={styles.dateText}>{date}</Text>
      </View>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  transRow: {
    width: Dimensions.get("window").width - 20,
    marginHorizontal: 50,
    paddingVertical: 10,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    zIndex: 99,
    marginBottom: 5,
  },
  transfirst: {
    flexDirection: "row",
  },
  transImage: {
    height: 32,
    width: 32,
  },
  transText: {
    paddingHorizontal: 20,
  },
  supplierText: {
    fontSize: 14,
    fontWeight: 400,
    color: "rgba(33, 51, 79, 1)",
  },
  priceText: {
    color: "rgba(56, 176, 0, 1)",
    fontSize: 14,
    fontWeight: 500,
    textAlign: "left",
  },
  dateText: {
    fontSize: 12,
    fontWeight: 300,
    textAlign: "left",
    color: "rgba(33, 51, 79, 1)",
  },
  quantityText: {
    fontWeight: 300,
    fontSize: 12,
    textAlign: "left",
    color: "rgba(33, 51, 79, 1)",
  },
});
