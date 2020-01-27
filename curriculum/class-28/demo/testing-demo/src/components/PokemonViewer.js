import React from 'react';

function PokemonViewer(props) {
    const pokemon = [];

    props.pokemon.forEach((val, ind) => {
        let inParty = props.party.includes(val['#']);

        pokemon.push(
            <div
                className={'col pokemon ' + (inParty ? 'in' : 'out')}
                key={ind}
            >
                <img alt={val.Name} src={'./pokemon/' + val['#'] + '.png'} />
                <h5>{val.Name}</h5>
                <div className='types'>
                    {val['Type 1'] ? (
                        <span
                            className={'type-1 ' + val['Type 1'].toLowerCase()}
                        >
                            {val['Type 1']}
                        </span>
                    ) : (
                        ''
                    )}

                    {val['Type 2'] ? (
                        <span
                            className={'type-2 ' + val['Type 2'].toLowerCase()}
                        >
                            {val['Type 2']}
                        </span>
                    ) : (
                        ''
                    )}
                </div>
                {inParty ? (
                    <button
                        className='btn'
                        onClick={() => {
                            props.remove(val['#']);
                        }}
                    >
                        Remove from Party
                    </button>
                ) : props.party.length < 6 ? (
                    <button
                        className='btn'
                        onClick={() => {
                            props.add(val['#']);
                        }}
                    >
                        Add to Party
                    </button>
                ) : (
                    ''
                )}
            </div>,
        );
    });

    return <div className='row all-pokemon'>{pokemon}</div>;
}

export default PokemonViewer;
