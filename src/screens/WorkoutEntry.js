import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function WorkoutEntry(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}></Text>
      <View style={styles.rect}></View>
      <View style={styles.rect2}></View>
      <View style={styles.rect3}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 39,
    marginLeft: 77
  },
  rect: {
    width: 278,
    height: 64,
    backgroundColor: "#E6E6E6",
    marginTop: 7,
    marginLeft: 45
  },
  rect2: {
    width: 278,
    height: 71,
    backgroundColor: "#E6E6E6",
    marginTop: 25,
    marginLeft: 45
  },
  rect3: {
    width: 278,
    height: 68,
    backgroundColor: "#E6E6E6",
    marginTop: 23,
    marginLeft: 45
  }
});

export default WorkoutEntry;
