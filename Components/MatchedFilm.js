import {Text, View} from "react-native";
import ImagesExample2 from "./image_example2";
import ImagesExample from "./image_example";
import ImagesExample3 from "./image_example3";
import React from "react";

// I nedenstående funktion kunne man med fordel have lavet et stylesheet i stedet for inline styling
export default function MatchedFilm() {
    return (
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Text style = {{fontSize: 32, fontweight: 'bold'}}>Liste over foretrukne film</Text>

            <ImagesExample/>
            <ImagesExample2/>
            <ImagesExample3/>

        </View>
    );
}
