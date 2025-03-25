import { StyleSheet,View, Image } from 'react-native'
import {Tabs} from 'expo-router'
import React from 'react'
import {icons} from '../../constants';
import { BlurView } from 'expo-blur';

const TabIcon = ({icon,color,foused}) => {
  return (
      <View className='items-center justify-center gap-2'>
        <Image
          source={icon}
          resizeMode='contain'
          tintColor={color}
          className="w-6 h-6"
        />
      </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{tabBarShowLabel:false, tabBarActiveTintColor: '#EEEEEE', tabBarActiveBackgroundColor:"rgba(255, 255, 255, 0.2)", tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.3)',
        tabBarStyle:{height:45,position:'absolute',shadowColor:"transparent", borderTopWidth:0, bottom:10, borderRadius:30, marginHorizontal:20},tabBarBackground:()=>(<BlurView itensity={30} tint='light' style={{...StyleSheet.absoluteFillObject, borderRadius:30,overflow:"hidden", backgroundColor:"transparent"}}/>)}}>
        <Tabs.Screen
          name='home'
          options={{
            title:'Home',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
              <TabIcon
                icon={icons.home}
                color={color}
                focused={focused}
              />
            )
          }}
         />
         <Tabs.Screen 
          name='search'
          options={{
            title:'search',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
              <TabIcon
                icon={icons.search}
                color={color}
                focused={focused}
              />
            )
          }}
         />
         <Tabs.Screen 
          name='player'
          options={{
            title:'player',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
              <TabIcon
                icon={icons.player}
                color={color}
                focused={focused}
              />
            )
          }}
          />
          <Tabs.Screen 
          name='library'
          options={{
            title:'library',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
              <TabIcon
                icon={icons.library}
                color={color}
                focused={focused}
              />
            )
          }}
         />
         <Tabs.Screen 
          name='settings'
          options={{
            title:'settings',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
              <TabIcon
                icon={icons.settings}
                color={color}
                focused={focused}
              />
            )
          }}
         />
      </Tabs>
    </>
  )
}

export default TabsLayout