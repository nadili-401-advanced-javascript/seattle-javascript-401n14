import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import PokemonViewer from '../components/PokemonViewer';
import { configure, mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('PokemonViewer creates pokemon items', () => {
    let pokemon = [{ '#': 1 }, { '#': 2 }];
    let party = [1];
    let remove = num => {
        party = party.filter(val => {
            val !== num;
        });
    };
    let add = num => {
        party.push(num);
    };

    it('and shows that pokemon are correctly in party', () => {
        let pokeViewer = mount(
            <PokemonViewer
                pokemon={pokemon}
                party={party}
                remove={remove}
                add={add}
            />,
        );

        expect(pokeViewer.find('.all-pokemon').children().length).toBe(2);
        expect(
            pokeViewer
                .find('.all-pokemon')
                .childAt(0)
                .find('.btn')
                .text(),
        ).toEqual('Remove from Party');
        expect(
            pokeViewer
                .find('.all-pokemon')
                .childAt(0)
                .hasClass('in'),
        ).toBeTruthy();
    });

    it('and shows that pokemon are correctly not in party', () => {
        let pokeViewer = mount(
            <PokemonViewer
                pokemon={pokemon}
                party={party}
                remove={remove}
                add={add}
            />,
        );

        expect(pokeViewer.find('.all-pokemon').children().length).toBe(2);
        expect(
            pokeViewer
                .find('.all-pokemon')
                .childAt(1)
                .find('.btn')
                .text(),
        ).toEqual('Add to Party');
        expect(
            pokeViewer
                .find('.all-pokemon')
                .childAt(1)
                .hasClass('out'),
        ).toBeTruthy();
    });

    it('and allows you to remove from party', () => {
        let pokeViewer = mount(
            <PokemonViewer
                pokemon={pokemon}
                party={party}
                remove={remove}
                add={add}
            />,
        );

        let change = pokeViewer
            .find('.all-pokemon')
            .childAt(0)
            .find('.btn')
            .simulate('click')
            .update();

        expect(party).toEqual([]);
    });
});
