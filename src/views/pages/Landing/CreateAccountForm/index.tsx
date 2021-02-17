import React, { FormEvent, useState } from "react";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
//
import api from "../../../../services/api";
import ButtonPrimary from "../../../components/ButtonPrimary";
import InputPrimary from "../../../components/InputPrimary";
import * as S from "./styles";

const CreateAccountForm: React.FC = () => {
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const [passwd, setPasswd] = useState("");
  const [passwdConfirm, setPasswdConfirm] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    api
      .post("https://accenture-java-desafio.herokuapp.com/usuarios", {
        cpf,
        login: name,
        nome: fullName,
        senha: passwd,
      })
      .then(() => console.log("Conta criada"))
      .catch(() => {
        console.log("Erro na criação de conta");
      });
  };

  return (
    <S.Container onSubmit={handleSubmit}>
      <InputPrimary
        name="cpf"
        type="text"
        icon={AiOutlineUser}
        placeholder="CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      <InputPrimary
        name="name"
        type="text"
        icon={AiOutlineUser}
        placeholder="Nome de usuário"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputPrimary
        name="fullName"
        type="text"
        icon={AiOutlineUser}
        placeholder="Nome Completo"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <InputPrimary
        name="passwd"
        type="password"
        icon={AiFillLock}
        placeholder="Senha"
        value={passwd}
        onChange={(e) => setPasswd(e.target.value)}
      />
      <InputPrimary
        name="passwd-confirm"
        type="password"
        icon={AiFillLock}
        placeholder="Confirmação de senha"
        value={passwdConfirm}
        onChange={(e) => setPasswdConfirm(e.target.value)}
      />
      <ButtonPrimary _width="100%" type="submit">
        Continuar
      </ButtonPrimary>
    </S.Container>
  );
};

export default CreateAccountForm;
