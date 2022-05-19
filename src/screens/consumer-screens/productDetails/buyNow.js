import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import ConsumerHeader from "../../../components/ConsumerHeader/ConsumerHeader";
import Carousel from "./Carousel";

const BuyNow = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ConsumerHeader title="Details" />
        <Carousel />
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
});
