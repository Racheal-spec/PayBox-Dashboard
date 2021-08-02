import React from 'react';
import './Charts.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Charts() {

    const data = [
        {
          month: 'Jan',
          uv: 4000,
          pv: 2400,
          amt: 5400,
        },
        {
          month: 'Feb',
          uv: 3000,
          pv: 1398,
          amt: 1210,
        },
        {
          month: 'Mar',
          uv: 2000,
          pv: 9800,
          amt: 15290,
        },
        {
          month: 'Apr',
          uv: 2780,
          pv: 3908,
          amt: 4100,
        },
        {
          month: 'May',
          uv: 1890,
          pv: 4800,
          amt: 1181,
        },
        {
            month: 'Jun',
            uv: 1890,
            pv: 4800,
            amt: 39181,
          },
          {
            month: 'July',
            uv: 1890,
            pv: 4800,
            amt: 11181,
          },
          {
            month: 'Aug',
            uv: 1890,
            pv: 4800,
            amt: 2081,
          },
          {
            month: 'Sep',
            uv: 1890,
            pv: 4800,
            amt: 4181,
          },
          {
            month: 'Oct',
            uv: 1890,
            pv: 4800,
            amt: 6181,
          },
          {
            month: 'Nov',
            uv: 1890,
            pv: 4800,
            amt: 21181,
          },
          {
            month: 'Dec',
            uv: 1890,
            pv: 4800,
            amt: 7181,
          }

    ]     


    return (
        <div className="charts">
            <h4>Your Account Analysis</h4>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                 <LineChart data={data}>
                     <XAxis dataKey='month' stroke="#a1a1a1" />
                     <YAxis dataKey='amt' stroke="#a1a1a1" />
                     <Line dataKey="amt" type="monotone" stroke="#fada5e"/>
                     <Tooltip />
                     <CartesianGrid stroke="#e0dfdf"  />
                 </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Charts
