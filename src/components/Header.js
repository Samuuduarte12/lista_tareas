import React from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Header = ({mostrarCompletadas, setMostrasCompletadas}) => {

    const toggleCompletadas = () =>{
        setMostrasCompletadas(!mostrarCompletadas);
    }

    return (
    <>
        <header className='header'>
            <h1 className='header__titulo'>Lista de tareas</h1>
            {mostrarCompletadas ?
                <button className='header__boton' onClick={ ()=> toggleCompletadas()}>
                    No mostrar completadas
                    <FaEyeSlash className='header__icono-boton'/>
                </button>
            :
                <button className='header__boton' onClick={() => toggleCompletadas()}>
                    Mostrar completadas
                    <FaEye className='header__icono-boton'/>
                </button>      
            }
        </header>
    </>
  )
}

export default Header