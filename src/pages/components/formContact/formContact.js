import React from 'react';
import arrowRight from '../../../assets/icons/arrowRight.svg';
import './styles/index.css';

export default function FormContact(props){
  if(props.value){
    return(
      <div className="bgForm">
        <div className="containerForm">
          <div className="contentForm">
            <div className="form">
              <div className="header">
                <button onClick={props.close}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="38.875" height="38.875" viewBox="0 0 38.875 38.875">
                    <path id="close" d="M44.627,50.106,31.819,37.3,19.01,50.106a3.884,3.884,0,1,1-5.493-5.492L26.326,31.807,13.517,19a3.884,3.884,0,1,1,5.493-5.492L31.819,26.315,44.627,13.509A3.884,3.884,0,1,1,50.12,19L37.312,31.807,50.12,44.614a3.9,3.9,0,0,1,0,5.492A3.859,3.859,0,0,1,44.627,50.106Z" transform="translate(-12.375 -12.379)"/>
                  </svg>
                </button>              
              </div>
              <h3>Olá, vamos conversar sobre seu projeto.</h3>
              <form action="" method='POST'>
                <div className="name">
                  <input type="text" placeholder=" " required/>
                  <label>Qual seu nome ou nome da empresa ?</label>
                </div>
                
                <div className="email">
                  <input type="text" placeholder=" " required/>
                  <label>Qual seu E-mail ?</label>
                </div>
                <div className="sobre">              
                  <textarea placeholder=" " cols="30" rows="5" required></textarea>
                  <p>Importante falar sobre: a ideia, tempo e orçamento.</p>
                  <label>Conte-nos sobre seu projeto! </label>
                </div>
                <button>Enviar
                  <img src={arrowRight} alt="Icone de enviar" draggable="false"/>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else{
    return false;
  }
  
}
