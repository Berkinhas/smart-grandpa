// import { StyleSheet, Text, View, StatusBar } from 'react-native';
 import 'react-native-gesture-handler';
//  import { NavigationContainer } from "@react-navigation/native";
 import { createStackNavigator } from "@react-navigation/stack";
// import Screen1 from "/home/matheus/Área de Trabalho/mobile/front/src/screens/login";
// import Screen2 from "/home/matheus/Área de Trabalho/mobile/front/src/screens/registro";
// import Screen3 from "/home/matheus/Área de Trabalho/mobile/front/src/screens/op";
import { LoginScreen } from './src/screens/login'
import { RegisterScreen } from './src/screens/registro'
import { OpScreen } from './src/screens/op'
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image} from 'react-native'



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen 
      name="l" 
      component={LoginScreen}
      options={{
        headerShown: false,
      }}  
    />
    <Stack.Screen 
      name="Register" 
      component={RegisterScreen}
      options={{
        headerShown: false,
      }} 
    />
    <Stack.Screen 
      name="op" 
      component={OpScreen} 
      options={{
        headerShown: false,
      }}
    />
    </Stack.Navigator>
    </NavigationContainer>
    
  );
  }


export default App;