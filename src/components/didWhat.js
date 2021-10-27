import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';


export function saveWorkout() {
    let obj = {
        workoutName:
        workoutReps:
        workoutSets:
    }
    AsyncStorage.setItem('workout', JSON.stringify(obj));
}

displayData = async () => {
    try {
        let workout = await AsyncStorage.getItem('workout');
        let parsed = JSON.parse(user);
        alert(parsed.workoutName);
    }
    catch(error){
        alert(error);
    }
}