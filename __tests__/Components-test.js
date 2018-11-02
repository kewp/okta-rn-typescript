/* leave first line blank for cq */
import Page from '../components/Page';
import Form from '../components/Form';
import Heading from '../components/Heading';

import React from 'react';
import renderer from 'react-test-renderer';

test('Page renders correctly', () => {
  const tree = renderer.create(<Page />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Form renders correctly', () => {
	const tree = renderer.create(<Form />).toJSON();
	expect(tree).toMatchSnapshot();
});

test('Heading renders correctly', () => {
	const tree = renderer.create(<Heading />).toJSON();
	expect(tree).toMatchSnapshot();
});