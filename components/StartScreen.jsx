import React from 'react'
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import wecare_logo from '../assets/images/wecare_logo.png'
import donor1 from '../assets/images/donor1.png'
import donor2 from '../assets/images/donor2.png'
import donor3 from '../assets/images/donor3.png'

const StartScreen = () => {
  return (
    <>
      <View >
        <Image style={styles.image} source={wecare_logo} />
        {/* <Text style={styles.topText}>Welcome to weCare </Text> */}
        <Text style={styles.bodyText}>
          Here you can register for an account and find a foodbag near you!
        </Text>
        <Text style={styles.bodyText}>
          We have signed some of the most popular food stores in Sweden that
          will ensure the highest food quality
        </Text>
        <Text style={styles.partner}>Our partners</Text>
        <View style={styles.foodStore}>
          <Image style={styles.storeImage} source={donor1} />
          <Image style={styles.storeImage} source={donor2} />
          <Image style={styles.storeImage} source={donor3} />
        </View>
        <View style={styles.parent}>
          <TouchableOpacity activeOpacity={0.75} style={styles.button}>
            <Text style={styles.text}>Register Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default StartScreen

const styles = StyleSheet.create({
  topText: {
    backgroundColor: '#993576',
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  headerText: {
    backgroundColor: 'white',
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
  },
  bodyText: {
    backgroundColor: 'white',
    fontSize: 20,
    color: '#4a4443',
    textAlign: 'left',
    padding: 15,
    paddingBottom: 20,
  },
  image: {
    height: 120,
    width: Dimensions.get('window').width,
    paddingBottom: 6,
  },
  storeImage: {
    height: 90,
    width: 90,
  },
  foodStore: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    paddingTop: 30,
    paddingBottom: 10,
  },
    partner: {
    fontSize: 25,
    backgroundColor: '#a34983',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 10,
  },
 parent: {
   backgroundColor: 'white',
 },

  button: {
    flexDirection: 'row',
    height: 65,
    backgroundColor: '#993576',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    elevation: 3,
    margin: 39,
    borderRadius: 20
    
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
})