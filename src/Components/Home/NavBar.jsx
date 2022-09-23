import './NavBar.css';
import logotipo from '../../assets/logotipo.png';
import iconProfile from '../../assets/icon-profile.png';
import { useNavigate } from 'react-router-dom';


export const  Navbar = ()=>{
    const navigate = useNavigate();
return (
    <>
        <header>
            <img src={logotipo} alt='logoAssessment' id='logotipo' onClick={() => navigate('/')}/>
            <img src={iconProfile} alt='iconProfile' id='iconProfile'/>
        </header>
        <nav className='navHome'>
            <ul>
                <li className='optionNav'>Todos los cursos</li>
                <li className='optionNav'>Mis Cursos</li>
            </ul>
            <input type ='search' placeholder='Buscar' id='inputSearch' />
        </nav>
    </>
    
)

}