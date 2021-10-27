import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function Workout(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.text2Row}>
          <Text style={styles.text2}>Workout:</Text>
          <TextInput
            placeholder="Workout #1"
            style={styles.textInput}
          ></TextInput>
        </View>
        <View style={styles.setsRow}>
          <Text style={styles.sets}>Sets:</Text>
          <TextInput
            placeholder="# of Sets"
            style={styles.placeholder2}
          ></TextInput>
        </View>
        <View style={styles.repsRow}>
          <Text style={styles.reps}>Reps:</Text>
          <TextInput
            placeholder="# of Reps"
            style={styles.placeholder3}
          ></TextInput>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 286,
    height: 105,
    backgroundColor: "rgba(173,220,247,1)",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "rgba(43,96,159,1)",
    alignSelf: "center"
  },
  text2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 3
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    height: 25,
    width: 125,
    lineHeight: 14,
    fontSize: 15,
    marginLeft: 23
  },
  text2Row: {
    height: 25,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 23,
    marginRight: 51
  },
  sets: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 3
  },
  placeholder2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 25,
    width: 75,
    fontSize: 15,
    marginLeft: 52
  },
  setsRow: {
    height: 25,
    flexDirection: "row",
    marginLeft: 23,
    marginRight: 101
  },
  reps: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 3
  },
  placeholder3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 25,
    width: 75,
    fontSize: 15,
    marginLeft: 48
  },
  repsRow: {
    height: 25,
    flexDirection: "row",
    marginLeft: 23,
    marginRight: 101
  }
});

export default Workout;
