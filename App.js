import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppFlow from "./AppFlow";
import Login from "./Login";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import CreateNewPasswordScreen from "./src/screens/CreateNewPasswordScreen";
import ForgotPassword from "./src/screens/ForgotPasswordScreen/ForgotPasswordScreen";
import SupplierDetailsScreen from "./src/screens/consumer-screens/suppliersdetails/SupplierDetailsScreen";

export default function App() {
  return (
    <>
      <SupplierDetailsScreen />
    </>
  );
}

const styles = StyleSheet.create({
  screenTitle: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 24,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
