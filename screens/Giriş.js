import React,{useState, useEffect} from 'react';
import{StyleSheet,View,TextInput, Text,Image, StatusBar, SafeAreaView,TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
export default function Giriş({navigation}) {
    const[text,onChangeText]=useState();
    const[textTwo,onChangeTextTwo]=useState();
    const[open,setopen]=useState(true);
    const[color,setColor]=useState(-1);
    return(
        <SafeAreaView style={styles.containerZero}>
            <View style={styles.container}>
                <TouchableOpacity style={{ backgroundColor:color===-1?"white":"#21B6A8",borderTopLeftRadius:10,borderBottomLeftRadius:10,width:150,height:40,alignItems:"center",justifyContent:"center",borderWidth:2,borderColor:"white"}} onPress={()=>setColor(1)}>
                    <Text style={{fontWeight:"bold",color:color===1?"white":"grey"}}>Existing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTwo} onPress={()=>navigation.navigate("Kayıt")}>
                    <Text style={styles.textTwo}>New</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.envelopeIcon}>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder="  E-mail"
                    value={text}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.lockIcon}>
                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                </TouchableOpacity>  
            </View>
            <View style={styles.inputContainerTwo}>
                <TextInput
                    style={styles.inputTwo}
                    onChangeText={onChangeTextTwo}
                    placeholder="  Password...."
                    value={textTwo}
                    secureTextEntry={open}
                />
                <TouchableOpacity style={styles.eyeSlashIcon} onPress={()=>setopen(!open)}>
                    <FontAwesomeIcon icon={open ===true?faEyeSlash:faEye}></FontAwesomeIcon>
                </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.nextButtonStyle} onPress={()=>navigation.navigate("Second")}>
                <Text style={styles.nextText}>LOG IN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Password")}>
                <Text style={{color:"white",fontWeight:"bold",marginTop:10}}>Forgot Password?</Text>
            </TouchableOpacity>
        </SafeAreaView> 

    );
}
const styles = StyleSheet.create({
    containerZero:{
        flex:1,
        backgroundColor:"#21B6A8",
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        alignSelf:"center",
    },
    container:{
        width:400,
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        alignSelf:"center",
    },
   
    buttonTwo:{
        backgroundColor:"white",
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        width:150,
        height:40,
        justifyContent:"center",
        alignItems:"center",
    },
    textTwo:{
        fontWeight:"bold",
    },
    inputContainer:{
        justifyContent:"space-between",
    },
    input:{
        width:200,
        height:40,
        backgroundColor:"white",
        alignSelf:"center",
        textAlign:"left",
        flexDirection:"row",
      },
      envelopeIcon:{
        marginTop:20,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
      },
      lockIcon:{
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        

      },
      inputContainerTwo:{
        flexDirection:"row",
        justifyContent:"space-between",

      },
      eyeSlashIcon:{
        flexDirection:"row",
        backgroundColor:"white",
        justifyContent:"center",
        alignSelf:"flex-end",
        alignItems:"center",
        borderBottomRightRadius:10,
        height:40,
        width:30,
        
      },
      inputTwo:{
        width:170,
        height:40,
        backgroundColor:"white",
        alignSelf:"flex-start",
        textAlign:"left",
        flexDirection:"row",
        borderBottomLeftRadius:10,

      },
    nextButtonStyle:{
        marginTop:20,
        backgroundColor:"white",
        width:90,
        height:40,
        borderRadius:10,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        alignSelf:"center",
    },
    nextText:{
        color:"#21B6A8",
        fontWeight:"bold",

    },
});