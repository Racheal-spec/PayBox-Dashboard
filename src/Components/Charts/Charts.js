import React from 'react';
import './Charts.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { dummydata } from '../../DummyData';

function Charts({title, datakey}) {  

    return (
        <div className="charts">
            <h4>{title}</h4>
            <ResponsiveContainer width="100%" aspect={3 / 1}>
                 <LineChart data={dummydata}>
                     <XAxis dataKey='month' stroke="#a1a1a1" />
                     <YAxis dataKey={datakey} stroke="#a1a1a1" />
                     <Line dataKey={datakey} type="monotone" stroke="#f7cd27"/>
                     <Tooltip />
                     <CartesianGrid stroke="#e0dfdf"  />
                 </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Charts
