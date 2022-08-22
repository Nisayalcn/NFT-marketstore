import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput , TouchableOpacity, Image,} from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState(undefined);
  return (
    <View style={styles.container}>
     
      
     <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Search..."
        value={text}
      />
    </View>
    
  );
}
const styles = StyleSheet.create({
input:{
    width:500,
    height:30,
    backgroundColor:"white",
    borderWidth:1,
    borderRadius:10,
    borderColor:"#ECECEC",
    justifyContent:"flex-start",
  
  },
});