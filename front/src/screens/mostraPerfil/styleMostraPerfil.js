import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styleJob from './styleJobDetails.js'


export function JobScreen({navigation}) {

 const job = {
    title: 'Desenvolvedor Front-end',
    location: 'Belo Horizonte',
    time: 'Horário Comercial',
    description: 'Desenvolvimento de interfaces de usuário utilizando React Native e demais ferramentas.Desenvolvimento de interfaces de usuário utilizando React Native e demais ferramentas.Desenvolvimento de interfaces de usuário utilizando React Native e demais ferramentas.Desenvolvimento de interfaces.',
    salary: 'R$ 5.000,00 a R$ 7.000,00',
    employer: {
      name: 'Nome do Empregador',
      picture: 'https://i.pravatar.cc/150'
    }
    }
	
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
 	<Image source={{ uri: job.employer.picture }} style={[styleJob.employerImage, { width: 80, height: 80, marginRight: 12 }]}/>
	    <Text style={styleJob.jobTitle}>{job.title}</Text>
  	</View>
          <Text style={styleJob.placeholder}>Localização</Text>
          <Text style={styleJob.detailsText}>{job.location}</Text>
        </View>
        <View style={styleJob.detailsContainer}>
          <Text style={styleJob.placeholder}>Horário</Text>
          <Text style={styleJob.detailsText}>{job.time}</Text>
        </View>
        <View style={styleJob.detailsContainer}>
          <Text style={styleJob.placeholder}>Descrição</Text>
          <Text style={styleJob.detailsText}>{job.description}</Text>
        </View>
        <View style={styleJob.detailsContainer}>
          <Text style={styleJob.placeholder}>Salário</Text>
          <Text style={styleJob.detailsText}>{job.salary}</Text>
        </View>
        <TouchableOpacity style={styleJob.applyButton}>
          <Text style={styleJob.applyButtonText}>Candidatar-se</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
