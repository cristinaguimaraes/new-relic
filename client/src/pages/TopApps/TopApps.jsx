import React from 'react';
import {Card} from '../../components/Card';
import {Content, Header} from './styled';
import { arrayOf, number, shape, string } from 'prop-types';

const TopApps = ({data}) => {
const [,,id] = window.location.pathname.split('/');

    return (
        <Content>
            <Header>Top 25 Apps</Header>
            <Card  host={id} apps={data[id].slice(0, 25)}/>
        </Content>
    )
};

TopApps.propTypes = {
    location: shape({pathname: string, state:shape({hostsWithApps:arrayOf(shape({apdex: number.isRequired, name: string.isRequired})).isRequired})}).isRequired,
};

export { TopApps };
