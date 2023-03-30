import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';

//TELAS DE NAVEGAÇÃO
import { LoginScreen } from './src/screens/SignIn/login';
import { RegisterScreen } from './src/screens/RegisterCommom/registro'
import { OpScreen } from './src/screens/EntradaOp/op';
import { SenhaSreen } from './src/screens/Senha/recuperaSenha';
import { CodeScreen} from './src/screens/PagCodigo/codigo';
import { RegisterCarevigerScreen } from './src/screens/RegisterCareviger/RegisterCareviger.js'
import { EditProfileScreen } from './src/screens/editProfile/editProfile.js'
import { ChatScreen } from './src/screens/chat/chat.js'
import { RecuperarSenhaScreen } from './src/screens/recuperaSenha/recuperaSenha.js'
import { JobScreen } from './src/screens/jobDetails/jobDetails.js'


//TELAS TAB BOTTOM NAVIGATION
import { ChatRoomScreen } from "./src/screens/chatroom/chatroom"
import { HomeScreen } from "./src/screens/Home/home"
import { SearchScreen } from "./src/screens/Search/search"
import { PubScreen } from "./src/screens/publication/pub"
import { NotificationScreen } from "./src/screens/notificacao/notificacao"
import { ProfileScreen } from "./src/screens/Profile/profile"




import React from 'react';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity 
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow
    }}
    onPress={onPress}
  >
    <View style={{
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: '#663399'
    }}>
      {children}
    </View>
  </TouchableOpacity>

)

function Tabs(){
  return(
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffffff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow
        }
      }}
    
    >
      <Tab.Screen name='Home' component={HomeScreen} options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
            <Image
              source={require('./assets/botao-de-inicio.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#663399': '#748c94'
              }}
            />
            <Text
            style={{color: focused ? '#663399' : '#748c94', fontSize:12 }}
            
            >
            Home  
            </Text>
          </View>
        ),
      }}/>
      <Tab.Screen name='SearchScreen' component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('./assets/search-interface-symbol.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#663399' : '#748c94'
                }}
              />
              <Text
              style={{color: focused ? '#663399' : '#748c94', fontSize:12 }}
              
              >
                Procurar
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name='Publication' component={PubScreen}
        options={{
          tabBarIcon: ({focused}) => (
        
            <Image
              source={require('./assets/plus.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: "#fff"
              }}
            />
          ),
          
          tabBarButton: (props) => (
            <CustomTabBarButton {...props}/>
            
          )
          
        }}
        
      />
      <Tab.Screen name='ChatRoomScreen' component={ChatRoomScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('./assets/chat.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#663399' : '#748c94'
                }}
              />
              <Text
              style={{color: focused ? '#663399' : '#748c94', fontSize:12 }}
              
              >
              Chat
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name='ProfileScreen' component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('./assets/user.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#663399' : '#748c94'
                }}
              />
              <Text
              style={{color: focused ? '#663399' : '#748c94', fontSize:12 }}
              
              >
              Perfil  
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>      
    <Stack.Screen 
      name="HomeScreen" component={Tabs}
    />
    <Stack.Screen 
      name="OpScreen" component={OpScreen}
    />
    <Stack.Screen 
      name="RegisterCarevigerScreen" component={RegisterCarevigerScreen}
    />
    <Stack.Screen 
      name="RegisterScreen" component={RegisterScreen} 
    />
    <Stack.Screen 
      name="SenhaSreen" component={SenhaSreen}  
    />
    <Stack.Screen 
      name="CodeScreen" component={CodeScreen}  
    />
    <Stack.Screen 
      name="RecuperarSenhaScreen" component={RecuperarSenhaScreen}
    />
    <Stack.Screen 
      name="LoginScreen" component={LoginScreen}  
    />
    <Stack.Screen 
      name="ProfileScreen" component={ProfileScreen}  
    />
    <Stack.Screen 
      name="EditProfileScreen" component={EditProfileScreen}
    />
    <Stack.Screen 
      name="NotificationScreen" component={NotificationScreen}
    />
    <Stack.Screen 
      name="SearchScreen" component={SearchScreen}
    />
    <Stack.Screen 
      name="JobScreen" component={JobScreen}
    />
    </Stack.Navigator>
    </NavigationContainer> 
  ); 

}
