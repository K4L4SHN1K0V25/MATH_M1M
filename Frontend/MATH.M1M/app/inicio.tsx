import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/login", {
        email,
        contraseña,
      });
      const token = res.data.access_token;
      Alert.alert("Éxito", "Login correcto. Token: " + token);
      router.replace("/bienvenida");
    } catch (err) {
      const error = err as any;
      Alert.alert("Error", error.response?.data?.detail || "Algo salió mal");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
        }}
        style={styles.logo}
      />
      <Text style={styles.label}>EMAIL</Text>
      <TextInput
        style={styles.input}
        placeholder="hola@sitioincreible.co"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.label}>CONTRASEÑA</Text>
      <TextInput
        style={styles.input}
        placeholder="••••••••••••"
        secureTextEntry
        value={contraseña}
        onChangeText={setContraseña}
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleLogin}>
        <Text style={styles.registerButtonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    marginBottom: 10,
  },
  logo: { width: 100, height: 100, alignSelf: "center", marginBottom: 20 },
  label: { fontSize: 12, color: "#999", marginBottom: 5, marginTop: 10 },
  input: {
    backgroundColor: "#eee",
    borderRadius: 6,
    padding: 12,
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: "#ffb703",
    padding: 16,
    borderRadius: 8,
    marginTop: 40,
    alignItems: "center",
  },
  registerButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
