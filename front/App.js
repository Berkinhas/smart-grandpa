import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//TELAS DE NAVEGAÇÃO
import { LoginScreen } from './src/screens/SignIn/login';
import { RegisterScreen } from './src/screens/Register/registro'
import { OpScreen } from './src/screens/EntradaOp/op';
import { SenhaSreen } from './src/screens/Senha/recuperaSenha';
import { CodeScreen} from './src/screens/PagCodigo/codigo';

//TELAS TAB BOTTOM NAVIGATION
import { HomeScreen } from "./src/screens/Home/home"
import { SearchScreen } from "./src/screens/Search/search"
import { PubScreen } from "./src/screens/publication/pub"
import { ChatScreen } from "./src/screens/chat/chat"
import { NotficationScreen } from "./src/screens/notificacao/notificacao"
import { ProfileScreen } from "./src/screens/Profile/profile"




import React from 'react';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen}/>
      <Tab.Screen name='Search' component={SearchScreen}/>
      <Tab.Screen name='Publication' component={PubScreen}/>
      <Tab.Screen name='Chat' component={ChatScreen}/>
      <Tab.Screen name='Profile' component={ProfileScreen}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>      
    <Stack.Screen 
      name="LoginScreen" component={LoginScreen}
    />
    <Stack.Screen 
      name="RegisterScreen" component={RegisterScreen}
    />
    <Stack.Screen 
      name="OpScreen" component={OpScreen} 
    />
    <Stack.Screen 
      name="SenhaSreen" component={SenhaSreen}  
    />
    <Stack.Screen 
      name="CodeScreen" component={CodeScreen}  
    />
    <Stack.Screen 
      name="HomeScreen" component={Tabs}  
    />
    </Stack.Navigator>
    </NavigationContainer> 
  ); 

}
  
