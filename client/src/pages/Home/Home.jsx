import React, {  useEffect } from 'react';
import {Content, Link} from './styled';
import {Loader} from "../../components/Loader";
import { AddAppForm } from '../../components/AddAppForm';
import { func} from "prop-types";
import { useRequest } from '../../hooks/useRequest';
import {getData} from "../../api";
import {RemoveAppForm} from '../../components/RemoveAppForm';
import {TopAppsByHostForm} from "../../components/TopAppsByHostForm";

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

    return (
        <Content>
            <Link  to={{ pathname: '/AppsByHost'}} >See List of Apps By Host</Link>
            <TopAppsByHostForm/>
            <AddAppForm addAppToHosts/>
            <RemoveAppForm/>
        </Content>
    )
};

Home.propTypes = {
    onSaveInitialData: func.isRequired,
};

export { Home};