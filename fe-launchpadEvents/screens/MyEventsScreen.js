import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyEventsScreen = () => (
  <View style={styles.container}>
    <Text>My Events Screen</Text>
  </View>
);

export default MyEventsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
