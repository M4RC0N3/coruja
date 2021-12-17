import treeLeaves from '../../assets/images/treeLeaves.svg';
import leavesRight from '../../assets/images/leavesRight.svg';

//troncos
  import treeTrunks from '../../assets/images/treeTrunks.svg';
  import branchTrunk from '../../assets/images/branchTrunk.svg';
  import midTrunk from '../../assets/images/midTrunk.svg';
  import lastTrunk from '../../assets/images/lastTrunk.svg';

//Moitas
  import bushRight from '../../assets/images/bushRight.svg';
  import bushLeft from '../../assets/images/bushLeft.svg';

//Gramas
  import leftGrass from '../../assets/images/leftGrass.svg';
  import grassRight from '../../assets/images/grassRight.svg';

//cipos
  import vine1 from '../../assets/images/vine1.svg';
  import vine2 from '../../assets/images/vine2.svg';
  import vine3 from '../../assets/images/vine3.svg';
  /* import vine4 from '../../assets/images/vine4.svg'; */

//responsive
import branchTrunkR from '../../assets/images/responsive/branchTrunk.svg';
import leavesLeftR from '../../assets/images/responsive/leavesLeft.svg';
import leavesRightR from '../../assets/images/responsive/leavesRight.svg';
import trunksLeftR from '../../assets/images/responsive/trunksLeft.svg';
import trunkRightR from '../../assets/images/responsive/trunkRight.svg';
import grassRightR from '../../assets/images/responsive/grassRight.svg';
import grassLeftR from '../../assets/images/responsive/grassLeft.svg';
import grassMidR from '../../assets/images/responsive/grassMid.svg';
import grassMidBackR from '../../assets/images/responsive/grassMidBack.svg';
import vine1R from '../../assets/images/responsive/vine1.svg';

import FormContact from '../components/formContact/formContact';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import './style/index.css';
import { useState} from 'react';

