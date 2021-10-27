import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Diet(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Diet</Text>
      <View style={styles.snacksOthersColumnRow}>
        <View style={styles.snacksOthersColumn}>
          <Text style={styles.snacksOthers}>Snacks/Others:</Text>
          <TextInput
            placeholder="Calorie Count"
            style={styles.textInput1}
          ></TextInput>
        </View>
        <View style={styles.icon1Stack}>
          <EntypoIcon name="check" style={styles.icon1}></EntypoIcon>
          <TouchableOpacity style={styles.button1}></TouchableOpacity>
        </View>
      </View>
      <View style={styles.textInput3ColumnRow}>
        <View style={styles.textInput3Column}>
          <TextInput
            placeholder="Calorie Count"
            style={styles.textInput3}
          ></TextInput>
          <Text style={styles.dinner}>Dinner:</Text>
          <TextInput
            placeholder="Calorie Count"
            style={styles.textInput2}
          ></TextInput>
        </View>
        <View style={styles.icon3StackColumn}>
          <View style={styles.icon3Stack}>
            <EntypoIcon name="check" style={styles.icon3}></EntypoIcon>
            <TouchableOpacity style={styles.button3}></TouchableOpacity>
          </View>
          <View style={styles.icon2Stack}>
            <EntypoIcon name="check" style={styles.icon2}></EntypoIcon>
            <TouchableOpacity style={styles.button2}></TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.textInput4StackStack}>
        <View style={styles.textInput4Stack}>
          <TextInput
            placeholder="Calorie Count"
            style={styles.textInput4}
          ></TextInput>
          <TouchableOpacity style={styles.button}></TouchableOpacity>
        </View>
        <EntypoIcon name="check" style={styles.icon}></EntypoIcon>
        <Text style={styles.breakfast}>Breakfast:</Text>
      </View>
      <Text style={styles.loremIpsum}>What did you eat today?</Text>
      <Text style={styles.loremIpsum1}>Total Calorie Intake: xxx</Text>
      <Text style={styles.loremIpsum2}>Percent Daily Normal: xx%</Text>
      <Text style={styles.lunch}>Lunch:</Text>
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
    textAlign: "center",
    fontSize: 36,
    height: 42,
    width: 75,
    marginTop: 56,
    marginLeft: 120
  },
  snacksOthers: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginLeft: 3
  },
  textInput1: {
    fontFamily: "roboto-500",
    color: "#121212",
    textAlign: "center",
    fontSize: 16,
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 15,
    width: 235,
    height: 58
  },
  snacksOthersColumn: {
    width: 235,
    marginBottom: 2
  },
  icon1: {
    top: 20,
    left: 0,
    position: "absolute",
    color: "rgba(66,133,48,1)",
    fontSize: 40
  },
  button1: {
    top: 0,
    left: 10,
    width: 55,
    height: 72,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon1Stack: {
    width: 65,
    height: 72,
    marginLeft: 20,
    marginTop: 7
  },
  snacksOthersColumnRow: {
    height: 79,
    flexDirection: "row",
    marginTop: 375,
    marginLeft: 14,
    marginRight: 26
  },
  textInput3: {
    fontFamily: "roboto-500",
    color: "#121212",
    textAlign: "center",
    fontSize: 16,
    width: 235,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 15,
    height: 58
  },
  dinner: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 11,
    marginLeft: 6
  },
  textInput2: {
    fontFamily: "roboto-500",
    color: "#121212",
    width: 235,
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "#fff",
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 15,
    height: 58,
    alignSelf: "flex-end",
    marginTop: 3
  },
  textInput3Column: {
    width: 235,
    marginBottom: 5
  },
  icon3: {
    top: 11,
    left: 9,
    position: "absolute",
    color: "rgba(66,133,48,1)",
    fontSize: 40
  },
  button3: {
    top: 0,
    left: 0,
    width: 55,
    height: 72,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon3Stack: {
    width: 55,
    height: 72
  },
  icon2: {
    top: 18,
    left: 9,
    position: "absolute",
    color: "rgba(66,133,48,1)",
    fontSize: 40
  },
  button2: {
    top: 0,
    left: 0,
    width: 55,
    height: 72,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon2Stack: {
    width: 55,
    height: 72,
    marginTop: 10,
    marginLeft: 6
  },
  icon3StackColumn: {
    width: 61,
    marginLeft: 5
  },
  textInput3ColumnRow: {
    height: 154,
    flexDirection: "row",
    marginTop: -248,
    marginLeft: 17,
    marginRight: 42
  },
  textInput4: {
    top: 14,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-500",
    color: "#121212",
    width: 235,
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 3,
    borderColor: "#000000",
    borderStyle: "solid",
    borderRadius: 15,
    height: 58
  },
  button: {
    top: 0,
    left: 228,
    width: 55,
    height: 72,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  textInput4Stack: {
    top: 10,
    left: 0,
    width: 283,
    height: 72,
    position: "absolute"
  },
  icon: {
    top: 30,
    left: 248,
    position: "absolute",
    color: "rgba(66,133,48,1)",
    fontSize: 40
  },
  breakfast: {
    top: 0,
    left: 2,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16
  },
  textInput4StackStack: {
    width: 288,
    height: 82,
    marginTop: -280,
    marginLeft: 21
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: -132,
    marginLeft: 43
  },
  loremIpsum1: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginTop: 425,
    marginLeft: 22
  },
  loremIpsum2: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginTop: 12,
    marginLeft: 25
  },
  lunch: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: -349,
    marginLeft: 28
  }
});

export default Diet;
