import { View, Text, Button } from "react-native";
// Importa el hook useRouter de expo-router para hacer navegación programática
import { useRouter } from "expo-router";

// Componente funcional para la pantalla de login
export default function LoginScreen() {
  // Obtiene el objeto router que se usa para navegar entre pantallas
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Inicia sesión</Text>
      <Button
        title="Ir al Home"
        onPress={() => router.replace("/(tabs)/inicio")}
      />
      <Button
        title="Registro"
        onPress={() => router.replace("/pantallaSignIn")}
      />
    </View>
  );
}
