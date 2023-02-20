import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from './src/screens/SignIn/login'
import { RegisterScreen } from './src/screens/Register/registro'
import { OpScreen } from './src/screens/EntradaOp/op'
import { SenhaSreen } from './src/screens/Senha/recuperaSenha';
import { CodeScreen} from './src/screens/PagCodigo/codigo';
import { NavigationContainer } from '@react-navigation/native';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      
    <Stack.Screen 
      name="LoginScreen" 
      component={LoginScreen}
      options={{
        headerShown: false,
      }}  
    />
    <Stack.Screen 
      name="RegisterScreen" 
      component={RegisterScreen}
      options={{
        headerShown: false,
      }} 
    />
    <Stack.Screen 
      name="OpScreen" 
      component={OpScreen} 
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen 
      name="SenhaSreen" 
      component={SenhaSreen}
      options={{
        headerShown: false,
      }}  
    />
    <Stack.Screen 
      name="CodeScreen" 
      component={CodeScreen}
      options={{
        headerShown: false,
      }}  
    />
    </Stack.Navigator>
    </NavigationContainer>
    
  );
  }
  
