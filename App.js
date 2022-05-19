import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import InputComponents from "./src/components/InputComponents";
import ButtonComponents from "./src/components/ButtonComponents";
import Container from "./src/components/Container";
import SupplierScreen from "./src/screens/SupplierScreen/SupplierScreen";
import ConsumerScreen from "./src/screens/ConsumerScreen/ConsumerScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen/ForgotPasswordScreen";

export default function App() {
  return (
    <Container>
      <SupplierScreen />
    </Container>
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
