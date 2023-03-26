import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import stylePub from './stylePub.js';
import { LinearGradient } from 'expo-linear-gradient';

export function PubScreen() {

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

  const handleSubmit = () => {
    console.log('Título da Vaga:', titulo);
    console.log('Descrição da Vaga:', descricao);
    console.log('Local:', local);
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
    <TouchableOpacity style={stylePub.button} onPress={handleSubmit}>
      <Text style={stylePub.buttonText}>Enviar</Text>
    </TouchableOpacity>
  </View>
  </LinearGradient>
</View>
);
}