function Home() {
  const [props,setProps]=useState(false);
  const handleContactClick = ()=>{
    setProps(true)
  }
  function handleClose(){
    setProps((oldProps) => !oldProps);
  }
/*   const [offset, setOffset]=useState(0);
  useEffect(()=>{
    window.onscroll=()=>{
      setOffset(window.pageYOffset);
    }
  },[]);
  console.log(offset);  */
  return (
    <div className="App">
      <main>
        <Header></Header>
        <div className="container">
          {/* folhas */}
          <img className="treeLeaves" src={treeLeaves} alt="folhas da árvore" draggable="false"/>
          <img className="leavesRight" src={leavesRight} alt="Moita da direita" draggable="false"/>
          <img className="leavesLeftR" src={leavesLeftR} alt="Moita da direita" draggable="false"/>
          <img className=" leavesRightR" src={ leavesRightR} alt="Moita da direita" draggable="false"/>
          {/* Troncos */}
          
          <img className="treeTrunks" src={treeTrunks} alt="Troncos de árvore" draggable="false"/>
          <img className="trunksLeftR" src={trunksLeftR} alt="Troncos de árvore" draggable="false"/>
          <img className="trunkRightR" src={trunkRightR} alt="Troncos de árvore" draggable="false"/>
          
          <div className="groupTrunks">
            <div className="trunksContainer">
              <img className="midTrunk" src={midTrunk} alt="Tronco central" draggable="false"/>
              <img className="lastTrunk" src={lastTrunk} alt="Tronco frontal" draggable="false"/>
            </div>
          </div>
          

          {/* Moitas */}
          <img className="bushLeft" src={bushLeft} alt="moita" draggable="false"/>
          <img className="bushRight" src={bushRight} alt="Moita da direita" draggable="false"/>

          {/* Gramas */}
          <img className="leftGrass" src={leftGrass} alt="grama" draggable="false"/>
          <img className="grassRight" src={grassRight} alt="grama" draggable="false"/>
          <img className="grassRightR" src={grassRightR} alt="grama" draggable="false"/>
          <img className="grassLeftR" src={grassLeftR} alt="grama" draggable="false"/>
          <img className="grassMidR" src={grassMidR} alt="grama" draggable="false"/>
          <img className="grassMidBackR" src={grassMidBackR} alt="grama" draggable="false"/>
          {/* Cipos */}
          <img className="vine1" src={vine1} alt="Cipo" draggable="false"/>
          <img className="vine2" src={vine2} alt="Cipo" draggable="false"/>
          <img className="vine3" src={vine3} alt="Cipo" draggable="false"/>
          <img className="vine1R" src={vine1R} alt="Cipo" draggable="false"/>
          <div className="groupMark">           
            <img className="branchTrunk" src={branchTrunk} alt="Tronco frontal" draggable="false"/>
            <img className="branchTrunkR" src={branchTrunkR} alt="Tronco frontal" draggable="false"/>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 703.17 666.31">
              <g id="Camada_2" data-name="Camada 2">
                <g id="Camada_2-2" data-name="Camada 2">
                  <g id="Camada_6" data-name="Camada 6">
                    <path d="M386.75,381.73q-7,0-14.13-.26c-4.4-.15-7.85-4.12-7.7-8.86a8.26,8.26,0,0,1,8.23-8.3C447.78,367,544.9,349,591.94,251.27H411c-4.4,0-8-3.84-8-8.58s3.57-8.59,8-8.59H604.61a7.83,7.83,0,0,1,6.68,3.9,9.16,9.16,0,0,1,.61,8.17c-19.65,47.7-51.5,83.5-94.65,106.41C480.76,371.94,436.92,381.73,386.75,381.73Z" />
                    <path d="M184.14,400.63c-4.4,0-8-3.85-8-8.59V207.8c0-27.08,7.46-46.34,25.74-66.47a7.57,7.57,0,0,1,11.27-.14,9.05,9.05,0,0,1,.13,12.14c-15.45,17-21.19,31.78-21.19,54.47V392C192.12,396.78,188.55,400.63,184.14,400.63Z" />
                    <path className="rab" d="M184.14,570.65a7.53,7.53,0,0,1-3.4-.82,8.66,8.66,0,0,1-4.57-7.77V485.92c0-4.75,3.57-8.59,8-8.59s8,3.84,8,8.59v58l8-7.1c28.75-25.34,51.46-45.35,74.34-69.11a7.57,7.57,0,0,1,11.27.22,9.05,9.05,0,0,1-.2,12.14c-23.35,24.25-46.28,44.46-75.31,70-6.71,5.92-13.7,12.08-21.05,18.61A7.66,7.66,0,0,1,184.14,570.65Z"/>
                    <path d="M333.33,400.63a7.63,7.63,0,0,1-5-1.91,9.05,9.05,0,0,1-1.19-12.08c39.63-52.79,55.79-105.09,55.79-180.55,0-23.93-2.44-37.21-16.91-52.66a9.07,9.07,0,0,1-.05-12.15,7.58,7.58,0,0,1,11.28-.05c18.18,19.42,21.63,37.78,21.63,64.86,0,79.77-17.19,135.21-59.34,191.35A7.74,7.74,0,0,1,333.33,400.63Z" />
                    <path d="M287.44,241.94c-4.4,0-8-3.84-8-8.59,0-56.65-42.8-102.75-95.4-102.75H117.2c-4.4,0-8-3.84-8-8.59s3.57-8.58,8-8.58h66.87c61.4,0,111.35,53.8,111.35,119.92C295.42,238.1,291.85,241.94,287.44,241.94Z" />
                    <path d="M287.44,241.94c-4.4,0-8-3.84-8-8.59,0-66.12,49.95-119.92,111.35-119.92h66.87c4.4,0,8,3.84,8,8.58s-3.57,8.59-8,8.59H390.82c-52.61,0-95.4,46.1-95.4,102.75C295.42,238.1,291.85,241.94,287.44,241.94Z" />
                    <path d="M327.54,126.24a7.47,7.47,0,0,1-3.28-.77c-11.2-5.45-23.33-8-38.18-8-14.67,0-25.67,2-35.65,6.53A7.78,7.78,0,0,1,240,119.42a8.84,8.84,0,0,1,4.26-11.25c12-5.44,24.94-7.87,41.83-7.87s31.6,3.12,44.75,9.52a8.86,8.86,0,0,1,4,11.36A8,8,0,0,1,327.54,126.24Z" />
                    <path d="M287.4,305c-33.88,0-65.27-13.27-86.12-36.41-17.13-19-25.8-42.9-25.06-69.08.13-4.74,3.87-8.45,8.21-8.32s7.86,4.1,7.73,8.84a79.6,79.6,0,0,0,20.57,56.6c17.86,19.82,45.07,31.19,74.67,31.19s58.11-12.22,76-32.69c13.66-15.59,20.3-34.56,19.21-54.86-.26-4.74,3.1-8.8,7.5-9.07a8.26,8.26,0,0,1,8.42,8.07A93.23,93.23,0,0,1,375,267C353.84,291.15,321.89,305,287.4,305Z" />
                    <rect width="703.17" height="666.31"/>
                  </g>
                </g>
              </g>
            </svg>
            <div className="circleCoruja"></div>
          </div> 
          
          
          <div className="moon"></div>
          <h1>CORUJA</h1>
          <div className="conversionContainer">
            <div className="conversion">
              <h2>Coruja, a agência digital para seu negócio online.</h2>
              <h3>Somos sua agência digital focada em desenvolvimento de site, aplicativos, Design e gerenciamento de suas redes sociais.</h3>
              <button className="openContact" onClick={handleContactClick}>Vamos Conversar!</button>
            </div>
          </div>
        </div>
      </main>
      <FormContact value={props} close={handleClose}/>
      <Footer value={props} open={handleContactClick}></Footer>
    </div>
  );

}

export default Home;