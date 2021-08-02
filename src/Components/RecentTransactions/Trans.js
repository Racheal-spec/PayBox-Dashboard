import React from 'react';
import './Trans.scss';
import avatar1 from '../../Assets/Tomisin3.jpg';

function Trans() {
    return (
        <div className='trans'>
            <h3>Recent Transactions</h3>
            <div className="trans-list1">
                <img src={avatar1} alt="avatar1" />
                <p>Electricity</p>
                <p>12:52am</p>
                <p>2000naira</p>
                <p>completed</p>
            </div>
            <hr />
            <div className="trans-list1">
                <img src={avatar1} alt="avatar1" />
                <p>Shopping</p>
                <p>11:52am</p>
                <p>6050naira</p>
                <p>completed</p>
            </div>
            <hr />
            <div className="trans-list1">
                <img src={avatar1} alt="avatar1" />
                <p>License payment</p>
                <p>8:52pm</p>
                <p>20000naira</p>
                <p>completed</p>
            </div>
            <hr />
            <div className="trans-list1">
                <img src={avatar1} alt="avatar1" />
                <p>Miscellaneous</p>
                <p>15:22am</p>
                <p>15300naira</p>
                <p>completed</p>
            </div>
           <hr />
            <div className="trans-list1">
                <img src={avatar1} alt="avatar1" />
                <p>Miscellaneous</p>
                <p>15:22am</p>
                <p>15300naira</p>
                <p>completed</p>
            </div>
           
        </div>
    )
}

export default Trans;
