import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

function AddWorkoutInfo(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
    ></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#000000"
  }
});

export default AddWorkoutInfo;
