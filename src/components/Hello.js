import React, { useContext, useState } from 'react'
import { HelloContext } from '../context/HelloContext'

export const Hello = () => {

    const {name,sirname,Sirnamedispatch,Hellodispatch} = useContext(HelloContext)
    const [inputName, setInputName] = useState('')
    const [inputSirname, setInputSirname] = useState('')

    const change = () => {
        if( inputName !== '' ){
            Hellodispatch({ type : 'CHANGE', name : inputName })
            setInputName('')
        }
    }

    const append = () => {
        if( inputName !== '' ){
            Hellodispatch({ type : 'APPEND', name : inputName })
            setInputName('')
        }
    }

    const changesir = () => {
        if( inputSirname !== '' ){
            Sirnamedispatch({ type : 'CHANGE', name : inputSirname })
            setInputSirname('')
        }
    }

    const appendsir = () => {
        if( inputSirname !== '' ){
            Sirnamedispatch({ type : 'APPEND', name : inputSirname })
            setInputSirname('')
        }
    }

    return (
        <div>
            <h1>Hello World, {name} {sirname} </h1>

            <form>
                <input type="text" value={inputName} onChange={(e)=>{setInputName(e.target.value)}} placeholder="Name" required/><br/>
                <button type="button" onClick={ change }>Change</button><br/>
                <button type="button" onClick={ append }>APPEND</button><br/>
            </form>
            <hr/>
            <form>
                <input type="text" value={inputSirname} onChange={(e)=>{setInputSirname(e.target.value)}} placeholder="Sir Name" required/><br/>
                <button type="button" onClick={ changesir }>Change</button><br/>
                <button type="button" onClick={ appendsir }>APPEND</button><br/>
            </form>

            <button  onClick={() => Sirnamedispatch({ type : 'RESET'})}> RESET </button>
        </div>
    )
}
