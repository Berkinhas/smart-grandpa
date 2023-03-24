import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styleProfile from './styleProfile.js';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function ProfileScreen({navigation}) {
    return (
    <ScrollView>
      <View style={styleProfile.container}>
        <View style={styleProfile.header}>
          <TouchableOpacity style={styleProfile.editButton} onPress={() => {          
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

        <View style={styleProfile.background}></View>

        <Image
          style={styleProfile.image}
          source={{ uri: 'https://images.unsplash.com/photo-1548698915-d33bc4a7ad17' }}
        />
      </View>
    </ScrollView>
  );
}
