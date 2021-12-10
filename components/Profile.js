import React from "react";
import {View,Text,Image,Button,ImageBackground,StyleSheet,TouchableOpacity,TextInput,FlatList,TouchableWithoutFeedback,ScrollView} from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile= ({ route, navigation }) => {
  const [info, setInfo] = useState({ name: '', email: '' });
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    getData();
  }, []);


  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@profile_info');
      let data = null;
      if (jsonValue != null) {
        data = JSON.parse(jsonValue);
        setInfo(data);
        setName(data.name);
        setPhone(data.email);
        console.log('just set Info, Name and Phone');
      } else {
        console.log('just read a null value from Storage');
        setInfo({});
        setName('');
        setPhone('');
      }
    } catch (e) {
      console.log('error in getData ');
      console.dir(e);
    }
  };


  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@profile_info', jsonValue);
      console.log('just stored ' + jsonValue);
    } catch (e) {
      console.log('error in storeData ');
      console.dir(e);
    }
  };


  const clearAll = async () => {
    try {
      console.log('in clearData');
      await AsyncStorage.clear();
    } catch (e) {
      console.log('error in clearData ');
      console.dir(e);
    }
  };
  return (
    <View style={{flex:1}}>
      <View style={{flexDirection:'center', alignItems:'center'}} >
        <Text style={styles.header}>Login</Text>
        <Image
          style={{ width: '30%', height: 100 }}
          resizeMode="cotain"
          source={{
            uri: 'https://www.pikpng.com/pngl/b/283-2837538_login-icon-line-icons-iconscout-login-icon-images.png',
          }}
        />
        <TextInput
          style={styles.textinput}
          placeholder="User ID"
          onChangeText={(text) => {
            setName(text);
          }}
          value={name}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Phone number"
          onChangeText={(text) => {
            setPhone(text);
          }}
          value={phone}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="red"
          title="login"
          onPress={() => {
            console.log('saving profile');
            const theInfo = { name: name, email: phone };
            console.log(`theInfo=${theInfo}`);
            setInfo(theInfo);
            console.log('data=' + JSON.stringify(theInfo));
            storeData(theInfo);
          }}
        />
        <Button
          color="lightblue"
          title="Clear"
          onPress={() => {
            console.log('clearing memory');
            clearAll();
          }}
        />
        <Button
          color="gray"
          title="Reload"
          onPress={() => {
            console.log('loading profile');
            getData();
          }}
        />
      </View>


    <View style={{backgroundColor: 'white',marginTop: 'auto'}}>
          <Button title="Notifications" />
          <Button title="Subscribe" />
          <Button title="Help & Support" />
          <Button title="Setting" />
          <Button title="Checking Update" />
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    width: 240,
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    //paddingleft: 8,
    marginLeft: 8,
  },
  header: {
    fontSize: 40,
    color: 'black',
    fontStyle: 'italic',
  },
});
export default Profile;
