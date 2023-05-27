import React, { createContext, useState } from 'react';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext({});

function AuthProvider({children}){
  const navigation = useNavigation();
  const [loadingAuth,setLoadingAuth] = useState(false);
  
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
  return (
  <AuthContext.Provider value={{SignUp,loadingAuth}}>
    {children}
  </AuthContext.Provider>
)
}
export default AuthProvider;
