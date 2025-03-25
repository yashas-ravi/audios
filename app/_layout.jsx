import "../global.css";
import { SplashScreen, Stack } from 'expo-router'
import React, { useEffect } from 'react'
import {useFonts} from 'expo-font'
import GlobalProvider from '../context/GlobalProvider';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "DMsans-Black": require("../assets/fonts/DMSans-Black.ttf"),
    "DMsans-Thin": require("../assets/fonts/DMSans-Thin.ttf"),
    "DMsans-Light": require("../assets/fonts/DMSans-Light.ttf"),
    "DMsans-ExtraLight": require("../assets/fonts/DMSans-ExtraLight.ttf"),
    "DMsans-Medium": require("../assets/fonts/DMSans-Medium.ttf"),
    "DMsans-Bold": require("../assets/fonts/DMSans-Bold.ttf"),
    "DMsans-SemiBold": require("../assets/fonts/DMSans-SemiBold.ttf"),
    "DMsans-ExtraBold": require("../assets/fonts/DMSans-ExtraBold.ttf"),
    "DMsans-Regular": require("../assets/fonts/DMSans-Regular.ttf"),
  });

  useEffect(()=>{
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded, error])

  if(!fontsLoaded && !error) return null;

  return (
    <GlobalProvider>
     <Stack>
      <Stack.Screen name="index" options={{ headerShown:false}} />
      <Stack.Screen name="(auth)" options={{ headerShown:false}}/>
      <Stack.Screen name="(tabs)" options={{ headerShown:false}}/>
     </Stack>
    </GlobalProvider>
  )
}

export default RootLayout