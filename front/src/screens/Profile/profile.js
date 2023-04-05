import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styleProfile from './styleProfile.js';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '/Users/lesle/OneDrive/Área de Trabalho/smart-grandpa-main/front/src/api/index'
import * as ImagePicker from 'expo-image-picker';


export function ProfileScreen({ navigation }) {

  const [userData, setUserData] = useState({});
  const [token, setToken] = useState(null);
  const [image, setImage] = useState(null);

  const [userPerfil, setUserPerfil] = useState(null);

  const saveUserPerfil = async (perfil) => {
    try {
      await AsyncStorage.setItem(
        'userPerfil',
        JSON.stringify({ ...perfil, photo_url: null })
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  const getUserPerfil = async () => {
    try {
      const perfilString = await AsyncStorage.getItem('userPerfil');
      const perfilJson = JSON.parse(perfilString);
      setUserPerfil(perfilJson);
      console.log('Informações do perfil do usuário recuperadas do AsyncStorage: ', perfilJson);
      // busca a URL da imagem no AsyncStorage e exibe a imagem correspondente
      if (perfilJson.photo_url) {
        setImage(perfilJson.photo_url);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getUserPerfil();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    
      const formData = new FormData();
      formData.append('file', {
        uri: result.uri,
        type: 'image/jpeg',
        name: 'photo.jpg',
      });
      const token = await AsyncStorage.getItem('userToken');
      api.post('/perfil/foto', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }).then(response => {
        console.log(response.data);
        // atualiza o valor do campo "photo_url" no AsyncStorage
        setUserPerfil({ ...userPerfil, photo_url: response.data.photo_url });
        saveUserPerfil({ ...userPerfil, photo_url: response.data.photo_url });
      }).catch(error => {
        console.log(error.response.data);
      });
    };
  }

  useEffect(() => {
    async function getToken() {
      const userToken = await AsyncStorage.getItem('userToken');
      setToken(userToken);
    }
    getToken();
  }, []);


 useEffect(() => {
  async function fetchUserData() {
    try {
      const response = await api.get('/perfil/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchUserPhoto() {
    try {
      const response = await api.get(`/perfil/foto/${userData.key}`, {
        responseType: 'arraybuffer',
      });
      const base64Image = Buffer.from(response.data, 'binary').toString('base64');
      setImage(`data:image/jpeg;base64,${base64Image}`);
    } catch (error) {
      console.error(error);
    }
  }

  if (token) {
    fetchUserData();
  }

  if (userData.photo_url) {
    setImage(userData.photo_url);
  } else if (userData.photo_key) {
    fetchUserPhoto();
  }
}, [token, userData.photo_key, userData.photo_url]);



    return (

     <View style={styleProfile.container}>
      <View style={styleProfile.header}>
      	<LinearGradient
	  	start={{ x: 0, y: 1 }}
	  	end={{ x: 1, y: 0 }}
          	colors={['#9c27b0', '#ba68c8', '#ce93d8', '#e1bee7']}
	  	style={styleProfile.header}
	  >
          <TouchableOpacity onPress={pickImage}>
            {image ? (
              <Image style={styleProfile.profileImage} source={{ uri: image }} />
            ) : (
              <Image
                style={styleProfile.profileImage}
                source={require('/Users/lesle/OneDrive/Área de Trabalho/smart-grandpa-main/front/assets/user_job.png')}
              />
            )}
          </TouchableOpacity>
        <Text style={styleProfile.name}>{userPerfil && userPerfil.nome}</Text>
        <Text style={styleProfile.idade}>{userPerfil && userPerfil.sobrenome}</Text>
        <Text style={styleProfile.location}>São Paulo, Brasil</Text>
      </LinearGradient>
      </View>
      
            <View style={styleProfile.documentContainer}>
        <Text style={styleProfile.documentText}>Documento:</Text>
        <Text style={styleProfile.documentName}>Currículo.pdf</Text>
        <TouchableOpacity style={styleProfile.updateButton}>
          <Text style={styleProfile.updateText}>Deseja atualizar seu currículo?</Text>
        </TouchableOpacity>
      </View>
      
     
    </View>
  
  );
}
