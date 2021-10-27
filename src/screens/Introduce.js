import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

function Introduce(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <Text style={styles.introduceYourself}>Introduce Yourself</Text>
        <TextInput
          placeholder="What's your name?"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          placeholder="How much do you currently weigh?"
          style={styles.textInput2}
        ></TextInput>
        <TextInput
          placeholder="How tall are you?"
          style={styles.textInput3}
        ></TextInput>
        <TextInput
          placeholder="When is your birthday? (optional)"
          style={styles.textInput4}
        ></TextInput>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("WelcomePage")}
          style={styles.button}
        >
          <Text style={styles.next}>Next</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15
  },
  image: {
    width: 744,
    height: 1162,
    marginTop: -67,
    marginLeft: -87
  },
  image_imageStyle: {},
  introduceYourself: {
    fontFamily: "roboto-500",
    color: "#121212",
    fontSize: 36,
    width: 370,
    textAlign: "center",
    height: 52,
    marginTop: 145,
    marginLeft: 82
  },
  textInput: {
    fontFamily: "roboto-500",
    color: "#121212",
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderWidth: 3,
    borderColor: "#000000",
    borderStyle: "solid",
    borderRadius: 15,
    height: 72,
    width: 322,
    marginTop: 21,
    marginLeft: 106
  },
  textInput2: {
    fontFamily: "roboto-500",
    color: "#121212",
    textAlign: "center",
    fontSize: 16,
    width: 322,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 15,
    height: 72,
    marginTop: 25,
    marginLeft: 106
  },
  textInput3: {
    fontFamily: "roboto-500",
    color: "#121212",
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 15,
    height: 72,
    width: 322,
    marginTop: 19,
    marginLeft: 106
  },
  textInput4: {
    fontFamily: "roboto-500",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    fontSize: 16,
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 15,
    height: 72,
    width: 322,
    backgroundColor: "rgba(255,255,255,0.7)",
    marginTop: 16,
    marginLeft: 109
  },
  button: {
    backgroundColor: "rgba(0,0,0,0.7)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.7)",
    borderRadius: 15,
    width: 322,
    height: 72,
    marginTop: 14,
    marginLeft: 106
  },
  next: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    height: 27,
    width: 41,
    marginTop: 23,
    marginLeft: 143
  }
});

export default Introduce;
