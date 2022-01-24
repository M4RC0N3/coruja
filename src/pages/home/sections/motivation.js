import purpleBall from '../../../assets/images/motivacao/purpleBall.webp';
import blueBall from '../../..//assets/images/motivacao/blueBall.webp';
import orangeBall from '../../../assets/images/motivacao/orangeBall.webp';
import tugleLeft from '../../../assets/images/motivacao/tugleLeft.webp';
import tugleRight from '../../../assets/images/motivacao/tugleRight.webp';
import conection from '../../../assets/images/motivacao/conection.json';
import Lottie from 'lottie-react-web';
import Scroll from '../script/scrollAnimation';
export default function Motivation(){
    return(
        <section className='motivacao'>
            <div className="grainBg">
            <img className='purpleBall' src={purpleBall} alt="bola roxa" draggable="false"/>
            <img className='blueBall' src={blueBall} alt="bola azul" draggable="false"/>
            <img className='orangeBall' src={orangeBall} alt="bola laranja" draggable="false"/>
            
            <div className="grainOpacityBg"> 
                <img className='tugleLeft' src={tugleLeft} alt="rosca da esquerda" draggable="false" />
                <img className='tugleRight' src={tugleRight} alt="rosca da direita" draggable="false" /> 
                <div className="layerLine">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>   
                <div className="line4"></div>   
                </div>
                <div className="content">
                    <div className="textContainer" id={Scroll()} data-anime="left">
                        <h3>Uma equipe <span>apaixonada</span> em tornar sua presença na internet impactante.</h3>
                        <p>Em meio a vastidão da internet, somos capazes de dar face original e criar posicionamento para a marca do seu negócio.</p>
                    </div>
                    <div className="imgContainer" id={Scroll()} data-anime="up">
                        {/* <img id = {show} src={internet} alt="internet" draggable="false" data-anime="up" /> */}
                       <div className="contectionContainer">
                            <Lottie className={"conection"} options={{
                                animationData:conection                              
                            }}/>
                       </div>                    
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}