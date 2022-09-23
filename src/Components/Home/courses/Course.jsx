import './Course.css';
import rectangle from '../../../assets/rectangle.png';

export const Course =() =>{

    return(
        <section className='containerMyCourse'>
            <img src={rectangle} alt='rectangle' id='rectangleHome'/>
            <div className='containertText'>
                <h5>Continua con </h5>
                <h3>Título del Curso</h3>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  dolor in reprehenderit.</p>
            </div>
        </section>
    ) 
}