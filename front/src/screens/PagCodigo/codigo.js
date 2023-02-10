// import React, { useRef, useState } from 'react';
// import styleCode from './styleCode';
 import { View, Text , TextInput} from 'react-native'
// import { FiraSans_500Medium, useFonts } from '@expo-google-fonts/fira-sans';

 export function CodeScreen({ navigation }){
    <View>
        <Text>Code</Text>
    </View>
 }

//   // const verificationScreen = ({
//   //   route: {
//   //     params: {phoneNumber}
//   //   }
//   // })

//   const firstInput = useRef();
//   const secondInput = useRef();
//   const thirdInput = useRef();
//   const fourthInput = useRef();
//   const [otp, setOtp] = useState({1: '', 2: '', 3:'', 4:''})

//   const [fonteLoaded] = useFonts({

//         FiraSans_500Medium,

//       });

//       if(!fonteLoaded){
//         return null;
//       }




// return(
//   <View style={styleCode.container}>
//      <Text style={styleCode.login}>Login</Text>


//      <View style={styleCode.opContainer}>
//       <View style={styleCode.otpText}>
//        <TextInput style={styleCode.otpText}>
//         keyboardType='numeric'
//         onChangeText={onChangePhone}
//         maxLength={1}
//         ref={firstInput}
//         onChangeText={text => {
//           text && firstInput.current.focus();
//          }}
//         />
//      </View>

//      <View style={styleCode.otpText}>
//       <TextInput
//         keyboardType='numeric'
//         onChangeText={onChangePhone}
//         maxLength={1}
//         ref={secondInput}
//         onChangeText={text => {
//           text && secondInput.current.focus();
//         }}
//       />
//       </View>
//      <View style={styleCode.otpText}>
//       <TextInput
//         keyboardType='numeric'
//         onChangeText={onChangePhone}
//         maxLength={1}
//         ref={thridInput}
//         onChangeText={text => {
//           text && thirdInput.current.focus();
//         }}
//       />
//      </View>
//      <View style={styleCode.otpText}>
//       <TextInput
//         keyboardType='numeric'
//         onChangeText={onChangePhone}
//         maxLength={1}
//         ref={fourthInput}
//         onChangeText={text => {
//           text && fourthInput.current.focus();
//         }}
//       />
//       </View>

//      </View>
     
//      </View>









// )}