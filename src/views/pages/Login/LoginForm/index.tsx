import React, { FormEvent, useState } from "react";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import { useHistory } from "react-router-dom";
//
import api from "../../../../services/api";
import ButtonPrimary from "../../../components/ButtonPrimary";
import InputPrimary from "../../../components/InputPrimary";
import * as S from "./styles";

const LoginForm: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [passwd, setPasswd] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !passwd) return;

    const postData = {
      usuario: name,
      senha: passwd,
    };

    api
      .post("https://accenture-java-desafio.herokuapp.com/login", postData)
      .then((res) => {
        console.log(res.data);
        console.log(res.status);
        history.push("/dashboard");
      })
      .catch((e) => {
        console.log("Erro no login");
        console.log(e);
      });
  };

  return (
    <S.Container onSubmit={handleSubmit}>
      <InputPrimary
        name="name"
        type="text"
        icon={AiOutlineUser}
        placeholder="Nome de usuário"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputPrimary
        name="passwd"
        type="password"
        icon={AiFillLock}
        placeholder="Senha"
        value={passwd}
        onChange={(e) => setPasswd(e.target.value)}
      />
      <ButtonPrimary _width="100%" type="submit">
        Continuar
      </ButtonPrimary>
    </S.Container>
  );
};

export default LoginForm;
