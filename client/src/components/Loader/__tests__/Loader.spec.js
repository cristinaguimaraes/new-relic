import React from 'react';
import { Loader} from '../Loader';
import { shallow } from 'enzyme';

describe('Loader component', () => {
  test('should render properly', () => {
    expect(shallow(<Loader />)).toMatchSnapshot()
  });
});
