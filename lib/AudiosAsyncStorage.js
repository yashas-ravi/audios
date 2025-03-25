import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const saveUser = async(username) => {
      if (username.length<3 || username.length>12) {
         Alert.alert("Warning","Name should be 3-12 characters long!!!");
      }
      else{
      try{
        await AsyncStorage.setItem('username',username);
        return "success";
      }catch(error){
        Alert.alert(error);
      }
    }
}

export const loadUser = async() => {
      try{
      const username = await AsyncStorage.getItem('username');
      return username;
      }catch(error){
        Alert.alert(error);
      }
}