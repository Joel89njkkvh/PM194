import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Texto = ({ contenido }) => {
  return <Text style={styles.text}>{contenido}</Text>;
};

export default function App() {
  return (
    <View style={styles.container}>
      <Texto contenido="hola mundo react native" />
      <BotonPersonalizado titulo="presionar" accion={() => alert('¡Botón presionado!')} />
      <StatusBar style="auto" />
    </View>
  );
}

const BotonPersonalizado = ({ titulo, accion }) => {
  return <Button title={titulo} onPress={accion} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
