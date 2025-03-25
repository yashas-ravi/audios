import React from "react";
import {View, Text, Image} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {images} from '../constants';
import CustomButton from '../components/CustomButtons';
import {useGlobalContext} from "../context/GlobalProvider";

export default function App() {
  const {loading, isLoggedIn} = useGlobalContext();

  if(!loading && isLoggedIn){
    return <Redirect href="/home"/>;
  } 

  return (
      <View className="h-full w-full">
        <StatusBar backgroundColor="transparent" style="light"/>
        <Image
          source={images.bg}
          className="absolute w-full h-full"
          blurRadius={70}
        />
        <LinearGradient colors={['#52116b','transparent',"#0f1e52"]} h-full start={{x:0,y:0}} end={{x:1, y:1}}>
          <View className="w-full h-full justify-start items-center pt-[20vh] px-4">
            <Image
              source={images.logo}
              className='w-[150px] h-[150px]'
              resizeMode="contain"
            />
            <Image 
            source={images.name}
            className='w-[150px] h-[50px] mt-[20px]'
            resizeMode="contain"
            />
            <Text className="font-dregular text-gray-500 mt-1 text-lg text-center">Play . Download . Vibe</Text>
            <Text className="font-dmedium text-gray-400 text-xl px-5 pt-[10vh] text-center">Download youtube, spotify, and jio saavan songs and playlists. Play music locally</Text>
            <View className="mt-[15vh] items-center justify-center">
            <CustomButton
              title="Get started"
              handlePress={()=> router.push('/onBoarding')}
            />
            </View>
          </View>
         </LinearGradient>
      </View>
  );
}
