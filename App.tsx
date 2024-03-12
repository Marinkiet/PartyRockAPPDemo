import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotesScreen from "./src/screens/NotesScreen";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AddNotes from "./src/screens/AddNotes";

const primaryPurple = "#e4d7ff";
const secondaryPurple="#b698fe";
const backgroundGrey="#f1f8fb";
const primaryOrang="#ffdfaf";
const secondaryOrange="#f1864c";


const Tab = createBottomTabNavigator();
const App = () => {
  return (
   <NavigationContainer>
 <Tab.Navigator 
   screenOptions={({ route }) => ({
    tabBarActiveTintColor: secondaryOrange, 
    tabBarInactiveTintColor: 'gray', 
    headerShown: false,
  })}>
      <Tab.Screen name="Home" component={HomeScreen}  
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="home" color={color} size={25} />
        )
        ,
      }}/>
      <Tab.Screen name="Notes"component={NotesScreen} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="notes" color={color} size={25} />
        ),
      }}/>
      <Tab.Screen name="Chat" component={HomeScreen}  
      options={{
        tabBarIcon: ({ color, size }) => (
          <Fontisto name="hipchat" color={color} size={25} />
        ),
      }}/>
      <Tab.Screen name="Quiz" component={HomeScreen} 
       options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="quiz" color={color} size={25} />
        ),
      }}/>
      <Tab.Screen name="Profile" component={AddNotes} 
       options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="person" color={color} size={25} />
        ),
      }}/>
    </Tab.Navigator>
   </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    //backgroundColor:'pink'
  }
});
