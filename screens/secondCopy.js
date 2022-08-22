import React,{useState, useEffect} from 'react';
import{StyleSheet,Modal,Alert,View,TextInput, Text,Image, StatusBar, SafeAreaView,TouchableOpacity,FlatList,ScrollView, Pressable} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faImagePortrait } from '@fortawesome/free-solid-svg-icons';
import { faPaintbrush } from '@fortawesome/free-solid-svg-icons';
import { faShirt } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faGuitar } from '@fortawesome/free-solid-svg-icons';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function Second({navigation}) {
  const [text, onChangeText] = useState();
  
  const Categories=[{name:"All",icon:faGlobe,path:"Fifth"},{name:"Art",icon:faPaintbrush,path:"Fifth"},{name:"Game",icon:faGamepad,path:"Fifth"},
  {name:"Music",icon:faGuitar,path:"Fifth"},{name:"Fashion",icon:faShirt,path:"Fifth"},{name:"Photograph",icon:faCameraRetro,path:"Fifth"}];
  const[selectedImgCat,setSelectedImgCat]=useState({

  })
  const dataPopularBids=[
    {name:"img1",path:require("../assets/image1.jpg")},
    {name:"img2",path:require("../assets/image2.jpg")},
    {name:"img3",path:require("../assets/image3.jpg")},
    {name:"img4",path:require("../assets/image4.jpg")},
    {name:"img5",path:require("../assets/image5Robots.png")},
];
  const[modalVisible,setModalVisible]=useState(false);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer} >
        <TouchableOpacity style={styles.goBackButton} onPress={()=>navigation.goBack("Giriş")}> 
          <Text style={styles.geridonButton}>Go Back</Text>
        </TouchableOpacity>
      </View>  
      <View style={styles.containerZero}>
        <TouchableOpacity >
          <FontAwesomeIcon icon={faBarsStaggered}></FontAwesomeIcon>
        </TouchableOpacity>
        <TouchableOpacity >
          <FontAwesomeIcon icon={faImagePortrait}></FontAwesomeIcon>
        </TouchableOpacity>
      </View>

      

    <View style={styles.containerOne}>
      <TouchableOpacity style={styles.mGlassIcon}> 
        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Search..."
        value={text}
      />
      <TouchableOpacity style={styles.microphonButton}>
        <FontAwesomeIcon icon={faMicrophone}></FontAwesomeIcon>
      </TouchableOpacity>
     
    </View>
      
      <View style={styles.containerTwo}>
        <Text style={styles.textStyle}>Hot Categories</Text>
        <TouchableOpacity style={styles.buttonStyle} >
          <Text style={styles.buttonTextStyle}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerThree}>
        <Text style={styles.text2Style}>Popular Bids</Text>
        <TouchableOpacity>
          <Text style={styles.buttonText2SStyle}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerFour}>
        <FlatList showsHorizontalScrollIndicator={false} horizontal data={Categories} renderItem={({item})=>
            <TouchableOpacity  style={styles.first} onPress={()=>navigation.navigate(item.path)}>
              <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>
              <Text style={styles.firstText}> {item.name}</Text>
           </TouchableOpacity>}
        />
      </View>
      <View style={styles.imgContainer}>
        <FlatList showsHorizontalScrollIndicator={false} horizontal data={dataPopularBids}
        renderItem={({item})=>
        
        <TouchableOpacity onPress={()=>setModalVisible(true)}>
          <Image style={{ height:300, marginTop: 10, margin: 5, width:300, resizeMode: "contain" }} 
          source={item.path}/>

        </TouchableOpacity>}
        />
      </View>
      <View style={styles.modalStyle}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=>{
          Alert.alert("Selected NFT has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>PRICE:3.5 ETH </Text>
            <Pressable style={styles.pressable} onPress={()=>setModalVisible(!modalVisible)}>
              <Text>Hide</Text>

            </Pressable>
            

          </View>

        </View>

        </Modal>
      </View>
      <View style={styles.cont}>
        <TouchableOpacity style={styles.nextButton} onPress={()=>navigation.navigate("Thirth")}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );

}
const styles = StyleSheet.create({
  goBackButton:{
    marginLeft:10,
    marginTop:30,
    backgroundColor:"#21B6A8",
    width:60,
    borderRadius:10,
    height:30,
    

  },
  containerZero:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:40,
    paddingBottom:20,
    paddingTop:20,
   
  },
  container:{ //secondcontainer,
    backgroundColor:"#ECECEC", //all page
  },
  geridonButton:{
    marginLeft:3,
    marginTop:3,
    justifyContent:"center",
    fontWeight:"bold",
    color:"white",
  },
  containerOne:{
    height:40,
    justifyContent:"center",
    
  },
  input:{
    width:200,
    height:40,
    backgroundColor:"white",
    borderRightWidth:2,
    borderColor:"#616161",
    alignSelf:"center",
    textAlign:"left",
    flexDirection:"row",
  },
  mGlassIcon:{

    marginLeft:498,
    marginBottom:20,
    backgroundColor:"white",
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    width:40,
    height:40,
    justifyContent:"center",
    alignItems:"center",
    marginBottom:40,
  },
  microphonButton:{
    marginRight:500,
    marginBottom:20,
    backgroundColor:"white",
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    width:40,
    height:40,
    justifyContent:"center",
    alignItems:"center",
    marginBottom:40,

  },
  textStyle:{
    color:"#21B6A8",
    fontSize:25,
    fontWeight:"bold",
  },
  containerTwo:{

    backgroundColor:"#EEEFEF",
    flexDirection:'row',
    justifyContent:"space-between",
    paddingHorizontal: 25
  },
  buttonStyle:{
    alignSelf:"flex-end",
    justifyContent:"center",
  },
  buttonTextStyle:{
    fontSize:15,
  },
  containerThree:{
    backgroundColor:"#EEEFEF",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:25,
    marginTop:20,
  },
  text2Style:{
    fontWeight:"bold",
    alignSelf:"flex-start",
    fontSize:25,
  },
  buttonText2Style:{
    fontSize:15,
  },
  containerFour:{
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:"#EEEFEF",
  },
  first:{
    backgroundColor:"#DBE0E0",
    width:150,
    height:35,
    borderRadius:15,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    paddingRight:15,
    marginRight:30,
  },
  firstText:{
    fontSize:15,
    paddingRight:30,
  },
  second:{
    backgroundColor:"#DBE0E0",
    width:100,
    height:35,
    borderRadius:15,
    flexDirection:"row",
    justifyContent:"flex-end",
    alignItems:"center",
    marginLeft:20,
  },
  secondText:{
    fontSize:15,
    paddingRight:8,
  },
  thirth:{
    backgroundColor:"#DBE0E0",
    width:100,
    height:35,
    borderRadius:15,
    flexDirection:"row",
    justifyContent:"flex-end",
    alignItems:"center",
    marginRight:25,
  },
  thirtText:{
    fontSize:15,
    paddingRight:20,
  },
  forth:{ 
    backgroundColor:"#DBE0E0",
    width:100,
    height:35,
    borderRadius:15,
    flexDirection:"row",
    justifyContent:"flex-end",
    alignItems:"center",
    paddingRight:15,
  },
  forthText:{
    fontSize:15,
    paddingRight:13,
  },
  fifth:{
    backgroundColor:"#DBE0E0",
    width:130,
    height:35,
    borderRadius:15,
    flexDirection:"row",
    justifyContent:"flex-end",
    alignItems:"center",
    paddingRight:15,
    marginRight:30,
  },
  fifthText:{
    fontSize:13,
  },
  cont:{
    flex:1,
    justifyContent:"flex-end",
  },
  nextButton:{
    marginTop:20,
    backgroundColor:"#21B6A8",
    width:90,
    height:40,
    borderRadius:10,
    alignItems:"center",
    alignSelf:"center",
    justifyContent:"center",
    alignContent:"center",    
  },
  nextText:{
    color:"white",
    fontWeight:"bold",

  },
  allButtonStyle:{
    backgroundColor:"#DBE0E0",
    width:100,
    height:35,
    borderRadius:15,
    flexDirection:"row",
    justifyContent:"flex-end",
    alignItems:"center",
    marginLeft:20,
  },
  imgContainer:{
    backgroundColor:"#CCCDCD",
    margin:5,
    borderRadius:5,

  },
  sallersText:{
    fontWeight:"bold",
    alignSelf:"flex-start",
    fontSize:25,
    paddingHorizontal:25,

  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor:"#21B6A8",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#ECECEC",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width:0,
      height:2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    height:40,
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor:"#21B6A8",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
});