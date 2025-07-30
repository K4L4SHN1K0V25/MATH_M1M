import React from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";


export default function HomeScreen() {
    const router = useRouter();
    

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
        }}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.label}>NICKNAME</Text>
      <TextInput
        style={styles.input}
        placeholder="hola@sitioincreible.co"
        placeholderTextColor="#aaa"
      />

      <Text style={styles.label}>CONTRASEÑA</Text>
      <TextInput
        style={styles.input}
        placeholder="••••••••••••"
        placeholderTextColor="#aaa"
        secureTextEntry
      />

      <TouchableOpacity onPress={() => router.replace("/pantallaSignIn")}>
        <Text style={styles.link}>¿No tienes cuenta? Crea una aquí.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton} onPress={() => router.replace("/(tabs)/home")}>
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
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    color: "#999",
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#eee",
    borderRadius: 6,
    padding: 12,
    marginBottom: 10,
  },
  link: {
    color: "#777",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
    fontSize: 13,
  },
  
  registerButton: {
    backgroundColor: "#ffb703",
    padding: 16,
    borderRadius: 8,
    marginTop: 40,
    alignItems: "center",
  },
  registerButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
