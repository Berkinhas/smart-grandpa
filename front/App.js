import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    //Login
    <View style={styles.container}>
      <Text>Login</Text>
      <StatusBar barStyle="dark-content" backgroundColor='transparent' translucent/>
    </View>
  );
}

//Estilização primeira pagina de login
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F3847',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
