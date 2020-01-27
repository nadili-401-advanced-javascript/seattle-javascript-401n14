import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Search from '../components/Search';
import { configure, mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import store from '../store/store';

describe('search input works as expected ', () => {
    it('and allows you to filter results', () => {
        let search = mount(
            <Provider store={store}>
                <Search />
            </Provider>,
        );

        let allPoke = search.find('.all-pokemon');

        expect(allPoke.children().length).toBeGreaterThan(200);

        search
            .find('input[type="text"]')
            .simulate('change', { target: { value: 'bulbasaur' } });

        allPoke = search.find('.all-pokemon');
        expect(allPoke.children().length).toBe(1);
        expect(
            allPoke
                .childAt(0)
                .find('h5')
                .text(),
        ).toEqual('Bulbasaur');
    });

    it('and does not show any results when mismatched filter query', () => {
        let search = mount(
            <Provider store={store}>
                <Search />
            </Provider>,
        );

        search
            .find('input[type="text"]')
            .simulate('change', { target: { value: 'afjldsk' } });

        let allPoke = search.find('.all-pokemon');
        expect(allPoke.children().length).toBe(0);
    });
});
