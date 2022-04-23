import React from 'react';

const BookBox = ({ book }) => {
    return (
        <div className="book_list_item">
           <p className="text-center"> { book } </p>
        </div>
    )
}

export default BookBox;
