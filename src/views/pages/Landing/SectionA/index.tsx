import React from "react";
import { Link, useHistory } from "react-router-dom";
//
import gamaLogo from "../../../../assets/gama-academy-logo-horizontal-verde-branco1 1.png";
import ButtonPrimary from "../../../components/ButtonPrimary";
import WhiteCard from "../../../components/WhiteCard";
import CreateAccountForm from "../CreateAccountForm";
import * as S from "./styles";

const SectionA: React.FC = () => {
  const history = useHistory();
  return (
    <S.Container>
      <S.Header>
        <Link to="/">
          <img src={gamaLogo} alt="logo" />
        </Link>
      </S.Header>
      <S.Content>
        <S.LeftContent>
          <span>Gama Bank é um projeto de nossos alunos.</span>
          <span>Já tem conta?</span>
          <ButtonPrimary onClick={() => history.push("/login")}>
            Acessar
          </ButtonPrimary>
        </S.LeftContent>
        <S.RightContent>
          <WhiteCard title="Peça sua conta e cartão de crédito Gama Bank">
            <CreateAccountForm />
          </WhiteCard>
        </S.RightContent>
      </S.Content>
    </S.Container>
  );
};

export default SectionA;
