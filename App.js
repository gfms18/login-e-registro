import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <Image
          style={styles.imagem}
          source={{
            uri: 'https://thumbs.dreamstime.com/b/imagem-do-placeholder-perfil-silhueta-cinzenta-nenhuma-foto-127393523.jpg',
          }}
        />
      <TextInput style={styles.inputs}
        placeholder="Nome"
        placeholderTextColor="white"
        keyboardType="text"
        
      />

      <TextInput style={styles.inputs}
        placeholder="CPF"
        placeholderTextColor="white"
        keyboardType="text"
      />

      <TextInput style={styles.inputs}
        
        placeholder="E-mail"
        placeholderTextColor="white"
        keyboardType="text"
      />


      <Button style={styles.botao} color="purple" title="Salvar">

      </Button>

    </View>
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

  botao: {
    width: 300,
    
  },

  imagem: {
    borderRadius: 50,
    width: 200,
    height: 200,
    marginBottom: 50,

  },
  
});