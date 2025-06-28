import { StyleSheet, View, Text, ImageBackground, ScrollView } from "react-native";
import { useEffect, useState } from "react";

const texto = [];
for (let i=0; i<76; i++){
  texto.push(<Text >Hola Mundo</Text>);
}


export default function App(){
  return(
    <ScrollView contentContainerStyle={styles.background} showsVerticalScrollIndicator={false}>
        <View>{texto}</View>;
    </ScrollView>

  )

}

// 4. Estilos simples
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
  }
});