import React from 'react';
import './styles/index.css';
import ring from '../../../assets/images/ring.png';
import mark from '../../../assets/images/mark.svg';
export default function Footer(props){
    return(
        <footer>
            {/* <img className='background' src={background} alt="" /> */}
            <div className="background">
                <div className="conversionContainer">
                    <div className="conversion">
                        <img className='ring' src={ring} alt="anel de luz" draggable='false' />
                        <div className="content">
                            <h4>Gostou do que viu? <br/> Você também pode ter.</h4>
                            <h5>Nós realmente gostamos de criar coisas incríveis.<br/> Nos desafie o quanto quiser.</h5>
                            <button className="openContact" onClick={props.open}>Vamos Conversar!</button>
                        </div>         
                    </div>            
                    
                </div> 
                
            </div>
            <div className="subFooterContainer">
                <div className="subFooter">
                    <img src={mark} alt="Marca coruja" draggable='false' />
                    <div className="services">
                        <p className='title'>Serviços</p>
                        <p>Web design e desenvolvimento</p>
                        <p>Design e desenvolvimento de aplicativos</p>
                        <p>Desenvolvimento web back-end</p>
                        <p>Desenvolvimento web front-end</p>
                        <p>Design web responsivo</p>
                        <p>Lading Page</p>
                        <p>Gerenciar de redes sociais</p>
                    </div>
                    <div className="questions">
                        <p className='title'>Dúvidas</p>
                        <p>contanto@coruja.tech</p>
                    </div>
                </div>
            </div> 
            <div className="CopyrightContainer"> 
                <div className="Copyright">
                    <p>© CORUJA todos os direitos reservados.</p>
                    <div className="socialMedia">
                        <a className='instagram' href="https://www.instagram.com/tech.coruja/" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 427.82 427.82">
                                <g id="Camada_2" data-name="Camada 2">
                                    <g id="Capa_1" data-name="Capa 1">
                                        <g>
                                            <path d="M0,213.91C0,95.77,95.77,0,213.91,0S427.82,95.77,427.82,213.91,332.05,427.82,213.91,427.82,0,332.05,0,213.91ZM213.92,99.82c-31,0-34.87.14-47,.69s-20.44,2.48-27.69,5.3a58.39,58.39,0,0,0-33.38,33.37c-2.83,7.25-4.75,15.55-5.3,27.69s-.69,16.06-.69,47,.14,34.86.69,47,2.48,20.44,5.3,27.69A58.41,58.41,0,0,0,139.17,322c7.26,2.82,15.56,4.74,27.7,5.3s16,.69,47,.69,34.86-.14,47-.69,20.44-2.48,27.7-5.3A58.41,58.41,0,0,0,322,288.63c2.81-7.25,4.73-15.55,5.31-27.69s.68-16.05.68-47-.14-34.87-.68-47-2.5-20.44-5.31-27.69a58.34,58.34,0,0,0-33.37-33.37c-7.27-2.82-15.56-4.74-27.71-5.3s-16-.69-47-.69Z" />
                                            <path d="M203.69,120.38h10.23c30.46,0,34.07.11,46.1.66,11.12.51,17.16,2.37,21.18,3.93a37.8,37.8,0,0,1,21.65,21.65c1.56,4,3.42,10.06,3.93,21.18.55,12,.66,15.64.66,46.08s-.11,34.06-.66,46.09c-.51,11.12-2.37,17.16-3.93,21.18a37.9,37.9,0,0,1-21.65,21.64c-4,1.56-10.06,3.42-21.18,3.93-12,.54-15.64.66-46.1.66s-34.07-.12-46.1-.66c-11.12-.52-17.16-2.38-21.18-3.94A37.8,37.8,0,0,1,125,281.14c-1.56-4-3.42-10.06-3.93-21.18-.55-12-.66-15.64-.66-46.1s.11-34.06.66-46.09c.51-11.12,2.37-17.16,3.93-21.18a37.84,37.84,0,0,1,21.66-21.66c4-1.57,10.06-3.42,21.18-3.93,10.52-.48,14.6-.62,35.87-.64Zm71.13,19A13.69,13.69,0,1,0,288.51,153,13.68,13.68,0,0,0,274.82,139.33Zm-60.9,16a58.59,58.59,0,1,0,58.58,58.59A58.59,58.59,0,0,0,213.92,155.32Z" />
                                            <path d="M213.92,175.88a38,38,0,1,1-38,38A38,38,0,0,1,213.92,175.88Z" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <a className='github' href="https://github.com/dev-square" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.55 427.82">
                                <g id="Camada_2" data-name="Camada 2">
                                    <g id="Capa_1" data-name="Capa 1">
                                        <path d="M409.13,109.21a218.21,218.21,0,0,0-79.8-79.8Q278.95,0,219.27,0T109.21,29.41a218.21,218.21,0,0,0-79.8,79.8Q0,159.6,0,219.27q0,71.67,41.83,128.9T149.89,427.4q7.71,1.43,11.42-2a11.18,11.18,0,0,0,3.71-8.56q0-.85-.14-15.42t-.15-25.4l-6.56,1.13a83.73,83.73,0,0,1-15.85,1,120,120,0,0,1-19.84-2,44.21,44.21,0,0,1-19.13-8.56A36.14,36.14,0,0,1,90.79,350l-2.86-6.57a71.27,71.27,0,0,0-9-14.56q-6.14-8-12.42-10.85l-2-1.43a20.93,20.93,0,0,1-3.71-3.43,15.72,15.72,0,0,1-2.57-4c-.57-1.34-.09-2.43,1.43-3.29S64,304.64,68,304.64l5.71.85c3.81.77,8.51,3,14.13,6.85a46.11,46.11,0,0,1,13.85,14.85q6.57,11.7,15.84,17.84t18.7,6.14a81.79,81.79,0,0,0,16.28-1.42,57.34,57.34,0,0,0,12.84-4.29q2.58-19.14,14-29.41A195.71,195.71,0,0,1,150,310.91a116.87,116.87,0,0,1-26.84-11.14,77,77,0,0,1-23-19.13q-9.13-11.42-15-30t-5.85-42.83q0-34.56,22.56-58.82-10.58-26,2-58.24,8.28-2.57,24.56,3.86t23.84,11q7.56,4.56,12.13,7.71a206.22,206.22,0,0,1,109.64,0l10.85-6.85A154,154,0,0,1,311.2,93.92q15.14-5.7,23.14-3.13Q347.18,123,336.62,149q22.54,24.27,22.56,58.81,0,24.27-5.86,43t-15.12,30a79.7,79.7,0,0,1-23.13,19,117.24,117.24,0,0,1-26.84,11.14A196,196,0,0,1,259,316.06q14.85,12.84,14.85,40.53v60.24a11.37,11.37,0,0,0,3.57,8.56q3.57,3.42,11.27,2,66.26-22,108.07-79.23t41.83-128.9Q438.54,159.61,409.13,109.21Z"/>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div> 
            </div>
        </footer>
    )
}