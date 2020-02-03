import React, {  useEffect } from 'react';
import {Content, Link} from './styled';
import {Loader} from "../../components/Loader";
import { AppForm } from '../../components/AppForm';
import { func} from "prop-types";
import { useRequest } from '../../hooks/useRequest';
import {getData} from "../../api";

 const Home = ({onSaveInitialData}) => {
     const { data, isLoading, error } = useRequest(getData);

    useEffect(() => {
       if(data) onSaveInitialData({data})
    }, [data]);

     if (isLoading || !data) {
         return <Loader/>;
     }

     if (error) {
         return <div>Sorry, something went wrong</div>;
     }
console.log('aqui')
    return (
        <Content>
            <Link  to={{ pathname: '/AppsByHost'}} >See List of Apps By Host</Link>
            <Link  to={{ pathname: `/TopApps/7e6272f7-098e.dakota.biz` }} >See List of Apps By Host</Link>
            <AppForm addAppToHosts/>

            <button style={{width: '80px', marginTop: '15px'}}>Remove</button>
            
        </Content>
    )
};

Home.propTypes = {
    onSaveInitialData: func.isRequired,
};

export { Home};