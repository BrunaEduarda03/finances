import React from 'react';
import { View, Text, Platform } from 'react-native';
import { AreaInput, Background, ButtonSubmit, ButtonText, Container, Input,Link, LinkText, Logo } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function SignIn(){
  const navigation = useNavigation();
  return(
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding':''}>
        <Logo source={require('../../assets/Logo.png')}/>

        <AreaInput>
          <Input placeholder="Email" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="*******" />
        </AreaInput>

        <ButtonSubmit>
          <ButtonText>Acessar</ButtonText>
        </ButtonSubmit>

        <Link onPress={ () => navigation.navigate('SignUp') }>
          <LinkText>Criar uma conta!</LinkText>
        </Link>
      </Container>

    </Background>
  )
}