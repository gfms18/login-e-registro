// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './telas/Login';
import cadastro from './telas/cadastro';
import lista from './telas/lista';
import addcontato from './telas/addcontato';
import alterar from './telas/alterar';
import { initializeApp } from "firebase/app";



const Stack = createNativeStackNavigator();

function App() {
  const firebaseConfig = {

    apiKey: "AIzaSyCwWJ10GTjgnQJ6CGJqBcYyTvC5Ha0nF_w",
  
    authDomain: "appreactgabriel.firebaseapp.com",
  
    projectId: "appreactgabriel",
  
    storageBucket: "appreactgabriel.appspot.com",
  
    messagingSenderId: "592904592031",
  
    appId: "1:592904592031:web:b7f87229f13dcb1411e0aa"
  
  };
  

  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={login} options={{ headerShown: false }} />
        <Stack.Screen name="cadastro" component={cadastro} options={{ headerShown: false }} />
        <Stack.Screen name="lista" component={lista} options={{ headerShown: false }} />
        <Stack.Screen name="addcontato" component={addcontato} options={{ headerShown: false }} />
        <Stack.Screen name="alterar" component={alterar} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;