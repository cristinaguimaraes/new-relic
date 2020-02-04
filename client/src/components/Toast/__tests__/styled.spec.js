import React from 'react';
import { shallow } from 'enzyme';

import { TextWrapper, Text } from '../styled';

describe('Toast styled components', () => {
  test('TextWrapper should render properly', () => {
    expect(shallow(<TextWrapper />)).toMatchSnapshot();
  });
  test('Text should render properly', () => {
    expect(shallow(<Text />)).toMatchSnapshot();
  });
});