import React, {useState} from 'react'
import { FaPlusSquare } from "react-icons/fa";
import {v4 as uuidv4} from 'uuid'

const FormularioTareas = ({tareas, setTareas}) => {

    const [inputTarea, setInputTarea] = useState('');

    const handleInput = (e)=>{
        setInputTarea(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        setTareas(
            [
                ...tareas,
                {
                    id:uuidv4(),
                    texto:inputTarea,
                    completada:false
                }
            ]
        );
        setInputTarea('')

    }

  return (
    <>
       <form action='' className='formulario-tareas' onSubmit={handleSubmit}>
            <input
                type='text'
                className='formulario-tareas__input'
                placeholder='Escribe una tarea'
                value={inputTarea}
                onChange={(e)=> handleInput(e)}
            />
            <button 
                type='submit'
                className='formulario-tareas__btn'
            >
                <FaPlusSquare
                    className='formulario-tareas__icono-btn'
                />
            </button>
        </form>  
    </>
  )
}

export default FormularioTareas