import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppFlow from './AppFlow';

export default function App() {
  return (
    <>
      <AppFlow />
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
