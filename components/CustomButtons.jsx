import {TouchableOpacity, Text} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import React from 'react'

const CustomButton = ({title, handlePress, isLoading}) => {
  return ( 
        <TouchableOpacity onPress={handlePress} activeOpacity={0.5} className={`justify-center items-center ${isLoading?'opacity-50':''}`} disabled={isLoading}>
          <LinearGradient colors={["#c988f7","#7eb5fc"]} start={{x:0,y:0}} end={{x:1,y:1}} className="p-2 px-4 justify-center items-center" style={{borderRadius:15}}>
            <Text className="text-black font-dsemibold text-base">{title}</Text>
          </LinearGradient>
        </TouchableOpacity>    
  )
}

export default CustomButton