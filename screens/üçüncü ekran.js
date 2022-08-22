import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput , TouchableOpacity, Image} from 'react-native';
export default function Thirth ({navigation}) {
  const [text, onChangeText] = React.useState(undefined);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton}onPress={()=>navigation.goBack("Second")}>
        <Text style={styles.goBackText}>Go Back</Text>
      </TouchableOpacity>
      
     
      
     <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Search..."
        value={text}
      />
      <View>
      <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.buttonText}>Clear All </Text>

        
      </TouchableOpacity>
      </View>
      

    </View>
    
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#ECECEC",
    alignItems:"center",

  },
  buttonStyle:{
    backgroundColor:"#21B6A8",
    width:100,
    height:40,
    alignSelf:"center",
    justifyContent:"center",
    borderRadius:10,
    marginBottom:40,
  },
  buttonText:{
    color:"white",
    fontSize:17,
    fontWeight:"italic",
    textAlign:"center",
    justifyContent:"center",
  },
  input:{
    width:500,
    height:30,
    backgroundColor:"white",
    borderWidth:1,
    borderRadius:10,
    borderColor:"#ECECEC",
    justifyContent:"flex-start",

  },
  goBackButton:{
    marginTop:20,
    marginLeft:10,
    alignSelf:"flex-start",
    fontWeight:"bold",
  },
});