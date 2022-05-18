import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ConsumerHeader from "../../../components/ConsumerHeader/ConsumerHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function productDetails() {
  return (
    <View style={styles.container}>
      <ConsumerHeader style={styles.header} title="Product Details" />
      <View style={styles.carousel}></View>
      <View style={styles.productDetails}>
        <Text style={{ fontWeight: 500, fontSize: 18 }}>Bottle Water Pack</Text>
        <Text style={{ fontWeight: 700, fontSize: 24 }}>N900.00</Text>
      </View>
      <View style={styles.quantity}></View>
      <View style={styles.description}>
        <Text>Description</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          pellentesque augue lectus viverra interdum quis amet.
        </Text>
      </View>
      <View style={styles.review}>
        <Text>Reviews</Text>
      </View>
      <View style={styles.additionalInfo}></View>
      <View style={styles.actionBtn}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    alignItems: "stretch",
    height: "100%",
    justifyContent: "space-between",
  },
  header: {
    flex: 1,
  },
  carousel: {
    backgroundColor: "blue",
    flex: 3,
    marginTop: 40,
  },
  productDetails: {
    backgroundColor: "yellow",
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  quantity: {
    backgroundColor: "green",
    alignItems: "stretch",
    flex: 1,
  },
  description: {
    backgroundColor: "orange",
    alignItems: "stretch",
    flex: 1,
  },
  review: {
    backgroundColor: "wine",
    alignItems: "stretch",
    flex: 1,
  },
  additionalInfo: {
    backgroundColor: "purple",
    alignItems: "stretch",
    flex: 1,
  },
  actionBtn: {
    backgroundColor: "pink",
    alignItems: "stretch",
    flex: 1,
  },
});
