import React from "react";
//
import * as S from "./styles";
import WhiteCard from "../../components/WhiteCard";
import ForgotPasswdForm from "./ForgotPasswdForm";

const ForgotPasswd: React.FC = () => {
  return (
    <S.Container>
      <WhiteCard title="Esqueci minha senha" _width="25%">
        <ForgotPasswdForm />
      </WhiteCard>
    </S.Container>
  );
};

export default ForgotPasswd;
