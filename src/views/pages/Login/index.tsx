import React from "react";
import { Link } from "react-router-dom";
//
import * as S from "./styles";
import WhiteCard from "../../components/WhiteCard";
import LoginForm from "./LoginForm";

const Login: React.FC = () => {
  return (
    <S.Container>
      <WhiteCard title="Faça seu login" _width="25%">
        <LoginForm />
        <Link to="/forgot-passwd">Esqueci a senha {">"}</Link>
        <Link to="/">Ainda não sou cliente {">"}</Link>
      </WhiteCard>
    </S.Container>
  );
};

export default Login;
