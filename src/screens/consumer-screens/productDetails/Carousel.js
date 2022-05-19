import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Animated,
  SafeAreaView,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";

const width = Dimensions.get("window").width;
const height = width * 0.45;

const images = [
  require("../../../../assets/image1.jpeg"),
  require("../../../../assets/image2.jpeg"),
  require("../../../../assets/image3.jpeg"),
  require("../../../../assets/image4.jpeg"),
  require("../../../../assets/image5.jpeg"),
];

export default class App extends React.Component {
  render() {
    return (
      <View style={{ width, height }}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          decelerationRate={0}
          snapToInterval={200}
          snapToAlignment={"end"}
          style={{ width, height }}
        >
          {images.map((item, index) => (
            <Image
              key={index}
              source={item}
              style={{ width, height, resizeMode: "contain" }}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
