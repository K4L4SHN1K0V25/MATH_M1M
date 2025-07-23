// Importa el componente 'Tabs' desde 'expo-router'.
// Este componente permite crear una navegación por pestañas (tabs),
// como una barra inferior con varias secciones de la app.
import { Tabs } from "expo-router";

// Define el componente TabsLayout, que será el layout para las rutas con tabs.
// Este archivo debe estar ubicado en `/app/(tabs)/_layout.tsx` para que funcione correctamente.
export default function TabsLayout() {
  return (
    // Crea una navegación por pestañas.
    <Tabs>
      /* Define una pestaña que apunta al archivo `index.tsx` dentro del mismo
      grupo de rutas. Esta pestaña tendrá como título visible "Inicio". Al hacer
      clic, se renderizará la pantalla `/app/(tabs)/index.tsx`. */
      <Tabs.Screen name="inicio" options={{ title: "Inicio" }} />
      /* Define otra pestaña que apunta a `pantallaInicio.tsx` dentro del mismo
      grupo. Al hacer clic en la pestaña, se navegará a
      `/app/(tabs)/pantallaInicio.tsx`. El título visible de esta pestaña será
      "Bienvenido". */
      <Tabs.Screen name="configuracion" options={{ title: "Bienvenido" }} />
    </Tabs>
  );
}
