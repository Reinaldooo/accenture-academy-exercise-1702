import React, { useEffect, useState } from "react";
//
import api from "../../../services/api";
import { formatBRL } from "../../../utils/formatter";
import * as S from "./styles";

interface PlanoConta {
  id: number;
  login: string;
  descricao: string;
  padrao: boolean;
  tipoMovimento: string;
}

interface Lancamento {
  id: number;
  conta: number;
  data: string;
  descricao: string;
  tipo: string;
  valor: number;
  planoConta: PlanoConta;
}

interface Conta {
  id: number;
  saldo: number;
  lancamentos: Lancamento[];
}

export interface DashboardState {
  contaBanco: Conta | null;
  contaCredito: Conta | null;
}

const Login: React.FC = () => {
  const [accountInfo, setAccountInfo] = useState<DashboardState>(
    {} as DashboardState
  );

  useEffect(() => {
    api
      .get(`/dashboard`, {
        params: {
          inicio: "2021-01-01",
          fim: "2021-01-31",
          login: "reinaldo",
        },
        headers: {
          Authorization: localStorage.getItem("@tokenApp"),
        },
      })
      .then(({ data }) => {
        setAccountInfo(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <S.Container>
      <S.Aside>Menu</S.Aside>
      <S.Content>
        <S.DebitAccount>
          <h2>Conta</h2>
          {accountInfo.contaBanco?.saldo && (
            <p>{formatBRL(accountInfo.contaBanco?.saldo)}</p>
          )}
        </S.DebitAccount>
        <S.CreditAccount>
          <h2>Cartão de crédito</h2>
          {accountInfo.contaCredito?.saldo && (
            <p>{formatBRL(accountInfo.contaCredito?.saldo)}</p>
          )}
        </S.CreditAccount>
      </S.Content>
    </S.Container>
  );
};

export default Login;
