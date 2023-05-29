import React, { useContext, useState } from 'react';
import { View, Text, Platform, ActivityIndicator } from 'react-native';
import { Background, Container, Logo, AreaInput, ButtonSubmit, ButtonText, Input } from '../SignIn/styles';
import { AuthContext } from '../../context/auth';

export default function SignUp(){
  const {SignUp,loadingAuth} = useContext(AuthContext);
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');


function handleSignUp(){
  if(name === ''|| email === ''|| password === '') return;
    SignUp(name,email,password);
}

  return(
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding':''} >
        <Logo source={require('../../assets/Logo.png')} />

        <AreaInput>
          <Input
            value={name}
            onChangeText={(text) => setName(text)} 
            placeholder="Nome"  />
        </AreaInput>

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

        <ButtonSubmit onPress={handleSignUp}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color='#FFF' />
            ):(
              <ButtonText>Cadastrar</ButtonText>
            )
          }
        </ButtonSubmit>
      </Container>
    </Background>
  )
}