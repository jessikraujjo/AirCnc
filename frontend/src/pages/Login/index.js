import React from 'react';

export default function Login(){
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