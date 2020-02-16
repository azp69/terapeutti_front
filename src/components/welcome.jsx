import React, {useState, useEffect} from 'react';

import '../css/welcome.css';

import ProfileCard from './profileCard';
import NutricianSearchAPICall from '../services/nutricianSearch';
import ExpertiesAPICall from '../services/getExperties';



export default function Welcome()
{
    const [experties, setExperties] = useState();

    
    useEffect(() => {
        ExpertiesAPICall(setExperties);
    },[]);

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

    const expertises = [
        {"id" : 0, "name" : "Urheiluravitsemus"},
        {"id" : 1, "name" : "Ikääntyneen ruokavalio"},
        {"id" : 2, "name" : "Vegaaniravitsemus"},
        {"id" : 3, "name" : "Syömishäiriöt & tunnesyöminen"},
        {"id" : 4, "name" : "Tyypin 1 diabeteksen ravitsemushoito"},
        {"id" : 5, "name" : "Kasvisruokailijan ravitsemus"},
        {"id" : 6, "name" : "Arkiruokailu ja elintapaohjaus"},
        {"id" : 7, "name" : "Painonhallinta ja syömiskäyttäytyminen"},
        {"id" : 8, "name" : "Sydän- ja verisuonitautien ravitsemushoito"},
        {"id" : 9, "name" : "Suolisto- ja vatsaongelmat"},
        {"id" : 10, "name" : "Tyypin 2 diabetes ravitsemushoito"},
        {"id" : 11, "name" : "Keliakia ja allergiat"}
    ]

    const renderedProfiles = RenderProfiles();

    const renderedExpertises = RenderExpertises();

    return (
        <div className="row">
            <HeaderCards />
            <NutricianSearch />
        </div>
    )

    function HeaderCards() {
        return <div className="col-sm-12 px-0 my-4">
            <div className="card-columns">
                <HeaderCard icon='fa-apple-alt' text='Etsitkö luotettavaa tietoa ruokailuun tai syömiseen liittyvissä kysymyksissä?' />
                <HeaderCard icon='fa-carrot' text='Onko sinulla tai läheiselläsi haasteita ruoansulatuksen tai erityisruokavalioiden kanssa?' />
                <HeaderCard icon='fa-seedling' text='Me olemme ravitsemukseen koulutettu ammattikunta.' />
            </div>
        </div>;
    }

    function HeaderCard({icon, text}) {
        return (
            <div className="card card-body bg-light text-center mt-4" style={{ minHeight: "350px" }}>
                <i className={`fas pb-3 ${icon}`} style={{ fontSize: "4em", color: "#c1727b" }}></i>
                <h2 className="my-3">{text}</h2>
            </div>
        )
    }

    function NutricianSearch() {

        const [nutricianProfiles, setNutricianProfiles] = useState();
        return (
            <div className="col-sm-12 mt-4 card card-body bg-light">
                <SearchBox profileDataUpdateFunction={setNutricianProfiles} />
                
                <Results profileData={nutricianProfiles} />
            </div>
        )

    }

    function Results({profileData}) 
    {
        const renderedProfiles = RenderProfiles(profileData);

        return <div className="card-columns my-3">
            {renderedProfiles ? renderedProfiles : <h1>Ei tuloksia</h1>}
        </div>;
    }

    function SearchBox(props) {
        const profileDataUpdateFunction = props.profileDataUpdateFunction;

        return (
            <div className="py-5 punchline my-3 px-5 text-center">
                <h5 className="pb-3">Tutustu ravitsemusterapeutteihin ja varaa aika ammattilaiselle.</h5>
                <div className="form-group mb-0">
                    <form>
                        <label>Etsi nimellä tai kaupungilla</label>
                        <input type="text" className="form-control mr-auto ml-auto" id="searchBox" name='searchBox' style={{ maxWidth: "500px" }} />
                        <div className="mt-3" id="searchFilter">
                            <div className="container">
                                <div className="row text-left">
                                    <RenderExpertises />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3" onClick={(e) => submitForm(e, profileDataUpdateFunction)}>Etsi terapeutteja</button>
                    </form>
                </div>
            </div>
        );
    }

    function submitForm(e, profileDataUpdateFunction)
    {
        e.preventDefault();
        console.log(e.target.parentElement.searchBox.value);
        // console.log(e.target.parentElement.expertise[2].id);

        const checkBoxes = e.target.parentElement.expertise;

        checkBoxes.forEach((c) => {
            if (c.checked) console.log(c.id);
        });
        NutricianSearchAPICall(profileDataUpdateFunction, e.target.parentElement.searchBox.value);
    }

    function RenderExpertises() {
        

        try {
            return experties.map((expertise) => {
                return (<div key={expertise.id} className="col-sm-12 col-md-6 col-lg-4">
                    <label className="form-check-label"><input type="checkbox" className="form-check-input" id={expertise.id} name='expertise'></input>{expertise.name}</label>
                </div>);
            });
        }
        catch
        {
            return null;
        }
        
    }

    function RenderProfiles(profiles)
    {
        try {
            return profiles.map((profile) => {
                return <ProfileCard key={profile.id} {...profile} />;
            });
        }
        catch {
            return null;
        }
        
    }

    
}