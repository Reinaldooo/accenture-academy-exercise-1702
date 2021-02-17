import React from "react";
//
import * as S from "./styles";

interface WhiteCardProps {
  title: string;
  _width?: string;
}

const WhiteCard: React.FC<WhiteCardProps> = ({ title, _width, children }) => {
  return (
    <S.Container _width={_width || "100%"}>
      <h4>{title}</h4>
      {children}
    </S.Container>
  );
};

export default WhiteCard;
