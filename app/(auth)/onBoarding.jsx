import {Text, View, Alert, Image} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {images} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButtons'
import { saveUser } from '../../lib/AudiosAsyncStorage'
import { router } from 'expo-router'

const onBoarding = () => {

  const [username, setUsername] = useState("")

  const submit = () => {
    try{
      saveUser(username).then((res)=>{
        if(res==="success"){
          router.replace("/home");
        }
      })
    }catch(error){
      Alert.alert(error);
    }
  }

  return (
    <View className="w-full h-full">
      <StatusBar backgroundColor='transparent' style='light'/>
      <Image
        source={images.bg}
        className="w-full h-full absolute"
        blurRadius={70}
      />
     <View className="w-full h-[100px] items-center justify-center pt-[20vh]">
        <Image 
            source={images.name}
            className="w-[150px] h-auto"
            resizeMode='contain'
        />
     </View>
     <View className="w-full h-fit items-center justify-center pt-10">
      <Text className="text-base font-dsemibold text-gray-200">Please enter your name to continue</Text>
     </View>
     <View className="w-full h-[60vh] items-center justify-between mt-[10vh] p-2">
      <FormField
        title="Enter your name"
        value={username}
        handleChangeText={(e)=>setUsername(e)}
        otherStyles="mt-0"
      />
      <CustomButton
        title="Continue"
        handlePress={submit}
      />
     </View>
    </View>
  )
}

export default onBoarding
