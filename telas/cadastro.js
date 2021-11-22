import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';



export default function App({ navigation }) {
  function cadastrofirebase() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        console.log('funfo dnv')
        const user = userCredential.user;
        navigation.navigate('login')
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  const[email, setEmail] = useState('')
  const[senha, setSenha] = useState('')
  return (
    <SafeAreaProvider>

      <View>
        <Header
          style={styles.input}
          leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
          centerComponent={{ text: 'Login de usuario', style: { color: '#fff' } }}
          rightComponent={
            <Button
              title="voltar"
              onPress={() => navigation.navigate('login')}
            ></Button>} />


        <Image
          style={styles.imagem}
          source={{
            uri: 'https://thumbs.dreamstime.com/b/imagem-do-placeholder-perfil-silhueta-cinzenta-nenhuma-foto-127393523.jpg',
          }}
        />

        <Input placeholder='Nome'/>
        <Input placeholder='CPF' />
        <Input placeholder='Email' value={email} onChangeText={email=> setEmail(email)} />
        <Input placeholder='Senha' value={senha} onChangeText={senha => setSenha(senha)} />
        <Button title='Salvar' onPress={()=>{cadastrofirebase()}}></Button>









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
    backgroundColor: "rgb(35, 9, 70)"
  },

  inputs: {
    width: 300,
    borderWidth: 1,
    textAlign: "center",
    height: 35,
    marginBottom: 18,
    borderRadius: 8,
    borderColor: "white",
    color: "rgb(0, 255, 21)"

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