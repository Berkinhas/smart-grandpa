import React, { useState } from 'react';
import styleSupport from './styleSupport';
import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';
import { View, Text, TextInput, TouchableOpacity, Image, Button, Alert} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

export function SupportScreen({ navigation }){

const [message, setMessage] = useState('');

const handleSendMail = async () => {
  if (message.trim() !== '') {
    MailComposer.composeAsync({
      recipients: ['techmindstart@gmail.com'],
      subject: 'Suporte',
      body: message,
    }).then(result => {
      if (result.status === 'sent') {
        setMessage('');
        Alert.alert('Obrigado! Nós iremos analisar seu problema rapidamente.', '', [
          {
            text: 'OK',
            onPress: () => navigation.navigate('HomeScreen'),
          },
        ]);
      }
    });
  } else {
    Alert.alert('Por favor, escreva seu problema antes de enviar.');
  }
};

  return (
    <View style={styleSupport.container}>
      <View style={styleSupport.titleContainer}>
        <MaterialIcons name="support" size={24} color="white" />
        <Text style={styleSupport.title}>Assistência e Suporte</Text>
      </View>
      <View style={styleSupport.supportIcon}>
       <MaterialIcons name="headset-mic" size={200} color="#9370DB" />
      </View>
      <View style={styleSupport.feedbackContainer}>
        <Text style={styleSupport.feedbackLabel}>Escreva seu problema:</Text>
        <TextInput
          style={styleSupport.feedbackInput}
          placeholder="Escreva aqui"
          multiline
          value={message}
          onChangeText={text => setMessage(text)}
        />
        <TouchableOpacity style={styleSupport.button} onPress={handleSendMail}>
          <Text style={styleSupport.buttonText}>Enviar e-mail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

