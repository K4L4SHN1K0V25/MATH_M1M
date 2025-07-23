// Importa React, necesario para crear componentes funcionales en React Native
import React from "react";
import { View, Text, Button } from "react-native";
// Importa el hook useRouter de expo-router para hacer navegación programática
import { useRouter } from "expo-router";

// Define el componente funcional HomeScreen, que representa una pantalla
export default function SignInScreen() {

  // Obtiene el objeto router que se usa para navegar entre pantallas
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pon tus datos</Text>
      <Button
        title="Regresar"
        onPress={() => router.replace("/login")}
      />
    </View>
  );
}