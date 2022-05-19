import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import HomePageHeader from "../../../components/ConsumerHeader/HomePageHeader";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import Product from "../../../components/ConsumerHeader/Product";

const products = [
  {
    company: "Arinzona Water Inc",
    address: "Ikeja, Lagos",
    price: "N900.00",
    quantity: "per/bottle",
    link: "View Store",
    imageUrl: require("../../../../assets/HomePageImg/img1.png"),
    rating: "4.3⭐",
  },
  {
    company: "Arinzona Water Inc",
    address: "Ikeja, Lagos",
    price: "N900.00",
    quantity: "per/bottle",
    link: "View Store",
    imageUrl: require("../../../../assets/HomePageImg/img1.png"),
    rating: "4.3⭐",
  },
  {
    company: "Arinzona Water Inc",
    address: "Ikeja, Lagos",
    price: "N900.00",
    quantity: "per/bottle",
    link: "View Store",
    imageUrl: require("../../../../assets/HomePageImg/img1.png"),
    rating: "4.3⭐",
  },
  {
    company: "Arinzona Water Inc",
    address: "Ikeja, Lagos",
    price: "N900.00",
    quantity: "per/bottle",
    link: "View Store",
    imageUrl: require("../../../../assets/HomePageImg/img1.png"),
    rating: "4.3⭐",
  },
  {
    company: "Arinzona Water Inc",
    address: "Ikeja, Lagos",
    price: "N900.00",
    quantity: "per/bottle",
    link: "View Store",
    imageUrl: require("../../../../assets/HomePageImg/img1.png"),
    rating: "4.3⭐",
  },
  {
    company: "Arinzona Water Inc",
    address: "Ikeja, Lagos",
    price: "N900.00",
    quantity: "per/bottle",
    link: "View Store",
    imageUrl: require("../../../../assets/HomePageImg/img1.png"),
    rating: "4.3⭐",
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ScrollView horizontal={false}>
          <HomePageHeader />
          <View style={styles.containerBar}>
            <AntDesign
              name="barschart"
              style={styles.icon}
              size={24}
              color="#FFBE0B"
            />
            <View>
              <Text style={styles.title}>Your consumption level is 65.89%</Text>
              <Text style={styles.subTitle}>Today 02 Apr 2022</Text>
            </View>
            <Fontisto
              name="angle-right"
              style={styles.icon}
              size={24}
              color="#000"
            />
          </View>
          <View style={styles.navBelow}>
            <Text style={styles.navBelowNotoutlined}>Suppliers</Text>
            <Text style={styles.navBelowOutlined}>See all</Text>
          </View>
          <FlatList
            numColumns={2}
            data={products}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <Product product={item} />}
          />
          <Image
            style={styles.frame}
            source={require("../../../../assets/HomePageImg/frame.png")}
          />
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
    height: "100%",
  },
  containerBar: {
    width: Dimensions.get("window").width - 20,
    height: 100,
    backgroundColor: "rgba(255, 190, 11, 0.1)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    flex: 1,
    // position: "absolute",
    // top: 120,
  },
  navBelow: {
    width: Dimensions.get("window").width - 20,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    padding: 20,
    top: 184,
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
  },
  subTitle: {
    fontSize: 12,
    fontWeight: "normal",
    textAlign: "left",
  },
  navBelowNotoutlined: {
    fontSize: 14,
    fontWeight: "bold",
    color: "rgba(33, 51, 79, 1)",
  },
  navBelowOutlined: {
    color: " rgba(20, 125, 245, 1)",
    fontSize: 14,
    fontWeight: "bold",
  },
  gridContainer: {
    width: "100%",
    backgroundColor: "black",
    flex: 1,
  },
  frame: {
    // position: "absolute",
    // bottom: 0,
    width: 346,
    height: 233,
    resizeMode: "contain",
  },
});
