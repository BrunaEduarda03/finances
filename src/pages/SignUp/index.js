import React from 'react';
import { View, Text, Platform } from 'react-native';
import { Background, Container, Logo, AreaInput, ButtonSubmit, ButtonText, Input } from '../SignIn/styles';

export default function SignUp(){
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

        <ButtonSubmit>
          <ButtonText>Cadastrar</ButtonText>
        </ButtonSubmit>
      </Container>
    </Background>
  )
}