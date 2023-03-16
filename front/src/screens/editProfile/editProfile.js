import React, { useState, useEffect } from 'react';
import { Button, Image, Platform, View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { Ionicons} from '@expo/vector-icons';
import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';
import styleEditProfile from './editProfileStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
import api from '/Users/usuario/Desktop/smart-grandpa-main/front/src/api/index.js'

async function userFoto(image) {
  try {
    const response = await api.post('/perfil/foto', {
      image: image,
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data; // retorna os dados do usuário no caso de sucesso
  } catch (error) {
    console.error(error.response.data);
  }
}


export function EditProfileScreen({ navigation }) {


    const [image, setImage] = useState(null);
  
    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };
  

return (
  <ScrollView>
    
    <TouchableOpacity style={styleEditProfile.editButton} onPress={() =>        {          
            navigation.navigate('ProfileScreen')
          
        }}>
	  <MaterialIcons name="arrow-back" size={24} color="#FFF" style={styleEditProfile.editIcon} />
	</TouchableOpacity>
   <View style={styleEditProfile.container}>
    <View style={styleEditProfile.header}>
    <View>
      <Button style={styleEditProfile.buttonContainer} title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styleEditProfile.image} />}
    </View>
      <Text style={styleEditProfile.name}>Dr. João da Silva</Text>
      <Text style={styleEditProfile.title}>Médico Cirurgião</Text>
      <Text style={styleEditProfile.location}>São Paulo, Brasil</Text>
    </View>
    <View style={styleEditProfile.contact}>
      <Text style={styleEditProfile.contactTitle}>Contato</Text>
      <TouchableOpacity>
        <Text style={styleEditProfile.contactInfo}>joaosilva@gmail.com</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styleEditProfile.contactInfo}>(11) 9999-9999</Text>
      </TouchableOpacity>
    </View>
    <View style={styleEditProfile.bio}>
      <Text style={styleEditProfile.bioTitle}>Sobre mim</Text>
      <Text style={styleEditProfile.bioText}>
        Médico cirurgião formado pela Universidade de São Paulo, com mais de 10 anos de experiência
        em cirurgias complexas. Especializado em cirurgias minimamente invasivas e técnicas
        avançadas de reconstrução.
      </Text>
    </View>
    <View style={styleEditProfile.skills}>
      <Text style={styleEditProfile.skillsTitle}>Habilidades</Text>
      <View style={styleEditProfile.skillsList}>
        <TouchableOpacity style={styleEditProfile.skillButton}>
          <Text style={[styleEditProfile.skillText, styleEditProfile.skillButtonSelected]}>
            Cirurgia Geral
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleEditProfile.skillButton}>
          <Text style={styleEditProfile.skillText}>Cirurgia Vascular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleEditProfile.skillButton}>
          <Text style={styleEditProfile.skillText}>Cirurgia Plástica</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleEditProfile.skillButton}>
          <Text style={styleEditProfile.skillText}>Cirurgia Robótica</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleEditProfile.skillButton}>
          <Text style={styleEditProfile.skillText}>Cirurgia Oncológica</Text>
        </TouchableOpacity>
      </View>
    </View>
    <Image
      style={styleEditProfile.image}
      source={{ uri: 'https://images.unsplash.com/photo-1548698915-d33bc4a7ad17' }}
    />
  </View>
  </ScrollView>
);
}