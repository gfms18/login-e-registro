import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { ListItem, Avatar } from 'react-native-elements'

const list = [{ name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' }, {    name: 'Chris Jackson',    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',    subtitle: 'Vice Chairman'  },]

export default function App({ navigation }) {
    return (
        <SafeAreaProvider>

            <View>
                <Header
                    style={styles.input}

                    centerComponent={{ text: 'Lista de contatos', style: { color: '#fff' } }}
                    rightComponent={
                        <Button  
                        title="+"
                        onPress={()=>navigation.navigate('addcontato')}
                        ></Button>}/>

                



            </View>

            <View>  {list.map((l, i) => (<ListItem key={i} bottomDivider>    <Button onPress={()=>navigation.navigate('alterar')} title='Alterar'></Button>    <Avatar source={{ uri: l.avatar_url }} />        <ListItem.Content>          <ListItem.Title>{l.name}</ListItem.Title>          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>        </ListItem.Content>      </ListItem>))}</View>

            
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