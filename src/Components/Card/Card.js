import React from 'react';
import './Card.scss';
import {TransferWithinAStation, ExitToApp, PhonelinkRing, Payment, MoreVert} from '@material-ui/icons';

function Card() {
    return (
        <div className="card-info">
            <div className="card">
                <div className="icon">
                <TransferWithinAStation />
                <MoreVert />
                </div>
                <p>Transfer with PayBox Card</p>
            </div>
            <div className="card">
                <div className="icon">
                <ExitToApp />
                <MoreVert />
                </div>
                <p>Transfer to other banks</p>
            </div>
            <div className="card">
                <div className="icon">
                <PhonelinkRing />
                <MoreVert />
                </div>
                <p>Make use of USSD</p>
            </div>
            <div className="card">
                <div className="icon">
                <Payment />
                <MoreVert />
                </div>
                <p>Request for a new card</p>
            </div>
        </div>
    )
}

export default Card
