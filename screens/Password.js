import React,{useState, useEffect} from 'react';
import{StyleSheet,View,TextInput, Text,Image, StatusBar, SafeAreaView,TouchableOpacity} from 'react-native';
export default function Password({navigation}) {
    const[text,onChangeText]=useState();
    return(
        <SafeAreaView style={{ flex:1,backgroundColor:"#ECECEC",justifyContent:"center"}}>
            <View style={styles.containerOne}>
                <Text style={{fontWeight:"bold",color:"#21B6A8"}}> Enter your username or the email linked your account.</Text>
            <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder=" email or username"
                    value={text}
                />
               
                <TouchableOpacity style={styles.nextButton}>
                    <Text style={styles.nextText}>  Send me a link to get back into my account.</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
const styles=StyleSheet.create({ 
    containerOne:{
        marginTop:50,
        justifyContent:"center",
        alignSelf:"center",
        alignContent:"center",

        


    },
    input:{
        marginTop:20,
        width:200,
        height:40,
        backgroundColor:"white",
        alignSelf:"center",
        textAlign:"left",
        flexDirection:"row",
        borderRadius:10,
    },
    nextButton:{
        marginTop:20,
        backgroundColor:"#21B6A8",
        width:150,
        height:50,
        borderRadius:10,
        alignItems:"center",
        alignSelf:"center",
        justifyContent:"center",
        alignContent:"center",
    },
    nextText:{
        fontWeight:"bold",
        color:"white",
    },

});