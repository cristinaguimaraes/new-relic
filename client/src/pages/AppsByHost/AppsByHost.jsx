import React, {  useState } from 'react';
import {Header} from '../../components/Header';
import {Card} from '../../components/Card';
import {Content,  Cards} from './styled';
import { arrayOf, number, shape, string } from 'prop-types';

const AppsByHost = ({location}) => {

    const [layout, setLayout] = useState('list');
    
    const handleOnChangeLayoutClick = () => {
        setLayout(prevState => prevState === 'list' ? 'grid' : 'list')
    };

    return (
        <Content>
            <Header onClick={handleOnChangeLayoutClick} layout={layout}/>
            <Cards>
                {Object.entries(location.state.hostsWithApps).map(([host, apps], index) => (
                        <Card key={`host-${host}`} index={index} layout={layout} host={host} apps={apps.slice(0, 5)}/>
                    ))
                }
            </Cards>
            
        </Content>
    )
};

AppsByHost.propTypes = {
    location: shape({state:shape({hostsWithApps:arrayOf(shape({apdex: number.isRequired, name: string.isRequired})).isRequired})}).isRequired,
};

export { AppsByHost };
