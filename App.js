import {StatusBar} from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import {navigationRef} from './NavigationService';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Checkout from './screens/Checkout';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              headerLeft: () => (
                <Image
                  source={require('./assets/images/Menu.png')}
                  style={styles.headerImage}
                />
              ),
              headerTitle: () => (
                <Image
                  source={require('./assets/images/Logo.png')}
                  style={styles.logo}
                />
              ),
              headerRight: () => (
                <View style={styles.headerRightContainer}>
                  <Image
                    source={require('./assets/images/Search.png')}
                    style={styles.headerImage}
                  />
                  <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
                    <Image
                      source={require('./assets/images/shoppingBag.png')}
                      style={styles.headerImage}
                    />
                  </TouchableOpacity>
                </View>
              ),
              headerStyle: {
                height: 80,
                backgroundColor: 'white',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10,
              },
            })}
          />
          <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={{
              headerTitle: () => (
                <Image
                  source={require('./assets/images/Logo.png')}
                  style={styles.checkoutLogo}
                />
              ),
              headerRight: () => (
                <Image
                  source={require('./assets/images/Search.png')}
                  style={styles.headerImage}
                />
              ),
              headerStyle: {
                height: 80,
                backgroundColor: 'white',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10,
              },
            }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  headerImage: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo:{
    marginLeft:80,
    height:40,
    width:100,
  },
  checkoutLogo:{
    marginLeft:80,
    height:40,
    width:100,
  },
});
export default App;
