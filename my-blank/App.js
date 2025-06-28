import { StyleSheet, View, Text, Button, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const simularCarga = () => {
    setLoading(true);
    setMensaje('');
    setTimeout(() => {
      setLoading(false);
      setMensaje('Carga Completa');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carga</Text>

      {loading ? (
        <>
          <ActivityIndicator size="large" color="#209CDB" />
          <Text>Cargando...</Text>
        </>
      ) : (
        <>
          <Button title="Iniciar Carga" onPress={simularCarga} />
          {mensaje !== '' && <Text style={styles.mensaje}>{mensaje}</Text>}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
  mensaje: {
    marginTop: 20,
    fontSize: 20,
    color: 'green',
    fontWeight:'bold',
  },
});
