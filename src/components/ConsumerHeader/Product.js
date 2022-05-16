import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { AntDesign } from "react-native-vector-icons";

const Product = (props) => {
  const { company, address, price, quantity, link, imageUrl, rating } =
    props.product;
  return (
    <View style={styles.container}>
      <Image style={styles.card} source={imageUrl} />
      <Text style={styles.ratingNo}>{rating}</Text>
      <Text style={styles.companyText}>{company}</Text>
      <Text style={styles.addressText}>{address}</Text>
      <View style={styles.priceQuantity}>
        <Text style={styles.priceText}>{price}</Text>
        <Text style={styles.quantityText}> {quantity}</Text>
      </View>
      <View style={styles.products_links}>
        <Text style={styles.linkText}>{link}</Text>
        <AntDesign name="right" size={20} color="rgba(20, 125, 245, 1)" />
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    zIndex: 5,
    padding: 10,
    marginTop: 15,
    marginRight: 5,
    marginLeft: 10,
    borderColor: "white",
    borderWidth: 1,
  },
  card: {
    width: 156,
    height: 85,
    padding: 20,
  },
  companyText: {
    fontSize: 14,
    fontWeight: "normal",
    textAlign: "left",
    color: "rgba(33, 51, 79, 1)",
    padding: 5,
  },
  addressText: {
    fontSize: 12,
    fontWeight: "normal",
    textAlign: "left",
    color: "rgba(33, 51, 79, 1)",
    padding: 5,
  },
  priceQuantity: {
    flexDirection: "row",
    //justifyContent: "center",
  },
  priceText: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "left",
    color: "rgba(33, 51, 79, 1)",
    padding: 1,
  },
  quantityText: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "left",
    color: "rgba(33, 51, 79, 1)",
    padding: 1,
  },
  products_links: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
  },
  linkText: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "left",
    color: "rgba(20, 125, 245, 1)",
  },
  ratingNo: {
    position: "absolute",
    top: 50,
    right: 10,
    backgroundColor: "#21334F",
    width: 54,
    height: 30,
    borderRadius: 25,
    color: "#fff",
    padding: 5,
  },
});
