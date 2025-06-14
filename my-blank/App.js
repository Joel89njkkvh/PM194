import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const Texto = ({ style }) => {
  const [contenido, setContenido] = useState("Hola Mundo RNative");
  const actualizarTexto = () => { setContenido('Estado actualizado del Text') };
  return (
    <Text style={[styles.text, style]} onPress={actualizarTexto}>
      {contenido}
    </Text>
  );
};

const Boton = () => {
  const [boton, setBoton] = useState("Tlajaba!!");
  const cambiarBoton = () => { setBoton("Deja Tlajaba!!") };
  return (
    <Button title={boton} onPress={cambiarBoton} />
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Boton /> */}
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
