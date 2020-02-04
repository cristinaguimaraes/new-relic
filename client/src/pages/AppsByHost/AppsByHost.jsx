import React, {  useState } from 'react';
import {Card} from '../../components/Card';
import {Content,  Cards} from './styled';
import { arrayOf, number, shape, string } from 'prop-types';
import {AppsByHostHeader} from "../../components/AppsByHostHeader";
import {Redirect} from "react-router-dom";

const AppsByHost = ({data}) => {

    const [layout, setLayout] = useState('list');

    if (Object.keys(data).length === 0) return <Redirect to="/" />;
    
    const handleOnChangeLayoutClick = () => {
        setLayout(prevState => prevState === 'list' ? 'grid' : 'list')
    };

    return (
        <Content>
            <AppsByHostHeader onClick={handleOnChangeLayoutClick} layout={layout}/>
            <Cards>
                {Object.entries(data).map(([host, apps], index) => (
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
