import { AppsByHost} from '../AppsByHost';
import { shallow } from 'enzyme';
import React from 'react';

describe('AppsByHost component', () => {
  test('should render properly', () => {
    expect(shallow(<AppsByHost >Test</AppsByHost>)).toMatchSnapshot();
  });
});
