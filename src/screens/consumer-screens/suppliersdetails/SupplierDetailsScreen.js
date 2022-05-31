import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import SuppliersDetailsHeader from "./SuppliersDetailsHeader";
import ContactSupplier from "./ContactSupplier";
import SupplierCatalogue from "./SupplierCatalogue";
import React from "react";
import { ScrollView } from "react-native-virtualized-view";
import Footer from "./Footer";

const products = [
  {
    productname: "Bottle Water Pack",
    price: "N900.00",
    quantity: "per/bottle",
    rating: "(9)",
    instock: "In Stock",
    imageUrl: require("../../../assets/supplierwater/water1.jpg"),
  },
  {
    productname: "Bottle Water Pack",
    price: "N900.00",
    quantity: "per/bottle",
    rating: "(9)",
    instock: "In Stock",
    imageUrl: require("../../../assets/supplierwater/water2.jpg"),
  },
  {
    productname: "Bottle Water Pack",
    price: "N900.00",
    quantity: "per/bottle",
    rating: "(9)",
    instock: "In Stock",
    imageUrl: require("../../../assets/supplierwater/water3.jpg"),
  },
  {
    productname: "Bottle Water Pack",
    price: "N900.00",
    quantity: "per/bottle",
    rating: "(9)",
    instock: "In Stock",
    imageUrl: require("../../../assets/supplierwater/water4.jpg"),
  },
  {
    productname: "Bottle Water Pack",
    price: "N900.00",
    quantity: "per/bottle",
    rating: "(9)",
    instock: "In Stock",
    imageUrl: require("../../../assets/supplierwater/water5.jpg"),
  },
  {
    productname: "Bottle Water Pack",
    price: "N900.00",
    quantity: "per/bottle",
    rating: "(9)",
    instock: "In Stock",
    imageUrl: require("../../../assets/supplierwater/water6.jpg"),
  },
];

const SupplierDetailsScreen = () => {
  return (
    <SafeAreaView
      style={{ height: "100%", width: "100%", backgroundColor: "#fff" }}
    >
      <SuppliersDetailsHeader />
      <ScrollView>
        <ContactSupplier />
        <View
          style={{
            width: "100%",
            height: 7,
            backgroundColor: "rgba(0, 0, 0, 0.02)",
            borderRadius: 5,
            marginTop: 10,
          }}
        />
        <Text
          style={{
            fontFamily: "Manrope_600SemiBold",
            fontSize: 14,
            padding: 10,
          }}
        >
          Products
        </Text>
        <View
          style={{
            width: "100%",
            flex: 1,
            justifyContent: "center",
            marginBottom: 50,
          }}
        >
          <FlatList
            numColumns={2}
            data={products}
            scrollEnabled={true}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <SupplierCatalogue product={item} index={index} />
            )}
          />
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SupplierDetailsScreen;

const styles = StyleSheet.create({});
