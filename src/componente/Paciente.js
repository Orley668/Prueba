import React from "react";
import { Text,View,StyleSheet } from "react-native"
const Paciente=({item})=>{
    const {Paciente,propitario}=item
    return(
        <View>
            <Text>{Paciente}</Text>
            <Text>{propitario}</Text>
        </View>
    )


}
export default Paciente
