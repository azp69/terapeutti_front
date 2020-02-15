import React from 'react';
import '../css/profileCard.css';

import Nainen from '../images/nainen.webp';

const imgPath = '../images/';

export default function ProfileCard({id, name, place, education, email, phone, imageUrl, experties})
{
    const renderedExperties = RenderExperties();

    return (
        <div className="card profileCard">
            <div className="card-body text-left">
                <img src={require("../images/" + imageUrl)} className="card-img-top"></img>
                <p className="text-center">{name}</p>
                <p>Koulutus: {education}</p>
                <p>Paikkakunta: {place}</p>
                <p>Puhnro: {phone}</p>
                <p>Sähköposti: {email}</p>
                <p>Pätevyydet</p>
                <ul>
                    {renderedExperties}
                </ul>
                <p className="text-center"><button type="button" className="btn btn-primary">Varaa aika</button></p>
            </div>
        </div>
    );

    function RenderExperties() {
        return experties.map((expertie) => {
            return <li key={expertie.id}>{expertie.name}</li>;
        });
    }
}