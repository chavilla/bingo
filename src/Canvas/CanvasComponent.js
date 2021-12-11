import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { bible_books } from "../utils/helpers";
import BookBox from "./BookBox";
import Swal  from "sweetalert2";
let books_storaged_state = [];
let books_bible_pending = bible_books;

const CanvasComponent = () => {


  /* const getRandomArbitrary = (min, max) => {
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

  }; */

  return (
    <div className="canvas_component_box">
      
    </div>
  );
};

export default CanvasComponent;
