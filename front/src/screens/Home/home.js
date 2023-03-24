import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { Modal } from 'react-native';

import styleHome from './styleHome.js' 


export function HomeScreen({ navigation }) {

  const [modalVisible, setModalVisible] = React.useState(false);

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
      	 <TouchableOpacity style={styleHome.settingsButton} onPress={() => setModalVisible(true)}>
  		<MaterialIcons name="settings" size={30} color="white" />
	 </TouchableOpacity>
	 <TouchableOpacity style={styleHome.buttonNotification} onPress={() => {          
            navigation.navigate('NotificationScreen')    }}>
  		<MaterialIcons name="notifications" size={30} color="white" />
	 </TouchableOpacity>
<Modal animationType="fade" visible={modalVisible}>
  <View style={styleHome.modalContainer}>
    <TouchableOpacity onPress={() => setModalVisible(false)} style={styleHome.closeButton}>
      <MaterialIcons name="close" size={24} color="white" />
    </TouchableOpacity>
    <View style={styleHome.modalContent}>
      <Text style={styleHome.modalTitle}>Configurações</Text>
      <Text style={styleHome.modalDescription}>O que deseja fazer (nome)?</Text>
      <View style={styleHome.optionsContainer}>
        <TouchableOpacity style={styleHome.option}>
          <MaterialIcons name="logout" size={24} color="black" />
          <Text style={styleHome.optionText}>Log out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleHome.option}>
          <MaterialIcons name="help" size={24} color="black" />
          <Text style={styleHome.optionText}>Assistência</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleHome.option}>
          <MaterialIcons name="description" size={24} color="black" />
          <Text style={styleHome.optionText}>Termos e condições</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => setModalVisible(false)} style={styleHome.backButton}>
        <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        <Text style={styleHome.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>


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
