import React, { useState } from 'react';
import '../styles/login.css';

export function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  return (
    <div className="divMain">
        <div className="divMain-esquerda">
          <div className='divPai-esquerda'>
            <div className='div-logo-esquerda' style={{zIndex: 1}}>
              <div className='div-logo'>
                <img src="./src/assets/LogoPointMedia.png" alt="" className='logo-image' />
                <span className="logo-text">EZ<span>.JOB</span></span>
              </div>
            </div>
            <div className='div-title-esquerda' style={{zIndex: 1}}>
              <span className='Title-esquerda'>Bem-vindo <br /> de volta!</span>
            </div>
            <div className='div-subtitle-esquerda' style={{zIndex: 1}}>
              <span className='subtitle-esquerda'>Acesse sua conta e aproveite todos os recursos disponíveis.</span>
            </div>
          </div>
        </div>

        <div className="divMain-direita">
          
          <div className="div-inputs" style={{marginTop: '-40px'}}>
            <span className='text-input'>Nome</span>
            <div className="input">
              <input className="input-field" placeholder="Insira seu nome" type='text' />
            </div>
          </div>

          <div className="div-inputs">
            <span className='text-input' style={{marginTop: '25px'}}>Senha</span>
            <div className="input">
              <input className="input-field" placeholder="Insira sua senha" type={showPassword ? "text" : "password"} />
              <div onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(158, 158, 158)"><path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM214-281.5Q94-363 40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200q-146 0-266-81.5Z"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(158, 158, 158)"><path d="M792-56 624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM480-320q11 0 20.5-1t20.5-4L305-541q-3 11-4 20.5t-1 20.5q0 75 52.5 127.5T480-320Zm292 18L645-428q7-17 11-34.5t4-37.5q0-75-52.5-127.5T480-680q-20 0-37.5 4T408-664L306-766q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302ZM587-486 467-606q28-5 51.5 4.5T559-574q17 18 24.5 41.5T587-486Z"/></svg>
                )}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
              <span className='forget-Password'>Esqueceu sua senha?</span>
            </div>
          </div>

          <div className="button-div">
            <button className="button">Entrar</button>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <a href="/visao-geral"><span className='not-Func'>Não é funcionário? <span>Clique aqui!</span></span></a>
            </div>
          </div>
        </div>
    </div>
  );

}