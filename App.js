import * as React from 'react';
import HomeScreen  from './components/HomeScreen';
import TeamsScreen from './components/TeamsScreen';
import DriversScreen from './components/DriversScreen';
import Profile from './components/Profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import ValueProvider from "./components/ValueContext";


const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Teams" component={TeamsScreen} />
        <Stack.Screen name="Drivers" component={DriversScreen} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();
export default function App() {
  const data={team:"",driver:"",}
  return (
   <ValueProvider value={data}>
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
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
    </ValueProvider>
  );
}










