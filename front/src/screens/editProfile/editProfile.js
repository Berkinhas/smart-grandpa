import React, { useState, useEffect } from 'react';
import { Button, Image, Platform, View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { Ionicons} from '@expo/vector-icons';
import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';
import styleEditProfile from './editProfileStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
import api from '/home/matheus/Área de Trabalho/mobile/front/src/api/index.js'
import { IconButton } from 'react-native-paper';



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
  
    
      
    
    
    const pickDocument = async () => {
      let result = await DocumentPicker.getDocumentAsync({});
      console.log(result.uri);
      console.log(result);
    };

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
	navigation.goBack()
          
        }}>
	  <MaterialIcons name="arrow-back" size={24} color="#FFF" style={styleEditProfile.editIcon} />
	</TouchableOpacity>
   <View style={styleEditProfile.container}>
    <View style={styleEditProfile.header}>
    <View>
    <View>
      <IconButton icon={() => <MaterialIcons name="photo-camera" size={24} />} onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
    </View>
      <Text style={styleEditProfile.name}>Jao</Text>
      <Text style={styleEditProfile.title}>Médico Cirurgião</Text>
      <Text style={styleEditProfile.location}>São Paulo, Brasil</Text>
    </View>
    <Image
      style={styleEditProfile.image}
      source={{ uri: 'https://images.unsplash.com/photo-1548698915-d33bc4a7ad17' }}
    />
    <View>
    <TouchableOpacity>
        <Button
          title="upload your file"
          color="black"
          onPress={pickDocument}
        />
    </TouchableOpacity>
    </View>
  </View>
  </ScrollView>
);
}
