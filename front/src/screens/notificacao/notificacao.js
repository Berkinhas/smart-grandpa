import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import styleNotificacao from './styleNotificacao.js';

const notificationsData = [
  {
    id: '1',
    title: 'Novo serviço agendado',
    message: 'Você tem um novo serviço agendado para amanhã às 14h.',
    date: '16/03/2023',
    read: false,
  },
  {
    id: '2',
    title: 'Feedback recebido',
    message: 'Seu último cliente deixou um feedback positivo.',
    date: '15/03/2023',
    read: true,
  },
  {
    id: '3',
    title: 'Novo cliente',
    message: 'Você tem um novo cliente agendado para a próxima semana.',
    date: '14/03/2023',
    read: true,
  },
];

export function NotificationScreen({navigation}) {

  const handleNotificationPress = (item) => {
    // Handle notification press
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styleNotificacao.notificationItem, item.read ? null : styleNotificacao.unreadNotification]}
      onPress={() => handleNotificationPress(item)}
    >
      <View style={styleNotificacao.notificationIconWrapper}>
        <Image style={styleNotificacao.notificationIcon} source={item.icon} />
      </View>
      <View style={styleNotificacao.notificationInfo}>
        <Text style={styleNotificacao.notificationTitle}>{item.title}</Text>
        <Text style={styleNotificacao.notificationMessage}>{item.message}</Text>
        <Text style={styleNotificacao.notificationDate}>{item.date}</Text>
      </View>
      <MaterialIcons name="chevron-right" size={24} color="#000" />
    </TouchableOpacity>
  );

  return (
    <View style={styleNotificacao.container}>
      <View style={styleNotificacao.header}>
        <TouchableOpacity style={styleNotificacao.backButton} onPress={() => {          
            navigation.navigate('HomeScreen')    }}>
          <MaterialIcons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styleNotificacao.screenTitle}>Notificações</Text>
        <View style={styleNotificacao.placeholderIcon} />
      </View>
      <FlatList
        data={notificationsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styleNotificacao.notificationsList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

