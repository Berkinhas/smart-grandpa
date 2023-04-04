import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import stylePub from './stylePub.js';
import { LinearGradient } from 'expo-linear-gradient';

import AsyncStorage from '@react-native-async-storage/async-storage';





export function PubScreen() {

  
  const criarPost = async (titulo, local, horario, descricao, salario) => {
    try {
      // recupere o token do AsyncStorage
      const token = await AsyncStorage.getItem('userToken');
      console.log(token)
      // faça a chamada à API de criação de postagem, passando o token como header
      const response = await api.post('/post/criar', {
        titulo: titulo,
        local: local,
        horario: horario,
        descricao: descricao,
        salario: salario 
      }, 
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
        
      });
  
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
    console.log('Título da Vaga:', titulo);
    console.log('Local da vaga:', local)
    console.log('Horário da vaga:', horario);
    console.log('Descrição da vaga;', descricao)
    console.log('Local:', local);
  }

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [local, setLocal] = useState('');
  const [horario, setHorario] = useState('');
  const [salario, setSalario] = useState('');
  
  const handleTituloChange = (text) => {
    setTitulo(text);
  }

  const handleDescricaoChange = (text) => {
    setDescricao(text);
  }

  const handleLocalChange = (text) => {
    setLocal(text);
  }
  
  const handleHorarioChange = (text) => {
    setHorario(text);
  }
  
  const handleSalarioChange = (text) => {
    setSalario(text);
  }

  return (
    <View style={stylePub.container}>
    <LinearGradient
        start={{ x: 0, y: 1 }}
  	end={{ x: 1, y: 0 }}
  	colors={['#DEB0DF', '#D5CBF8']}
	style={[stylePub.background, { flex: 1,}]}
      >
  <View style={stylePub.formContainer}>
    <Text style={stylePub.titulo}>Criar nova oportunidade</Text>
    <TextInput
      style={stylePub.input}
      placeholder="Título da vaga"
      placeholderTextColor="#9B9B9B"
      value={titulo}
      onChangeText={setTitulo}
    />
    <TextInput
      style={stylePub.input}
      placeholder="Local"
      placeholderTextColor="#9B9B9B"
      value={local}
      onChangeText={setLocal}
    />
    <TextInput
      style={stylePub.input}
      placeholder="Horário"
      placeholderTextColor="#9B9B9B"
      value={horario}
      onChangeText={setHorario}
    />
    <TextInput
      style={stylePub.inputDescricao}
      placeholder="Descrição da vaga"
      placeholderTextColor="#9B9B9B"
      value={descricao}
      onChangeText={setDescricao}
      multiline
    />
    <TextInput
      style={stylePub.input}
      placeholder="Salário"
      placeholderTextColor="#9B9B9B"
      value={salario}
      onChangeText={setSalario}
    />
    <TouchableOpacity style={stylePub.button} onPress={() => criarPost(titulo, local, horario, descricao, salario)}>
      <Text style={stylePub.buttonText}>Enviar</Text>
    </TouchableOpacity>
  </View>
  </LinearGradient>
</View>
);
}
