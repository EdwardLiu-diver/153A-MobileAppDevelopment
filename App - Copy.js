import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from './components/Profile';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Formula1 Gallery' }}
        />
        <Stack.Screen name="Teams" component={TeamsScreen} />
        <Stack.Screen name="Drivers" component={DriversScreen} />
        <Stack.Screen name="Profile" component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'ios-home-outline' : 'ios-home';
            } else if (route.name === 'Drivers') {
              iconName = focused ? 'ios-list-outline' : 'ios-list';
            } else if (route.name === 'Teams') {
              iconName = focused ? 'ios-car-outline' : 'ios-car';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person-outline' : 'ios-person';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Drivers" component={DriversScreen} />
        <Tab.Screen name="Teams" component={TeamsScreen} />
        <Tab.Screen name="Profile" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View>
      <View>
        <ImageBackground
          style={{ width: '100%', height: 80 }}
          resizeMode="contain"
          source={{
            uri: 'https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-0.png',
          }}
        />
      </View>

      <View>
        <Text style={styles.paragraph}>Welcome to Formula1 Gallery! </Text>
        <Text style={styles.paragraph}>
          {' '}
          Get Informations About F1 2021{' '}
        </Text>
      </View>

      <View>
        <Image
          style={{ width: '100%', height: 150 }}
          resizeMode="cover"
          source={{
            uri: 'https://thegsaljournalhome.files.wordpress.com/2020/06/pierre-gasly-at-f1-british-gp.jpg?w=1312&h=600&crop=1',
          }}
        />
      </View>
      <View>
        <Text style={styles.paragraph}>Up coming Event:</Text>
      </View>
      <View>
        <Text style={styles.news}> Brazilian Grand Prix</Text>
        <Image
          style={{ width: '100%', height: 190 }}
          resizeMode="cover"
          source={{
            uri: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Brazil.jpg.transform/fullbleed-retina/image.jpg',
          }}
        />
        {
          <Button
            title="Login"
            color="red"
            onPress={() => navigation.navigate('Profile')}
          />
        }
      </View>
    </View>
  );
}

function TeamsScreen({ route, navigation }) {
  const [passionTeam, onChangestock] = React.useState(null);
  return (
    <View>
      <View>
        <ImageBackground
          style={{ width: 400, height: 160 }}
          resizeMode="contain"
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/1280px-F1.svg.png',
          }}
        />
      </View>

      <View>
        <TextInput
          style={styles.inputtext}
          clearButtonMode="while-editing"
          placeholder="Please Set Up your Home Team"
          onChangeText={onChangestock}
          value={passionTeam}
        />
        <Text
          style={{
            fontStyle: 'italic',
            fontSize: 26,
            alignContent: 'felx-start',
          }}>
          Your Home Team: {passionTeam}
        </Text>
      </View>
      <View>
        <ImageBackground
          style={{ width: 400, height: 400 }}
          resizeMode="contain"
          source={{
            uri: 'https://i1.wp.com/f1ntastic.com/wp-content/uploads/2021/01/2021-F1-Teams-Cover-Final.jpg?w=1280&ssl=1',
          }}
        />
      </View>
    </View>
  );
}

function DriversScreen({ route, navigation }) {
  const [input, onChangestock] = React.useState(null);
  return (
    <View>
      <View>
        <TextInput
          style={styles.inputtext}
          clearButtonMode="while-editing"
          placeholder="Please Set Up your Favorite Driver"
          onChangeText={onChangestock}
          value={input}
        />
        <Text
          style={{
            fontStyle: 'italic',
            fontSize: 26,
            alignContent: 'felx-start',
          }}>
          Your Favorite Driver: {input}
        </Text>
      </View>
      <View>
        <ImageBackground
          style={{ width: 400, height: 600 }}
          resizeMode="center"
          source={{ uri: 'https://i.redd.it/5qn3f9s8p6p61.png' }}
        />
      </View>
    </View>
  );
}

function AccountScreen({ route, navigation }) {
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
    <View>
      <View style={{flexDirection:'center', alignItems:'center'}} >
        <Text style={styles.header}>Login</Text>
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
          title="Remeber me"
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
      <View>
        <Text>Preference</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  inputtext: {
    width: 380,
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    paddingleft: 8,
    marginLeft: 8,
  },
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
    paddingleft: 8,
    marginLeft: 8,
  },
  header: {
    fontSize: 40,
    color: 'black',
    fontStyle: 'italic',
  },
  news: {
    fontSize: 24,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
