import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
          style={styles.imagem}
          source={{
            uri: 'https://thumbs.dreamstime.com/b/imagem-do-placeholder-perfil-silhueta-cinzenta-nenhuma-foto-127393523.jpg',
          }}
        />



       <TextInput style={styles.estilo}
        placeholder="Login"
        keyboardType="text"
        
      />


       <TextInput style={styles.estilo}
        placeholder="Senha"
        keyboardType="text"
        
      />
       <Button color="purple" title="Entrar">

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
  },

  estilo: {
    width: 300,
    borderWidth: 1,
    textAlign: "center",
    height: 35,
    marginBottom: 18,
    borderRadius: 8
  },

  botao: {
    width: 300
  },

  imagem: {
    borderRadius: 50,
    width: 200,
    height: 200,
    marginBottom: 50,

  }
  
});
