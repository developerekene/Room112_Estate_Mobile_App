//import { StyleSheet, View, Text, Button } from "react-native";
import AppButton from "./src/components/Button";
import Colors from "./src/components/Colors";
import DivButton from "./src/components/DivButton";
import ListItemSupplierProfile from "./src/components/ListItemSupplierProfile";
import SupplierMyProfileScreen from "./src/screens/supplier-screens/SupplierMyProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
//import Supplier from "./src/screens/supplier-screens/Supplier";
var count = 0;
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import TotalSupplyMadeActivityOverview from "./src/screens/TotalSupplyMadeActivityOverview";
import SupplierHomePageScreen from "./src/screens/supplier-screens/SupplierHomePageScreen";
import SupplierProfileDetailScreen from "./src/screens/supplier-screens/SupplierProfileDetailScreen";
import SupplierTopBarNavigation from "./src/navigators/supplier-navigators/SupplierTopTab/SupplierTopBarNavigation";
import MyTabs from "./src/navigators/supplier-navigators/SupplierTopTab/SupplierTopBarNavigation";

export default function App() {
  return <SupplierProfileDetailScreen></SupplierProfileDetailScreen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#0268dc",
    //alignItems: "center",
    //justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  toobarSection: {
    padding: 10,
    width: "100%",
    height: 120,
    backgroundColor: "#147df5",
  },
  alermPart: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: Colors.white,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 16,
    fontWeight: "400",
  },
  searchbar: {
    height: 48,
    width: "100%",
    backgroundColor: Colors.white,
    flexDirection: "row",
    padding: 5,
    marginTop: 17,
    alignItems: "center",
  },
  searchIcon: {
    fontSize: 24,
    color: Colors.gray,
    marginLeft: 20,
  },
  innertextinputstyle: {
    fontSize: 18,
    marginLeft: 15,
  },
});
