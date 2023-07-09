import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'
const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValiedadPresupuesto,gastos,setGastos}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>


        {isValidPresupuesto ?(
          <ControlPresupuesto 
            gastos = {gastos}
            setGastos= {setGastos}
            presupuesto = {presupuesto}
            setPresupuesto = {setPresupuesto}
            setIsValiedadPresupuesto = {setIsValiedadPresupuesto}

          />
        ) : (
        <NuevoPresupuesto
             presupuesto = {presupuesto}
             setPresupuesto = {setPresupuesto}
             setIsValiedadPresupuesto = {setIsValiedadPresupuesto}
        />
        )}
    </header>
  )
}

export default Header
