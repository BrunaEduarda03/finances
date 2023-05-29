import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({children}){
  const navigation = useNavigation();
  const [loadingAuth,setLoadingAuth] = useState(false);
  const [loading,setLoading] = useState(true);
  const [user,setUser] = useState(null);

  useEffect(() => {
    async function loadStorage(){
      try{
        const storageUser = await AsyncStorage.getItem('@financesToken');
        if(storageUser){
          const response = await api.get('/me', {
            headers:{
              'Authorization': `Bearer ${storageUser}`
            }
          })
          api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
          setUser(response.data);
          setLoading(false);
        }
      }catch(e){
        setUser(null);
      }
      setLoading(false);
      }
    loadStorage();
  }, [])
  
  async function SignUp(name,password,email){
    setLoadingAuth(true);
    try{
      const response = await api.post('/users',{
        name:name,
        email:email,
        password:password
    })
    setLoadingAuth(false);
    navigation.goBack();
    }catch(e){
      console.log('erro ao cadastrar!',e);
      setLoadingAuth(false);
    }
    
  }

  async function SignIn(email,password){
    setLoadingAuth(true);
    try{
      const response = await api.post('/login',{
        email:email,
        password:password
      })
      const {id,name,token} = response.data;
      const data = {id,name,token,email};
      await AsyncStorage.setItem('@financesToken',token);
      api.defaults.headers['Authorization'] =`Bearer ${token}`;

      setUser({id,name,email});
      setLoadingAuth(false);
    }catch(e){
      console.log('erro ao logar!',e);
      setLoadingAuth(false);
    }

  }
  return (
  <AuthContext.Provider 
    value={{
      SignUp,loadingAuth,signed:!!user,SignIn,loading
    }}>
    {children}
  </AuthContext.Provider>
)
}
export default AuthProvider;
