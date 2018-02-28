import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessForm />);
	});

	it('Renders the input field initially', () => {
		const wrapper = shallow(<GuessForm />);
		expect(wrapper.hasClass('text')).toEqual(true);
	});

	it('Should render the submit button', () => {
		const wrapper = shallow(<GuessForm />);
		expectwrapper.hasClass('button').toEqual(true);
	})

	it('Should fire the onMakeGuess callback when the form is submitted', () => {
		const callback = jest.fn();
		const wrapper = mount(<GuessForm onMakeGuess={callback} />);
		const value = 10;
		wrapper.find('input[type="number"]').instance().value = value;
		wrapper.simulate('submit');
		expect(callback).toHaveBeenCalledWith(value);
	});

	it('Should not fire onMakeGuess if the input is empty', () => {
		const callback = jest.fn();
		const wrapper = mount(<GuessForm onMakeGuess={callback} />);
		expect(callback).not.toHabeBeenCalled();
	});

	it('Should reset the input when the form is submitted', () => {
		const wrapper = mount(<GuessForm />);
		const input = wrapper .find('input[type="number"]');
		input.instance().value = 10;
		wrapper.simulate('submit');
		expect(input.instance().value).toEqual('');
	});
});

