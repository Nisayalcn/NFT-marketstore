import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, Text, View, TextInput , TouchableOpacity} from 'react-native';
export default function Thirth ({navigation}){
    const [text, onChangeText] = React.useState(undefined);
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.goBackButton} onPress={()=>navigation.goBack("Second")}>
                <Text style={styles.goBackText}>Go Back</Text>
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="Search..."
                value={text}
            />
            <View style={styles.containerClear}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Clear All </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButtonStyle} onPress={()=>navigation.navigate("Fifth")}>
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    
    );
}

const styles =StyleSheet.create({
    goBackButton:{
        backgroundColor:"#21B6A8",
        width:45,
        borderRadius:10,
        alignItems:"center",
        alignSelf:"center",
        justifyContent:"center",
        alignContent:"center",  
    },
    goBackText:{
        color:"white",
        justifyContent:"center",
        alignItems:"center",

    },

    container:{
        flex: 1,
        backgroundColor:"#ECECEC",
        alignItems:"center",
    },
    containerClear:{
        flex:1,
        flexDirection:"column",
        justifyContent:"flex-end",
    },
    buttonStyle:{
        backgroundColor:"#21B6A8",
        width:100,
        height:40,
        alignSelf:"center",
        justifyContent:"center",
        alignContent:"flex-end",
        borderRadius:10,
        marginBottom:40,
    },
    buttonText:{
        color:"white",
        fontSize:17,
        textAlign:"center",
        justifyContent:"center",
    },
    input:{
        marginTop:15,
        width:300,
        height:30,
        backgroundColor:"white",
        borderWidth:1,
        borderRadius:10,
        borderColor:"grey",
        justifyContent:"flex-start",
    },
    goBackButton:{
        alignSelf:"flex-start",
        marginLeft:10,
        marginTop:30,
        backgroundColor:"#21B6A8",
        width:60,
        borderRadius:10,
        height:30,
        justifyContent:"center",
        alignContent:"center",
        
    },
    goBackText:{
        fontWeight:"bold",
        color:"white",
    },
    nextButtonStyle:{
        backgroundColor:"#21B6A8",
        borderRadius:10,
        width:90,
        height:40,
        justifyContent:"center",
        alignItems:"center",
    },
    nextButtonText:{
        color:"white",
        fontWeight:"bold",
        fontSize:17,
    },
});

