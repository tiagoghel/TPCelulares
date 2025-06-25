import React from 'react';
import './quienes.css';
import FravegaUni from '../../assets/FravegaUni.jpg';
import FravegaPalmas from '../../assets/FravegaPalmas.png';
import FravegaPaseo from '../../assets/FravegaPaseo.jpg';
import FravegaAbasto from '../../assets/FravegaAbasto.jpg';

const Quienes = () => {

    return (
      
      
      <div className="main-content">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">

            <div className="carousel-item active">
              <img src={FravegaUni} className="d-block w-100" alt="FravegaUni" />
            </div>

            <div className="carousel-item">
              <img src={FravegaPalmas} className="d-block w-100" alt="FravegaPalmas" />
            </div>

            <div className="carousel-item">
              <img src={FravegaPaseo} className="d-block w-100" alt="FravegaPaseo" />
            </div>

            <div className="carousel-item">
              <img src={FravegaAbasto} className="d-block w-100" alt="FravegaAbasto" />
            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
}

export default Quienes;
