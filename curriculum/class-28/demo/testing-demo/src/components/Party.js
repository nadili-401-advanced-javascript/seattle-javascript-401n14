import React from 'react';
import { connect } from 'react-redux';
import { removeParty, randomParty } from '../store/actions';
import data from '../data/pokemon.json';

function Party(props) {
    let partyDetails = [];

    props.party.forEach((pVal, ind) => {
        data.forEach(val => {
            if (pVal === val['#']) {
                console.log(val);
                partyDetails.push(
                    <div className='party-pokemon' key={ind}>
                        <div className='poke-col'>
                            <img
                                className='sprite'
                                alt={val.Name}
                                src={'./pokemon/' + val['#'] + '.png'}
                            />
                        </div>
                        <div className='poke-col details'>
                            <h3>{val.Name}</h3>
                            <p>#: {val['#']}</p>
                            <p>Generation: {val['Generation']}</p>
                            {val['Legendary'] === 'True' ? (
                                <p>Legendary</p>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className='poke-col types'>
                            {val['Type 1'] ? (
                                <span
                                    className={
                                        'type-1 ' + val['Type 1'].toLowerCase()
                                    }
                                >
                                    {val['Type 1']}
                                </span>
                            ) : (
                                ''
                            )}

                            {val['Type 2'] ? (
                                <span
                                    className={
                                        'type-2 ' + val['Type 2'].toLowerCase()
                                    }
                                >
                                    {val['Type 2']}
                                </span>
                            ) : (
                                ''
                            )}
                            <button
                                className='btn'
                                onClick={() => {
                                    props.dispatch(removeParty(val['#']));
                                }}
                            >
                                Remove from Party
                            </button>
                        </div>
                    </div>,
                );
            }
        });
    });

    return (
        <div className='pt-5 mb-5'>
            {props.party.length !== 0 ? (
                <div>
                    <h1>Your Pokemon Party</h1>
                    <div className='row'>{partyDetails}</div>
                </div>
            ) : (
                <div>
                    <h1>You have no Pokemon in Your Party</h1>
                    <button
                        onClick={() => {
                            props.dispatch(randomParty);
                        }}
                        className='mt-4 btn btn-primary'
                    >
                        Randomly Add Some
                    </button>
                </div>
            )}
        </div>
    );
}

const stateToProp = state => ({
    party: state.party,
});

export default connect(stateToProp)(Party);
