import './MoreCourses.css';


export const MoreCourses = () =>{
    return (
        <section className='containerMoreCourses'>
            <section className='blockCourse'>
                <h6 className='titleBlockCourse'>Curso de interés</h6>
                <div className='container1'>
                    <p>PUBLICIDAD BPI</p>
                </div>
            </section>
            <section className=' blockCourse'>
                <h6 className='titleBlockCourse'>Nuevo Curso</h6>
                <div className='container2'>
                    <div className='blockText'>
                        <h3 >Titulo del curso</h3>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <p className='blockImg'></p>
                </div>
            </section>
        </section>
    )
}