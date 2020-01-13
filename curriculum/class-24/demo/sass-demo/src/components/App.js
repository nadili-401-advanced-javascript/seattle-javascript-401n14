import React from 'react';
import '../styles/styles.scss';

function App() {
    return (
        <div className='div-container'>
            <div className='text-container'>This is some text</div>
            <div className='responsive-box'></div>
            <h1 data-attr='0'>My App!</h1>
            <p>This is my sample paragraph</p>
            <ul className='list'>
                <li className='item special'>Test Item 01</li>
                <li className='item'>Test Item 02</li>
                <li>
                    My sub list:
                    <br />
                    <ul>
                        <li className='item'>Sub 01</li>
                        <li className='item'>Sub 02</li>
                    </ul>
                </li>
                <li className='item'>Test Item 04</li>
                <li className='item'>
                    Test Item 05 with <a href='/'>Link</a>
                </li>
            </ul>

            <p className='blah'>This one has bottom margin</p>
            <p className='blah'>This one does not</p>
            <p className='blah'>This one has bottom margin</p>
        </div>
    );
}

export default App;
