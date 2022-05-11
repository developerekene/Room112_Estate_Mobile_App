import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Supplier from "./src/screens/supplier-screens/Supplier";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Supplier /> */}
      <ConsumerHeader />
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
