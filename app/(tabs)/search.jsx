import { View, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { images } from '../../constants';

const search = () => {
  
  return (
    <View className="w-full h-full items-center justify-center bg-primary">
      <Image
      source={images.bg}
      blurRadius={70}
      className="absolute h-full w-full"
      />
      <StatusBar backgroundColor='transparent' style='light'/>
    </View>
  )
}

export default search;