import React from 'react'
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.Container}>
      <Image style={styles.logo} source={require("../Images/Vector.png")} />
      <View style={styles.btn}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Image source={require("../Images/Signup.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Image source={require("../Images/Login.png")} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#23AAFA",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: 254,
  },
  logo: {
    left: 83,
  }
})