import React, {  useState, useEffect } from 'react';
import {Header} from '../../components/Header';
import {Card} from '../../components/Card';
import {Content,  Cards} from './styled';
import  {getData} from '../../api';
import {Loader} from "../../components/Loader";

export const Home = () => {
    const [layout, setLayout] = useState('list');
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [data, setData] = useState();

    const fetchData = async () => {
        try {
            setLoading(true)
            const {data, error} = await getData();
            if (!error) {
                setData(data)
            }
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchData()
    }, []);

    if (isLoading || !data) {
        return <Loader/>;
    }

    if (error) {
        return <div>Sorry, something went wrong</div>;
    }

    const hosts = [...data.reduce((acc, each) => {
        each.host.forEach(eachHost => {
            acc.add(eachHost)
        });
        return acc;
    }, new Set())];

    const dataSortedByApdex = data.sort((a, b) => b.apdex - a.apdex);
    const hostsWithApps = hosts.reduce((acc, eachHost) => {
        acc[eachHost] = dataSortedByApdex.filter(app => app.host.includes(eachHost))
        return acc
    }, {});

    const getTopAppsByHost = (host) => {
        return hostsWithApps[host].slice(0, 25)
    };

    const addAppToHosts = ({app}) => {
        setData([...data, app])
    };

    const removeAppFromHosts = ({app}) => {
        const appIndex = data.findIndex(eachApp => eachApp.name === app);
        if (appIndex !== -1) setData([...data.slice(0, appIndex), ...data.slice(appIndex + 1, data.length)])
    };

    console.log(hostsWithApps, data.length);

    const handleOnChangeLayoutClick = () => {
        setLayout(prevState => prevState === 'list' ? 'grid' : 'list')
    };

    return (
        <Content>
            <Header onClick={handleOnChangeLayoutClick} layout={layout}/>
            <Cards>
                {Object.entries(hostsWithApps).map(([host, apps], index) => (
                        <Card key={`host-${host}`} index={index} layout={layout} host={host} apps={apps.slice(0, 5)}/>
                    ))
                }
            </Cards>

            <button style={{width: '80px', marginTop: '15px'}} onClick={() => addAppToHosts({
                app: {
                    name: "Test",
                    contributors: ["testing"],
                    version: 7,
                    apdex: 100,
                    host: ['e7bf58af-f0be.dallas.biz']
                }
            })}>Add
            </button>

            <button style={{width: '80px', marginTop: '15px'}} onClick={() => removeAppFromHosts({app: "Test"})}>Remove</button>
        </Content>
    )
}