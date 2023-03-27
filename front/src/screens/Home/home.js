import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
      source={require('/home/matheus/Área de Trabalho/mobile/front/assets/background-purple.jpeg')}
      style={styleHome.background}
      resizeMode="cover"
    >
    
      <View style={styleHome.container}>
      	 <View style={styleHome.buttonContainer}>
	    <TouchableOpacity style={styleHome.settingsButton} onPress={() => setModalVisible(true)}>
	      <MaterialIcons name="settings" size={30} color="#9370DB" />
	    </TouchableOpacity>
	    <TouchableOpacity style={styleHome.buttonNotification} onPress={() => {navigation.navigate('NotificationScreen')}}>
	      <MaterialIcons name="notifications" size={30} color="#9370DB" />
	    </TouchableOpacity>
      </View>

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
        <TouchableOpacity style={styleHome.option} onPress={() => {navigation.navigate('SupportScreen')}}>
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
          <Text style={styleHome.welcomeText}>Bem-vindo, Matheus!</Text>
          <View style={styleHome.iconContainer}>
          <LinearGradient
	  	start={{ x: 0, y: 1 }}
	  	end={{ x: 1, y: 0 }}
	  	colors={['#4B0082', '#8B008B', '#9370DB', '#D8BFD8']}
	  	style={styleHome.iconGradient}	
	  >
             <FontAwesome5 name="hand-holding-heart" size={60} color="#DADADA" />
             </LinearGradient>
          </View>
          <Text style={styleHome.messageText}>Venha conferir as novas vagas de hoje.</Text>
          <MaterialIcons style={styleHome.arrowIcon} name="arrow-downward" size={24} color="#6200ee" />
          <TouchableOpacity
	  style={styleHome.button} onPress={() => {navigation.navigate('SearchScreen')}}>
	  <View style={styleHome.buttonContent}>
	    <Icon name="briefcase" size={30} color="#9370DB" style={styleHome.buttonIcon} />
	    <Text style={styleHome.buttonText}>Ver vagas</Text>
	  </View>
	</TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
