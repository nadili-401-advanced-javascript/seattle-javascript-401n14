import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import store from '../store/store';
import { reducer } from '../store/store';

describe('reducer responds correctly to action', () => {
    let initState = reducer(null, {
        type: 'RESULTS',
        data: [0, 1],
    });

    it('named "RESULTS"', () => {
        let changedState = reducer(initState, {
            type: 'RESULTS',
            data: [0, 1, 2],
        });

        expect(changedState.results).toEqual([0, 1, 2]);
        expect(changedState.count).toBe(3);
    });

    it('named "SEARCH"', () => {
        let changedState = reducer(initState, {
            type: 'SEARCH',
            data: 'test',
        });

        expect(changedState.results).toEqual([0, 1]);
        expect(changedState.search).toEqual('test');
    });

    it('named "PARTY"', () => {
        let changedState = reducer(initState, {
            type: 'PARTY',
            data: [0, 1, 2, 3, 4, 5],
        });

        expect(changedState.party).toEqual([0, 1, 2, 3, 4, 5]);
        expect(changedState.fullParty).toBeTruthy();
    });

    it('named "PARTY" and does not incorrectly set full party', () => {
        let changedState = reducer(initState, {
            type: 'PARTY',
            data: [0, 1, 2, 3, 4],
        });

        expect(changedState.party).toEqual([0, 1, 2, 3, 4]);
        expect(changedState.fullParty).toBeFalsy();
    });
});
