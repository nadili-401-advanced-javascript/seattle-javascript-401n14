import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from './form-elements/FormInput';
import { addBook } from './store/actions';

function BookAdder(props) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [roleEntry, setRoleEntry] = useState('');

    // If you're logged in AND you're an admin
    return (
        <div>
            <h2>Add a book</h2>
            <FormInput
                type='text'
                label='Title'
                id='title'
                value={title}
                onChange={e => {
                    setTitle(e.target.value);
                }}
            />

            <FormInput
                type='text'
                label='Author'
                id='author'
                value={author}
                onChange={e => {
                    setAuthor(e.target.value);
                }}
            />

            <FormInput
                type='text'
                label='Role'
                id='role'
                value={roleEntry}
                onChange={e => {
                    setRoleEntry(e.target.value);
                }}
            />

            <button
                onClick={() => {
                    let role = [];
                    if (roleEntry === 'user')
                        role = ['user', 'editor', 'admin'];
                    if (roleEntry === 'editor') role = ['editor', 'admin'];
                    if (roleEntry === 'admin') role = ['admin'];

                    props.dispatch(addBook(title, author, role));
                }}
            >
                Add Book!
            </button>
        </div>
    );
}

export default connect()(BookAdder);
