import React from 'react';

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
                  <div class="row">
                    <div class="col">
                      <label for="EtunimiInput">Etunimi</label>
                      <input type="text" class="form-control" placeholder="Syötä etunimi"/>
                    </div>

                    <div class="col">
                      <label for="SukunimiInput">Sukunimi</label>
                      <input type="text" class="form-control" placeholder="Syötä sukunimi"/>
                    </div>
                </div>
              </div>

              <div class="form-group">
                <label for="FormControlSelect1">Toimipaikka</label>
                <select class="form-control" id="FormControlSelect1">
                  <option>Helsinki</option>
                  <option>Vantaa</option>
                  <option>Espoo</option>
                  <option>Kuopio</option>
                  <option>Oulu</option>
                </select>
              </div>

              <div className="form-group">
              <label for="PhoneInput">Puhelinnumero</label>
              <input type="text" class="form-control" id="PhoneInput" placeholder="Syötä puhelinnumero"/>
              </div>

                <div className="form-group">
                <label for="InputEmail1">Sähköposti</label>
                <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Syötä sähköpostiosoite"/>
                </div>

                <div class="form-group">
                <label for="InputPassword1">Salasana</label>
                <input type="password" class="form-control" id="InputPassword1" placeholder="Syötä salasana"/>
                </div>

              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="hyvaksy1" id="hyvaksy1"/>
                  <label class="form-check-label" for="hyvaksy1">
                    Hyväksyn jotain jotain
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="hyvaksy2" id="hyvaksy2"/>
                  <label class="form-check-label" for="hyvaksy2">
                    Hyväksyn jotain jotain
                  </label>
                </div>
              </div>

                <button type="submit" class="btn btn-primary">Rekisteröidy</button>

              </form>
           </div>
       </div>
       </div>
    </div>
  );
}
