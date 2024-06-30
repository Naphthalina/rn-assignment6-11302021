import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Home from './screens/Home'; // Adjust the path if you placed Home.js in a different directory

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <View style={styles.leftContainer}>
          <Image source={require('./assets/images/Menu.png')} style={styles.image} />
        </View>
        <View style={styles.centerContainer}>
          <Image source={require('./assets/images/Logo.png')} style={styles.logo} />
        </View>
        <View style={styles.rightContainer}>
          <Image source={require('./assets/images/Search.png')} style={styles.image} />
          <Image source={require('./assets/images/shoppingBag.png')} style={styles.image} />
        </View>
      </View>
      <Home />
      <View style={styles.taskBar}>
        <Text style={styles.taskText}></Text>
        <Text style={styles.taskText}></Text>
        <Text style={styles.taskText}></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  titleBar: {
    height: 80,
    backgroundColor: '#6200EE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft:20,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height:50,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    marginHorizontal:5,
  },

  logo:{
    width:100,
    height:40,
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  taskBar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    //backgroundColor: '#03DAC5',
    alignItems: 'center',
  },
  taskText: {
    color: 'white',
    fontSize: 18,
  },
});
