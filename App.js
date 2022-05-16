import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Supplier from "./src/screens/supplier-screens/Supplier";
import ConsumerHeader from "./src/components/ConsumerHeader/ConsumerHeader";
import BottomNavigation from "./src/navigators/consumer-navigators/ConsumerBottomNavigation/BottomNavigation";
import ConsumptionLevelScreen from "./src/screens/consumer-screens/ConsumerDetails/ConsumptionLevelScreen";
import SearchScreen from "./src/screens/consumer-screens/ConsumerDetails/SearchScreen";
import { useFonts, Manrope } from "@expo-google-fonts/inter";
import { AppLoading } from "expo";

export default function App() {
  let [fontsLoaded] = useFonts({
    Manrope,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* <Supplier /> */}

        {/* <BottomNavigation /> */}
        {/* <ConsumptionLevelScreen /> */}
        <SearchScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Manrope",
  },
});
