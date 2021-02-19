import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;

  a {
    display: block;
    text-align: center;
    margin: 1rem;
  }
`;

export const Aside = styled.aside`
  background-color: #7024e4;
  width: 10rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #8024e4;
  flex: 1;

  & > div {
    border-radius: 2rem;
    padding: 2rem;
  }
`;

export const DebitAccount = styled.div`
  background-color: #eee;
  width: 40rem;
  height: 20rem;
`;

export const CreditAccount = styled.div`
  background-color: #eee;
  width: 40rem;
  height: 20rem;
`;
