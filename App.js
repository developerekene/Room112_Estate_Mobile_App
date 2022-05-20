import { StyleSheet } from 'react-native';
import SprintOneFlowOneApp from "./SprintOneFlowOneApp";

export default function OrganizerApp() {
  return (
    <SprintOneFlowOneApp />
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
