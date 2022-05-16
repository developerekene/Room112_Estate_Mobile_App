import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Supplier from "./src/screens/supplier-screens/Supplier";
import ConsumerHeader from "./src/components/ConsumerHeader/ConsumerHeader";
import BottomNavigation from "./src/navigators/consumer-navigators/ConsumerBottomNavigation/BottomNavigation";
import ConsumptionLevelScreen from "./src/screens/consumer-screens/ConsumerDetails/ConsumptionLevelScreen";
import SearchScreen from "./src/screens/consumer-screens/ConsumerDetails/SearchScreen";
import {
  Manrope_200ExtraLight,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
} from "@expo-google-fonts/manrope";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
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
    fontFamily: "Manrope_600SemiBold",
  },
});
