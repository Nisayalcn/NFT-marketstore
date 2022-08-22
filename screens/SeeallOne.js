import React,{useState, useEffect} from 'react';
import { SafeAreaView ,Text,Switch,View,FlatList,StyleSheet,TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faImagePortrait } from '@fortawesome/free-solid-svg-icons';
import { faPaintbrush } from '@fortawesome/free-solid-svg-icons';
import { faShirt } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faGuitar } from '@fortawesome/free-solid-svg-icons';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faBaseballBatBall } from '@fortawesome/free-solid-svg-icons';
import { faSignature } from '@fortawesome/free-solid-svg-icons';
import { faVrCardboard } from '@fortawesome/free-solid-svg-icons';
export default function SeeallOne({navigation}) {
    const data=[
        {id:0,name:"Art",isFavorite:true,icon:faPaintbrush},
        {id:1,name:"Game",isFavorite:false,icon:faGamepad},
        {id:2,name:"Music",isFavorite:true,icon:faGuitar},
        {id:3,name:"Photograph",isFavorite:false,icon:faCameraRetro},
        {id:4,name:"Fashion",isFavorite:true,icon:faShirt},
        {id:5,name:"collectibles",isFavorite:false,icon:faImage},
        {id:6,name:"Sports",isFavorite:false,icon:faBaseballBatBall},
        {id:7,name:"Domain Names",isFavorite:true,icon:faSignature},
        {id:8,name:"Virtual Worlds",isFavorite:false,icon:faVrCardboard},
    ];
    const[categoriesList, setCategoriesList] = useState(data);
    const[showOnlyFavorites, setShowOnlyFavorites] = useState(false);
    const[color,setColor]=useState(-1)
    useEffect(() => {
        if(showOnlyFavorites) {
            setCategoriesList(categoriesList.filter(categories=> categories.isFavorite == true))
        } else {
            setCategoriesList(data);
        }
    },[showOnlyFavorites]);
    return(
        <SafeAreaView style={styles.konteynir}>
            <TouchableOpacity style={styles.goBackButton} onPress={()=>navigation.goBack("Thirth")}> 
                <Text style={styles.goBackText}>Go Back</Text>
            </TouchableOpacity>
            <View style={styles.containerAll}>
                <Text style={styles.allText}>ALL CATEGORIES</Text>
            </View>
            <View style={styles.containerr}>
                <Text style={styles.firstText}>ONLY FAVORITES</Text>
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                <Switch value={showOnlyFavorites} onValueChange={() => setShowOnlyFavorites(!showOnlyFavorites)}/>
                <FlatList showsHorizontalScrollIndicator={false} horizontal data={categoriesList} renderItem={({item})=>
                    <TouchableOpacity style={{flexDirection:"row",fontSize:20,fontWeight:"bold",margin:10,borderRadius:10,backgroundColor:color === -1 ? "#ECECEC" : "#21B6A8"}} onPress={()=>setColor(1)} >
                        <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>
                        <Text style={{color:"#696969",justifyContent:"center"}}> {item.name}</Text>
                    </TouchableOpacity>}
                />
            
            </View>  
         
            <TouchableOpacity style={styles.nextButton}>
                <Text>next</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
    
    
    const styles=StyleSheet.create({
        konteynir:{
            flex:1,
        },
        containerAll:{
            justifyContent:"center",
            alignSelf:"center",
            alignItems:"center",
            alignContent:"center",

        },
        allText:{
            margin:20,
            marginBottom:10,
            fontWeight:"bold",
            fontSize:35,
            color:"#21B6A8",
            justifyContent:"center",

        },
        containerr:{
            flexDirection:"row",
            backgroundColor:"#ECECEC",
            marginTop:30,
            justifyContent:"center",
            alignContent:"center",
            alignSelf:"center",
            alignItems:"center",
        },
        goBackButton:{
            marginLeft:10,
            marginTop:30,
            backgroundColor:"#21B6A8",
            width:60,
            borderRadius:10,
            height:30,
        },
        goBackText:{
            marginLeft:3,
            marginTop:3,
            justifyContent:"center",
            fontWeight:"bold",
            color:"white",
        },
        firstText:{
            margin:20,
            marginBottom:10,
            fontWeight:"bold",
            fontSize:15,
            width:120,
            color:"#21B6A8",
            justifyContent:"center",
        },
        flatList:{
            marginLeft:20,
        },
        itemStyle:{
            fontSize:20,
            fontWeight:"bold",
            width:150,
            height:50,
            color:"#696969",
            justifyContent:"center",
    
    
        },
        nextButton:{
            backgroundColor:"#21B6A8",
            borderRadius:10,
            width:90,
            height:40,
            justifyContent:"center",
            alignItems:"center",
        },
    
    });