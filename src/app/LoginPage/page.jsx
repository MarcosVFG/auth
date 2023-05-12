'use client';

import React, { useState , useContext } from "react";
import { AuthContext, loginComEmailESenha } from "@/app/auth";
import styles from "./styles.css"
import style from '../globals.css'

const LoginPage = () => {
  
  const {authenticated , loginComEmailESenha} = useContext(AuthContext);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
    
  const handleSubmit = (e) => {
    e.preventDefault();

    loginComEmailESenha(email, password)
  };

  return (
    <div className="principal">
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={email} onChange={ (e) => setEmail(e.target.value)}/>
          </div>   
          <div className="field">
            <label htmlFor="password">Senha:</label>
            <input type="password" name="password" id="password" value={password} onChange={ (e) => setPassword(e.target.value)} />
          </div>
          <div className="actions">
            <button type="submit" className="botao"> ENTRAR </button>
          </div>
      </form>
    </div>
  )
}

export default LoginPage;