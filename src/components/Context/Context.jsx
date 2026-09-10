import { createContext, useState } from 'react'
import { products } from '../Collection/Products';

export const ProductContext=createContext();

const ProductProvider = ({children}) => {

    const [selectedCategory, setSelectedCategory]=useState("all");
    const [selectedStyle, setSelectedStyle]=useState("all");
    const[search, setSearch]=useState("")

  return (

    <ProductContext.Provider value={{products, selectedCategory, setSelectedCategory,selectedStyle,setSelectedStyle,search,setSearch}}>

      {children}
      
    </ProductContext.Provider>

  )
}

export default ProductProvider