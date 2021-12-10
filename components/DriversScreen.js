import React from "react";
import {View,Text,Image,Button,ImageBackground,StyleSheet,TextInput} from 'react-native';
import {SafeAreaView, SectionList, StatusBar,ScrollView } from "react-native";
import {useValue} from "./ValueContext";

const DriversScreen= ({ route, navigation }) => {


  const [input, onChangestock] = React.useState(null);
  const {currentValue,setCurrentValue} = useValue();
  const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
  return (
    <ScrollView>
      <View style={{flexDirection:'row'}}>
        <TextInput
          style={styles.inputtext}
          clearButtonMode="while-editing"
          placeholder="Please Set Up your Favorite Driver"
          onChangeText={onChangestock}
          value={input}
        />
        <Button
          color="red"
          title="Set"
          onPress={() => {
            setCurrentValue({...currentValue,driver:input});
          }}
        />
      </View>
      <View>
        <Text
          style={{
            fontStyle: 'italic',
            fontSize: 26,
            alignContent: 'felx-start',
          }}>
          Your Favorite Driver: {input}
        </Text>
      </View>
      <ImageBackground
          style={{ width: '100%', height: 600 }}
          resizeMode="contain"
          source={{ uri: 'https://i.redd.it/5qn3f9s8p6p61.png' }}
        >
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
       />


      </ImageBackground>
      <ScrollView style={{flex:1}}>

      </ScrollView>
    </ScrollView>
  );
}

const DATA = [
  {
    title: "Mercedes",
    data: ["Lewis Hamilton", "Valtteri Bottas"]
  },
  {
    title: "Red Bull",
    data: ["Max Verstappen", "Sergio Pérez", ]
  },
  {
    title: "Ferrari",
    data: ["Charles Leclerc", "Carlos Sainz"]
  },
  {
    title: "McLaren",
    data: ["Lando Norris", "Daniel Ricciardo"]
  },
  {
    title: "Alpine F1 Team",
    data: ["Fernando Alonso", "Esteban Ocon"]
  },
  {
    title: "Aston Martin",
    data: ["Sebastian Vettel", "Lance Stroll"]
  },
  {
    title: "AlphaTauri",
    data: ["Pierre Gasly", "Yuki Tsunoda"]
  },
  {
    title: "Alfa Romeo",
    data: ["Kimi Räikkönen", "Robert Kubica"]
  },
  {
    title: "Williams",
    data: ["George Russell", "Nicholas Latifi"]
  },
  {
    title: "Haas F1 Team",
    data: ["Mick Schumacher", "Nikita Mazepin"]
  }
];






const styles = StyleSheet.create({

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  header: {
    fontSize: 30,
    color:'white',

  },
  title: {
    fontSize: 25,
    color:'red',
  },
  inputtext: {
    width: 250,
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 8,
  },
});

export default DriversScreen;
