import React,{useState}from 'react';
import{StyleSheet,SafeAreaView,Text,View,TouchableOpacity,Button}from 'react-native';

function App(){
    const[counter,setCounter]=useState(0);
    function increaseCounter(){
        setCounter(counter+1);

    }
    function decreaseCounter(){
        setCounter(counter-1);
    }
    return(
        <SafeAreaView>
            <Text style={{fontSize:25,color:"#605D5F",fontStyle:"bold"}}>Beğenilme:{counter}</Text>

            <TouchableOpacity style={styles.buttononeStyle}>
                 <Text style={styles.buttonText}>Beğen</Text>  
                onPress={increaseCounter}</TouchableOpacity>
            <TouchableOpacity style={styles.buttontwoStyle}>
                <Text style={styles.buttontextSpam}>SPAM</Text>
                onPress={decreaseCounter}</TouchableOpacity>
        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
  buttononeStyle: {
    backgroundColor:"#EA3497",
    width:25,
    height:5,
  },
  buttontwoStyle: {
    backgroundColor:"#1ABC9C",
    width:25,
    height:5,
  },
  buttonText:{
    fontStyle:"bold",

  },
  buttontextSpam:{
    fontStyle:"bold",
  },

});



