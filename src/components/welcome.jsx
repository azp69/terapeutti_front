import React from 'react';

import '../css/welcome.css';

import ProfileCard from './profileCard';



export default function Welcome()
{

    const profiles = [
        {
            "id" : 0,
            "name" : "Ano Nyymi",
            "education" : "TtM, laill. ravitsemusterapeutti",
            "place" : "Kuopio",
            "email" : "ano@nyymi.net",
            "phone" : "050-123123",
            "imageUrl" : "nainen.webp",
            "experties" : [ 
                {"id" : "0", "name" : "Urheiluravitsemus"},
                {"id" : "1", "name" : "Syömishäiriöt"},
                {"id" : "2", "name" : "Tunnesyöminen"},
            ]
        },

        {
            "id" : 1,
            "name" : "Maija Mehiläinen",
            "education" : "TtM, laill. ravitsemusterapeutti",
            "place" : "Helsinki",
            "email" : "maija@mehilainen.net",
            "phone" : "050-1232123",
            "imageUrl" : "nainen.webp",
            "experties" : [ 
                {"id" : "0", "name" : "Urheiluravitsemus"},
                {"id" : "3", "name" : "Vegaaniravitsemus"},
                {"id" : "4", "name" : "Ikääntyneen ruokavalio"},
            ]
        },

        {
            "id" : 2,
            "name" : "Milla Magia",
            "education" : "TtM, laill. ravitsemusterapeutti",
            "place" : "Ankkalinna",
            "email" : "milla@magia.net",
            "phone" : "050-3333333",
            "imageUrl" : "Milla_Magia.jpg",
            "experties" : [ 
                {"id" : "5", "name" : "Tyypin 1 diabeteksen ravitsemushoito"},
                {"id" : "6", "name" : "Kasvisruokailijan ravitsemus"},
                {"id" : "7", "name" : "Arkiruokailu ja elintapaohjaus"},
                {"id" : "8", "name" : "Painonhallinta ja syömiskäyttäytyminen"},
            ]
        }
    ];

    const renderProfiles = profiles.map((profile) => {
        return <ProfileCard key={profile.id} id={profile.id} name={profile.name} place={profile.place} education={profile.education} email={profile.email} phone={profile.phone} imageUrl={profile.imageUrl} experties={profile.experties} />
    });

    return (
        <div className="row">
            <div className="col-sm-12 px-0 my-5">
                <div className="card-columns">
                    <div className="card card-body bg-light text-center mt-4" style={{minHeight : "350px"}}>
                        <i className='fas fa-apple-alt pb-3' style={{fontSize:"4em", color : "#c1727b"}}></i>
                        <h2 className="my-3">Etsitkö luotettavaa tietoa ruokailuun tai syömiseen liittyvissä kysymyksissä?</h2>
                    </div>
                    
                    <div className="card card-body bg-light text-center mt-4" style={{minHeight : "350px"}}>
                        <i className='fas fa-carrot pb-3' style={{fontSize:"4em", color : "#c1727b"}}></i>
                        <h2 className="my-3">Onko sinulla tai läheiselläsi haasteita ruoansulatuksen tai erityisruokavalioiden kanssa?</h2>
                    </div>

                    <div className="card card-body bg-light text-center mt-4" style={{minHeight : "350px"}}>
                        <i className='fas fa-seedling pb-3' style={{fontSize:"4em", color : "#c1727b"}}></i>
                        <h2 className="my-3">Me olemme ravitsemukseen koulutettu ammattikunta.</h2>
                    </div>
                </div>
                
            </div>

            <div className="col-sm-12 mt-4 card card-body bg-light">
                
                <div className="py-5 punchline my-3 px-5 text-center">
                    
                    <h5 className="pb-3">Tutustu ravitsemusterapeutteihin ja varaa aika ammattilaiselle.</h5>
                    <div className="form-group mb-0">
                        <label>Etsi nimellä tai kaupungilla</label>
                        <input type="text" className="form-control mr-auto ml-auto" id="usr" style={{maxWidth : "500px"}}/>
                        </div>
                    </div>
                
                <div className="card-columns my-3">
                    {renderProfiles}
                </div>
            </div>
        </div>
    )
}