import { TitleStyled } from "./styles";

interface TitleProps {
  title: string;
}

export function Title(props: TitleProps) {
  return (
    <>
      <TitleStyled>{props.title}</TitleStyled>
    </>
  );
}
