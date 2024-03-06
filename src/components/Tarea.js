import React, {useState} from 'react'
import { FaCheckSquare,FaSquare ,FaRegEdit, FaTimes } from "react-icons/fa";

const Tarea = ({tarea, toggleCompletada, editarTarea, borrarTarea}) => {

  const [editandoTarea, setEditandoTarea] = useState(false);
  const [nuevaTarea, setNuevaTarea] = useState(tarea.texto)

  const handleSubmit = (e)=>{
    e.preventDefault();
    editarTarea(tarea.id, nuevaTarea)
    setEditandoTarea(false);
  }

  

  return (
    <>
        <li className='lista-tareas__tarea'>
          <div onClick={() => toggleCompletada(tarea.id)}>
            {tarea.completada ? 
              <FaCheckSquare 
              className='lista-tareas__icono lista-tareas__icono-check'
              /> 
            : 
              <FaSquare 
                className='lista-tareas__icono lista-tareas__icono-check'
              />
            }
          </div>
            
            <div className='lista-tareas__texto'>

              {editandoTarea ? 
                <form action='' className='formulario-editar-tarea' onSubmit={handleSubmit}>
                  <input 
                    type='text'
                    className='formulario-editar-tarea__input'
                    value={nuevaTarea}
                    onChange={(e)=> setNuevaTarea(e.target.value)}
                  />
                  <button 
                    type='submit'
                    className='formulario-editar-tarea__btn'
                  >
                    Actualizar
                  </button>
                </form>
              : tarea.texto
              }

            </div>
            <div className='lista-tareas__contenedor-botones'>
              <FaRegEdit
                className='lista-tareas__icono lista-tareas__icono-accion'
                onClick={()=> setEditandoTarea(true)}
              />

              <FaTimes
                className='lista-tareas__icono lista-tareas__icono-accion'
                onClick={()=> borrarTarea(tarea.id)}
              />
            </div>
        </li>
    </>
  )
}

export default Tarea