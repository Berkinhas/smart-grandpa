import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import styleSearch from "./styleSearch.js"
import { LinearGradient } from 'expo-linear-gradient';
import api from '/Users/lesle/OneDrive/Área de Trabalho/smart-grandpa-main/front/src/api/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

export function SearchScreen({navigation}) {

  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [perfilFotoUrl, setPerfilFotoUrl] = useState('');
  const [local, setLocal] = useState('');

  const carregarFotoPerfil = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await api.get('/perfil/foto', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setPerfilFotoUrl(response.data.key);
      console.log(response.data.key)
    } catch (error) {
      console.error(error.response.data);
    }
  }

  useEffect(() => {
    carregarFotoPerfil();
  }, []);



  useEffect(() => {
    fetchPosts(local);
  }, [local]);
  
  function fetchPosts(local) {
    AsyncStorage.getItem('userToken').then(token => {
      api.get(`/post/?cidade=${local}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        console.log(response.data); // verificar os dados retornados
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    });
  }

  function fetchPostById(_id) {
    AsyncStorage.getItem('userToken').then(token => {
      api.get(`/post/${_id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        console.log(response.data); // verificar os dados retornados
        navigation.navigate('JobScreen', { postId: response.data._id });
      })
      .catch(error => {
        console.log(error);
      });
    });
  }

  function filterPosts(local) {
    const filtered = posts.filter(post => post.local === local);
    setFilteredPosts(filtered);
  }

  return (
    <View style={styleSearch.container}>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        colors={['#DEB0DF', '#D5CBF8']}
        style={[styleSearch.background, { flex: 1,}]}
      >
        <View style={styleSearch.header}>
          <Text style={styleSearch.title}>Oportunidades</Text>       
        </View>
        <TextInput
            style={styleSearch.filtro}
            placeholder="Digite a localização desejada"
            value={local}
            onChangeText={setLocal}
          />
          
        <Text style={styleSearch.totalJobs}>{posts.length} vagas disponíveis</Text>
        {posts.length === 0 ? (
          <View style={styleSearch.noJobsContainer}>
            <Text style={styleSearch.noJobsText}>No job postings available.</Text>
          </View>
        ) : (
          <ScrollView contentContainerStyle={styleSearch.jobsContainer}>
            {posts.filter(post => !local || post.local.toLowerCase().includes(local.toLowerCase())).map((post, index) => (
              <TouchableOpacity style={styleSearch.jobCard} key={index} onPress={() => fetchPostById(post._id)}>
                <View style={styleSearch.logoContainer}>
                <View style={styleSearch.logoContainer}>
                  <Image source={perfilFotoUrl ? { uri: perfilFotoUrl } : require('/Users/lesle/OneDrive/Área de Trabalho/smart-grandpa-main/front/assets/user_job.png')} style={perfilFotoUrl ? styleSearch.logo : styleSearch.logo} />
                </View>
                </View>
                 <View style={styleSearch.jobDetails}>
                  <Text style={styleSearch.jobTitle}>{post.titulo}</Text>
                  <Text style={styleSearch.jobCompany}>Local: {post.local}</Text>
                  <Text style={styleSearch.salario}>Salario: {post.salario}</Text>

                </View> 
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </LinearGradient>
    </View>
  )
}
