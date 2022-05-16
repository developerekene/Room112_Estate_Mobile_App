import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import ConsumerHeader from "../../../components/ConsumerHeader/ConsumerHeader";
import { Ionicons } from "@expo/vector-icons";
import TransactionCard from "../../../components/ConsumerTransactions/TransactionCard";

const TransactionsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ConsumerHeader title="Transaction History" />
        <Pressable style={styles.options}>
          <Ionicons name="ellipsis-vertical-outline" size={24} color="black" />
        </Pressable>
      </View>

      <TransactionCard />
    </View>
  );
};

export default TransactionsScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "lightgrey",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    width: "100%",
  },
  options: {
    paddingTop: 5,
  },
});
