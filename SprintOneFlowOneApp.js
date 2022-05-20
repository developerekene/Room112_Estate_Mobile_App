import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Manrope_400Regular,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_300Light,
  Manrope_500Medium,
} from "@expo-google-fonts/manrope";

import Supplier from "./src/screens/supplier-screens/Supplier";
import Customer from "./src/screens/supplier-screens/Customer";
import FavouriteCustomers from "./src/screens/supplier-screens/FavouriteCustomers";
import TotalSupplyMadeActivityOverview from "./src/screens/TotalSupplyMadeActivityOverview";
import RegisterScreen from "./RegisterScreen";

export default function OrganizerApp() {
  let [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_700Bold,
    Manrope_300Light,
    Manrope_600SemiBold,
    Manrope_500Medium,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaProvider style={{ width: "100%", height: "100%" }}>
        <RegisterScreen />
        {/* <Supplier /> */}
        {/* <Customer /> */}
        {/* <FavouriteCustomers /> */}
        {/* <TotalSupplyMadeActivityOverview /> */}
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
