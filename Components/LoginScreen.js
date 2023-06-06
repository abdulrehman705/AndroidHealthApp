import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const LoginScreen = () => {
  const navigation = useNavigation()
  const [visibl, setvisibl] = useState(true)
  const [username, setusername] = useState()
  const [password, setpassword] = useState()

  console.log(username)
  console.log(password)


  const onlogin = async () => {
    try {
      // const response = await axios.post('http://127.0.0.1:8000/login/', {
        const res = await axios.post('https://e3bb-39-53-98-50.ngrok-free.app/login/', {
        username,
        password,
      },
      );
      // Token path
      // console.log('response', res.data.access)

      if (res.data.access != '') {
        navigation.navigate('CateogriesScreen')
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.Container}>
      <Image style={styles.logo} source={require("../Images/Vector.png")} />
      <View style={styles.SecondPart}>
        <View>
          <Text style={styles.InputName}>username address</Text>
          <TextInput
            style={styles.Input}
            placeholder='username'
            value={username}
            keyboardType='username'
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
              keyboardType='password'
              value={password}
              onChangeText={(value) => { setpassword(value) }}
            />
            <TouchableOpacity style={styles.Icons} onPress={() => setvisibl(!visibl)} >
              <Icon size={25} name={visibl ? "eye" : "eye-off"} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.Loginbtn}
            onPress={onlogin}
          //  onPress={() => navigation.navigate('CateogriesScreen')}
          >
            <Text style={styles.LoginText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.LastPart}>
            <Text>Does Not have account </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
              <Text style={styles.RegisterText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#23AAFA",
  },
  logo: {
    left: 83,
  },
  SecondPart: {
    marginTop: 50,
  },
  InputName: {
    marginHorizontal: 36,
    fontSize: 14,
    fontWeight: "400",
    marginVertical: 10,
    color: "#000000",
  },
  Input: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 30,
    width: '85%'
  },
  passwordBox: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Icons: {
    right: 70,
    top: 11,
  },
  Loginbtn: {
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '85%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    alignSelf: 'center',
  },
  LoginText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  LastPart: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  RegisterText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  }
})