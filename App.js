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
