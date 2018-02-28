import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessList />);
	});

	it('Renders a list of guesses', () => {
		const values = [10, 24, 52];
		const wrapper = shallow(<GuessList guessList={values} />);
		const items = wrapper.find('li');
		expect(items.length).toEqual(values.length);
		values.forEach((value, index) => {
			expect(items.at(index).text()).toEqaul(value.toString());
		});
	});
});

