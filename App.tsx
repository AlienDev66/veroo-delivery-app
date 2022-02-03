import React from 'react'

import { StatusBar } from 'expo-status-bar'

import {
  useFonts,
  ReadexPro_300Light,
  ReadexPro_400Regular,
  ReadexPro_500Medium,
  ReadexPro_600SemiBold,
  ReadexPro_700Bold
} from '@expo-google-fonts/readex-pro'
import AppLoading from 'expo-app-loading'

import { Home } from '@screens/Home'

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    ReadexPro_300Light,
    ReadexPro_400Regular,
    ReadexPro_500Medium,
    ReadexPro_600SemiBold,
    ReadexPro_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <Home />
    </>
  )
}

export default App
