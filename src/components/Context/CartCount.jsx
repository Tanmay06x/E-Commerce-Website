import { createContext, useState } from 'react'

export const CartContext=createContext();

const Cart = ({children}) => {

    const[active, setActive]=useState("");
    const [cart, setCart]=useState([]);
    const [cartCount,setCartCount]=useState(0);
    const addtocart = (product) => {
      
  const existingProduct = cart.find(
    (item)=> item.id===product.id && item.size===active
  )

  if(existingProduct){
    setCart((prev)=>
      prev.map((item)=>
        item.id===product.id && item.size===active
        ?
        {...item,quantity:item.quantity+1}
        :item
      )
    )
  }

  else{
    setCart((prev)=>[

      ...prev,{
      ...product,
      quantity:1,
      size:active
        
      }
    ]);
  }

  setCartCount((prev)=>prev+1)

}

  return (

    <CartContext.Provider value={{cartCount,addtocart,cart,setCart,active,setActive,setCartCount}}>
    {children}
    </CartContext.Provider>
    
  )
};

export default Cart

