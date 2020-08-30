import React, { createContext, useReducer } from 'react'
import { HelloReducer } from '../reducers/HelloReducer'
import { SirnameReducer } from '../reducers/SirnameReducer'

export const HelloContext = createContext()

export const HelloContextProvider = (props) => {
    
    const [name, Hellodispatch] = useReducer(HelloReducer, 'Meet')
    const [sirname, Sirnamedispatch] = useReducer(SirnameReducer, 'Patel')

    return(
        <HelloContext.Provider value={{name,sirname,Hellodispatch,Sirnamedispatch}} >
            {props.children}
        </HelloContext.Provider>
    )
}
