import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Home = () => {
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
        {/* Content with pictures and text */}
        <View style={styles.pictureContainer}>
          <View style={styles.imageTextContainer}>
            <View style={styles.imageWrapper}>
              <Image source={require('../assets/images/dress1.png')} style={styles.contentImage} />
              <Image source={require('../assets/images/add_circle.png')} style={styles.smallImage} />
            </View>
            <Text style={styles.imageText}>Office Wear</Text>
            <Text style={styles.secondText}>reversible angore cardigan</Text>
            <Text style={styles.price}>$120</Text>
          </View>
          <View style={styles.imageTextContainer}>
            <View style={styles.imageWrapper}>
              <Image source={require('../assets/images/dress2.png')} style={styles.contentImage} />
              <Image source={require('../assets/images/add_circle.png')} style={styles.smallImage} />
            </View>
            <Text style={styles.imageTextRight}>Black</Text>
            <Text style={styles.secondText}>reversible angore cardigan</Text>
            <Text style={styles.price}>$120</Text>
          </View>
        </View>
        {/* Add more content here as needed */}

        <View style={styles.pictureContainer}>
          <View style={styles.imageTextContainer}>
            <View style={styles.imageWrapper}>
              <Image source={require('../assets/images/dress3.png')} style={styles.contentImage} />
              <Image source={require('../assets/images/add_circle.png')} style={styles.smallImage} />
            </View>
            <Text style={styles.imageText}>Church Wear</Text>
            <Text style={styles.secondText}>reversible angore cardigan</Text>
            <Text style={styles.price}>$120</Text>
          </View>
          <View style={styles.imageTextContainer}>
            <View style={styles.imageWrapper}>
              <Image source={require('../assets/images/dress4.png')} style={styles.contentImage} />
              <Image source={require('../assets/images/add_circle.png')} style={styles.smallImage} />
            </View>
            <Text style={styles.imageTextRight}>Lamerei</Text>
            <Text style={styles.secondText}>reversible angore cardigan</Text>
            <Text style={styles.price}>$120</Text>
          </View>
        </View>

        <View style={styles.pictureContainer}>
          <View style={styles.imageTextContainer}>
            <View style={styles.imageWrapper}>
              <Image source={require('../assets/images/dress5.png')} style={styles.contentImage} />
              <Image source={require('../assets/images/add_circle.png')} style={styles.smallImage} />
            </View>
            <Text style={styles.imageText}>21WN</Text>
            <Text style={styles.secondText}>reversible angore cardigan</Text>
            <Text style={styles.price}>$120</Text>
          </View>
          <View style={styles.imageTextContainer}>
            <View style={styles.imageWrapper}>
              <Image source={require('../assets/images/dress6.png')} style={styles.contentImage} />
              <Image source={require('../assets/images/add_circle.png')} style={styles.smallImage} />
            </View>
            <Text style={styles.imageTextRight}>Lopo</Text>
            <Text style={styles.secondText}>reversible angore cardigan</Text>
            <Text style={styles.price}>$120</Text>
          </View>
        </View>

        <View style={styles.pictureContainer}>
          <View style={styles.imageTextContainer}>
            <View style={styles.imageWrapper}>
              <Image source={require('../assets/images/dress7.png')} style={styles.contentImage} />
              <Image source={require('../assets/images/add_circle.png')} style={styles.smallImage} />
            </View>
            <Text style={styles.imageText}>21WN</Text>
            <Text style={styles.secondText}>reversible angore cardigan</Text>
            <Text style={styles.price}>$120</Text>
          </View>
          <View style={styles.imageTextContainer}>
            <View style={styles.imageWrapper}>
              <Image source={require('../assets/images/dress3.png')} style={styles.contentImage} />
              <Image source={require('../assets/images/add_circle.png')} style={styles.smallImage} />
            </View>
            <Text style={styles.imageTextRight}>lame</Text>
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
    // fontStyle: 'Amasis MT Pro' // Font style might not be available by default
  },
  image: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
  pictureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  imageTextContainer: {
    alignItems: 'center',
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
    marginRight:85,
  },
  imageTextRight:{
    fontSize: 16,
    marginTop: 5,
    color: 'black',
    marginRight:130,
  },
  secondText:{
    color:'grey',
  },
  price:{
    marginRight:140,
    color:'red',
  }
});

export default Home;
