import {Text, View} from "react-native";
import React from "react";
import {FontAwesome} from "@expo/vector-icons"
import {green500} from "react-native-paper/src/styles/colors";

// I nedenstående funktion kunne man med fordel have lavet et stylesheet i stedet for inline styling
export default function Genre() {
    return (
        <View style = {{flex: 1, alignItems: 'center'}}>

            <Text style={{fontSize: 32, fontWeight: 'bold', margin: 100}}>Vælg hvilke genre, som I vil se</Text>

            <Text style={{fontSize: 20, fontWeight: 'bold', justifyContent: 'center'}}>Action <FontAwesome name={"check"} color={green500} ></FontAwesome></Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', justifyContent: 'center'}}>Komedie</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', justifyContent: 'center'}}>Thriller <FontAwesome name={"check"} color={green500}></FontAwesome></Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', justifyContent: 'center'}}>Kærlighedsfilm</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', justifyContent: 'center'}}>Drama</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', justifyContent: 'center'}}>Science Fiction <FontAwesome name={"check"} color={green500}></FontAwesome></Text>

        </View>
    );
}