import  React,{ useState } from 'react';
import api from '../../services/api';

export default function Login({ history }){
  //setEmail vai att o valor de email
  const [email, setEmail] = useState('');

  async function handleSubmit(event){
    event.preventDefault();//impede de enviar pra outra tela
    const response = await api.post('/sessions', { email });
    
    const { _id } = response.data;
    localStorage.setItem('user', _id);
    
    history.push('/dashboard');
  }
    return (
       <> 
       <p>
        Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
       </p>
       <form onSubmit={handleSubmit}>
        <label htmlFor="email">EMAI-L *</label>
        <input 
          id="email"
          type="email" 
          placeholder="Seu melhor email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button type="submit" className="btn">Entrar</button>
       </form>
       </>
    )
}