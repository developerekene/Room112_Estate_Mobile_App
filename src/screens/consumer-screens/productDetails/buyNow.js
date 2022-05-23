import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React from "react";
import Header from "../../../components/ConsumerHeader/Header";
import Carousel from "./Carousel";
import Counter from "./Counter";

const BuyNow = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Header title="Details" />
        </View>
        <View style={styles.carousel}>
          <Carousel />
        </View>
        <View style={styles.productDetails}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Bottle Water Pack
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>N900.00</Text>
        </View>
        <View style={styles.inStock}>
          <Text
            style={{
              color: "#38B000",
              fontSize: 14,
              padding: 20,
            }}
          >
            In Stock
          </Text>
        </View>
        <View style={styles.counter}>
          <Counter />
        </View>
        <View style={styles.btnView}>
          <Pressable style={styles.btnprimary}>
            <Text style={styles.btnPrimaryText}>Continue To Buy</Text>
          </Pressable>
          <Text style={{ color: "#147DF5", fontSize: 14 }}>Remove</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BuyNow;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // alignItems: "center",
    justifyContent: "space-between",
    height: "80%",
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
  btnView: {
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  productDetails: {
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
  },
});
