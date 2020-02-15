import React from 'react';
import {
    Link
  } from "react-router-dom";

import '../css/nav.css';

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
                        <Link to="/" className="nav-link">Etusivu</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/palvelut" className="nav-link">Palvelut</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/miksi" className="nav-link">Miksi ravitsemusterapiaan</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/yhteytta" className="nav-link">Ota yhteyttä</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}