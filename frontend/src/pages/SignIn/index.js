import React, { useContext, useState } from 'react';
import { View, Text, Platform, ActivityIndicator } from 'react-native';
import { AreaInput, Background, ButtonSubmit, ButtonText, Container, Input,Link, LinkText, Logo } from './styles';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/auth';

export default function SignIn(){
  const navigation = useNavigation();
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const {SignIn,loadingAuth} = useContext(AuthContext);

  function handleLogin(){
    SignIn(email, password);
  }

  return(
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding':''}>
        <Logo source={require('../../assets/Logo.png')}/>

        <AreaInput>
          <Input 
            value={email}
            onChangeText={(text) => setEmail(text)} 
            placeholder="Email"
          />
        </AreaInput>

        <AreaInput>
          <Input 
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="*******"
            secureTextEntry={true} 
          />
        </AreaInput>

        <ButtonSubmit onPress={handleLogin}>
          {
          loadingAuth ? (
          <ActivityIndicator size={20} color='#FFF' />)
          :(
            <ButtonText>Acessar</ButtonText>
          )}
        </ButtonSubmit>

        <Link onPress={ () => navigation.navigate('SignUp') }>
          <LinkText>Criar uma conta!</LinkText>
        </Link>
      </Container>

    </Background>
  )
}