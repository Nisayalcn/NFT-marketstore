import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/home"
import Giriş from "./screens/Giriş"
import Kayıt from "./screens/Kayıt"
import Second from "./screens/Second"
import Thirth from "./screens/Thirth"
import SeeallOne from './screens/SeeallOne';
import Password from './screens/Password';

const Stack = createNativeStackNavigator();

export default function App (){
  return (
    <NavigationContainer>
      
      <Stack.Navigator  screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Giriş"  component={Giriş}/>
        <Stack.Screen name= "Kayıt"component={Kayıt}/>
        <Stack.Screen name="Password" component={Password}/>
        <Stack.Screen name="Second" component={Second} />
        <Stack.Screen name="Thirth" component={Thirth}/>
        <Stack.Screen name="Fifth" component={SeeallOne}/>
  
      </Stack.Navigator>
    </NavigationContainer>
  );
};



