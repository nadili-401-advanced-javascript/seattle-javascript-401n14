import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData, addParty, removeParty } from '../store/actions';
import PokemonViewer from './PokemonViewer';

function Search(props) {
    let search = props.search;
    let dispatch = props.dispatch;

    useEffect(() => {
        dispatch(getData);
    }, [search, dispatch]);

    const remove = id => {
        dispatch(removeParty(id));
    };

    const add = id => {
        dispatch(addParty(id));
    };

    return (
        <div className='pt-5'>
            <h1>Pokemon Directory</h1>
            <p className='lead'>
                Search for a Pokemon using the search bar, or browse all Pokemon
                below. Note that you can only have a maximum of six Pokemon in
                your party.
            </p>

            <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                    <span className='input-group-text' id='basic-addon1'>
                        Pokemon Name
                    </span>
                </div>
                <input
                    type='text'
                    className='form-control'
                    aria-describedby='basic-addon1'
                    value={props.search}
                    onChange={e =>
                        dispatch({ type: 'SEARCH', data: e.target.value })
                    }
                />
            </div>

            <PokemonViewer
                pokemon={props.results}
                party={props.party}
                remove={remove}
                add={add}
            />
        </div>
    );
}

const stateToProp = state => ({
    isLoaded: state.isLoaded,
    search: state.search,
    request: state.request,
    results: state.results,
    next: state.next,
    prev: state.prev,
    party: state.party,
});

export default connect(stateToProp)(Search);
