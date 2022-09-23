import './MyCourses.css';
import addCourse from '../../../assets/icon-add-course.png';
import arrowRight from '../../../assets/arrow-right.png';
import iconCard from '../../../assets/icon-card.png';

export const MyCourses = (props) =>{
    return(
        <section className='containerCourses'>
            <div>
                <h3>Mis Cursos</h3>
                <section className='containerCards'>
                    <div className='courseCard' >
                        <img src={addCourse} alt='addCourse' className='addCourse'/>
                        <h3 className='titleCard'>Título curso</h3>
                        <img src={iconCard} alt='IconCard' className='iconCard'/>
                        <p>Completado</p>
                    </div>
                    <div className='courseCard' >
                        <img src={addCourse} alt='addCourse' className='addCourse'/>
                        <h3 className='titleCard'>Título curso</h3>
                        <img src={iconCard} alt='IconCard' className='iconCard'/>
                        <p>Completado</p>
                    </div>
                    <div className='courseCard' >
                        <img src={addCourse} alt='addCourse' className='addCourse'/>
                        <h3 className='titleCard'>Título curso</h3>
                        <img src={iconCard} alt='IconCard' className='iconCard'/>
                        <p>Completado</p>
                    </div>
                    <div className='courseCard' >
                        <img src={addCourse} alt='addCourse' className='addCourse'/>
                        <h3 className='titleCard'>Título curso</h3>
                        <img src={iconCard} alt='IconCard' className='iconCard'/>
                        <p>Completado</p>
                    </div>
                    <div className='courseCard' >
                        <img src={addCourse} alt='addCourse' className='addCourse'/>
                        <h3 className='titleCard'>Título curso</h3>
                        <img src={iconCard} alt='IconCard' className='iconCard'/>
                        <p>Completado</p>
                    </div>

                </section>
            </div>
            <div className='nextCourses'>
                <img src={arrowRight} alt='arrowRight' id='arrowRight'/>
            </div>          
        </section>
    )
}