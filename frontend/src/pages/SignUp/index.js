import React, { useContext } from 'react';
import { View, Text, Platform } from 'react-native';
import { Background, Container, Logo, AreaInput, ButtonSubmit, ButtonText, Input } from '../SignIn/styles';
import { AuthContext } from '../../context/auth';

export default function SignUp(){
  const {user} = useContext(AuthContext);

  function handleSignUp(){
    console.log(user);
  }
  return(
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding':''} >
        <Logo source={require('../../assets/Logo.png')} />

        <AreaInput>
          <Input placeholder="Nome"  />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Email"  />
        </AreaInput>

        <AreaInput>
          <Input placeholder="*******"  />
        </AreaInput>

        <ButtonSubmit onPress={handleSignUp}>
          <ButtonText>Cadastrar</ButtonText>
        </ButtonSubmit>
      </Container>
    </Background>
  )
}