import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Office Wear', price: 120, image: require('../assets/images/dress1.png') },
    { id: 2, name: 'Black', price: 120, image: require('../assets/images/dress2.png') },
    { id: 3, name: 'Church Wear', price: 120, image: require('../assets/images/dress3.png') },
    { id: 4, name: 'Lamerei', price: 120, image: require('../assets/images/dress4.png') },
    { id: 5, name: '21WN', price: 120, image: require('../assets/images/dress5.png') },
    { id: 6, name: 'Lopo', price: 120, image: require('../assets/images/dress6.png') },
    { id: 7, name: '21WN', price: 120, image: require('../assets/images/dress7.png') },
    { id: 8, name: 'Lame', price: 120, image: require('../assets/images/dress3.png') },
  ]);

  const addToCart = async (product) => {
    try {
      const cartItems = await AsyncStorage.getItem('cart');
      let cart = cartItems ? JSON.parse(cartItems) : [];
      const itemExists = cart.some(item => item.id === product.id);
      
      if (itemExists) {
        Alert.alert('Item already in cart');
      } else {
        cart.push(product);
        await AsyncStorage.setItem('cart', JSON.stringify(cart));
        Alert.alert('Item added to cart');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <View style={styles.leftContainer}>
            <Text style={styles.text}>OUR STORY</Text>
          </View>
          <View style={styles.rightContainer}>
            <Image source={require('../assets/images/Listview.png')} style={styles.image} />
            <Image source={require('../assets/images/Filter.png')} style={styles.image} />
          </View>
        </View>
        
        {/* The rest of your content remains the same */}
        
        <View style={styles.pictureContainer}>
          <View style={styles.imageTextContainer}>
            <View style={styles.imageWrapper}>
              <Image source={require('../assets/images/dress1.png')} style={styles.contentImage} />
              <TouchableOpacity onPress={() => addToCart(products)}>
              <Image source={require('../assets/images/add_circle.png')} style={styles.smallImage} />
              </TouchableOpacity>
            </View>
            <Text style={styles.imageText}>Office Wear</Text>
            <Text style={styles.secondText}>reversible angore cardigan</Text>
            <Text style={styles.price}>$120</Text>
          </View>
          <View style={styles.imageTextContainer}>
            <View style={styles.imageWrapper}>
              <Image source={require('../assets/images/dress2.png')} style={styles.contentImage} />
              <TouchableOpacity onPress={() => addToCart(products)}>
              <Image source={require('../assets/images/add_circle.png')} style={styles.smallImage} />
              </TouchableOpacity>
            </View>
            <Text style={styles.imageText}>Black</Text>
            <Text style={styles.secondText}>reversible angore cardigan</Text>
            <Text style={styles.price}>$120</Text>
          </View>
        </View>

        <View style={styles.pictureContainer}>
          <View style={styles.imageTextContainer}>
            <View style={styles.imageWrapper}>
              <Image source={require('../assets/images/dress3.png')} style={styles.contentImage} />
              <TouchableOpacity onPress={() => addToCart(products)}>
              <Image source={require('../assets/images/add_circle.png')} style={styles.smallImage} />
              </TouchableOpacity>
            </View>
            <Text style={styles.imageText}>Church Wear</Text>
            <Text style={styles.secondText}>reversible angore cardigan</Text>
            <Text style={styles.price}>$120</Text>
          </View>
          <View style={styles.imageTextContainer}>
            <View style={styles.imageWrapper}>
              <Image source={require('../assets/images/dress4.png')} style={styles.contentImage} />
              <TouchableOpacity onPress={() => addToCart(products)}>
              <Image source={require('../assets/images/add_circle.png')} style={styles.smallImage} />
              </TouchableOpacity>
            </View>
            <Text style={styles.imageText}>Lamerei</Text>
            <Text style={styles.secondText}>reversible angore cardigan</Text>
            <Text style={styles.price}>$120</Text>
          </View>
        </View>

        <View style={styles.pictureContainer}>
          <View style={styles.imageTextContainer}>
            <View style={styles.imageWrapper}>
              <Image source={require('../assets/images/dress5.png')} style={styles.contentImage} />
              <TouchableOpacity onPress={() => addToCart(products)}>
              <Image source={require('../assets/images/add_circle.png')} style={styles.smallImage} />
              </TouchableOpacity>
            </View>
            <Text style={styles.imageText}>21WN</Text>
            <Text style={styles.secondText}>reversible angore cardigan</Text>
            <Text style={styles.price}>$120</Text>
          </View>
          <View style={styles.imageTextContainer}>
            <View style={styles.imageWrapper}>
              <Image source={require('../assets/images/dress6.png')} style={styles.contentImage} />
              <TouchableOpacity onPress={() => addToCart(products)}>
              <Image source={require('../assets/images/add_circle.png')} style={styles.smallImage} />
              </TouchableOpacity>
            </View>
            <Text style={styles.imageText}>Lopo</Text>
            <Text style={styles.secondText}>reversible angore cardigan</Text>
            <Text style={styles.price}>$120</Text>
          </View>
        </View>

        <View style={styles.pictureContainer}>
          <View style={styles.imageTextContainer}>
            <View style={styles.imageWrapper}>
              <Image source={require('../assets/images/dress7.png')} style={styles.contentImage} />
              <TouchableOpacity onPress={() => addToCart(products)}>
              <Image source={require('../assets/images/add_circle.png')} style={styles.smallImage} />
              </TouchableOpacity>
            </View>
            <Text style={styles.imageText}>21WN</Text>
            <Text style={styles.secondText}>reversible angore cardigan</Text>
            <Text style={styles.price}>$120</Text>
          </View>
          <View style={styles.imageTextContainer}>
            <View style={styles.imageWrapper}>
              <Image source={require('../assets/images/dress3.png')} style={styles.contentImage} />
              <TouchableOpacity onPress={() => addToCart(products)}>
              <Image source={require('../assets/images/add_circle.png')} style={styles.smallImage} />
              </TouchableOpacity>
            </View>
            <Text style={styles.imageText}>lame</Text>
            <Text style={styles.secondText}>reversible angore cardigan</Text>
            <Text style={styles.price}>$120</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginBottom:50,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: 'black',
    paddingLeft: 20,
  },
  image: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
  pictureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  imageTextContainer: {
    width: 175,
    alignItems: 'flex-start',
  },
  imageWrapper: {
    position: 'relative',
  },
  contentImage: {
    width: 175,
    height: 250,
  },
  smallImage: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  imageText: {
    fontSize: 16,
    marginTop: 5,
    color: 'black',
    textAlign: 'left', 
  },
  secondText: {
    color: 'grey',
    textAlign: 'left', 
  },
  price: {
    color: 'red',
    textAlign: 'left', 
  },
});

export default Home;
