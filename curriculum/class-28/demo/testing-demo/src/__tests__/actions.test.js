import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import store from '../store/store';
import { reducer } from '../store/store';

describe('', () => {
    it('', () => {
        expect(true).toBeTruthy();
    });
});
