import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button , TouchableOpacity, Image} from 'react-native';
import { TextInput } from 'react-native-web';


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Search Your Best</Text>
      <Text style={styles.text2Style}>NFT Market Place</Text>
      <Text style={styles.text3Style}>Here!</Text>
      <Text style={styles.text4Style}>Let's find the best NFT and we provide</Text>
      <Text style={styles.text5Style}>many catagories you want.</Text>

      
  
      <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate("Giriş")}> 
        <Text style={styles.buttonText}>Next </Text>
      </TouchableOpacity>
    
   
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems:"center",

  },
buttonStyle:{
  backgroundColor:"#21B6A8",
  width:90,
  height:40,
  alignSelf:"center",
  justifyContent:"center",
  borderRadius:10,
},

textStyle:{
color:"#262C2B",
textAlign:"center",
fontStyle:"normal",
fontWeight:"bold",
fontSize:35,

},
text2Style:{
  color:"#262C2B",
  textAlign:"center",
  fontStyle:"normal",
  fontWeight:"bold",
  fontSize:35,
},
text3Style:{
  color:"#262C2B",
  textAlign:"center",
  fontStyle:"normal",
  fontWeight:"bold",
  fontSize:35,
},
text4Style:{
  color:"#C2C2C2",
  fontSize:15,
  fontWeight:"bold",
  marginTop:20,
},
text5Style:{
  color:"#C2C2C2",
  fontSize:15,
  fontWeight:'bold',
  marginBottom:30,
},
buttonText:{
  color:"#ECECEC",
  fontSize:17,
  fontWeight:"bold",
  textAlign:"center",
  textAlignVertical:"center",
},
});