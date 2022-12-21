import styled, { css } from "styled-components";
import type { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant: "income" | "expense";
}

const pickVariantBtn = (variant: "income" | "expense") => {
  switch (variant) {
    case "income":
      return css`
        background-color: green;
        color: white;
      `;
    case "expense":
      return css`
        background-color: red;
        color: white;
      `;

    default:
      break;
  }
};

const ButtonAddWrapper = styled.div`
  margin-block: 36px;
  display: grid;
  gap: 16px;
`;

const ButtonStyle = styled.button<Pick<ButtonProps, "variant">>`
  width: 100%;
  padding-block: 8px;
  text-align: center;
  border-radius: 8px;
  border-color: transparent;
  transition: all 200ms ease-out;

  &:hover {
    ${({ variant }) => pickVariantBtn(variant)}
  }
`;

const Button = ({ variant, children }: ButtonProps) => {
  return <ButtonStyle variant={variant}>{children}</ButtonStyle>;
};

export default Button;
