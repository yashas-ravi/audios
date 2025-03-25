import { Alert, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { loadUser } from '../../lib/AudiosAsyncStorage'
import { StatusBar } from 'expo-status-bar';
import { images } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';

const home = () => {
  const [name, setName] = useState("");
  try{
    loadUser().then((res)=>{
      setName(res);
    })
  }catch(err){
      Alert.alert(err);
  }
  return (
    <View className="w-full h-full">
      <StatusBar backgroundColor='transparent' style='light'/>
      <Image
      source={images.bg}
      blurRadius={70}
      className="absolute h-full w-full"
      />
      <SafeAreaView>
      <View className="w-full h-[50px] mt-[40px] pl-5">
        <Text className="text-4xl font-dsemibold text-white">Hello, {name}</Text>
      </View>
      </SafeAreaView>
    </View>
  )
}

export default home