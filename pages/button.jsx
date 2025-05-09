import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import {  StyleSheet, Text, TouchableOpacity } from "react-native"

const Button=({light, children})=>{
    useFonts({
        Poppins_600SemiBold,
    });
    return(
        <TouchableOpacity style={[styles.button, light && {backgroundColor:'white', boxShadow:'none'}]} onPress={()=>{ alert('Button pressed')}}>
            <Text style={[styles.buttonText, light && {color:'black'}]}>{children}</Text>
        </TouchableOpacity>
    )
}
export default Button;

const styles = StyleSheet.create({
    button:{
        padding:13,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#1F41BB',
        flex:1,
        boxShadow: '0px 10px 20px #CBD6FF',
    },
    buttonText:{
        color: 'white',
        fontSize: 17,
        fontFamily: 'Poppins_600SemiBold',
    }
});
