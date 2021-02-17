import React from "react";
//
import * as S from "./styles";
import WhiteCard from "../../components/WhiteCard";
import LoginForm from "./LoginForm";

const Login: React.FC = () => {
  return (
    <S.Container>
      <WhiteCard title="Faça seu login" _width="25%">
        <LoginForm />
        <a href="/passwd-reset">Esqueci a senha {">"}</a>
        <a href="/passwd-reset">Ainda não sou cliente {">"}</a>
      </WhiteCard>
    </S.Container>
  );
};

export default Login;
