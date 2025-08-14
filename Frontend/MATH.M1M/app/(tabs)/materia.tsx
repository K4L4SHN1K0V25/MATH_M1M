import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Selecciona tu materia:</Text>

      {/* Opción: Matemáticas */}
      <View style={styles.subjectItem}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/998/998349.png" }}
          style={styles.icon}
        />
        <Text style={styles.subjectText}>Matematicas</Text>
      </View>

      {/* Opción: Programación */}
      <View style={styles.subjectItem}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/2721/2721296.png" }}
          style={styles.icon}
        />
        <Text style={styles.subjectText}>Programacion</Text>
      </View>

      {/* Opción: Artes */}
      <View style={styles.subjectItem}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/206/206964.png" }}
          style={styles.icon}
        />
        <Text style={styles.subjectText}>Artes</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 40,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#444",
    marginBottom: 30,
  },
  subjectItem: {
    alignItems: "center",
    marginVertical: 20,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  subjectText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
