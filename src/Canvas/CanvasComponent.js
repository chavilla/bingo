import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { bible_books } from "../utils/helpers";
import BookBox from "./BookBox";
import Swal  from "sweetalert2";
let books_storaged_state = [];
let books_bible_pending = bible_books;

const CanvasComponent = () => {
  const [finished, setFinished] = useState(false);
  const [booksCanvas, setBooksCanvas] = useState([]);

  useEffect(() => {
    const get_books_storaged =
      JSON.parse(localStorage.getItem("books")) || null;
    const books_storaged_pending =
      JSON.parse(localStorage.getItem("books_bible_storaged")) || null;
    if (get_books_storaged) {
      setBooksCanvas(get_books_storaged);
      books_storaged_state = get_books_storaged;
      books_bible_pending = books_storaged_pending;
    }
  }, []);

  const showSweetAlert = (min, max) => {
    let timerInterval;
    Swal.fire({
      title: "Elegir Libro",
      html: "Seleccionando en <b></b> milisegundos.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        getRandomArbitrary(min,max)
      }
    });
  };

  const getRandomArbitrary = (min, max) => {
    // 01. Generating a code
    const random_code = Math.floor(Math.random() * (max - min)) + min;

    // 02. Select a book from the array
    const selected_book = books_bible_pending[random_code];

    // 03. delete the element from the bible books array
    books_bible_pending.splice(random_code, 1);

    //04. set the book selected in a row to render
    setBooksCanvas([...booksCanvas, selected_book]);
    books_storaged_state.push(selected_book);
    localStorage.setItem("books", JSON.stringify(books_storaged_state));
    localStorage.setItem(
      "books_bible_storaged",
      JSON.stringify(books_bible_pending)
    );

    // 05. conditional to finish the game
    if (books_bible_pending.length === 0) {
      setFinished(true);
    }

    Swal.fire(`Libro seleccionado: \n ${selected_book}`);

  };

  return (
    <div className="canvas_component_box">
      <div className="btn_shake_box">
        <button
          type="button"
          className="btn_shake"
          disabled={finished}
          onClick={() => showSweetAlert(0, books_bible_pending.length) }
        >
          Elegir libro
        </button>
      </div>
      {finished && <p className="text-center">Juego terminado</p>}
      <div className="books_list_box">
        <h2 className="text-center">
          Libros generados {booksCanvas.length}/66{" "}
        </h2>
        <div className="books_list">
          {booksCanvas.map((book, index) => (
            <BookBox key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CanvasComponent;
