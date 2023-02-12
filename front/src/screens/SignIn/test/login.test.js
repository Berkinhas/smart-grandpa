import {Button, Text, TextInput, View} from 'react-native'
import {render, screen, fireEvent} from '@testing-library/react-native'
import React from 'react'
import { LoginScreen } from '../login'
import { TouchableOpacity } from 'react-native-gesture-handler'

test('verifica se o botão foi clicado', () => {
    //escrever o teste
   //btn-eye = botão de olho da senha
   //btn-enter = botão para entrar
   //btn-remember = botão esqueci a senha
   //btn-enter-facebook = botão para entrar pelo facebook
   //btn-enter-google = botão para entrar pelo google
   //btn-no-user = botão para ir para o cadastro

    getByText('botão clicado!')
})