import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


export default function App({navigation}) {
  return (
    <SafeAreaProvider>

        <View>
          <Header
            style={styles.input}
            leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
            centerComponent={{ text: 'Login de usuario', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            
          />


          <Image
              style={styles.imagem}
              source={{
                uri: 'https://thumbs.dreamstime.com/b/imagem-do-placeholder-perfil-silhueta-cinzenta-nenhuma-foto-127393523.jpg',
              }}
            />
         
         <Input  placeholder='Login'/>
         <Input  placeholder='Senha'/>
          


          <Button style={styles.botao1} onPress={()=>navigation.navigate('lista')} color="blue" title="login"></Button>
          <Button style={styles.botao2} onPress={()=>navigation.navigate('cadastro')} color="red" title="Cadastrar"></Button>
          

          

        </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"rgb(35, 9, 70)" 
  },

  inputs: {
    width: 300,
    borderWidth: 1,
    textAlign: "center",
    height: 35,
    marginBottom: 18,
    borderRadius: 8,
    borderColor: "white",
    color:"rgb(0, 255, 21)"
    
  },

  fraseinput: {
    color: "white"
  },

  botao1: {
    width: 300,
    marginBottom: 40
  },

  botao2: {
    width: 300,
    
  },

  imagem: {
    borderRadius: 50,
    width: 200,
    height: 200,
    marginBottom: 50,

  },
  
});