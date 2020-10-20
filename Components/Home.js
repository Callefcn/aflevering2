import React from "react";
import {Button, TextInput} from "react-native-web";
import Box from "./box";
import { NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from 'react-native';
import {green500, red500} from "react-native-paper/src/styles/colors";
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagesExampleSelection from "./image_example_Selection";

// I nedenstående funktion kunne man med fordel have benyttet touchableopacity for at have opnået pænere buttons
export default function HomeScreen() {

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ImagesExampleSelection />

            <text>Vil du se denne film?</text>
            <Button
                title="Nej"
                color={red500}

            />
          <Button
              title="Ja"
               color={green500}
                />
            </View>
    );

}

// Al i denne klasse er lavet af Carl Emil Derby Hansen