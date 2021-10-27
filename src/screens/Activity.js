import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

function Activity(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.titlesAndIcons}>
            <View style={styles.weightliftingTextRow}>
              <TextInput
                placeholder="Weightlifting:"
                placeholderTextColor="rgba(0,0,0,1)"
                style={styles.weightliftingText}
              ></TextInput>
              <MaterialCommunityIconsIcon
                name="weight"
                style={styles.iconWeight}
              ></MaterialCommunityIconsIcon>
            </View>
            <View style={styles.cardioTextRow}>
              <Text style={styles.cardioText}>Cardio:</Text>
              <MaterialIconsIcon
                name="directions-bike"
                style={styles.iconCardio}
              ></MaterialIconsIcon>
            </View>
          </View>
          <View style={styles.workoutSection}>
            <View style={styles.rectWorkoutStack}>
              <View style={styles.rectWorkout}>
                <View style={styles.workoutLabelRow}>
                  <Text style={styles.workoutLabel}>Workout:</Text>
                  <TextInput
                    placeholder="Workout"
                    style={styles.enterWorkout}
                  ></TextInput>
                </View>
                <View style={styles.setsLabelRow}>
                  <Text style={styles.setsLabel}>Sets:</Text>
                  <TextInput
                    placeholder="# of Sets"
                    keyboardType="numeric"
                    defaultValue=""
                    style={styles.enterSets}
                  ></TextInput>
                </View>
                <View style={styles.repsLabelRow}>
                  <Text style={styles.repsLabel}>Reps:</Text>
                  <TextInput
                    placeholder="# of Reps"
                    keyboardType="numeric"
                    style={styles.enterReps}
                  ></TextInput>
                </View>
              </View>
              <TouchableOpacity style={styles.addWorkoutButton}>
                <Text style={styles.addWorkoutText}>Add Workout</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.deleteWorkoutButton}>
              <Text style={styles.deleteWorkoutText}>Delete Workout</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardioSection}>
            <View style={styles.rectCardioStack}>
              <View style={styles.rectCardio}>
                <View style={styles.exerciseRow}>
                  <Text style={styles.exercise}>Exercise:</Text>
                  <TextInput
                    placeholder="Exercise"
                    style={styles.enterExercise}
                  ></TextInput>
                </View>
                <View style={styles.durationRow}>
                  <Text style={styles.duration}>Duration:</Text>
                  <TextInput
                    placeholder="00:00:00"
                    keyboardType="numeric"
                    defaultValue=""
                    style={styles.enterDuration}
                  ></TextInput>
                </View>
                <View style={styles.distanceRow}>
                  <Text style={styles.distance}>Distance:</Text>
                  <TextInput
                    placeholder="e.g. 10mi/10km"
                    keyboardType="numeric"
                    style={styles.enterDistance}
                  ></TextInput>
                </View>
              </View>
              <TouchableOpacity style={styles.addCardioButton}>
                <Text style={styles.addCardioText}>Add Cardio</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.deleteCardioButton}>
              <Text style={styles.deleteCardioText}>Delete Cardio</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 0
  },
  scrollArea: {
    width: 360,
    height: 0,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  scrollArea_contentContainerStyle: {
    height: 310,
    width: 360,
    flexDirection: "row"
  },
  titlesAndIcons: {
    width: 100,
    height: 20,
    marginLeft: 120,
    marginTop: 20
  },
  weightliftingText: {
    fontFamily: "roboto-500",
    color: "#121212",
    width: 100,
    height: 20,
    fontSize: 16,
    marginLeft: 25,
    marginTop: 5
  },
  iconWeight: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    width: 25,
    height: 27,
    marginLeft: -125
  },
  weightliftingTextRow: {
    height: 27,
    flexDirection: "row",
    marginTop: -5,
    marginLeft: -25
  },
  cardioText: {
    fontFamily: "roboto-500",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    height: 19,
    width: 51,
    marginLeft: 30,
    marginTop: 10
  },
  iconCardio: {
    color: "rgba(0,0,0,1)",
    fontSize: 28,
    width: 28,
    height: 28,
    marginLeft: -81
  },
  cardioTextRow: {
    height: 29,
    flexDirection: "row",
    marginTop: 158,
    marginLeft: -25,
    marginRight: 44
  },
  workoutSection: {
    width: 185,
    height: 80,
    marginTop: 40,
    marginLeft: 88
  },
  rectWorkout: {
    top: 0,
    left: 0,
    width: 185,
    height: 80,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 14
  },
  workoutLabel: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 60,
    height: 16
  },
  enterWorkout: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 16,
    width: 100,
    marginLeft: 1
  },
  workoutLabelRow: {
    height: 16,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 15,
    marginRight: 9
  },
  setsLabel: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 60,
    height: 16,
    marginTop: 1
  },
  enterSets: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 16,
    width: 60
  },
  setsLabelRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 15,
    marginRight: 50
  },
  repsLabel: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 60,
    height: 16
  },
  enterReps: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 16,
    width: 60,
    marginLeft: 1
  },
  repsLabelRow: {
    height: 16,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 15,
    marginRight: 49
  },
  addWorkoutButton: {
    top: 79,
    width: 180,
    height: 29,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 2,
    borderColor: "rgba(74,186,232,1)",
    borderRadius: 14,
    left: 3
  },
  addWorkoutText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 72,
    height: 16,
    fontSize: 12,
    marginTop: 8,
    marginLeft: 54
  },
  rectWorkoutStack: {
    width: 185,
    height: 108
  },
  deleteWorkoutButton: {
    width: 180,
    height: 29,
    backgroundColor: "#E6E6E6",
    borderWidth: 2,
    borderColor: "rgba(230,70,66,1)",
    borderRadius: 14,
    marginTop: 2,
    marginLeft: 3
  },
  deleteWorkoutText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 85,
    height: 16,
    fontSize: 12,
    marginTop: 8,
    marginLeft: 47
  },
  cardioSection: {
    width: 185,
    height: 80,
    marginTop: 230,
    marginLeft: 88
  },
  rectCardio: {
    top: 0,
    left: 0,
    width: 185,
    height: 80,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 14
  },
  exercise: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 60,
    height: 16
  },
  enterExercise: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 16,
    width: 100,
    fontSize: 12,
    marginTop: 1
  },
  exerciseRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 15,
    marginRight: 10
  },
  duration: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 60,
    height: 16
  },
  enterDuration: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 16,
    width: 60,
    fontSize: 12
  },
  durationRow: {
    height: 16,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 15,
    marginRight: 50
  },
  distance: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 60,
    height: 16
  },
  enterDistance: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 16,
    width: 85,
    fontSize: 12,
    marginTop: 1
  },
  distanceRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 15,
    marginRight: 25
  },
  addCardioButton: {
    top: 79,
    width: 180,
    height: 29,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 2,
    borderColor: "rgba(74,186,232,1)",
    borderRadius: 14,
    left: 3
  },
  addCardioText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 61,
    height: 16,
    fontSize: 12,
    marginTop: 7,
    marginLeft: 59
  },
  rectCardioStack: {
    width: 185,
    height: 108
  },
  deleteCardioButton: {
    width: 180,
    height: 29,
    backgroundColor: "#E6E6E6",
    borderWidth: 2,
    borderColor: "rgba(230,70,66,1)",
    borderRadius: 14,
    marginTop: 2,
    marginLeft: 3
  },
  deleteCardioText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 74,
    height: 16,
    fontSize: 12,
    marginTop: 7,
    marginLeft: 53
  }
});

export default Activity;
