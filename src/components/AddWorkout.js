import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function AddWorkout(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Add Workout</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 286,
    height: 40,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#000000"
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 96
  }
});

export default AddWorkout;
