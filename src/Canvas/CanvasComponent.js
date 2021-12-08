import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { bible_books } from "../utils/helpers";
import BookBox from "./BookBox";


let books_storaged = [];

const CanvasComponent = () => {
  const [finished, setFinished] = useState(false);
  const [booksCanvas, setBooksCanvas] = useState([]);
  
  useEffect(() => {
    const get_books_storaged = JSON.parse(localStorage.getItem("books")) || null;
    if (get_books_storaged) {
      setBooksCanvas(get_books_storaged);
      books_storaged = get_books_storaged;
    }
  },[])


  const getRandomArbitrary = (min, max) => {

    // 01. Generating a code
    const random_code = Math.floor(Math.random() * (max - min)) + min;

    // 02. Select a book from the array
    const selected_book = bible_books[random_code];

    // 03. delete the element from the bible books array
    bible_books.splice(random_code, 1);

    //04. set the book selected in a row to render
    setBooksCanvas([...booksCanvas, selected_book]);
    books_storaged.push(selected_book);
    localStorage.setItem("books", JSON.stringify(books_storaged));

    // 05. conditional to finish the game
    if (bible_books.length === 0) {
      setFinished(true);
    }
  };

  console.log("Estado ", booksCanvas);
  return (
    <div className="canvas_component_box">
      <div className="btn_shake_box">
        <button
          type="button"
          className="btn_shake"
          disabled={finished}
          onClick={() => getRandomArbitrary(0, bible_books.length)}
        >
          Elegir libro
        </button>
      </div>
      {finished && <p className="text-center">Juego terminado</p>}
      <div className="books_list_box">
        <h2 className="text-center">Libros generados</h2>
        <div className="books_list">
          {booksCanvas.map((book, index) => (
            <BookBox key={ index } book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CanvasComponent;
