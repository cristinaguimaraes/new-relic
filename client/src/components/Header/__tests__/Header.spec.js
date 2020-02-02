import { Header} from '../Header';
import { shallow } from 'enzyme';
import React from 'react';

describe('Header component', () => {
  test('should render properly', () => {
    expect(shallow(<Header layout={'list'} onClick={jest.fn()}>Test</Header>)).toMatchSnapshot();
  });
});
