import { createContext, useState } from 'react'

export const InputContext=createContext();

const Input = ({children}) => {

    const [input,setInput] =useState(false)

  return (
    <InputContext.Provider value={{input,setInput}}>
        {children}
    </InputContext.Provider>
  )
}

export default Input