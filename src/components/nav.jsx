import React from 'react';
import navCss from '../css/nav.css';

export default function Nav({pageHandler})
{
    return (
        <nav className="navbar navbar-expand-md sticky-top navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-link">
                        <a className="nav-link" href="#" onClick={() => pageHandler('home')} data-toggle="collapse" data-target=".navbar-collapse.show">Etusivu</a>
                    </li>
                    <li className="nav-link">
                        <a className="nav-link" href="#" onClick={() => pageHandler('services')} data-toggle="collapse" data-target=".navbar-collapse.show">Palvelut</a>
                    </li>
                    <li className="nav-link">
                        <a className="nav-link" href="#" onClick={() => pageHandler('why')} data-toggle="collapse" data-target=".navbar-collapse.show">Miksi ravitsemusterapiaan</a>
                    </li>
                    <li className="nav-link">
                        <a className="nav-link" href="#" onClick={() => pageHandler('contact')} data-toggle="collapse" data-target=".navbar-collapse.show">Ota yhteyttä</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}