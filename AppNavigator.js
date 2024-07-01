import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Checkout from './screens/Checkout';
import { useNavigationState, useNavigation } from '@react-navigation/native';
import { navigationRef } from './NavigationService';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const navigation = useNavigation();
  const routeName = useNavigationState((state) => state?.routes[state.index]?.name || 'Home');

  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <View style={styles.leftContainer}>
          {routeName !== 'Checkout' && (
            <Image source={require('./assets/images/Menu.png')} style={styles.image} />
          )}
        </View>
        <View style={styles.centerContainer}>
          <Image source={require('./assets/images/Logo.png')} style={styles.logo} />
        </View>
        <View style={styles.rightContainer}>
          <Image source={require('./assets/images/Search.png')} style={styles.image} />
          {routeName !== 'Checkout' && (
            <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
              <Image source={require('./assets/images/shoppingBag.png')} style={styles.image} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleBar: {
    height: 80,
    //backgroundColor: '#6200EE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
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
    marginHorizontal: 5,
  },
  logo: {
    width: 100,
    height: 40,
  },
});

export default AppNavigator;
