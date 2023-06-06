import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'


const SignUpScreen = () => {
  const navigation = useNavigation()
  const [isSelected, setSelection] = useState(false);
  const [visible, setvisible] = useState(true)
  const [visibl, setvisibl] = useState(true)
  const [username, setusername] = useState()
  const [password, setpassword] = useState()
  const [password2, setpassword2] = useState()

  const onSignUp = async () => {
    try {
      // const response = await axios.post('http://127.0.0.1:8000/register/', {
      const res = await axios.post('https://e3bb-39-53-98-50.ngrok-free.app/register/', {
        username,
        password,
        password2,
        first_name: "ar",
        last_name: "ark",
        email: "ark@gabdulmail.com",
      },
      );                                                
      // Token Path
      console.log('response', res.data.access)

      if (res.data.access != "") {
        navigation.navigate('LoginScreen')
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView>
      <View>
        <Text style={styles.Heading}>Welcome Back</Text>
        <Text style={styles.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non at sed.</Text>
      </View>
      <View>
        <Text style={styles.InputName}>Username</Text>
        <TextInput
          style={styles.Input}
          placeholder='username'
          value={username}
          onChangeText={(value) => { setusername(value) }}
        />
      </View>
      <View>
        <Text style={styles.InputName}>password</Text>
        <View style={styles.passwordBox}>
          <TextInput
            secureTextEntry={visibl}
            style={styles.Input}
            placeholder='Enter'
            value={password}
            onChangeText={(value) => { setpassword(value) }}
          />
          <TouchableOpacity style={styles.Icons} onPress={() => setvisibl(!visibl)} >
            <Icon size={25} name={visibl ? "eye" : "eye-off"} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.InputName}>Confirm password</Text>
        <View style={styles.passwordBox}>
          <TextInput
            secureTextEntry={visible}
            style={styles.Input}
            placeholder='Enter'
            value={password2}
            onChangeText={(value) => { setpassword2(value) }}
          />
          <TouchableOpacity style={styles.Icons} onPress={() => setvisible(!visible)}>
            <Icon size={25} name={visible ? "eye" : "eye-off"} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.CheckBox}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
        />
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non at sed.</Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity onPress={onSignUp}>
          <Image source={require("../Images/Signupbtn.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../Images/Fingerprint.png")} />
        </TouchableOpacity>
      </View>
      <Text style={styles.otheroption}>or signup with</Text>
      <View style={styles.SignUpbtn}>
        <Image style={styles.margin} source={require("../Images/Button2.png")} />
        <Image style={styles.margin} source={require("../Images/Button1.png")} />
        <Image style={styles.margin} source={require("../Images/Button.png")} />
      </View>
      <View style={styles.otheroption} >
        <Text>I have an account </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}><Text style={styles.loginbtn}>Login</Text></TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  Heading: {
    textAlign: "center",
    fontSize: 26,
    marginTop: 37,
    fontWeight: "600",
    color: '#000000',
  },
  Text: {
    textAlign: 'center',
    width: "74%",
    fontWeight: "600",
    alignSelf: 'center',
    marginVertical: 10,
  },
  Input: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 30,
    width: '85%'
  },
  InputName: {
    marginHorizontal: 36,
    fontSize: 14,
    fontWeight: "400",
    marginVertical: 10,
    color: "#000000",
  },
  passwordBox: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Icons: {
    right: 70,
    top: 11,
  },
  CheckBox: {
    flexDirection: 'row',
    width: "70%",
    marginHorizontal: 45,
    marginVertical: 19,
  },
  btn: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-evenly'
  },
  otheroption: {
    marginVertical: 5,
    alignSelf: 'center',
    flexDirection: 'row'
  },
  margin: {
    marginVertical: 2
  },
  SignUpbtn: {
    alignSelf: 'center',
    marginTop: 15,
  },
  loginbtn: {
    color: '#000000',
    fontWeight: 'bold',
  },
})