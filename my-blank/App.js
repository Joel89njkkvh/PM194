//ZONA 1----Importaciones

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React, { useState } from 'react';

const Texto = (props) => {
  const [contenido, setContenido] = useState("Hola Mundo RNative");
  const actualizarTexto = () => { setContenido('Estado actualizado del Text') };
  return (
    <Text onPress={actualizarTexto}>{contenido}</Text>
  );
};

const Boton = () => {
  const [boton, setBoton] = useState("Tlajaba!!");
  const cambiarBoton = () => { setBoton("Deja Tlajaba!!") };
  return (
    <Button title={boton} onPress={cambiarBoton} />
  );
};


//ZONA 2----Main(Ejecucion)

export default function App() {
  return (
    <View style={styles.container}>
      <Boton />
      <Texto > </Texto>
      <Texto > </Texto>
      <Texto > </Texto>

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
