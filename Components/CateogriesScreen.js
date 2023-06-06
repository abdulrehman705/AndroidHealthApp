import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CateogriesScreen = () => {
  return (
    <View style = {styles.Container}>
      <Text style = {styles.CateogryText}>Choose your Cateogry</Text>
      <View style = {styles.AlignBox}>
        <View style = {styles.Box}>
          <Image source={require("../Images/Cardiologist.png")}></Image>
          <Text style = {styles.Text}>Cardiologist</Text>
        </View>
        <View style = {styles.Box}>
          <Image source={require("../Images/Ophthalmologist.png")}></Image>
          <Text style = {styles.SecondText}>Ophthalmologist</Text>
        </View>
      </View>
      <View style = {styles.AlignBox}>
      <View style = {styles.Box}>
          <Image source={require("../Images/Virologist.png")}></Image>
          <Text style = {styles.SecondText}>Virologist</Text>
        </View>
        <View style = {styles.Box}>
          <Image source={require("../Images/Gastroenterologist.png")}></Image>
          <Text style = {styles.Text}>Gastroenterologist</Text>
        </View>
      </View>
      <View style = {styles.AlignBox}>
      <View style = {styles.Box}>
          <Image source={require("../Images/Pulmonologist.png")}></Image>
          <Text style = {styles.Text}>Pulmonologist</Text>
        </View>
        <View style = {styles.Box}>
          <Image source={require("../Images/Rheumatologist.png")}></Image>
          <Text style = {styles.SecondText}>Rheumatologist</Text>
        </View>
      </View>
      <View style = {styles.AlignBox}>
      <View style = {styles.Box}>
          <Image source={require("../Images/Stomatologist.png")}></Image>
          <Text style = {styles.SecondText}>Stomatologist</Text>
        </View>
        <View style = {styles.Box}>
          <Image source={require("../Images/Orthopedic.png")}></Image>
          <Text style = {styles.Text}>Orthopedic</Text>
        </View>
      </View>
    </View>
  )
}

export default CateogriesScreen

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#23AAFA',
    paddingTop: 135,
  },
  CateogryText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#FFFFFF',
  },
  Box:{
    width: 165,
    height: 120,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  AlignBox: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent:'space-evenly',
  },
  Text: {
    marginTop: 15,
    fontWeight:'600',
    color: '#23AAFA',
  },
  SecondText: {
    marginTop: 15,
    fontWeight:'600',
    color: '#989DA0',
  },
})