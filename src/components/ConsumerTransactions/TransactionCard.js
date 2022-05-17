import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import TransactionItems from "./TransactionItems";
import TransactionItem from "./TransactionItem";

const TransactionCard = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={TransactionItems}
        renderItem={({ item }) => <TransactionItem menu={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
      />
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    top: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
