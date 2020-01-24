import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBooks } from './store/actions';

function BookViewer(props) {
    let dispatch = props.dispatch;

    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]);

    return (
        <div>
            {props.books.map((val, ind) => {
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

const mstp = state => ({
    books: state.books.library,
});

export default connect(mstp)(BookViewer);
