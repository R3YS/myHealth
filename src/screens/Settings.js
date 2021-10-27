import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Settings(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
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
    width: 151,
    textAlign: "center",
    marginTop: 73,
    alignSelf: "center"
  }
});

export default Settings;
