import React from 'react';
import { shallow} from 'enzyme';

import { Content, Header} from '../styled';

describe('Home styled components', () => {
  test('Content should render properly', () => {
    expect(shallow(<Content />)).toMatchSnapshot();
  });

    test('Header should render properly', () => {
        expect(shallow(<Header/>)).toMatchSnapshot();
    });

});
