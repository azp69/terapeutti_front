import React from 'react';

import '../css/welcome.css';

export default function Services()
{
    return (
        <div className="row">
        <div className="col-sm-12 mt-5 card card-body bg-light">
            <div className="py-5 my-3 px-5 text-center">
                <h1>Ruoka on tärkeä osa päivittäistä hyvinvointiamme</h1>
            </div>
        </div>

        <div className="col-sm-12 mt-4 card card-body bg-light">
            <div className="py-5 punchline my-3 px-5 text-center">
                <h2>Ravitsemusterapeutit taitavat ruokailun ja ravitsemusohjauksen lisäksi myös erikoisosaamista vaativat tilanteet, kuten diabeteksen, keliakian tai kilpaurheilun asettamat ravitsemukselliset erityisvaatimukset.</h2>
            </div>
         </div>

         <div className="col-sm-12 mt-4 px-0">
            <div className="card-deck">
                <div className="card punchline_purple">
                    <div className="card-body">
                        <h1>Urheilijan ravitsemus</h1>
                        <p>Tähän kuvaus palvelusta</p>
                        <p>Hinta 00,00€</p>
                    </div>
                </div>

                <div className="card punchline_purple">
                    <div className="card-body">
                        <h1>Syömishäiriöt ja tunnesyöminen</h1>
                        <p>Tähän kuvaus palvelusta</p>
                        <p>Hinta 00,00€</p>
                    </div>
                </div>
            </div>
         </div>

         <div className="col-sm-12 mt-4 px-0">
            <div className="card-deck">
                <div className="card punchline">
                    <div className="card-body">
                        <h1>Vegaanin ravitsemus</h1>
                        <p>Tähän kuvaus palvelusta</p>
                        <p>Hinta 00,00€</p>
                    </div>
                </div>

                <div className="card punchline">
                    <div className="card-body">
                        <h1>Tyypin 1 diabetes</h1>
                        <p>Tähän kuvaus palvelusta</p>
                        <p>Hinta 00,00€</p>
                    </div>
                </div>
            </div>
         </div>

         <div className="col-sm-12 mt-4 px-0">
            <div className="card-deck">
                <div className="card punchline_purple">
                    <div className="card-body">
                        <h1>Ikääntyminen ja elintapasairauksien ennaltaehkäisy</h1>
                        <p>Tähän kuvaus palvelusta</p>
                        <p>Hinta 00,00€</p>
                    </div>
                </div>

                <div className="card punchline_purple">
                    <div className="card-body">
                        <h1>Keliakia ja suolistosairaudet</h1>
                        <p>Tähän kuvaus palvelusta</p>
                        <p>Hinta 00,00€</p>
                    </div>
                </div>
            </div>
         </div>

         </div>
    );
}