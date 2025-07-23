// Importa el hook useEffect, que se usa para ejecutar efectos secundarios (como redirecciones)
import { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
// Importa el hook useRouter de expo-router para manejar navegación programática
import { useRouter } from "expo-router";

// Define el componente funcional de la pantalla de carga
export default function LoadingScreen() {
  // Obtiene el objeto router, que permite redirigir a otras pantallas
  const router = useRouter();

  // useEffect se ejecuta una vez al montar el componente
  useEffect(() => {
    // Simula un proceso de carga (como verificar token, sesión, etc.)
    const timeout = setTimeout(() => {
      // Reemplaza la pantalla actual con "/login" (evita regresar a la pantalla de carga)
      router.replace("/login");
    }, 2000); // Espera de 2 segundos (2000 ms)

    // Limpia el temporizador si el componente se desmonta antes de terminar
    return () => clearTimeout(timeout);
  }, []);

  // UI: muestra un spinner de carga y un mensaje mientras espera
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0024D3" />
      <Text style={styles.text}>Cargando...</Text>
    </View>
  );
}

// Estilos para centrar el contenido y definir apariencia
const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa todo el alto disponible
    justifyContent: "center", // centra verticalmente
    alignItems: "center", // centra horizontalmente
  },
  text: {
    marginTop: 20,
    fontSize: 16,
  },
});
