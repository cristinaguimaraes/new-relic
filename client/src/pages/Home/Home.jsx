import React, {  useState, useEffect } from 'react';
import {Content} from './styled';
import  {getData} from '../../api';
import {Loader} from "../../components/Loader";
import { Link } from 'react-router-dom';
import { AppForm } from '../../components/AppForm';

export const Home = () => {
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
        acc[eachHost] = dataSortedByApdex.filter(app => app.host.includes(eachHost));
        return acc
    }, {});

    const getTopAppsByHost = (host) => {
        return hostsWithApps[host].slice(0, 25)
    };

    const addAppToHosts = ({app}) => {
        console.log( app)
        setData([...data, app])
    };

    const removeAppFromHosts = ({app}) => {
        const appIndex = data.findIndex(eachApp => eachApp.name === app);
        if (appIndex !== -1) setData([...data.slice(0, appIndex), ...data.slice(appIndex + 1, data.length)])
    };

    console.log(hostsWithApps, data.length);
    

    return (
        <Content>
       
            <Link  to={{ pathname: '/AppsByHost', state: {hostsWithApps} }} >AppsByHost</Link>
            <AppForm addAppToHosts={addAppToHosts}/>

            <button style={{width: '80px', marginTop: '15px'}} onClick={() => removeAppFromHosts({app: "Test"})}>Remove</button>
            
        </Content>
    )
}