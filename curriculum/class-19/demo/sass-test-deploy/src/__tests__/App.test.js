import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../components/App';
configure({ adapter: new Adapter() });

describe('App component', () => {
    it('renders correctly', () => {
        const page = renderer.create(<App />).toJSON();
        expect(page).toMatchSnapshot();
    });

    it('has a Counter', () => {
        let component = mount(<App />);
        expect(component.find('div.bordered-box h2').text()).toBe(
            'Your current count is: 0',
        );
    });

    it('adds one to Counter', () => {
        let component = mount(<App />);
        let addBtn = component.find('div.bordered-box button#add');

        addBtn.simulate('click');
        expect(component.find('div.bordered-box h2').text()).toBe(
            'Your current count is: 1',
        );
    });
});
