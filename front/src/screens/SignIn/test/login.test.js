import {Button, Text, TextInput, View} from 'react-native'
import {render, screen, fireEvent} from '@testing-library/react-native'
import React from 'react'
import { LoginScreen } from '../login'

test('the component rendered', () => {
    //escrever o teste
    render(<LoginScreen/>)
})