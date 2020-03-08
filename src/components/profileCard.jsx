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
                {RenderImage()}
                <p className="text-center">{name}</p>
                <p>Koulutus: {education}</p>
                <p>Paikkakunta: {place}</p>
                <p>Puhnro: {phone}</p>
                <p>Sähköposti: {email}</p>
                <p>Pätevyydet</p>
                <ul>
                    {renderedExperties}
                </ul>
                <p className="text-center"><a href={`/terapeutit/${id}`} className="btn btn-primary">Varaa aika</a></p>
            </div>
        </div>
    );

    function RenderImage() {
        try
        {
            return <img src={require("../images/" + imageUrl)} className="card-img-top"></img>;
        }
        catch {
            return;
        }
        
    }

    function RenderExperties() {
        try {
            return experties.map((expertie) => {
                return <li key={expertie.id}>{expertie.name}</li>;
            });
        }
        catch {
            return;
        }
    }
}