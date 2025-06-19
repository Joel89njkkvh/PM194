import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import React, { useState } from 'react';

const Interruptor = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text>{isEnabled ? 'Activado' : 'Desactivado'}</Text>

      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const Texto = ({ style }) => {
  const [contenido, setContenido] = useState("Hola Mundo RNative");
  const actualizarTexto = () => { setContenido('Estado actualizado del Text') };

  return (
    <View style={{ margin: 10 }}>
      <Text style={[styles.text, style]}>{contenido}</Text>
      <Button title='Actualizar Texto' onPress={actualizarTexto} color='purple' />
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Interruptor />
      <Texto style={styles.red} />
      <Texto style={styles.blue} />
      <Texto style={styles.green} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'baseline',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  red: { backgroundColor: 'red' },
  blue: { backgroundColor: 'blue' },
  green: { backgroundColor: 'green' },
});
