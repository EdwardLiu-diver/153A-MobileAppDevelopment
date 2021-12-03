import React from "react";
import {View,Text,Image,Button,ImageBackground,StyleSheet,TouchableOpacity,TextInput,FlatList} from 'react-native';
import { useState, useEffect } from 'react';

const TeamsScreen= ({ route, navigation }) => {
  const [passionTeam, setPassionTeam] =useState('');
  const DATA = [
  {
    id: "1",
    title: "Mercedes-AMG Petronas F1 Team",
  },
  {
    id: "2",
    title: "Red Bull Racing Honda",
  },
  {
    id: "3",
    title: "Scuderia Ferrari Mission Winnow",
  },
  {
    id: "4",
    title: "McLaren F1 Team",
  },
  {
    id: "5",
    title: "Alpine F1 Team",
  },
  {
    id: "6",
    title: "Scuderia AlphaTauri Honda",
  },
  {
    id: "7",
    title: "Aston Martin Cognizant F1 Team",
  },
  {
    id: "8",
    title: "Williams Racing",
  },
  {
    id: "9",
    title: "Alfa Romeo Racing ORLEN",
  },
  {
    id: "10",
    title: "Uralkali Haas F1 Team",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);
const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "red" : "white";
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Item
        item={item}
        onPress={() => {setSelectedId(item.id),setPassionTeam(item.title)}}
        backgroundColor={{ backgroundColor}}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <ImageBackground
          style={{ width: 400, height: 100 }}
          resizeMode="center"
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
          onChangeText={setPassionTeam}
          value={passionTeam}
        />
        <Text
          style={{
            fontStyle: 'italic',
            fontSize: 18,
            alignContent: 'felx-start',
          }}>
          Your Home Team: {passionTeam}
        </Text>
      </View>
      
      <View style={{flex: 1}}>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputtext: {
    width: 380,
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    paddingleft: 8,
    marginLeft: 8,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default TeamsScreen;