import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EventsScreen = () => (
  <View style={styles.container}>
    <Text>Events Screen</Text>
  </View>
);

export default EventsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
