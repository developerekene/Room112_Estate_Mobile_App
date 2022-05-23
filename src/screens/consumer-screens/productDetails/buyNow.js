import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React from "react";
import ConsumerHeader from "../../../components/ConsumerHeader/ConsumerHeader";
import Carousel from "./Carousel";
import Counter from "./Counter";

const BuyNow = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <ConsumerHeader title="Details" />
        </View>
        <View>
          <Carousel />
        </View>
        <View style={styles.productDetails}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Bottle Water Pack
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>N900.00</Text>
        </View>
        <View>
          <Text
            style={{
              color: "#38B000",
              fontSize: 14,
            }}
          >
            In Stock
          </Text>
        </View>
        <View>
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
    alignItems: "center",
    height: "100%",
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
});
