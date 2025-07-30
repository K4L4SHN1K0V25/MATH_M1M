// Importa el componente 'Tabs' desde 'expo-router'.
// Este componente permite crear una navegación por pestañas (tabs),
// como una barra inferior con varias secciones de la app.
import { Tabs } from "expo-router";
import { Ionicons, FontAwesome5, MaterialIcons, Entypo } from "@expo/vector-icons";
import { View } from "react-native";

// Define el componente TabsLayout, que será el layout para las rutas con tabs.
// Este archivo debe estar ubicado en `/app/(tabs)/_layout.tsx` para que funcione correctamente.
export default function TabsLayout() {
  return (
    // Crea una navegación por pestañas.
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#FFC043",
          borderTopWidth: 0,
          height: 70,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === "configuracion") {
            icon = <Ionicons name="settings" size={28} color="white" />;
          } else if (route.name === "estadisticas") {
            icon = <MaterialIcons name="bar-chart" size={28} color="white" />;
          } else if (route.name === "home") {
            icon = (
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                  padding: 12,
                }}
              >
                <Entypo name="home" size={28} color="#FFC043" />
              </View>
            );
          } else if (route.name === "favoritos") {
            icon = (
              <View
                style={{
                  borderWidth: 2,
                  borderColor: "#9D6BFF",
                  padding: 6,
                  borderRadius: 10,
                }}
              >
                <FontAwesome5 name="star" size={24} color="white" />
              </View>
            );
          } else if (route.name === "perfil") {
            icon = <Ionicons name="person-circle-outline" size={28} color="white" />;
          } else if (route.name === "materia") {
            icon = <FontAwesome5 name="book" size={26} color="white" />;
          }

          return icon;
        },
      })}
    >


      <Tabs.Screen name="perfil" options={{ title: "Perfil" }} />
      <Tabs.Screen name="configuracion" options={{ title: "Configuracion" }} />
      /* Define una pestaña que apunta al archivo `index.tsx` dentro del mismo
      grupo de rutas. Esta pestaña tendrá como título visible "Inicio". Al hacer
      clic, se renderizará la pantalla `/app/(tabs)/index.tsx`. */
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      /* Define otra pestaña que apunta a `pantallaInicio.tsx` dentro del mismo
      grupo. Al hacer clic en la pestaña, se navegará a
      `/app/(tabs)/pantallaInicio.tsx`. El título visible de esta pestaña será
      "Bienvenido". */
      <Tabs.Screen name="estadisticas" options={{ title: "Estadisticas" }} />
      <Tabs.Screen name="materia" options={{ title: "Materia" }} />
    </Tabs>
  );
}
