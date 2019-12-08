import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

test('App', () => {
    const component = shallow(<App/>);
    expect(component).toMatchSnapshot();
});
