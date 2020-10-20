import React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from 'react-native';
import ImagesExample2 from "./image_example2";
import {FontAwesome} from "@expo/vector-icons";
import {green500} from "react-native-paper/src/styles/colors";

// I nedenstående funktion kunne man med fordel have lavet et stylesheet i stedet for inline styling
export default function StreamingService() {
    return (
        <View style = {{flex: 1, alignItems: 'center' }}>

            <Text style={{fontSize: 32, fontWeight: 'bold', margin: 100}}>Tilføj tilgængelige streamingtjenester</Text>

            <Text style={{fontSize: 20, fontWeight: 'bold', justifyContent: 'center'}}>Netflix <FontAwesome name={"check"} color={green500} ></FontAwesome></Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', justifyContent: 'center'}}>Viaplay</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', justifyContent: 'center'}}>Amazon prime <FontAwesome name={"check"} color={green500}></FontAwesome></Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', justifyContent: 'center'}}>HBO Nordic</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', justifyContent: 'center'}}>Disney plus</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', justifyContent: 'center'}}>D-play <FontAwesome name={"check"} color={green500}></FontAwesome></Text>

        </View>
    );
}