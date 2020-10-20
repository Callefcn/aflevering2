import React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "./Components/Home";
import StreamingService from "./Components/StreamingService";
import Genre from "./Components/Genre";

import MatchedFilm from "./Components/MatchedFilm";

//opretter tabs
const Tab = createBottomTabNavigator();

//opretter tabs for alle views
function MyTabs() {
  return (
      <Tab.Navigator>
      <Tab.Screen name="Movie Liker" component = {HomeScreen}/>
      <Tab.Screen name="Streaming services" component = {StreamingService}/>
      <Tab.Screen name="Genres" component = {Genre}/>
      <Tab.Screen name="Matched Film" component = {MatchedFilm}/>
      </Tab.Navigator>

      );
}
  export default function (App) {
  return (
      <NavigationContainer>
        <MyTabs/>
      </NavigationContainer>
  );

  }

//Al i denne klasse er lavet af Carl Emil Derby Hansen