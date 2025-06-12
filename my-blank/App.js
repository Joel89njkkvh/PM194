//ZONA 1----Importaciones

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React,{useState} from 'react';

const Texto=(props) => {
  const {children}=props
  return(
  <Text>{children}</Text>
  )
};


//ZONA 2----Main(Ejecucion)
export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Tlajaba!!"></Button>
      <Texto >Hola</Texto>
      <Texto >Mundo</Texto>
      <Texto >React Native</Texto>

      <StatusBar style="auto" />  
    </View>
  );
}


//ZONA 3----Estilos, estetica del screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});