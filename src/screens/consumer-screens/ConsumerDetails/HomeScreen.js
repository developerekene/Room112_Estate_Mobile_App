import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import HomePageHeader from "../../../components/ConsumerHeader/HomePageHeader";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import Product from "../../../components/ConsumerHeader/Product";

import { ScrollView } from "react-native-virtualized-view";
import api from "../../../api-config/api_config";


const HomeScreen = ({ stackScreensNavigation: navigation }) => {

  const [_products, _updateProducts] = React.useState([]);

  function getProducts() {
    api.get("/api/Company/GetAllCompaniesWithFeaturedProduct")
    .then(response => {
      _updateProducts([...response.data.pageItems])
    })
    .catch(error => {
      console.log(error);
    })
  }

  React.useEffect(function() {
    getProducts()
  }, []);

  return (
    <SafeAreaProvider>
      <View style={{ height: "100%", width: "100%" }}>
        <HomePageHeader navigation={navigation} />
        <View style={{ width: "100%", height: "100%" }}>
          <ScrollView style={{ padding: 20 }}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("ConsumptionLevelScreen")}
            >
              <View style={styles.containerBar}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      backgroundColor: "#FFBE0B1A",
                      width: 42,
                      height: 42,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 21,
                    }}
                  >
                    <AntDesign
                      name="barschart"
                      style={styles.icon}
                      size={24}
                      color="#FFBE0B"
                    />
                  </View>
                  <View style={{ marginLeft: 10 }}>
                    <Text style={styles.title}>
                      Your consumption level is 65.89%
                    </Text>
                    <Text style={styles.subTitle}>Today 02 Apr 2022</Text>
                  </View>
                </View>
                <Fontisto
                  name="angle-right"
                  style={styles.icon}
                  size={14}
                  color="#000"
                />
              </View>
            </TouchableWithoutFeedback>

            <View style={styles.navBelow}>
              <Text style={styles.navBelowNotoutlined}>Suppliers</Text>
              <Text style={styles.navBelowOutlined}>See all</Text>
            </View>

            <View style={{ width: "100%", flex: 1, justifyContent: "center" }}>
              <FlatList
                numColumns={2}
                data={_products}
                scrollEnabled={true}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <Product
                    item={item}
                    index={index}
                    navigation={navigation}
                  />
                )}
              />
              <Image
                style={styles.frame}
                source={require("../../../../assets/HomePageImg/frame.png")}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#E5E5E5",
    height: "100%",
    width: "100%",
  },
  containerBar: {
    width: "100%",
    height: 80,
    backgroundColor: "rgba(255, 190, 11, 0.1)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  navBelow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingTop: 5,
    // flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontFamily: "Manrope_600SemiBold",
    textAlign: "left",
  },
  subTitle: {
    fontSize: 12,
    fontFamily: "Manrope_400Regular",
    textAlign: "left",
  },
  navBelowNotoutlined: {
    fontSize: 14,
    fontFamily: "Manrope_700Bold",
    color: "#21334F",
  },
  navBelowOutlined: {
    color: " rgba(20, 125, 245, 1)",
    fontSize: 14,
    fontFamily: "Manrope_600SemiBold",
  },
  gridContainer: {
    width: "100%",
    backgroundColor: "black",
    flex: 1,
  },
  frame: {
    // position: "absolute",
    // bottom: 0,
    width: "100%",
    marginVertical: 30,
    marginBottom: 150,
    resizeMode: "contain",
  },
});
