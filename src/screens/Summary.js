import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Summary(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Summary</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 36,
    height: 42,
    width: 165,
    textAlign: "center",
    marginTop: 72,
    marginLeft: 77
  }
});

export default Summary;
