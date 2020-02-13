import React from 'react';
import navCss from '../css/nav.css';

export default function Nav()
{
    return (
        <nav className="navbar navbar-expand-md sticky-top navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-link">
                        <a className="nav-link" href="#" onClick={() => console.log('moo')} data-toggle="collapse" data-target=".navbar-collapse.show">Etusivu</a>
                    </li>
                    <li className="nav-link">
                        <a className="nav-link" href="#" data-toggle="collapse">Palvelut</a>
                    </li>
                    <li className="nav-link">
                        <a className="nav-link" href="#" data-toggle="collapse">Miksi ravitsemusterapiaan</a>
                    </li>
                    <li className="nav-link">
                        <a className="nav-link" href="#" data-toggle="collapse">Ota yhteyttä</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}