import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styleJob from './styleJobDetails.js'
import { useRoute } from '@react-navigation/native';
import api from '/Users/lesle/OneDrive/Área de Trabalho/smart-grandpa-main/front/src/api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function JobScreen({navigation}) {
  const [job, setJob] = useState({});
  const [user, setUser] = useState({});
  const route = useRoute();
  const postId = route.params.postId;

  async function getPostById(_id) {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const postResponse = await api.get(`/post/${_id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setJob(postResponse.data);
      
      const userId = postResponse.data.usuario._id;
      
      const userProfileResponse = await api.get(`/perfil/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setUser({
        nome: userProfileResponse.data.nome,
        foto: userProfileResponse.data.foto
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPostById(postId)
      .then(response => {
        console.log(response.data); // verificar os dados retornados
        setJob(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [postId]);

  return (
    <ScrollView>
      <View style={styleJob.header}>
        <TouchableOpacity style={styleJob.iconback} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#FFF" />
        </TouchableOpacity>
        <Text style={styleJob.headerTitle}>{job.title}</Text>
        <View style={{ width: 28 }} />
      </View>
      <View style={styleJob.content}>
        <View style={styleJob.detailsContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={user.photo ? { uri: user.foto } : require('/Users/lesle/OneDrive/Área de Trabalho/smart-grandpa-main/front/assets/user_job.png')}
            style={[styleJob.employerImage, { width: 80, height: 80, marginRight: 12 }]}
          />
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Text style={styleJob.jobName}>{user.nome}</Text>
              <Text style={styleJob.jobTitle}>{job.titulo}</Text>
            </View>
          </View>
          <Text style={styleJob.placeholder}>Localização</Text>
          <Text style={styleJob.detailsText}>{job.local}</Text>
        </View>
        <View style={styleJob.detailsContainer}>
          <Text style={styleJob.placeholder}>Horário</Text>
          <Text style={styleJob.detailsText}>{job.horario}</Text>
        </View>
        <View style={styleJob.detailsContainer}>
          <Text style={styleJob.placeholder}>Descrição</Text>
          <Text style={styleJob.detailsText}>{job.descricao}</Text>
        </View>
        <View style={styleJob.detailsContainer}>
          <Text style={styleJob.placeholder}>Salário</Text>
          <Text style={styleJob.detailsText}>{job.salario}</Text>
        </View>
        <TouchableOpacity style={styleJob.applyButton}>
          <Text style={styleJob.applyButtonText}>Candidatar-se</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};