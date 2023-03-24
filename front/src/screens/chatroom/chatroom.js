import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import styleChatRoom from './styleChatRoom';

const notificationsData = [
  {
    id: '1',
    title: 'Amanda te mandou uma mensagem',
    message: 'Online',
    date: '16/03/2023',
    read: false,
  },
  {
    id: '2',
    title: 'Wanderson te mandou uma mensagem',
    message: 'Visto última vez a 2 anos atrás',
    date: '15/03/2021',
    read: true,
  },
  {
    id: '3',
    title: 'Jacinto te mandou uma mensagem',
    message: 'Morto',
    date: '14/03/2009',
    read: true,
  },
];

export function ChatRoomScreen({ navigation }) {

  const handleNotificationPress = (item) => {
    // Handle notification press
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styleChatRoom.notificationItem, item.read ? null : styleChatRoom.unreadNotification]}
      onPress={() => handleNotificationPress(item)}
    >
      <View style={styleChatRoom.notificationIconWrapper}>
        <Image 
          style={styleChatRoom.notificationIcon} 
          source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f01db52-f675-48dc-9c91-f245d99f1486/d2nqynw-af694fd2-e1ba-4e9c-badb-630a48474599.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmMDFkYjUyLWY2NzUtNDhkYy05YzkxLWYyNDVkOTlmMTQ4NlwvZDJucXludy1hZjY5NGZkMi1lMWJhLTRlOWMtYmFkYi02MzBhNDg0NzQ1OTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.59_LN0TnrsDrVLS266jLpfZZfte_OZeNGkNQFJzgQCM' }} 
        />
      </View>
      <View style={styleChatRoom.notificationInfo}>
        <Image 
            style={styleChatRoom.notificationIcon} 
            source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f01db52-f675-48dc-9c91-f245d99f1486/d2nqynw-af694fd2-e1ba-4e9c-badb-630a48474599.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmMDFkYjUyLWY2NzUtNDhkYy05YzkxLWYyNDVkOTlmMTQ4NlwvZDJucXludy1hZjY5NGZkMi1lMWJhLTRlOWMtYmFkYi02MzBhNDg0NzQ1OTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.59_LN0TnrsDrVLS266jLpfZZfte_OZeNGkNQFJzgQCM' }} 
          />
        <Text style={styleChatRoom.notificationTitle}>{item.title}</Text>
        <Text style={styleChatRoom.notificationMessage}>{item.message}</Text>
        <Text style={styleChatRoom.notificationDate}>{item.date}</Text>
      </View>
      <MaterialIcons name="chevron-right" size={24} color="#000" />
    </TouchableOpacity>
  );

  return (
    <View style={styleChatRoom.container}>
      <View style={styleChatRoom.header}>
        <TouchableOpacity style={styleChatRoom.backButton} onPress={() => navigation.navigate('HomeScreen')}>
          <MaterialIcons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styleChatRoom.screenTitle}>Suas conversas</Text>
        <View style={styleChatRoom.placeholderIcon} />
      </View>
      <FlatList
        data={notificationsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styleChatRoom.notificationsList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

