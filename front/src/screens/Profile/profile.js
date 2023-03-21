import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styleProfile from './styleProfile.js';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function ProfileScreen({ navigation }) {
    return (
    <ScrollView>
     <View style={styleProfile.container}>
      <View style={styleProfile.header}>
      	<TouchableOpacity style={styleProfile.editButton} onPress={() =>        {          
            navigation.navigate('EditProfileScreen')
          
        }}>
	  <MaterialIcons name="edit" size={24} color="#FFF" style={styleProfile.editIcon} />
	</TouchableOpacity>
        <Image
          style={styleProfile.profileImage}
          source={{ uri: 'https://images.unsplash.com/photo-1519681393784-d120267933ba' }}
        />
        <Text style={styleProfile.name}>Dr. João da Silva</Text>
        <Text style={styleProfile.title}>Médico Cirurgião</Text>
        <Text style={styleProfile.location}>São Paulo, Brasil</Text>
      </View>
      <View style={styleProfile.contact}>
        <Text style={styleProfile.contactTitle}>Contato</Text>
        <TouchableOpacity>
          <Text style={styleProfile.contactInfo}>joaosilva@gmail.com</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styleProfile.contactInfo}>(11) 9999-9999</Text>
        </TouchableOpacity>
      </View>
      <View style={styleProfile.bio}>
        <Text style={styleProfile.bioTitle}>Sobre mim</Text>
        <Text style={styleProfile.bioText}>
          Médico cirurgião formado pela Universidade de São Paulo, com mais de 10 anos de experiência
          em cirurgias complexas. Especializado em cirurgias minimamente invasivas e técnicas
          avançadas de reconstrução.
        </Text>
      </View>
      <View style={styleProfile.skills}>
        <Text style={styleProfile.skillsTitle}>Habilidades</Text>
        <View style={styleProfile.skillsList}>
          <TouchableOpacity style={styleProfile.skillButton}>
            <Text style={[styleProfile.skillText, styleProfile.skillButtonSelected]}>
              Cirurgia Geral
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styleProfile.skillButton}>
            <Text style={styleProfile.skillText}>Cirurgia Vascular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styleProfile.skillButton}>
            <Text style={styleProfile.skillText}>Cirurgia Plástica</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styleProfile.skillButton}>
            <Text style={styleProfile.skillText}>Cirurgia Robótica</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styleProfile.skillButton}>
            <Text style={styleProfile.skillText}>Cirurgia Oncológica</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        style={styleProfile.image}
        source={{ uri: 'https://images.unsplash.com/photo-1548698915-d33bc4a7ad17' }}
      />
    </View>
    </ScrollView>
  );
}
