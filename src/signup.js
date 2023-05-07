import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegacao } from './navegacao';
import './loginstyle.css';
import './style.css';
import Logogoogle from './componentes/imgs/Google.png';
import stereo from './componentes/imgs/stereo.png'
import { Password } from 'primereact/password';
import { useState } from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import  "/node_modules/primeflex/primeflex.css";
import axios from 'axios'
import {NavLink, useHistory} from 'react-router-dom'



export function Signup() {

    // const onSubmitFunction = () => {  
    //     axios.post("http://localhost:3000/login",
    //    { email: email, password: password  }).then(res => "http://localhost:3000/signup").catch(error => console.error )
    // }


    const header = <h6>Insira sua senha</h6>;
    const footer = (
        <div>
          <small>A senha deve conter pelo menos 8 caracteres</small>
          <br />
          <small>A senha deve conter pelo menos 1 letra Maiuscula</small>
        </div>
      );
    
    const history = useHistory


    const [user, setUser] = useState({
       first_name:"", last_name:'', email:"", password:""
    })
    
    const handleInputs= (e) => {
        let namee = e.target.name
        let value = e.target.value

        setUser({...user,[namee]:value})
    }

    const postData = async(e) => {
        e.preventDefault()
        const{first_name,last_name,email,password} = user

        const res = await fetch('/signup', {
            method: 'post',
            headers: {
                'Content_Type': "application/json"
            },
            body:JSON.stringify({
                first_name,last_name,email,password
            })
        });

        const data = await res.json();

        if(res.status === 400){
            localStorage.setItem('token',data.token)
            window.alert('Usuario não encontrado')
            history.push('/')
        }   
        else{
            window.alert('Usuario Cadastrado') 
        }

    }
    
    // const [password1, setPassword1] = useState("");
    // const [password2, setPassword2] = useState("");
    
    return (
        <>
            <Navegacao />
            <form  >
            <div style={{ background: "#0E243B" }}>
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
                                    <h2>Cadastre-se!!</h2>
                                    <p>e muito bom ter você aqui.</p>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Nome" value={user.first_name} onChange={handleInputs} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Sobrenome" value={user.last_name} onChange={handleInputs} />
                                </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Endereço de Email" value={user.email} onChange={handleInputs}/>
                                </div>
                                <div className="input-group mb-3">
                                    {/* <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Senha" /> */}
                                    <Password value={user.password} onChange={handleInputs} header={header} footer={footer} placeholder="Crie uma senha"
                                     prompt="Digite uma senha"  toggleMask inputClassName='form-control form-control-lg bg-light fs-6 w-100 ' className='w-100'/>

                                    {/* <Password  placeholder="Repita a senha" toggleMask /> */}


                    
                                <div className="input-group mb-3">
                                    <button className="btn btn-lg btn-primary w-100 fs-6" style={{ background: '#546CCF' }} onClick={postData}>Criar</button>
                                </div>
                                <div className="input-group mb-3">
                                    <button className="btn btn-lg btn-light w-100 fs-6">
                                        <img src={Logogoogle} style={{ width: "20px" }} className="me-2" alt="google" />
                                        <small>Criar conta usando o Google</small>
                                    </button>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
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
// }