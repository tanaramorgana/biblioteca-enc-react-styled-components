import { ThemeProvider } from "styled-components";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export function Home() {
  const theme = {
    primary: "#27332c",
    secondary: "#B22222",
  };

  function addNewBook() {}

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
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                padding: "20px",
              }}
            >
              <Title title={"A Biblioteca Encantada"} />
            </div>
            <div>
              <Link to="/form">
                <Button
                  variant="PRIMARY"
                  clickFunction={addNewBook}
                  title="Cadastrar Livro"
                />
              </Link>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
