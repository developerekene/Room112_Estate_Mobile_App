<<<<<<< HEAD
// import OrganizerApp from "./OrganizerApp";
// import ChangePassword from "./src/screens/consumer-screens/ConsumerDetails/changePassword";
// import BuyNow from "./src/screens/consumer-screens/productDetails/BuyNow";
import { StyleSheet } from "react-native";
//import SuppliersDetailsHeader from "./src/screens/consumer-screens/suppliersdetails/SuppliersDetailsHeader";
import SupplierDetailsScreen from "./src/screens/consumer-screens/suppliersdetails/SupplierDetailsScreen";

//
// export default function App() {
//   return <SupplierDetailsScreen />;

//   //<BuyNow />;

import { StyleSheet } from "react-native";
import AddReminder from "./AddReminder";
import ReminderSent from "./ReminderSent";
import AppFlow from "./AppFlow";

import SupplierAddDetailScreen from "./src/screens/supplier-screens/SupplierAddProduct";
import SupplierAddDetailScreen from "./src/screens/supplier-screens/SupplierAddProduct";
import CustomerDetailModal from "./CustomerDetailModal";
import ConfirmEmail from "./src/screens/ConfirmEmail";
import CusConfirmEmail from "./ConsumerConfirmEmail";
// import ConsumerRegisterationScreen from './'
=======
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
>>>>>>> 769c7690d50e0e5a64ee322d39a139bd882dac63

export default function App() {
  return (
    <>
      <SupplierAddDetailScreen />
      {/* <AppFlow /> */}

      {/* <ConsumerRegisterationScreen/> */}
      {/* <SupplierAddDetailScreen/> */}
      <AppFlow />
      {/* <CusConfirmEmail/> */}

      {/* <AddReminder/> */}
    </>
  );
}
//<ChangePassword />;
//import { StyleSheet } from "react-native";
import AddReminder from "./AddReminder";
import ReminderSent from "./ReminderSent";
import AppFlow from "./AppFlow";
import Header from "./src/screens/consumer-screens/suppliersdetails/SuppliersDetailsHeader";

// export default function OrganizerApp() {
//   return (
//     <>
//       <AppFlow />
//       {/* <AddReminder/> */}
//     </>
//   );
// }

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
