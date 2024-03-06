import './App.css';
import React, {useState, useEffect} from 'react'
import Header from './components/Header';
import FormularioTareas from './components/FormularioTareas';
import ListaTareas from './components/ListaTareas';

const App = () => {
  /* obtenemos las tareas guardadas de localStorage */
  const tareasGuardadas = 
    localStorage.getItem('tareas') ? 
    JSON.parse(localStorage.getItem('tareas')): [];

  /* Establecemos el estado de las tareas */
  const [tareas, setTareas] = useState(tareasGuardadas);

  /* Guardando el estado dentro de localStorage */
  useEffect(()=>{
    localStorage.setItem('tareas', JSON.stringify(tareas))    
  },[tareas]);
  
  /* Accedemos a localStorage y comprobamos si mostrarCompletadas es null*/
  let configMortrarCompletadas = '';
  if(localStorage.getItem('mostrarCompletadas') === null){
    configMortrarCompletadas = true;
  }else{
    configMortrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  /* El estado de mostrasCompletadas */
  const [mostrarCompletadas, setMostrasCompletadas] = useState(configMortrarCompletadas);
  
  useEffect(()=>{
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  },[mostrarCompletadas]);

  return (
   <>
    <div className="contenedor">
      <Header
        mostrarCompletadas={mostrarCompletadas}
        setMostrasCompletadas={setMostrasCompletadas}
      />

      <FormularioTareas 
        tareas={tareas}
        setTareas={setTareas}
      />

      <ListaTareas 
        tareas={tareas}
        setTareas={setTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
   </>
  );
}

export default App;
