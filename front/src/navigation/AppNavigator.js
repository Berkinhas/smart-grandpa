// navegação entre telas
// import { createStackNavigator } from 'react-navigation-stack';
// import LoginScreen from '/home/matheus/Área de Trabalho/mobile/front/src/screens/login';
// import RegistroScreen from '/home/matheus/Área de Trabalho/mobile/front/src/screens/registro';
// import OpScreen from '/home/matheus/Área de Trabalho/mobile/front/src/screens/op';


const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Registro: {
    screen: RegistroScreen,
  },
  Opcao: {
    screen: OpScreen,
  }
});

export default AppNavigator;