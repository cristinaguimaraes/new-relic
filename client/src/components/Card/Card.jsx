import React from 'react';
import { oneOf, string, number, shape, arrayOf } from 'prop-types';
import {Host, App, Wrapper, Name, Apdex} from './styled';

const Card = ({host, apps, layout, index}) =>  (
  <Wrapper layout={layout} index={index}>
    <Host>  {host} </Host>
    {apps.map((app, index) => (
      <App key={index}>
        <Apdex> {app.apdex} </Apdex>
        <Name> {app.name}</Name>
      </App>
    ))}
  </Wrapper>
);

Card.defaultProps = {
    layout: 'list'
};

Card.propTypes = {
    host: string.isRequired,
    layout: oneOf(['list', 'grid']),
    apps: arrayOf(shape({apdex: number.isRequired, name: string.isRequired})).isRequired,
    index: number
};

export { Card};