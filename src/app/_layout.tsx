import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import { useEffect } from "react";
import "../../global.css";

// Keep the splash screen visible while we fetch resources
void SplashScreen.preventAutoHideAsync();

// RootLayout is the main layout component that wraps your app's screens in Expo Router. 
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    // Hide the splash screen once the fonts are loaded
    if (fontsLoaded) {
      void SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Don't render the app until the fonts are loaded to avoid layout shifts
  if (!fontsLoaded) {
    return null;
  }

  // Stack is a component from Expo Router that manages the navigation stack for your app.
  return <Stack screenOptions={{ headerShown: false }} />;
}
