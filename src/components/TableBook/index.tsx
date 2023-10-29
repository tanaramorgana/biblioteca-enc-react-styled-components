import { Button } from "../Button";
import { TableBodyStyled, TableTh } from "./styles";

interface CardBookProps {
  id: number;
  title: string;
  author: string;
  genre: string;
  datePublication: string;
  description: string;
  dateRegister: string;

  handleDeleteBook: (id: number) => void;
  hendleUpdateBook: (id: number) => void;
}

export function ListBook(props: CardBookProps) {
  return (
    <tbody>
      <TableBodyStyled>
        <TableTh>{props.title}</TableTh>
        <TableTh>{props.author}</TableTh>
        <TableTh>{props.genre}</TableTh>
        <TableTh>{props.datePublication}</TableTh>
        <TableTh>{props.description}</TableTh>
        <TableTh>{props.dateRegister}</TableTh>
        <TableTh>
          <Button
            variant="SECONDARY"
            clickFunction={() => props.handleDeleteBook(props.id)}
            title="Apagar"
          />
        </TableTh>
        <TableTh>
          <Button
            variant="PRIMARY"
            clickFunction={() => props.hendleUpdateBook(props.id)}
            title="Editar"
          />
        </TableTh>
      </TableBodyStyled>
    </tbody>
  );
}
