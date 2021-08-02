import React from 'react';
import './Rightbar.scss';
import CreditCard from '../../Assets/Credit-card.png';

function Rightbar() {
    return (
        <div className="rightbar">
            <img src={CreditCard} alt="credit card" />
        </div>
    )
}

export default Rightbar
