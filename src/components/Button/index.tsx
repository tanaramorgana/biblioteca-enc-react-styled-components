import { ButtonStyled } from "./styles";

interface ButtonProps {
  title: string;
  clickFunction: () => void;
  variant: "PRIMARY" | "SECONDARY";
}

export function Button(props: ButtonProps) {
  return (
    <ButtonStyled onClick={props.clickFunction} variant={props.variant}>
      {props.title}
    </ButtonStyled>
  );
}
