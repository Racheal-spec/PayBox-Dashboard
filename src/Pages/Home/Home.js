import React from 'react';
import Card from '../../Components/Card/Card';
import Charts from '../../Components/Charts/Charts';
import Trans from '../../Components/RecentTransactions/Trans';
import './Home.scss';

function Home() {
    return (
        <div className="home">
            <Card />
            <Charts />
            <Trans />
        </div>
    )
}

export default Home
