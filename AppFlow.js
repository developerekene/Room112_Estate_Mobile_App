import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Manrope_400Regular,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
  Manrope_300Light,
  Manrope_500Medium,
} from "@expo-google-fonts/manrope";
import { NavigationContainer } from '@react-navigation/native';

import Onboarding from './OnboardingScreen';
import TotalSuppliesMade from "./src/screens/supplier-screens/TotalSuppliesMade/TotalSuppliesMade";

export default function AppFlow() {
  let [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_700Bold,
    Manrope_800ExtraBold,
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
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <SafeAreaProvider style={{ width: "100%", height: "100%" }}>
          <Onboarding />
        </SafeAreaProvider>
      </View>
    </NavigationContainer>
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
