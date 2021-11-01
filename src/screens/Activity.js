import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Activity(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollAreaStack}>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.backgroundStack}>
              <ImageBackground
                source={require("../assets/images/adi-goldstein-7BpeiA0bhxs-unsplash.jpg")}
                resizeMode="contain"
                style={styles.background}
                imageStyle={styles.background_imageStyle}
              >
                <View style={styles.stepsSection}>
                  <View style={styles.rectSteps}>
                    <View style={styles.stepsiconRow}>
                      <MaterialIconsIcon
                        name="directions-walk"
                        style={styles.stepsicon}
                      ></MaterialIconsIcon>
                      <Text style={styles.stepCount}>Step Count:</Text>
                      <TextInput
                        placeholder="e.g. 10,000"
                        keyboardType="numeric"
                        style={styles.enterSteps}
                      ></TextInput>
                    </View>
                  </View>
                </View>
              </ImageBackground>
              <TextInput
                placeholder="Activity"
                placeholderTextColor="rgba(0,0,0,1)"
                style={styles.activityTitle}
              ></TextInput>
              <Text style={styles.weightliftingLabel}>Weightlifting:</Text>
              <MaterialCommunityIconsIcon
                name="weight"
                style={styles.iconWeight}
              ></MaterialCommunityIconsIcon>
              <Text style={styles.cardio2}>Cardio:</Text>
              <MaterialCommunityIconsIcon
                name="bike"
                style={styles.cardioicon}
              ></MaterialCommunityIconsIcon>
              <View style={styles.weightliftingSection}>
                <View style={styles.rectWeight}>
                  <View style={styles.workout2Row}>
                    <Text style={styles.workout2}>Workout:</Text>
                    <TextInput
                      placeholder="Workout"
                      style={styles.enterWorkout}
                    ></TextInput>
                  </View>
                  <View style={styles.sets2Row}>
                    <Text style={styles.sets2}>Sets:</Text>
                    <TextInput
                      placeholder="# of Sets"
                      keyboardType="numeric"
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
                  <Text style={styles.addWorkout2}>Add Workout</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteWorkoutButton}>
                  <Text style={styles.deleteWorkout}>Delete Workout</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cardioSection}>
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
                      placeholder="e.g. 30 min"
                      style={styles.enterDuration}
                    ></TextInput>
                  </View>
                  <View style={styles.distanceRow}>
                    <Text style={styles.distance}>Distance:</Text>
                    <TextInput
                      placeholder="e.g. 10km/10mi"
                      style={styles.enterDistance}
                    ></TextInput>
                  </View>
                </View>
                <TouchableOpacity style={styles.addCardioButton}>
                  <Text style={styles.addCardioText}>Add Cardio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteCardioButton}>
                  <Text style={styles.deleteCardio}>Delete Cardio</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.bottombar}>
          <View style={styles.stackFiller}></View>
          <View style={styles.groupStack}>
            <View style={styles.group}>
              <MaterialCommunityIconsIcon
                name="food-apple"
                style={styles.dieticon}
              ></MaterialCommunityIconsIcon>
              <MaterialIconsIcon
                name="directions-bike"
                style={styles.bikeicon}
              ></MaterialIconsIcon>
              <EntypoIcon
                name="area-graph"
                style={styles.summaryicon}
              ></EntypoIcon>
              <IoniconsIcon
                name="md-settings"
                style={styles.settingicon}
              ></IoniconsIcon>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("WelcomePage")}
              style={styles.summarybutton}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Settings")}
              style={styles.settingbutton}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Diet")}
              style={styles.dietbutton}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Activity")}
              style={styles.bikebutton}
            ></TouchableOpacity>
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
    position: "absolute",
    backgroundColor: "rgba(230, 230, 230,1)",
    top: 0,
    left: 0,
    right: 0,
    height: 740
  },
  scrollArea_contentContainerStyle: {
    height: 1700
  },
  background: {
    top: 0,
    left: 0,
    width: 1874,
    height: 2229,
    position: "absolute"
  },
  background_imageStyle: {
    opacity: 0.6
  },
  stepsSection: {
    height: 50,
    width: 254,
    marginTop: 1139,
    marginLeft: 782
  },
  rectSteps: {
    width: 254,
    height: 50,
    backgroundColor: "rgba(174,249,173,1)",
    borderWidth: 3,
    borderColor: "rgba(22,94,21,1)",
    borderRadius: 14,
    flexDirection: "row"
  },
  stepsicon: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 30,
    width: 30
  },
  stepCount: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    width: 84,
    height: 19,
    marginTop: 6
  },
  enterSteps: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 16,
    width: 98,
    marginLeft: 15,
    marginTop: 7
  },
  stepsiconRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginLeft: 9,
    marginTop: 10
  },
  activityTitle: {
    top: 579,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    width: 140,
    height: 40,
    fontSize: 40,
    left: 839,
    textAlign: "center"
  },
  weightliftingLabel: {
    top: 657,
    left: 809,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    width: 128,
    height: 27
  },
  iconWeight: {
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    left: 776,
    top: 651
  },
  cardio2: {
    top: 889,
    left: 809,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    width: 77,
    height: 25
  },
  cardioicon: {
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    width: 30,
    height: 33,
    left: 776,
    top: 881
  },
  weightliftingSection: {
    top: 687,
    width: 254,
    height: 102,
    position: "absolute",
    left: 782
  },
  rectWeight: {
    height: 102,
    backgroundColor: "rgba(173,229,249,1)",
    borderWidth: 3,
    borderColor: "rgba(21,42,94,1)",
    borderRadius: 14
  },
  workout2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 56,
    height: 17
  },
  enterWorkout: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 16,
    width: 80,
    marginLeft: 50
  },
  workout2Row: {
    height: 17,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 21,
    marginRight: 47
  },
  sets2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 31,
    height: 17
  },
  enterSets: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 16,
    width: 80,
    marginLeft: 75
  },
  sets2Row: {
    height: 17,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 21,
    marginRight: 47
  },
  repsLabel: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 35,
    height: 17
  },
  enterReps: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 16,
    width: 80,
    marginLeft: 71
  },
  repsLabelRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 21,
    marginRight: 47
  },
  addWorkoutButton: {
    width: 227,
    height: 31,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "rgba(22,190,60,1)",
    borderRadius: 16,
    marginTop: 8,
    alignSelf: "center"
  },
  addWorkout2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    width: 75,
    height: 14,
    textAlign: "center",
    marginTop: 9,
    marginLeft: 76
  },
  deleteWorkoutButton: {
    width: 227,
    height: 31,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "rgba(208,2,27,1)",
    borderRadius: 16,
    marginTop: 3,
    marginLeft: 13
  },
  deleteWorkout: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    width: 85,
    height: 14,
    textAlign: "center",
    marginTop: 9,
    marginLeft: 71
  },
  cardioSection: {
    top: 919,
    height: 102,
    position: "absolute",
    left: 782,
    width: 254
  },
  rectCardio: {
    width: 254,
    height: 102,
    backgroundColor: "rgba(255,223,224,1)",
    borderWidth: 3,
    borderColor: "rgba(135,26,26,1)",
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
    width: 80,
    marginLeft: 46
  },
  exerciseRow: {
    height: 16,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 21,
    marginRight: 47
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
    width: 80,
    marginLeft: 46
  },
  durationRow: {
    height: 16,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 21,
    marginRight: 47
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
    width: 100,
    marginLeft: 46
  },
  distanceRow: {
    height: 16,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 21,
    marginRight: 27
  },
  addCardioButton: {
    width: 227,
    height: 31,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "rgba(22,190,60,1)",
    borderRadius: 16,
    marginTop: 8,
    alignSelf: "center"
  },
  addCardioText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    width: 63,
    height: 14,
    textAlign: "center",
    marginTop: 9,
    alignSelf: "center"
  },
  deleteCardioButton: {
    width: 227,
    height: 31,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "rgba(208,2,27,1)",
    borderRadius: 16,
    marginTop: 3,
    alignSelf: "center"
  },
  deleteCardio: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    width: 75,
    height: 14,
    textAlign: "center",
    marginTop: 9,
    alignSelf: "center"
  },
  backgroundStack: {
    width: 1874,
    height: 2229,
    marginTop: -529,
    marginLeft: -729
  },
  bottombar: {
    left: 0,
    height: 70,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    bottom: 0,
    right: 0
  },
  stackFiller: {
    flex: 1
  },
  group: {
    left: 0,
    height: 40,
    position: "absolute",
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    bottom: 15
  },
  dieticon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  bikeicon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  summaryicon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  settingicon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  summarybutton: {
    left: 191,
    width: 85,
    height: 70,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0,
    bottom: 0
  },
  settingbutton: {
    left: 276,
    width: 84,
    height: 70,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0,
    bottom: 0
  },
  dietbutton: {
    left: 0,
    width: 96,
    height: 70,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0,
    bottom: 0
  },
  bikebutton: {
    left: 96,
    width: 95,
    height: 70,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0,
    bottom: 0
  },
  groupStack: {
    height: 70
  },
  scrollAreaStack: {
    height: 740
  }
});

export default Activity;
