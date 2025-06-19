import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import React, { useState } from 'react';

const Texto = ({ style }) => {
  const [contenido, setContenido] = useState("Hola Mundo RNative");
  const actualizarTexto = () => { setContenido('Estado actualizado del Text') };
  return (
    <Text style={[styles.text, style]} onPress={actualizarTexto}>
      <View style={{margin: 10 }}>
        <Text style={[styles.text, style]}>{contenido}</Text>
        <Button title='actualizarTexto'onPress={actualizarTexto} color='purple'></Button>
      </View>
    </Text>
  );
};


export default function App() {
  return (
    <View style={styles.container}>
    
      <Texto     style={styles.red} />
      <Texto     style={styles.blue} />
      <Texto     style={styles.green} />
      <StatusBar style="auto" />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:      'baseline',
    justifyContent:  'center', 
    flexDirection:   'row-reverse',
  },
  text: {
    color: "white",
    fontSize: 20,
    // padding:  10,
    // margin:   10,
    // textAlign: 'center',
  },
  red:   { backgroundColor: 'red'},
  blue:  { backgroundColor: 'blue' ,},
  green: { backgroundColor: 'green',},
});
