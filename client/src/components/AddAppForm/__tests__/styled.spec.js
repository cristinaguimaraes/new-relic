import React from 'react';
import { shallow} from 'enzyme';

import { Title, Button, ButtonWrapper, Form, Helper, Input, Label} from '../styled';

describe('AppsByHostHeader2 styled components', () => {
  test('Title should render properly', () => {
    expect(shallow(<Title />)).toMatchSnapshot();
  });

  test('Button should render properly', () => {
        expect(shallow(<Button />)).toMatchSnapshot();
  });

  test('ButtonWrapper should render properly', () => {
    expect(shallow(<ButtonWrapper />)).toMatchSnapshot();
  });

  test('Helper should render properly', () => {
        expect(shallow(<Helper />)).toMatchSnapshot();
  });

  test('Input should render properly', () => {
    expect(shallow(<Input />)).toMatchSnapshot();
  });

  test('Label should render properly', () => {
    expect(shallow(<Label />)).toMatchSnapshot();
  });

  test('Form should render properly', () => {
    expect(shallow(<Form />)).toMatchSnapshot();
  });

});
