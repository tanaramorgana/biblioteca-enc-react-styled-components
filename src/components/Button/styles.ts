import styled from "styled-components";

interface ButtonContainerProps {
  variant: "PRIMARY" | "SECONDARY";
}

export const ButtonStyled = styled.button<ButtonContainerProps>`
  background-color: gray;
  color: #8b8a8a;
  background-color: ${(props) =>
    props.variant === "PRIMARY" ? props.theme.primary : props.theme.secondary};
  border-radius: 10px;
  padding: 4px 8px;
  margin: 5px;
  border: 1px solid transparent;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(56, 169, 240, 0.75),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
