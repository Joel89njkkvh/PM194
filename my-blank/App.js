import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  ScrollView,
  Platform,
} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [comments, setComments] = useState('');
  const [age, setAge] = useState('');
  const [lastMessage, setLastMessage] = useState('');

  const showAlert = () => {
    const msg = `Nombre: ${name}\nEdad: ${age}\nComentarios: ${comments || 'Ninguno'}`;

    if (name.trim() === '' || password.trim() === '' || age.trim() === '') {
      if (Platform.OS === 'web') {
        setLastMessage('⚠️ Completa todos los campos obligatorios.');
      } else {
        Alert.alert('Campos obligatorios', 'Por favor, completa todos los campos obligatorios.');
      }
    } else {
      if (Platform.OS === 'web') {
        setLastMessage(`✅ Bienvenido\n${msg}`);
      } else {
        Alert.alert('¡Bienvenido!', msg);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nombre (normal):</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.title}>Contraseña (oculta):</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Text style={styles.title}>Edad (numérico):</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu edad"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <Text style={styles.title}>Comentarios (multilínea):</Text>
      <TextInput
        style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
        placeholder="Escribe tus comentarios"
        value={comments}
        onChangeText={setComments}
        multiline={true}
        numberOfLines={4}
      />

      <Text style={styles.title}>Campo solo lectura:</Text>
      <TextInput
        style={styles.input}
        value="Este campo no se puede editar"
        editable={false}
      />

      <View style={{ width: '100%', marginTop: 10 }}>
        <Button title="Mostrar alerta" onPress={showAlert} />
      </View>

      {Platform.OS === 'web' && !!lastMessage && (
        <Text style={styles.webMessage}>{lastMessage}</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 17,
    color: '#333',
    marginBottom: 6,
    alignSelf: 'flex-start',
  },
  input: {
    height: 44,
    borderColor: '#bbb',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '100%',
    fontSize: 15,
  },
  webMessage: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
  },
});
