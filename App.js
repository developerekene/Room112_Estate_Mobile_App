import { StyleSheet } from 'react-native';
import AddReminder from './AddReminder';
import ReminderSent from './ReminderSent';
import AppFlow from "./AppFlow";
import SupplierAddDetailScreen from './src/screens/supplier-screens/SupplierAddProduct';
import CustomerDetailModal from './CustomerDetailModal';
import ConfirmEmail from './src/screens/ConfirmEmail';
import CusConfirmEmail from './ConsumerConfirmEmail';
// import ConsumerRegisterationScreen from './'

export default function App() {
  return (
    <>
    {/* <ConsumerRegisterationScreen/> */}
    {/* <SupplierAddDetailScreen/> */}
      <AppFlow />
      {/* <CusConfirmEmail/> */}
      {/* <AddReminder/> */}
    </>
  );
}

// const styles = StyleSheet.create({
//   screenTitle: {
//     paddingTop: 20,
//     paddingBottom: 20,
//     fontSize: 24,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },
// });
