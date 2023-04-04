import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styleJob from './styleJobDetails.js'


export function JobScreen({navigation}) {

 const job = {
    title: 'Preciso de cuidador.',
    location: 'Contagem, Rua Porteira, 423',
    time: '09:00 até 16:00',
    description: 'Olá, sou um idoso de 85 anos e estou procurando um cuidador para me ajudar no dia a dia. Infelizmente, não tenho mais a mesma independência de antes e preciso de ajuda com tarefas básicas, como preparar refeições, limpar a casa e tomar banho. Gostaria de encontrar alguém gentil e atencioso, que possa me acompanhar em minhas atividades e conversar comigo, pois muitas vezes me sinto sozinho. Sou uma pessoa tranquila e agradável e espero encontrar alguém que possa me ajudar a viver com mais conforto e qualidade de vida.',
    salary: 'R$ 5.000,00 a R$ 7.000,00',
    employer: {
      name: 'José Alfredo',
      picture: 'https://img.freepik.com/fotos-gratis/velho-sorridente-com-oculos_23-2148740051.jpg?size=626&ext=jpg'
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
 	    <Text style={styleJob.jobTitle}>José Alfredo{"\n"}{job.title}</Text>
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
