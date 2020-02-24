import React, {useState} from 'react';
import api from './services/api';


import './App.css';
import logo from './assets/logo.svg';

import Routes from './routes';

//Nome do componente
function App() {
  //setEmail vai att o valor de email
  const [email, setEmail] = useState('');

  async function handleSubmit(event){
    event.preventDefault();//impede de enviar pra outra tela
    const response = await api.post('/sessions', { email });
    
    const { _id } = response.data;
    localStorage.setItem('user', _id);
  };

  return (
   <div className="container">
     <img src={logo} alt="AirCnC"/>

     <div className="content">
       <Routes />
       
     </div>
   </div>

  );
}

export default App;
