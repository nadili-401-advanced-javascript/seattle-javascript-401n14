import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Header(props) {
    let sprites = [];

    props.party.forEach((val, ind) => {
        sprites.push(
            <img key={ind} alt={ind} src={'./pokemon/' + val + '.png'} />,
        );
    });

    return (
        <nav>
            <div className='container'>
                <div className='links'>
                    <Link to='/'>Browse Pokemon</Link>
                    <Link to='/party'>See Party</Link>
                </div>
                <div className='party'>
                    <img
                        className='pokeball'
                        alt='pokeball'
                        src='./pokemon/pokeball.png'
                    />
                    {sprites}
                </div>
            </div>
        </nav>
    );
}

const stateToProp = state => ({
    party: state.party,
});

export default connect(stateToProp)(Header);
