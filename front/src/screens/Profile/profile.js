import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styleProfile from './styleProfile.js';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';

export function ProfileScreen({ navigation }) {
    return (
    <ScrollView>
     <View style={styleProfile.container}>
      <View style={styleProfile.header}>
      	<LinearGradient
	  	start={{ x: 0, y: 1 }}
	  	end={{ x: 1, y: 0 }}
          	colors={['#9c27b0', '#ba68c8', '#ce93d8', '#e1bee7']}
	  	style={styleProfile.header}
	  >

          
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
        <Text style={styleProfile.idade}>19</Text>
        <Text style={styleProfile.location}>São Paulo, Brasil</Text>
      </LinearGradient>
      </View>
      
      
      
      <Image
        style={styleProfile.image}
        source={{ uri: 'https://images.unsplash.com/photo-1548698915-d33bc4a7ad17' }}
      />
    </View>
    </ScrollView>
  );
}
