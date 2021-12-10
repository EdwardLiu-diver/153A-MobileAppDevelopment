import React from "react";
import {View,Text,Image,Button,ImageBackground,StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {useValue} from "./ValueContext";

const HomeScreen= ({ navigation }) => {
      let {currentValue} = useValue()

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
        <Text style={styles.news}> Abu Dhabi Grand Prix</Text>
        <Image
          style={{ width: '100%', height: 190 }}
          resizeMode="cover"
          source={{
            uri: 'https://www.formula1.com/content/dam/fom-website/manual/XPB_Images/XPB_1025166_HiRes.jpg.transform/9col-retina/image.jpg',
          }}
        />

        <Text style={{fontSize:15}}>Your Home Team:{currentValue.team}</Text>
          <Text style={{fontSize:15}} >Driver You support:{currentValue.driver}</Text>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Formular1 Gallery' }}
        />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />



      </Stack.Navigator>
    </NavigationContainer>
  );
};




const styles = StyleSheet.create({
  paragraph: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  news: {
    fontSize: 24,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
export default HomeScreen;
