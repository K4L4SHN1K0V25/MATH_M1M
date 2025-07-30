import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function SignInScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crea una nueva{"\n"}cuenta</Text>

      <TouchableOpacity onPress={() => router.replace("/inicio")}>
            <Text style={styles.loginLink}>¿Ya te registraste? Inicia sesión aquí.</Text>
      </TouchableOpacity>

      <Text style={styles.label}>NOMBRE COMPLETO</Text>
      <TextInput
        style={styles.input}
        placeholder="Jimena Martinez"
        placeholderTextColor="#aaa"
      />

      <Text style={styles.label}>NICKNAME</Text>
      <TextInput
        style={styles.input}
        placeholder="Jimejime"
        placeholderTextColor="#aaa"
      />

      <View style={styles.row}>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Regístrate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Regístrate</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={() => router.replace("/login")}>
        <Text style={styles.nextButtonText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
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
    backgroundColor: "#eee",
    borderRadius: 6,
    padding: 12,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  smallButton: {
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 6,
    width: "48%",
    alignItems: "center",
  },
  smallButtonText: {
    color: "#666",
    fontSize: 14,
  },
  nextButton: {
    backgroundColor: "#ffb703",
    padding: 16,
    borderRadius: 8,
    marginTop: 40,
    alignItems: "center",
  },
  nextButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
