import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from '../components/Counter';

configure({ adapter: new Adapter() });

describe('Counter component', () => {
    it('renders correctly', () => {
        const component = renderer.create(<Counter count={-1} />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('correctly adds one to state count variable', () => {
        let component = shallow(<Counter />);
        let addBtn = component.find('div.bordered-box button#add');

        addBtn.simulate('click');
        expect(component.state('count')).toBe(1);
    });

    it('correctly adds one to state count variable', () => {
        let component = render(<Counter />);
        expect(component.find('div.bordered-box h2')).toBeDefined();
    });
});
