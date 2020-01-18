import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';

function BookViewer(props) {
    const auth = useContext(AuthContext);

    // assuming you're logged in,
    // get the books (fetch) on component mount

    function useGetBooks() {
        // return the books that I get from my fetch
        // We can make the books a stateful variable so it updates
        // the display on our component
        // However, we DO NOT need to give anyone else the state variable SETTER

        const [books, setBooks] = useState([]);

        useEffect(() => {
            // What to do in here?
            // Make a fetch request!!
            // Save the results in book

            const get = async () => {
                setBooks(await auth.getBooks(auth.token));
            };

            get();
        });

        return books;
    }

    const books = useGetBooks();
    // auth: ['user', 'editor', 'admin']
    //       ['editor', 'admin']
    //       ['admin']

    return (
        <div>
            {books.map((val, ind) => {
                let authClass = '';

                if (val.auth) {
                    authClass = val.auth.includes('admin') ? 'admin' : '';
                    authClass = val.auth.includes('editor') ? 'editor' : '';
                    authClass = val.auth.includes('user') ? 'user' : '';
                }

                return (
                    <div key={ind} className={authClass}>
                        <p>Title: {val.title}</p>
                        <p>Author: {val.author}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default BookViewer;
