import React, {  useState } from 'react';
import {Header} from "../../components/Header";
import {Card} from "../../components/Card";
import {Content,  Cards} from './styled';
import data from "../../api";

export const Home = () => {
const [layout, setLayout] = useState('list');
const a =  [...data.reduce((acc, each) => {
        each.host.forEach(eachHost => {
            acc.add(eachHost)
        });
        return acc;
    }, new Set())];

const x = data.sort((a, b) => {
        if (a.apdex > b.apdex) return -1;
        if (a.apdex < b.apdex) return 1;
    });

const w =   a.reduce((acc,each) => {
        acc[each] = x.filter(eachx => eachx.host.includes(each))
        return acc
    },{});
console.log(data, w)

const handleOnClick = () => {
    setLayout(prevState => prevState === 'list' ? 'grid' : 'list')
};
    return (
        <Content>
            <Header onClick={handleOnClick} layout={layout}/>
            <Cards>
            {Object.entries(w).map(([key, apps]) => (

              <Card layout={layout}  host={key}    apps={apps.slice(0,5)}/>


            ))}
            </Cards>
        </Content>
    )
};