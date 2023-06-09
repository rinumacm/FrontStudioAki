import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegacao } from './navegacao';
import './loginstyle.css';
import './style.css';
import Logogoogle from './componentes/imgs/Google.png';
import stereo from './componentes/imgs/stereo.png'
import { Password } from 'primereact/password';
import { useRef, useState, useEffect } from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";
import axios from 'axios'
        
export function Login() {
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
      userRef.current.focus();
      console.log(email, password );
      setEmail('');
      setPassword('');
      setSuccess(true)
    },[])

    useEffect(() => {
      setErrMsg('');
    },[email, password])

    const handleSubmit = async (e) => {
      e.preventDeffault();

    }

  return (
  
    <>
      
        <section>
      <Navegacao />
      <div style={{ background: "#0E243B" }}>
        <p ref={errRef} className={errMsg ? 'errmsg': 'offscreen'} aria-live='assertative'>{errMsg}</p>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-white shadow box-area">
        <div
          className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
          style={{ background: "#546CCF" }}
        >
          <div className="featured-image mb-3">
            <img src={stereo} className="img-fluid" style={{ width: "150px" }} alt="featured" />
          </div>
          <p
            className="text-white fs-2"
            style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: "600" }}
          >
            Entre
          </p>
          <small
            className="text-white text-wrap text-center"
            style={{ width: "17rem", fontFamily: "'Courier New', Courier, monospace" }}
          >
            Encontre o estudio que você quer!!
          </small>
        </div>
        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-text mb-4">
              <h2>Seja Bem-vindo!!</h2>
              <p>e muito bom ter você aqui.</p>
            </div>
            <form onSubmit={handleSubmit} > 
            <div className="input-group mb-3">
              <input htmlFor='username' type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Endereço de Email" id='username'
                autoComplete='off' onChange={(e) => setEmail(e.target.value)} value={email} required ref={userRef}/>
            </div>
            <div className="input-group mb-1">
              {/* <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Senha" toggleMask /> */}
              <Password type='password' value={password} id='password' autoComplete='off' required 
               onChange={(e) => setPassword(e.target.value)} feedback={false}  placeholder="Senha"  toggleMask inputClassName='form-control form-control-lg bg-light fs-6 w-100 ' className='w-100' />
            </div>
            <div className="input-group mb-5 d-flex justify-content-between">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="formCheck" />
                <label htmlFor="formCheck" className="form-check-label text-secondary">
                  <small>Lembreçe de mim</small>
                </label>
              </div>
              <div className="forgot">
                <small>
                  <a href="#">Esqueceu a senha?</a>
                </small>
              </div>
            </div>
            <div className="input-group mb-3">
              <button className="btn btn-lg btn-primary w-100 fs-6" style={{background:'#546CCF'}}>Entrar</button>
            </div>
            </form>
            <div className="input-group mb-3">
              <button className="btn btn-lg btn-light w-100 fs-6">
                <img src={Logogoogle} style={{ width: "20px" }} className="me-2" alt="google" />
                <small>Entrar com sua conta Google</small>
              </button>
            </div>
            <div className="row">
              <small>
                Ainda não tem uma conta? <a href="#">Cadastre-se</a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
    </>
  );
}



// // @media screen and (max-width: 1000px) {
//   .form_container{
//     width:45%;
//   }
// }

// @media screen and (max-width: 700px) {
//   .form_container{
//     width: 
//   }

