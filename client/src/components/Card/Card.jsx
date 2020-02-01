import React from 'react';
import { oneOf, string, number, shape, arrayOf } from 'prop-types';
import {Host, App, Wrapper, Name, Apdex} from './styled';

 const Card = ({host, apps, layout}) => {


    return (
        <Wrapper layout={layout}>
            <Host>  {host} </Host>
                {apps.map(app => (
                    <App>
                    <Apdex> {app.apdex} </Apdex><Name> {app.name}</Name>
                    </App>
                    ))}
        </Wrapper>
    )
};

Card.propTypes = {
    host: string.isRequired,
    layout: oneOf(['list', 'grid']).isRequired,
    apps: arrayOf(shape({apdex: number.isRequired, name: string.isRequired})).isRequired
};

export { Card};