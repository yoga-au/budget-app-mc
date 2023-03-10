import styled, { css } from "styled-components";
import type { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant: "income" | "expense";
}

const pickVariantBtn = (variant: "income" | "expense") => {
  switch (variant) {
    case "income":
      return css`
        background-color: #34aa44;
        color: white;
      `;
    case "expense":
      return css`
        background-color: #e6492d;
        color: white;
      `;

    default:
      break;
  }
};

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

const Button = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <ButtonStyle variant={variant} {...rest}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
