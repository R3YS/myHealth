import React, { Component } from "react";
import { StyleSheet, View, Switch } from "react-native";

function CupertinoSwitch(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Switch
        value={props.value ? true : false}
        thumbColor="#FFF"
        trackColor={{ true: "#4CD964", false: "#9E9E9E" }}
        style={styles.switch1}
      ></Switch>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  switch1: {
    width: 45,
    height: 22
  }
});

export default CupertinoSwitch;
