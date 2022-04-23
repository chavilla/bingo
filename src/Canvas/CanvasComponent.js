import React, { useEffect, useState } from "react";
import { bible_books } from "../utils/helpers";
import BookBox from "./BookBox";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faBook } from "@fortawesome/free-solid-svg-icons";
let books_storaged_state = [];
/* let books_bible_pending = bible_books; */

const CanvasComponent = () => {
  const [finished, setFinished] = useState(false);
  const [restarted, setRestarted] = useState(false);
  const [booksBiblePending, setBooksBiblePending] = useState(bible_books)
  const [booksCanvas, setBooksCanvas] = useState([]);

  useEffect(() => {
    const get_books_storaged =
      JSON.parse(localStorage.getItem("books")) || null;
    const books_storaged_pending =
      JSON.parse(localStorage.getItem("books_bible_storaged")) || null;
    if (get_books_storaged) {
      setBooksCanvas(get_books_storaged);
      setBooksBiblePending(books_storaged_pending)
      books_storaged_state = get_books_storaged;
    }
  }, []);

  useEffect(()=>{
    if (restarted) {
      localStorage.removeItem('books');
      localStorage.removeItem('books_bible_storaged');
      books_storaged_state = [];
      setBooksCanvas([]);
      setBooksBiblePending(bible_books);
      setRestarted(false);
    }
  }, [restarted]);

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
        getRandomArbitrary(min, max);
      }
    });
  };

  const getRandomArbitrary = (min, max) => {
    // 01. Generating a code
    const random_code = Math.floor(Math.random() * (max - min)) + min;

    // 02. Select a book from the array
    const selected_book = booksBiblePending[random_code];

    // 03. delete the element from the bible books array
   let item_pending_to_delete = booksBiblePending;
   item_pending_to_delete.splice(random_code, 1);

   console.log("Item delete ", item_pending_to_delete);

    //04. set the book selected in a row to render
    setBooksCanvas([...booksCanvas, selected_book]);
    setBooksBiblePending([...booksBiblePending], item_pending_to_delete);
    books_storaged_state.push(selected_book);
    localStorage.setItem("books", JSON.stringify(books_storaged_state));
    localStorage.setItem(
      "books_bible_storaged",
      JSON.stringify(item_pending_to_delete)
    );

    // 05. conditional to finish the game
    if (booksBiblePending.length === 0) {
      setFinished(true);
    }

    Swal.fire(`Libro seleccionado: \n ${selected_book}`);
  };

  const restartGame = () => {

    Swal.fire({
      title: '¿Estás seguro?',
      text: "No puedes revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: "No",
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí'
    }).then((result) => {
      if (result.isConfirmed) {
        setRestarted(true);
      }
    })
  }

  return (
    <div className="canvas_component_box">
      <div className="btn_shake_box">
        <button className="btn_restart" onClick={ () => restartGame() }>
          Reiniciar
          <FontAwesomeIcon
            style={{
              marginLeft: "10px",
            }}
            icon={faUndo}
          />
        </button>
        <button
          type="button"
          className="btn_shake"
          disabled={finished}
          onClick={() => showSweetAlert(0, booksBiblePending.length)}
        >
          {finished ? "Juego terminado" : "Seleccionar libro"}
          <FontAwesomeIcon
            style={{
              marginLeft: "10px",
            }}
            icon={faBook}
          />
        </button>
      </div>
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
