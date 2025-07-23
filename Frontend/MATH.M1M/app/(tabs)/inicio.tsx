// Importa React, necesario para definir componentes funcionales
import React from "react";
import { View, Text } from "react-native";
// Importa un botón personalizado que probablemente tú creaste
// El botón usa navegación de expo-router internamente
import TabButton from "@/components/TabButtonNavigation";

// Define el componente de pantalla principal de la app
export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pantalla inicial de la app</Text>
      <TabButton title="Cambio de pestaña" to="/configuracion" />
    </View>
  );
}
