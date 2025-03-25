import {createContext, useContext, useState, useEffect} from 'react';
import { loadUser } from '../lib/AudiosAsyncStorage';
import { Alert } from 'react-native';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        loadUser().then((res)=>{
            if(res){
                setIsLoggedIn(true);
                setUser(res);
            }else{
                setIsLoggedIn(false);
                setUser(null);
            }
        }).catch((error)=>{
            Alert.alert(error);
        }).finally(()=>{setLoading(false)})
    },[]);

    return (
        <GlobalContext.Provider
         value={{
            isLoggedIn,
            setIsLoggedIn,
            loading,
            user,
            setUser,
         }}
        >
            {children}
        </GlobalContext.Provider>
    );

};

export default GlobalProvider;