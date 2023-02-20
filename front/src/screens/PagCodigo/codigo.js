import React, { useRef, useState } from 'react';
import styleCode from './styleCode';
import { View, Text , TextInput, StyleSheet} from 'react-native'
import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';

export function CodeScreen({ navigation }){

  // const verificationScreen = ({
  //   route: {
  //     params: {phoneNumber}
  //   }
  // })

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''})

  const [fonteLoaded] = useFonts({

        FiraSans_500Medium,

      });

      if(!fonteLoaded){
        return null;
      }




return(
  <View style={styleCode.container}>
     <Text style={styleCode.text}>Login</Text>


     <View style={styleCode.opContainer}>
      <View style={styleCode.otpBox}>
       <TextInput
        style={styleCode.otpText}
        keyboardType='default'
        maxLength={1}
        ref={firstInput}
        onChangeText={text => {
          setOtp({...otp, 1: text})
          text && secondInput.current.focus();
         }}
        />
     </View>

     <View style={styleCode.otpBox}>
      <TextInput
        style={styleCode.otpText}
        keyboardType='default'
        maxLength={1}
        ref={secondInput}
        onChangeText={text => {
          setOtp({...otp, 2: text})
          text ? thirdInput.current.focus() : firstInput.current.focus()
        }}
      />
      </View>
     <View style={styleCode.otpBox}>
      <TextInput
        style={styleCode.otpText}
        keyboardType='default'
        maxLength={1}
        ref={thirdInput}
        onChangeText={text => {
          setOtp({...otp, 3: text})
          text ? fourthInput.current.focus() : secondInput.current.focus()
        }}
      />
     </View>
     <View style={styleCode.otpBox}>
      <TextInput
        style={styleCode.otpText}
        keyboardType='default'
        maxLength={1}
        ref={fourthInput}
        onChangeText={text => {
          setOtp({...otp, 4: text})
          text ? fourthInput.current.focus() : thirdInput.current.focus()
        }}
      />
      </View>

     </View>
     
     </View>









)}