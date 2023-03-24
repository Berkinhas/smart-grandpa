import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import stylePub from './stylePub.js';

export function PubScreen() {

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [local, setLocal] = useState('');
  const [horario, setHorario] = useState('');
  
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
    setHOrario(text);
  }

  const handleSubmit = () => {
    console.log('Título da Vaga:', titulo);
    console.log('Descrição da Vaga:', descricao);
    console.log('Local:', local);
  }

  return (
    <View style={stylePub.container}>
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
    <TouchableOpacity style={stylePub.button} onPress={handleSubmit}>
      <Text style={stylePub.buttonText}>Enviar</Text>
    </TouchableOpacity>
  </View>
</View>
);
}
