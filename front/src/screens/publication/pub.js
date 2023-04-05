import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import stylePub from './stylePub.js';
import { LinearGradient } from 'expo-linear-gradient';
import api from '/Users/lesle/OneDrive/Área de Trabalho/smart-grandpa-main/front/src/api/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import CurrencyInput from 'react-native-currency-input';





export function PubScreen() {

  const formatHorario = (text) => {
    const regex = /^(\d{2}):(\d{2}) até (\d{2}):(\d{2})$/
    if (regex.test(text)) {
      return text
    }
    const formattedText = text
      .replace(/[^0-9:]/g, '')
      .replace(/([0-9]{2})([0-9]{2})/, '$1:$2 até ')
    if (formattedText.length > 13) {
      return formattedText.slice(0, 13)
    }
    return formattedText
  }

  const formatSalario = (text) => {
    const formattedText = text.replace('.', ',')
    if (formattedText.startsWith('R$')) {
      return formattedText
    }
    return `R$${formattedText}`
  }



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
      onChangeText={(text) => setHorario(formatHorario(text))}
    />
    <TextInput
      style={stylePub.inputDescricao}
      placeholder="Descrição da vaga"
      placeholderTextColor="#9B9B9B"
      value={descricao}
      onChangeText={setDescricao}
      multiline
    />
    <CurrencyInput
        style={stylePub.input}
        placeholder="Salário"
        value={salario}
        onChangeValue={setSalario}
        unit="R$"
        delimiter="."
        separator=","
        precision={2}
      />
    <TouchableOpacity style={stylePub.button} onPress={() => criarPost(titulo, local, horario, descricao, salario)}>
      <Text style={stylePub.buttonText}>Enviar</Text>
    </TouchableOpacity>
  </View>
  </LinearGradient>
</View>
);
}