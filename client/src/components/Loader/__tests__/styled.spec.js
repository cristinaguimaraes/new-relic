import React from 'react';
import { shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Spinner, Wrapper } from '../styled';

Enzyme.configure({ adapter: new Adapter() });

describe('Loader styled components', () => {
  test('Spinner should render properly', () => {
    expect(shallow(<Spinner />)).toMatchSnapshot();
  });

  test('Wrapper should render properly', () => {
    expect(shallow(<Wrapper />)).toMatchSnapshot();
  });

});
