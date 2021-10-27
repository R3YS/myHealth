import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import CupertinoButtonLight1 from "../components/CupertinoButtonLight1";

function Settings(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <CupertinoButtonLight1
        style={styles.cupertinoButtonLight1}
      ></CupertinoButtonLight1>
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
  },
  cupertinoButtonLight1: {
    height: 44,
    width: 173,
    marginTop: 54,
    marginLeft: 95
  }
});

export default Settings;
