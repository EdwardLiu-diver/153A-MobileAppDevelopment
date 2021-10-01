import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button,Image,ImageBackground,TextInput } from 'react-native';



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

        <Stack.Screen name="F1 Teams 2021" component={TeamsScreen} />
        <Stack.Screen name="F1 Drivers 2021" component={DriversScreen} />



      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View>
          <ImageBackground
          style={{ width:400,height:220}}
          resizeMode='cover'
          source={{uri:'https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-0.png'}}
          />     
      </View>

      <View>
          <Text 
          style={styles.paragraph}
          >Welcome to Formula1 Gallery! </Text>
          <Text 
          style={styles.paragraph}
          > You Can Get Informations About F1 2021 </Text>
      </View>



      <View>
          <Image
          style={{ width:410,height:200}}
          resizeMode='contain'
          source={{uri:'https://thegsaljournalhome.files.wordpress.com/2020/06/pierre-gasly-at-f1-british-gp.jpg?w=1312&h=600&crop=1'}}
          />   
      </View>

      <View>
      <Text
      style={styles.paragraph}
      >Looking For Teams or Drivers?</Text>
      </View>
      <View style={styles.container}>
          <Button
            title="F1 Teams 2021"
            color='red'
            flexDirection=''
            onPress={() =>
              navigation.navigate('F1 Teams 2021')
    
            }
          />


          <Button
            title="F1 Drivers 2021"
           flexDirection=''
            color='red'
            onPress={() =>
              navigation.navigate('F1 Drivers 2021', { name: 'Tim', greeting:'Konichi-wa' })
                // we're passing a parameter name:'Jane' to the Profile component!
            }
          />
        
      </View>    
    </View>  
  );
};




const TeamsScreen = ({ navigation, route }) => {
  const[input,onChangestock]=React.useState(null);
  return (
    <View>

      <View>
      <ImageBackground
          style={{ width:400,height:160}}
          resizeMode='contain'
          source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/1280px-F1.svg.png'}}
          />     
      </View>

      <View>
      <TextInput
          style={styles.inputtext}
          clearButtonMode="while-editing"
          placeholder='Please Set Up your Home Team'
          onChangeText={onChangestock}
          value={input}
          />
          <Text 
           style={{fontStyle:'italic',fontSize:26,alignContent:'felx-start'}}
          >Your Home Team: {input}</Text>
        </View>
        <View>
      <ImageBackground
          style={{ width:400,height:400}}
          resizeMode='contain'
          source={{uri:'https://i1.wp.com/f1ntastic.com/wp-content/uploads/2021/01/2021-F1-Teams-Cover-Final.jpg?w=1280&ssl=1'}}
          />     
      </View>

    </View>

  );
};

const DriversScreen = ({ navigation, route }) => {
  const[input,onChangestock]=React.useState(null);
  return (
    <View>
      <View>
      <TextInput
          style={styles.inputtext}
          clearButtonMode="while-editing"
          placeholder='Please Set Up your Favorite Driver'
          onChangeText={onChangestock}
          value={input}
          />
          <Text 
           style={{fontStyle:'italic',fontSize:26,alignContent:'felx-start'}}
          >Your Favorite Driver: {input}</Text>
        </View>
        <View>
      <ImageBackground
          style={{ width:400,height:600}}
          resizeMode='center'
          source={{uri:'https://i.redd.it/5qn3f9s8p6p61.png'}}
          />     
      </View>

    </View>

  );
};




const styles = StyleSheet.create({
  container: {
   flexDirection: 'row',
   fontSize: 50,
   margin:"25px",
   justifyContent: 'space-around',
   alignContent:'center',
   marginTop:'30px',
   
  },
  paragraph: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle:'italic'
  },
  inputtext: {
    width:380,
    height:60,
    borderColor: 'gray',
    borderWidth: 1,
    paddingleft:8,
    marginLeft:8,
  }
 
    

});



export default MyStack; 
