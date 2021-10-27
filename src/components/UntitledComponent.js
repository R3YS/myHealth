import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function UntitledComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.iconFiller}></View>
      <Icon name="app-store" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  iconFiller: {
    flex: 1
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  }
});

export default UntitledComponent;
