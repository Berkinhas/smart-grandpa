import React, { useState, useEffect } from 'react';
import { Button, Image, Platform, View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { Ionicons} from '@expo/vector-icons';
import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';
import styleEditProfile from './editProfileStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
import api from '/home/matheus/Área de Trabalho/mobile/front/src/api/index.js'
import { IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import * as DocumentPicker from 'expo-document-picker';


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

    const [name, setName] = useState("Jao"); // valor inicial igual ao nome atual
    const [location, setLocation] = useState("SP"); // valor inicial igual ao nome atual
    const [age, setAge] = useState("19"); // valor inicial igual ao nome atual
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

const [singleFile, setSingleFile] = useState('');

  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

return (

 
    <View style={styleEditProfile.container}>

      <View style={styleEditProfile.header}>
      	
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={['#9c27b0', '#ba68c8', '#ce93d8', '#e1bee7']}
          style={styleEditProfile.header}
        >
          <View>
	      <TouchableOpacity
	      style={styleEditProfile.editButton}
	      onPress={() => {
		navigation.goBack();
	      }}
	    	>
	      <MaterialIcons name="arrow-back" size={24} color="#FFF" style={styleEditProfile.editIcon} />
	    </TouchableOpacity>
            <View>
            <TouchableOpacity>
	  	
	    	  <Text style={styleEditProfile.editSalvar}>Salvar</Text>
	  	
	    </TouchableOpacity>
              <IconButton style={styleEditProfile.imageIcon} icon={() => <MaterialIcons name="photo-camera" size={50} color="white" />} onPress={pickImage} />
              {image && <Image source={{ uri: image }} style={styleEditProfile.profileImage}  />}
            </View>
          </View>
        </LinearGradient>
        <View style={styleEditProfile.inputContainer}>
          <Ionicons name="person" size={24} style={styleEditProfile.icon} />
          <TextInput
            style={styleEditProfile.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styleEditProfile.inputContainer}>
          <Ionicons name="calendar" size={24} style={styleEditProfile.icon} />
          <TextInput
            style={styleEditProfile.input}
            placeholder="Age"
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
          />
        </View>
        <View style={styleEditProfile.inputContainer}>
          <Ionicons name="location" size={24} style={styleEditProfile.icon} />
          <TextInput
            style={styleEditProfile.input}
            placeholder="Location"
            value={location}
            onChangeText={setLocation}
          />
        </View>
      </View>
      <View>
	<TouchableOpacity style={styleEditProfile.document}>
	  <Button
	    title="Enviar seu curriculo"
	    color="#8B5FBF"
	    onPress={pickDocument}
	    
	  />
	</TouchableOpacity>
        
      </View>
    </View>

);
}
