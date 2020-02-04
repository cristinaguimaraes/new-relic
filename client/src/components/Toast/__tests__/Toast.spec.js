import { Toast } from '../Toast';
import { shallow } from 'enzyme';
import React from 'react';

describe('Toast component', () => {
  test('should render properly', () => {
    const fn = () => {};
    const wrapper = shallow(<Toast showToast={false} onHideToast={fn} onClose={fn} />);
    expect(wrapper).toMatchSnapshot();

    const wrapper1 = shallow(<Toast messageKey={'details'} showToast={true} onHideToast={fn} onClose={fn} />);
    expect(wrapper1).toMatchSnapshot();
  });
});
