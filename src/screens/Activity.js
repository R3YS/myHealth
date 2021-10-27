import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import Workout from "../components/Workout";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

function Activity(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        ></ScrollView>
      </View>
      <Text style={styles.text}>Activity</Text>
      <Workout style={styles.weightliftingBlock}></Workout>
      <View style={styles.weightLiftingStack}>
        <Text style={styles.weightLifting}>WeightLifting</Text>
        <MaterialCommunityIconsIcon
          name="weight"
          style={styles.weighticon}
        ></MaterialCommunityIconsIcon>
      </View>
      <View style={styles.rect}></View>
      <TouchableOpacity style={styles.button4}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.addWorkout}>Add Workout</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.addCardioButtonStack}>
        <View style={styles.addCardioButton}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.addCardio2}>Add Cardio</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.deleteCardioButton}>
          <TouchableOpacity style={styles.button3}>
            <Text style={styles.deleteCardio}>Delete Cardio</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.cardio}>Cardio</Text>
      <IoniconsIcon name="md-bicycle" style={styles.cardioicon}></IoniconsIcon>
      <View style={styles.cardioBlock}>
        <View style={styles.rect}>
          <View style={styles.workout2Row}>
            <Text style={styles.workout2}>Workout:</Text>
            <TextInput
              placeholder="Workout #1"
              style={styles.workoutTextBox}
            ></TextInput>
          </View>
          <View style={styles.durationRow}>
            <Text style={styles.duration}>Duration:</Text>
            <TextInput
              placeholder="00:00:00"
              style={styles.durationTextBox}
            ></TextInput>
          </View>
          <View style={styles.distanceRow}>
            <Text style={styles.distance}>Distance:</Text>
            <TextInput
              placeholder="10 km/10 mi "
              style={styles.distanceTextBox}
            ></TextInput>
          </View>
        </View>
      </View>
      <View style={styles.deleteWorkoutButton}>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.deleteWorkout2}>Delete Workout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.stepsStack}>
        <Text style={styles.steps}>Steps</Text>
        <MaterialIconsIcon
          name="directions-walk"
          style={styles.stepsicon}
        ></MaterialIconsIcon>
      </View>
      <View style={styles.stepsBlock}>
        <View style={styles.rect2}>
          <View style={styles.totalStepCountRow}>
            <Text style={styles.totalStepCount}>Total Step Count:</Text>
            <Text style={styles.xxxxxx}>xxxxxx</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollArea: {
    top: 0,
    left: 0,
    width: 360,
    height: 0,
    position: "absolute",
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  scrollArea_contentContainerStyle: {
    height: 0,
    width: 360,
    flexDirection: "row"
  },
  text: {
    top: 57,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 36,
    height: 42,
    width: 141,
    textAlign: "center",
    left: 109
  },
  weightliftingBlock: {
    height: 105,
    width: 286,
    position: "absolute",
    top: 150,
    left: 23
  },
  weightLifting: {
    top: 10,
    left: 30,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18
  },
  weighticon: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 33
  },
  weightLiftingStack: {
    top: 112,
    left: 41,
    width: 139,
    height: 36,
    position: "absolute"
  },
  rect: {
    width: 286,
    height: 105,
    backgroundColor: "rgba(253,212,212,1)",
    borderWidth: 3,
    borderColor: "rgba(151,27,27,1)",
    borderRadius: 15,
    alignSelf: "center"
  },
  button4: {
    top: 256,
    left: 21,
    width: 286,
    height: 40,
    position: "absolute"
  },
  button: {
    width: 286,
    height: 40,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#000000"
  },
  addWorkout: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 96
  },
  addCardioButton: {
    top: 0,
    left: 1,
    width: 286,
    height: 46,
    position: "absolute"
  },
  button1: {
    width: 286,
    height: 40,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#000000"
  },
  addCardio2: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    width: 93,
    height: 19,
    marginTop: 10,
    marginLeft: 96
  },
  deleteCardioButton: {
    top: 43,
    left: 0,
    width: 286,
    height: 40,
    position: "absolute"
  },
  button3: {
    width: 286,
    height: 40,
    backgroundColor: "rgba(248,116,116,1)",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#000000"
  },
  deleteCardio: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    width: 110,
    height: 19,
    marginTop: 10,
    marginLeft: 88
  },
  addCardioButtonStack: {
    top: 501,
    left: 23,
    width: 287,
    height: 83,
    position: "absolute"
  },
  cardio: {
    top: 361,
    left: 58,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18
  },
  cardioicon: {
    top: 348,
    left: 23,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 36
  },
  cardioBlock: {
    top: 391,
    left: 22,
    width: 286,
    height: 105,
    position: "absolute",
    justifyContent: "center"
  },
  workout2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    height: 19,
    width: 64,
    marginTop: 3
  },
  workoutTextBox: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 25,
    width: 75,
    fontSize: 15,
    marginLeft: 28
  },
  workout2Row: {
    height: 25,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 22,
    marginRight: 97
  },
  duration: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    height: 19,
    width: 65,
    marginTop: 2
  },
  durationTextBox: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 25,
    width: 75,
    lineHeight: 14,
    fontSize: 15,
    marginLeft: 27
  },
  durationRow: {
    height: 25,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 22,
    marginRight: 97
  },
  distance: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    height: 19,
    width: 70,
    marginTop: 2
  },
  distanceTextBox: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 25,
    width: 100,
    fontSize: 15,
    marginLeft: 22
  },
  distanceRow: {
    height: 25,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 22,
    marginRight: 72
  },
  deleteWorkoutButton: {
    top: 302,
    left: 20,
    width: 286,
    height: 40,
    position: "absolute"
  },
  button2: {
    width: 286,
    height: 40,
    backgroundColor: "rgba(248,116,116,1)",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#000000"
  },
  deleteWorkout2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    width: 110,
    height: 19,
    marginTop: 10,
    marginLeft: 88
  },
  steps: {
    top: 14,
    left: 32,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18
  },
  stepsicon: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 33
  },
  stepsStack: {
    top: 596,
    left: 16,
    width: 79,
    height: 36,
    position: "absolute"
  },
  stepsBlock: {
    top: 633,
    left: 19,
    width: 286,
    height: 49,
    position: "absolute"
  },
  rect2: {
    width: 286,
    height: 49,
    backgroundColor: "rgba(143,243,176,1)",
    borderWidth: 3,
    borderColor: "rgba(11,85,25,1)",
    borderRadius: 15,
    flexDirection: "row"
  },
  totalStepCount: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16
  },
  xxxxxx: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    marginLeft: 40,
    marginTop: 1
  },
  totalStepCountRow: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 57,
    marginLeft: 22,
    marginTop: 16
  }
});

export default Activity;
