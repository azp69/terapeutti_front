import React, { Component } from 'react';

class Modal extends Component {


    render() {
        return (
  <div>
       {/* Omien tietojen muokkaus*/}
        <div className="modal fade modal-lg" id="TietojenMuokkaus" tabIndex="-1" role="dialog" aria-hidden="true" >
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content ">
                    <div className="modal-header">
                        <h5 className="modal-title">Muokkaa tietoja</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">

                      <div class="container">
                        <div class="row">
                            <div class="col-4 text-center">
                                  <h2>kuva</h2>
                            <form>
                              <div class="row">
                                  <label><h8>Uusi kuva</h8></label>
                                  <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                              </div>
                             </form>
                            </div>
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
                          <form>
                            <div class="row">

                                <div class="col">
                                  <input type="text" class="form-control" id="UusiEtunimi" placeholder="Etunimi"/>
                                </div>
                                <div class="col">
                                  <input type="text" class="form-control" id="UusiSukunimi"  placeholder="Sukunimi"/>
                                </div>
                                <div class="col">
                                  <input type="text" class="form-control" id="UusiToimipaikka" placeholder="Toimipaikka"/>
                                </div>

                            </div>
                          </form>
                              <hr/>
                              <div class="row">
                                   <div class="col">
                                       <label ><h8>Puhelin</h8></label>
                                   </div>
                                   <div class="col">
                                       <label><h8>Sähköposti</h8></label>
                                   </div>
                              </div>
                            <form>
                              <div class="row">
                                  <div class="col">
                                  <input type="text" class="form-control" id="UusiPuhNro" placeholder="Puhelin"/>
                                  </div>
                                  <div class="col">
                                  <input type="text" class="form-control" id="UusiEmail"  placeholder="Sähköposti"/>
                                  </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <form>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Peruuta</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Hyväksy muutokset</button>
                      </form>
                    </div>
                </div>
            </div>
        </div>
       {/* Omien tietojen muokkaus*/}
       {/* Tulevat ajat*/}
        <div className="modal fade modal-lg" id="TulevatAjat" tabIndex="-1" role="dialog"  aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Varatun ajan tiedot</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p><span className="modal-lable">Asiakas:</span></p>
                        <p><span className="modal-lable">Varatun ajan tyyppi:</span></p>
                        <p><span className="modal-lable">Ajankohta:</span></p>
                        <p><span className="modal-lable">Lisätietoja käyntiin liittyen:</span></p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Sulje</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Peru aika</button>
                    </div>
                </div>
            </div>
        </div>
        {/* Tulevat ajat*/}
        {/* Esittelytekstin muokkaus*/}
            <div className="modal fade modal-lg" id="EsittelynMuok" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Esittelytekstin muokkaus</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div class="form-group">
                              <label for="UusiEsittelyteksti">Uusi esittelyteksti</label>
                              <textarea class="form-control" id="UusiEsittelyteksti" value= "Kirjoita uusi esittelysi tähän" rows="6"></textarea>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Peruuta</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Tallenna teksti</button>
                        </div>
                    </div>
                </div>
            </div>
      {/* Esittelytekstin muokkaus*/}
      {/* Korjauspyynnöt*/}
            <div className="modal fade modal-lg" id="KorjauspyyntModal" tabIndex="-1" role="dialog"  aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Korjauspyyntö</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><span className="modal-lable">Lähettäjä:</span></p>
                            <p><span className="modal-lable">Pyyntö:</span></p>
                            <p><span className="modal-lable">Lisätietoja:</span></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Sulje</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Poista</button>
                        </div>
                    </div>
                </div>
            </div>
      {/* Korjauspyynnöt*/}
        {/* terapeuttien hyväksymsieen modali*/}
            <div className="modal fade modal-lg" id="HyvaksyttavaTerapeutti" tabIndex="-1" role="dialog" aria-hidden="true" >
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <h5 className="modal-title">Hakemus</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                          <div class="container">
                            <div class="row">
                                <div class="col-4 text-center">
                                  <h2>kuva</h2>
                                </div>
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
                                  <hr/>
                                  <div class="row">
                                       <div class="col">
                                           <label ><h8>Puhelin</h8></label>
                                       </div>
                                       <div class="col">
                                           <label><h8>Sähköposti</h8></label>
                                       </div>
                                  </div>
                                  <div class="row">
                                      <div class="col">
                                        <label for="puhelin"><h8>050125125125</h8></label>
                                      </div>
                                      <div class="col">
                                        <label for="email"><h8>maija.meikäläinen@outlook.com</h8></label>
                                      </div>
                                  </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <form>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Sulje</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Hyväksy</button>
                          </form>
                        </div>
                    </div>
                </div>
            </div>
      {/* terapeuttien hyväksymsieen modali*/}
        {/* käyttäjien poistoon modali*/}
            <div className="modal fade modal-lg" id="Poistomodal" tabIndex="-1" role="dialog" aria-hidden="true" >
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <h5 className="modal-title">Tilintiedot</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                          <div class="container">
                            <div class="row">
                                <div class="col-4 text-center">
                                  <h2>kuva</h2>
                                </div>
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
                                  <hr/>
                                  <div class="row">
                                       <div class="col">
                                           <label ><h8>Puhelin</h8></label>
                                       </div>
                                       <div class="col">
                                           <label><h8>Sähköposti</h8></label>
                                       </div>
                                  </div>
                                  <div class="row">
                                      <div class="col">
                                        <label for="puhelin"><h8>050125125125</h8></label>
                                      </div>
                                      <div class="col">
                                        <label for="email"><h8>maija.meikäläinen@outlook.com</h8></label>
                                      </div>
                                  </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <form>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Sulje</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Poista tili käytöstä</button>
                          </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* käyttäjien poistoon modali*/}
  </div>


        );
    }
}

export default Modal;
