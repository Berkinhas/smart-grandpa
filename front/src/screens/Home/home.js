import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

import styleHome from './styleHome.js' 


export function HomeScreen({ navigation }) {

       const [email, onChangeEmail] = React.useState('');
       const [senha, setPassword] = React.useState('');
       const [hidePass, setHidePass] = React.useState(true);
       const [fonteLoaded] = useFonts({
      FiraSans_500Medium,

      });
  
  if(!fonteLoaded){
    return null;    
  }
  

  
  
  return(
    <ImageBackground
      source={require('/home/matheus/Área de Trabalho/mobile/front/assets/peakpx.jpg')}
      style={styleHome.background}
      resizeMode="cover"
    >
      <View style={styleHome.container}>
        <View style={styleHome.textContainer}>
          <Text style={styleHome.welcomeText}>Bem-vindo (nome)!</Text>
          <View style={styleHome.iconContainer}>
           
          </View>
          <Text style={styleHome.messageText}>Venha conferir as novas vagas de hoje.</Text>
          <MaterialIcons style={styleHome.arrowIcon} name="keyboard-arrow-down" size={24} color="#6200ee" />
          <Button style={styleHome.button} mode="contained" onPress={() => console.log('Pressed')} color="black">
            Ver Vagas
            
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
}
