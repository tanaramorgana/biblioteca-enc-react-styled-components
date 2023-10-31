import { useState } from "react";
import { Button } from "../components/Button";
import { ListBook } from "../components/TableBook";
import moment from "moment";
import { ThemeProvider } from "styled-components";
import { FormContainer, FormInput } from "../components/Form/FormInput";
import {
  TableContainer,
  TableTh,
  TableTitleContainer,
} from "../components/TableBook/styles";
import { Title } from "../components/Title";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  datePublication: string;
  description: string;
  dateRegister: string;
}

export function Form() {
  const [books, setBooks] = useState<Book[]>([
    {
      id: 1,
      title: "livro 1",
      author: "autor 1",
      genre: "gênero 1",
      datePublication: "10-10-2022",
      description: "descrição 1",
      dateRegister: "10-10-2023",
    },
  ]);

  const currentYear = new Date().toISOString().split("T")[0];
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [datePublication, setDatePublication] = useState("");
  const [description, setDescription] = useState("");
  const [dateRegister, setDateRegister] = useState<string>(currentYear);
  const [editMode, setEditMode] = useState(0);

  function setCurrentDate() {
    setDateRegister(currentYear);
  }

  function onClickClear() {
    setTitle("");
    setAuthor("");
    setGenre("");
    setDatePublication("");
    setDescription("");
    setDateRegister("");
  }

  function addBook() {
    if (editMode) {
      const newBooks = books.map((book) => {
        if (book.id == editMode) {
          return {
            ...book,
            title,
            author,
            genre,
            datePublication,
            description,
            dateRegister,
          };
        }
        return book;
      });
      setBooks(newBooks);
    } else {
      if (
        !title ||
        !author ||
        !datePublication ||
        !description ||
        !genre ||
        !dateRegister
      ) {
        alert("Todos os campos precisam ser preenchidos");
        return;
      }

      const currentDate = moment();
      const publicationDate = moment(datePublication, "YYYY-MM-DD");

      if (publicationDate.isAfter(currentDate)) {
        alert("A data de publicação não pode ser maior que a data atual.");
        return;
      }

      const newBook = {
        id: books.length + 1,
        title,
        author,
        genre,
        datePublication,
        description,
        dateRegister,
      };
      setBooks([...books, newBook]);
      onClickClear();
    }
  }

  function updateBook(id: number) {
    const book = books.find((item) => item.id === id);
    setEditMode(book!.id);

    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
      setGenre(book.genre);
      setDatePublication(book.datePublication);
      setDescription(book.description);
      setCurrentDate();
    }
  }

  function deleteBook(id: number) {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks([...updatedBooks]);
  }

  const theme = {
    primary: "#27332c",
    secondary: "#B22222",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div
          style={{
            backgroundImage:
              "url(./src/assets/magic-fairytale-book-concept.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundAttachment: "fixed",
            margin: "0",
            padding: "0",
            height: "100vh",
          }}
        >
          <Title title={"A Biblioteca Encantada"} />

          <div
            style={{
              width: "100%",
              height: "80%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <FormContainer>
              <FormInput
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Título do livro"
              />
              <FormInput
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                type="text"
                placeholder="Nome do autor"
              />
              <FormInput
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                type="text"
                placeholder="Gênero"
              />
              <FormInput
                value={datePublication}
                onChange={(e) => setDatePublication(e.target.value)}
                type="date"
              />
              <FormInput
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Descrição do livro"
              />
              <FormInput
                value={dateRegister}
                onChange={(e) => setTitle(e.target.value)}
                type="date"
              />
              <Button
                variant="PRIMARY"
                clickFunction={addBook}
                title={editMode ? "Editar" : "Cadastrar"}
              />
            </FormContainer>

            <div>
              <TableContainer>
                <thead>
                  <TableTitleContainer>
                    <TableTh>Título</TableTh>
                    <TableTh>Autor</TableTh>
                    <TableTh>Gênero</TableTh>
                    <TableTh>Data de publicação</TableTh>
                    <TableTh>Descrição</TableTh>
                    <TableTh>Data de cadastro</TableTh>
                    <TableTh></TableTh>
                    <TableTh></TableTh>
                  </TableTitleContainer>
                </thead>
                {books.map((book) => {
                  return (
                    <ListBook
                      key={book.id}
                      id={book.id}
                      title={book.title}
                      author={book.author}
                      genre={book.genre}
                      datePublication={book.datePublication}
                      description={book.description}
                      dateRegister={book.dateRegister}
                      handleDeleteBook={deleteBook}
                      hendleUpdateBook={updateBook}
                    />
                  );
                })}
              </TableContainer>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
