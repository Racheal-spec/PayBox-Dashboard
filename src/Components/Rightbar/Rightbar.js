import React from 'react';
import './Rightbar.scss';
import CreditCard from '../../Assets/Credit-card.png';
import avatar1 from '../../Assets/Tomisin3.jpg';
import {Add} from '@material-ui/icons';

function Rightbar() {
    return (
        <div className="rightbar">
            <img src={CreditCard} alt="credit card" />
            <div className="btn-div">
                <button>
                    <Add />
                    <p>Add New Card</p>
                </button>
            </div>
            <h3>Pending</h3>
            <div className="pending-list">
             <div className="list1">
             <img src={avatar1} alt="avatar1" />
                <h4>Mr Bull</h4>
             </div>
              <div className="list2">
              <p>2000naira</p>
              </div>
            </div>

            <div className="pending-list">
             <div className="list1">
             <img src={avatar1} alt="avatar1" />
                <h4>Precious Matt</h4>
             </div>
              <div className="list2">
              <p>5000naira</p>
              </div>
            </div>

            <div className="pending-list">
             <div className="list1">
             <img src={avatar1} alt="avatar1" />
                <h4>Mrs Banger</h4>
             </div>
              <div className="list2">
              <p>50,000naira</p>
              </div>
            </div>

            <h3>Past Transactions</h3>
            <div className="pending-list">
             <div className="list1">
             <img src={avatar1} alt="avatar1" />
                <h4>Water Bills</h4>
             </div>
              <div className="list2">
              <p>5000naira</p>
              </div>
            </div>

            <div className="pending-list">
             <div className="list1">
             <img src={avatar1} alt="avatar1" />
                <h4>Mrs Banger</h4>
             </div>
              <div className="list2">
              <p>50,000naira</p>
              </div>
            </div>


        </div>
    )
}

export default Rightbar
