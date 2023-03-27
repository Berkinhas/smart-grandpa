import React, { useState } from 'react';
import styleSupport from './styleSupport';
import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';
import { View, Text, TextInput, TouchableOpacity, Image, Button} from 'react-native'
import * as MailComposer from 'react-native-mail-composer';

export function SupportScreen({ navigation }){
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  function handleEmailSend() {
    MailComposer.composeAsync({
      recipients: ['techmindstart@gmail.com'],
      subject: subject,
      body: body
    });
  }

  return (
    <View style={styleSupport.header}>
      <TouchableOpacity 
	  style={ styleSupport.button}
	  onPress={handleEmailSend}
	>
	  <Text style={styleSupport.buttonText}>Send Email</Text>
	</TouchableOpacity>

    </View>
  );
}
