import React from 'react';
import '../css/profileCard.css';

import Nainen from '../images/nainen.webp';

export default function ProfileCard(props)
{
    return (
        <div className="card profileCard">
            <div className="card-body text-left">
                <img src={Nainen} className="card-img-top"></img>
                <p className="text-center">Ano Nyymi</p>
                <p>Koulutus: TtM, laill. ravitsemusterapeutti</p>
                <p>Paikkakunta: Kuopio, etäyhteys</p>
                <p>Pätevyydet</p>
                <ul>
                    <li>Urheiluravitsemus</li>
                    <li>Syömishäiriöt, tunnesyöminen</li>
                </ul>
            </div>
        </div>
    )
}