import React, { FormEvent, useState } from "react";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
//
import ButtonPrimary from "../../../components/ButtonPrimary";
import InputPrimary from "../../../components/InputPrimary";
import * as S from "./styles";

const ForgotPasswdForm: React.FC = () => {
  const [cpf, setCpf] = useState("");
  const [passwd, setPasswd] = useState("");
  const [passwdConfirm, setConfirmPasswd] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <S.Container onSubmit={handleSubmit}>
      <InputPrimary
        name="cpf"
        type="text"
        icon={AiOutlineUser}
        placeholder="Confirme o seu CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      <InputPrimary
        name="passwd"
        type="password"
        icon={AiFillLock}
        placeholder="Nova senha"
        value={passwd}
        onChange={(e) => setPasswd(e.target.value)}
      />
      <InputPrimary
        name="passwdConfirm"
        type="password"
        icon={AiFillLock}
        placeholder="Confirma a nova senha"
        value={passwdConfirm}
        onChange={(e) => setConfirmPasswd(e.target.value)}
      />
      <ButtonPrimary _width="100%" type="submit">
        Continuar
      </ButtonPrimary>
    </S.Container>
  );
};

export default ForgotPasswdForm;
