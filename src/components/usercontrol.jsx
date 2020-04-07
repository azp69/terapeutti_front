import React, { useState } from "react";
import * as DieticianAPI from "../services/dieticianAPI";

import "../css/welcome.css";
import "../css/textInput.css";
import Modal from './modal.jsx';

export default function UserControl(){

  return(
    <div>

    <div className="row">
      <div className="col-sm-12 mt-5 card card-body bg-light">
        <div className="py-5 my-3 px-5 text-center">
          <h1>Tilinhallinta</h1>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12 mt-5 card card-body bg-light">
      <h4>Omat tiedot</h4>
      <hr/>

      <div class="container">
        <div className="row">
          <div class="col-4 text-center">
            <h2>kuva</h2>
          </div>
{/*ekan rivin tiedot*/}
            <div class="col-8">
             <div class="row">
                  <div class="col">
                      <label ><h8>Etunimi</h8></label>
                  </div>
                  <div class="col">
                      <label><h8>Sukunimi</h8></label>
                  </div>
                  <div class="col">
                      <label><h8>Toimipaikka</h8></label>
                  </div>
             </div>
{/* end*/}
{/*tiedot etunimi, sukunimi, toimipaikka*/}
            <div class="row">
                <div class="col">
                  <label for="firstname"><h8>Maija</h8></label>
                </div>
                <div class="col">
                  <label><h8>Meikäläinen</h8></label>
                </div>
                <div class="col">
                  <label><h8>Helsinki</h8></label>
                </div>
            </div>
{/* end*/}
            <hr/>
{/*toisen rivin tiedot*/}
            <div class="row">
                 <div class="col">
                     <label ><h8>Puhelin</h8></label>
                 </div>
                 <div class="col">
                     <label><h8>Sähköposti</h8></label>
                 </div>
            </div>
{/* end*/}
{/*puhelin, email*/}
            <div class="row">
                <div class="col">
                  <label for="puhelin"><h8>050125125125</h8></label>
                </div>
                <div class="col">
                  <label for="email"><h8>maija.meikäläinen@outlook.com</h8></label>
                </div>
            </div>
{/* end*/}
        </div>
       </div>
      </div>

        <hr/>
        <a href="#" data-toggle="modal" data-target="#TietojenMuokkaus" class="btn btn-primary">Muokkaa esittelyä</a>

      </div>
    </div>

{/* Asiakkaalle näkyvän esittelyn muokkaus*/}
    <div className="row">
      <div className="col-sm-12 mt-5 card card-body bg-light">
        <h4>Asiakkaille näkyvä esittelyteksti</h4>
        <hr/>
          <div className="py-5 my-3 px-5 text-center">
              <h5>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
               you need to be sure there isn't anything embarrassing hidden in the middle of text.
              All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
               making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
                combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                 The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</h5>
          </div>
        <hr/>
      <a href="#" data-toggle="modal" data-target="#EsittelynMuok" class="btn btn-primary">Muokkaa esittelyä</a>
      </div>
    </div>
{/* end*/}

    <div className="row">
      <div className="col-sm-12 mt-5 card card-body bg-light">
      <h4>Tulevat ajat</h4>
      <hr/>
        <div className="py-5 my-3 px-5 ">

          <div class="card w-100">
            <div class="card-body">
              <div class="row">
                  <div class="col-sm-9">
                    <p class="card-text">Tietoja tulevasta ajasta</p>
                  </div>
                  <div class="col">
                    <a href="#" data-toggle="modal" data-target="#TulevatAjat" class="btn btn-primary">Tarkastele</a>
                  </div>
                  <div class="col">
                    <a href="#" class="btn btn-danger">Peru</a>
                  </div>
              </div>
            </div>
          </div>

          <div class="card w-100">
            <div class="card-body">
              <div class="row">
                  <div class="col-sm-9">
                    <p class="card-text">Tietoja tulevasta ajasta</p>
                  </div>
                  <div class="col">
                    <a href="#" data-toggle="modal" data-target="#TulevatAjat" class="btn btn-primary">Tarkastele</a>
                  </div>
                  <div class="col">
                    <a href="#" class="btn btn-danger">Peru</a>
                  </div>
              </div>
            </div>
          </div>

          <div class="card w-100">
            <div class="card-body">
              <div class="row">
                  <div class="col-sm-9">
                    <p class="card-text">Tietoja tulevasta ajasta</p>
                  </div>
                  <div class="col">
                    <a href="#" data-toggle="modal" data-target="#TulevatAjat" class="btn btn-primary">Tarkastele</a>
                  </div>
                  <div class="col">
                    <a href="#" class="btn btn-danger">Peru</a>
                  </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

<Modal></Modal>

    </div>
  );


}
