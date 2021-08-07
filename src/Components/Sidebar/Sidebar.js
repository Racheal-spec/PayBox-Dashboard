import React from 'react';
import './Sidebar.scss';
import {Link} from 'react-router-dom';
import {Home, Payment, Timeline, CreditCard, Receipt, History, People, Report, AccountBalance} from '@material-ui/icons';

function Sidebar() {
    return (
        <div className="sidebar">
           <ul>
           <h4>Dashboard</h4>
                 <Link to="/" className="navmenu" >
                 <Home />
                    <li>Home Page</li>
                 </Link>
                 <Link to="/users" className="navmenu">
                 <People />
                    <li>Users</li>
                 </Link>
                 <Link to="/" className="navmenu">
                 <History />
                    <li>History</li>
                 </Link>
                 <Link to="/" className="navmenu">
                 <Payment />
                    <li>Transactions</li>
                 </Link>
                 <Link to="/" className="navmenu">
                 <Timeline />
                    <li>Analytics</li>
                 </Link>
                 <Link to="/" className="navmenu">
                 <Receipt />
                    <li>Payments</li>
                 </Link>
                 <Link to="/" className="navmenu">
                 <CreditCard />
                    <li>Cards</li>
                 </Link>
                 <Link to="/" className="navmenu">
                 <Report />
                    <li>Reports</li>
                 </Link>
                 <Link to="/" className="navmenu">
                 <AccountBalance />
                    <li>Manage</li>
                 </Link>
           </ul>
        </div>
    )
}

export default Sidebar
