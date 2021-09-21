import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.healthBackground}>

        <ImageBackground
          source={require('./assets/background.jpg')}
          style={styles.image}
        />


        <View style={styles.titles}>
          <Text style ={styles.title}>myHealth</Text>
          <Text style={styles.subtitle}>Your Health, Personalized.</Text>
        </View>




      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  healthBackground: {
    width: '100%',
    height: '100%',

  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },

  title: {
    fontSize: 60,
    fontWeight: '500'

  },

  subtitle: {
    fontSize: 16,
    color: '#FFFFFF'

  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },

});
