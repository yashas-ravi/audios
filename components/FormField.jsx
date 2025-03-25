import {Text, TextInput, View } from 'react-native'
import React from 'react'

const FormField = ({title,value,placeholder,handleChangeText, otherStyles}) => {
  return (
    <View className={`items-center space-y-2 ${otherStyles}`}>
      <Text className="text-lg font-dmedium text-white">{title}</Text>
      <View className="w-[30vh] h-14 px-4 bg-gray-100 rounded-2xl mt-2">
        <TextInput
          className="flex-1 text-black-100 font-dsemibold text-lg"
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
        />
    </View>
    </View>
    
  )
}

export default FormField