import './Login.css'
import { useNavigate } from 'react-router-dom';
import loginHome from '../../assets/loginHome.gif'

export const Login = () =>{
    const navigate = useNavigate();

    return (
        <div className = "containerLogin">
            <div className='containerLogin__form'>
                <div className='divTitle'>
                    <h1 id='titleh1'>CRECER, ESTÁ EN TUS MANOS</h1>
                    <h5 id='titleh5'>Inicie Sesión</h5>
                </div>  
                <form className='login__form'>
                        <input className='login__inputs' type='text' id='user' name='user' placeholder='Usuario'/>
                        <input className='login__inputs' type='password' id='password' name='password' placeholder='Contraseña'/>
                        <hr/>
                        <div className='form-check'>
                            <input className='form-check-input checkbox-Login' type='checkbox' id='flexCheckChecked' />
                            <label className='form-check-label label-check' for='flexCheckChecked'>Lorem Ipsum dolor sit amet, consectetur adipiscing elit </label>
                        </div>
                        <div className='buttonLogin'>
                            <button className='submitButton'  onClick={() => navigate("/home")}> Ingresar</button>
                        </div>
                        
                        
                </form>
            </div>
            <div className='divImg'>
                <img alt ="gifLogin" src={loginHome} id='gifLogin'/>
            </div>
            
        </div>

    )
}