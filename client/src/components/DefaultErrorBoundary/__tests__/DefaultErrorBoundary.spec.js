import { DefaultErrorBoundary } from '../DefaultErrorBoundary';
import { shallow } from 'enzyme';
import React from 'react';


describe('DefaultErrorBoundary component', () => {
  test('should render properly', () => {
    expect(shallow(<DefaultErrorBoundary>Test</DefaultErrorBoundary>)).toMatchSnapshot()
  });
});
