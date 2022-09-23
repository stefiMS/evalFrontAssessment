
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/Login';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={< Login />}/>
        <Route path="home" element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;

