import data from '../data/pokemon.json';

export const getData = (dispatch, getState) => {
    const state = getState();

    if (state.search.trim() === '') dispatch({ type: 'RESULTS', data: data });
    else {
        let subset = data.filter(val => {
            return val.Name.toLowerCase().includes(
                state.search.trim().toLowerCase(),
            );
        });

        dispatch({ type: 'RESULTS', data: subset });
    }
};

export const addParty = toAdd => (dispatch, getState) => {
    const state = getState();

    let party = [...state.party];
    party.push(toAdd);

    dispatch({ type: 'PARTY', data: party });
};

export const removeParty = toRem => (dispatch, getState) => {
    const state = getState();

    let party = state.party.filter(val => {
        return val !== toRem;
    });

    dispatch({ type: 'PARTY', data: party });
};

const getRandomPokemon = exclude => {
    let poke = Math.floor(Math.random() * 648) + 1;

    while (exclude.includes(poke)) poke = Math.floor(Math.random() * 648) + 1;

    return poke;
};

export const randomParty = dispatch => {
    let party = [];
    party.push(getRandomPokemon(party));
    party.push(getRandomPokemon(party));
    party.push(getRandomPokemon(party));
    party.push(getRandomPokemon(party));
    party.push(getRandomPokemon(party));
    party.push(getRandomPokemon(party));

    dispatch({ type: 'PARTY', data: party });
};
