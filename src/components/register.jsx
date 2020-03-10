import React from 'react';
import * as DieticianAPI from '../services/dieticianAPI';

import '../css/welcome.css';

export default function Register(){

  return (
    <div>
      <div className="row">
          <div className="col-sm-12 mt-5 card card-body bg-light">
              <div className="py-5 my-3 px-5 text-center">
                  <h1>Oletko laillistettu ravitsemusterapeutti?</h1>
                  <h2>Rekisteröidy sivuillemme alla olevalla lomakkeella ja liity mukaan toimintaan!</h2>
              </div>
          </div>
       </div>

       <div className="row">
       <div className="col-sm-12 mt-5 card card-body bg-light">
           <div className="py-5 my-3 px-5 text-center">
              <form>

              <div className="form-group">
                  <div className="row">
                    <div className="col">
                      <label for="EtunimiInput">Etunimi</label>
                      <input type="text" className="form-control" id="FirstnameInput" placeholder="Syötä etunimi"/>
                    </div>

                    <div className="col">
                      <label for="SukunimiInput">Sukunimi</label>
                      <input type="text" className="form-control" id="LastnameInput" placeholder="Syötä sukunimi"/>
                    </div>
                </div>
              </div>

              <div className="form-group">
                <label for="FormControlSelect1">Toimipaikka</label>
                <select className="form-control" id="FormControlSelect1">
                  <option>Helsinki</option>
                  <option>Vantaa</option>
                  <option>Espoo</option>
                  <option>Kuopio</option>
                  <option>Oulu</option>
                </select>
              </div>

              <div className="form-group">
              <label for="EducationInput">Koulutus</label>
              <input type="text" className="form-control" id="EducationInput" placeholder="Syötä koulutus"/>
              </div>

              <div className="form-group">
              <label for="PhoneInput">Puhelinnumero</label>
              <input type="text" className="form-control" id="PhoneInput" placeholder="Syötä puhelinnumero"/>
              </div>

            <div className="form-group">
            <label for="EmailInput">Sähköposti</label>
            <input type="email" className="form-control" id="EmailInput" aria-describedby="emailHelp" placeholder="Syötä sähköpostiosoite"/>
            </div>

            <div className="form-group">
            <label for="PasswordInput">Salasana</label>
            <input type="password" className="form-control" id="PasswordInput" placeholder="Syötä salasana"/>
            </div>

              <div className="form-group">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="hyvaksy1" id="hyvaksy1"/>
                  <label className="form-check-label" for="hyvaksy1">
                    Hyväksyn jotain jotain
                  </label>
                </div>
              </div>

                <button type="submit" className="btn btn-primary" onClick={(e) => submitForm(e, queryDone)}>Rekisteröidy</button>

              </form>
           </div>
       </div>
       </div>
    </div>
  );
}

function queryDone()
{

}

function submitForm(e, queryDone)
{
    e.preventDefault();
    // console.log(e.target.parentElement.searchBox.value);
    var elements = document.getElementsByClassName('form-control');
    var name = document.getElementById('FirstnameInput').value + ' ' + document.getElementById('LastnameInput').value;
    var email = document.getElementById('EmailInput').value;
    var phone = document.getElementById('PhoneInput').value;
    var place = document.getElementById('FormControlSelect1').value;
    var password = document.getElementById('PasswordInput').value;
    var education = document.getElementById('EducationInput').value;
    
    var dietician = 
    {
        name,
        email,
        phone,
        place,
        education,
        password
    }
    console.log(dietician);


    /*
    const checkBoxes = e.target.parentElement.expertise;
    let checkedExperties = [];

    checkBoxes.forEach((c) => {
        if (c.checked) checkedExperties.push(c.id);
    });

    const searchParams = {
        searchparams : {
            query : e.target.parentElement.searchBox.value,
            expertises : checkedExperties
        }
    };

    */

    // Helper.log(JSON.stringify(search));
    // Helper.log(checkedExperties);

    // DieticianSearchAPICall(profileDataUpdateFunction, e.target.parentElement.searchBox.value);
    // console.log("s", searchParams.searchparams.query);

    DieticianAPI.add(queryDone, JSON.stringify(dietician));
}
