import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function SignUpScreen() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Crea tu cuenta</Text>

        <TouchableOpacity onPress={() => router.replace("/inicio")}>
          <Text style={styles.loginLink}>¿Ya tienes cuenta? Inicia sesión aquí.</Text>
        </TouchableOpacity>

        {/* Nombre completo */}
        <Text style={styles.label}>NOMBRE COMPLETO</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. Jimena Martinez"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />

        {/* Correo electrónico */}
        <Text style={styles.label}>CORREO ELECTRÓNICO</Text>
        <TextInput
          style={styles.input}
          placeholder="ejemplo@correo.com"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/* Usuario */}
        <Text style={styles.label}>USUARIO</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. Jimejime"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />

        {/* Contraseña */}
        <Text style={styles.label}>CONTRASEÑA</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Confirmar contraseña */}
        <Text style={styles.label}>CONFIRMAR CONTRASEÑA</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {/* Fecha de nacimiento */}
        <Text style={styles.label}>FECHA DE NACIMIENTO</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          placeholderTextColor="#aaa"
          value={birthdate}
          onChangeText={setBirthdate}
        />

        {/* Botón de registro */}
        <TouchableOpacity style={styles.nextButton} onPress={() => router.replace("/login")}>
          <Text style={styles.nextButtonText}>Registrarme</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    paddingHorizontal: 32,
    paddingTop: 50,
    paddingBottom: 40, // espacio extra para que no se corte
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    marginBottom: 10,
  },
  loginLink: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  label: {
    fontSize: 12,
    color: "#999",
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#f5f5f5",
    borderRadius: 6,
    padding: 12,
    marginBottom: 10,
  },
  nextButton: {
    backgroundColor: "#ffb703",
    padding: 16,
    borderRadius: 8,
    marginTop: 30,
    alignItems: "center",
  },
  nextButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
