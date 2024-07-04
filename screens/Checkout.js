import React, {useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const storedCartItems = await AsyncStorage.getItem('cart');
        if (storedCartItems) {
          setCartItems(JSON.parse(storedCartItems));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCartItems();
  }, []);

  const removeFromCart = async (productId) => {
    try {
      let updatedCartItems = cartItems.filter(item => item.id !== productId);
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);
      Alert.alert('Item removed from cart');
    } catch (error) {
      console.error(error);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <Text style={styles.headerText}>CHECKOUT</Text>
      <View style={styles.bigContainer}>
        <View style={styles.leftContainer}>
          <Image 
            source={require('../assets/images/dress1.png')} // Adjust the path to your image
            style={styles.image}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.text}>Office Wear</Text>
          <Text style={styles.secondText}>Office wear for your office</Text>
          <Text style={styles.price}>$120</Text>
          <Image 
            source={require('../assets/images/remove.png')} // Adjust the path to your small image
            style={styles.smallImage}
          />
        </View>
      </View>

      <View style={styles.bigContainer}>
        <View style={styles.leftContainer}>
          <Image 
            source={require('../assets/images/dress4.png')} // Adjust the path to your image
            style={styles.image}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.text}>LAMEREI</Text>
          <Text style={styles.secondText}>Recycle Boucle Knit Cardigan Pink</Text>
          <Text style={styles.price}>$120</Text>
          <Image 
            source={require('../assets/images/remove.png')} // Adjust the path to your small image
            style={styles.smallImage}
          />
        </View>
      </View>

      <View style={styles.bigContainer}>
        <View style={styles.leftContainer}>
          <Image 
            source={require('../assets/images/dress3.png')} // Adjust the path to your image
            style={styles.image}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.text}>Church Wear</Text>
          <Text style={styles.secondText}>Recycle Boucle Knit Cardigan Pink</Text>
          <Text style={styles.price}>$120</Text>
          <Image 
            source={require('../assets/images/remove.png')} // Adjust the path to your small image
            style={styles.smallImage}
          />
        </View>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalTextLeft}>EST . Total</Text>
        <Text style={styles.totalTextRight}>$240</Text>
      </View>

      <View style={styles.taskBar}>
        <Image 
          source={require('../assets/images/shoppingbagWhite.png')} // Adjust the path to your shopping bag image
          style={styles.taskBarImage}
        />
        <Text style={styles.taskBarText}>CHECKOUT</Text>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  scrollView:{
    flex:1,
  },
  headerText: {
    fontSize: 25,
    marginBottom: 20,
  },
  bigContainer: {
    flexDirection: 'row',
    width: '90%',
    height: 200,
    marginTop: -10,
    marginLeft: -25,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative', // Add position relative to the right container
  },
  image: {
    width: 140,
    height: 175,
  },
  text: {
    fontSize: 18,
  },
  secondText: {
    fontSize: 14,
    color: 'grey',
  },
  price: {
    fontSize: 16,
    color: 'red',
  },
  smallImage: {
    width: 25,
    height: 25,
    position: 'absolute', // Position absolute for the small image
    bottom: 10,
    right: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 20,
    marginTop:40,
    marginBottom:30,
  },
  totalTextLeft: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom:20,
  },
  totalTextRight: {
    fontSize: 20,
    fontWeight: '500',
    color:'red',
  },
  taskBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    backgroundColor: 'black',
  },
  taskBarImage: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 20,
  },
  taskBarText: {
    fontSize: 18,
    color: 'white',
  },
});

export default Checkout;
