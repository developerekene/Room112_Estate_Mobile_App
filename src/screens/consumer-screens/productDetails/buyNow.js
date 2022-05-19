import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React from "react";
import ConsumerHeader from "../../../components/ConsumerHeader/ConsumerHeader";
import Carousel from "./Carousel";
import Counter from "./Counter";

const BuyNow = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ConsumerHeader title="Details" />
        <Carousel />
        <View style={styles.productDetails}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Bottle Water Pack
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>N900.00</Text>
        </View>
        <View>
          <Text>In Stock</Text>
        </View>
        <View>
          <Counter />
        </View>
        <Pressable style={styles.btnprimary}>
          <Text style={styles.btnPrimaryText}>Buy Now</Text>
        </Pressable>
        <Text>Remove</Text>
      </View>
    </SafeAreaView>
  );
};

export default BuyNow;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btnprimary: {
    width: 329,
    height: 50,
    backgroundColor: "#147DF5",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  btnPrimaryText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    color: "#fff",
    paddingLeft: 5,
  },
});
