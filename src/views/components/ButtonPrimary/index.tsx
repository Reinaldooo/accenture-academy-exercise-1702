import React, { ButtonHTMLAttributes } from "react";
//
import * as S from "./styles";
import rightArrow from "../../../assets/right-arrow.png";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  _width?: string;
};

const ButtonPrimary: React.FC<ButtonProps> = ({
  children,
  title,
  _width,
  ...rest
}) => {
  return (
    <S.Button type="button" _width={_width} _marTop="2.5rem" {...rest}>
      {children}
      <img src={rightArrow} alt="" />
    </S.Button>
  );
};

export default ButtonPrimary;
