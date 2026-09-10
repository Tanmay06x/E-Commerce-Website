import { Link,NavLink } from "react-router-dom"
import {Search,Menu,X,User,ShoppingBag,} from "lucide-react";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartCount";
import { ProductContext } from "../Context/Context";
import { InputContext } from "../Context/Input";

const Navbar = () => {

    const {cartCount}=useContext(CartContext);
    const[menuOpen,setMenuOpen]=useState(false);
    const{search, setSearch}=useContext(ProductContext);
    const{setInput}=useContext(InputContext);

  return (
        <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-4 relative">
            
        {/* Left part of Navbar  */}

        <div className="flex items-center gap-3">

            <button className="lg:hidden"
            onClick={()=>{setMenuOpen(!menuOpen)}}
            aria-label="Toggle Navigation Menu"
            >
            {menuOpen?<X size={20} strokeWidth={2.25} />:<Menu size={20} strokeWidth={2.25} /> }
                
            </button>

            {menuOpen && (
            <div className="absolute  bg-black flex flex-col gap-5 top-full z-50 left-0 w-full transition-all duration-800 lg:hidden px-5 py-3">

                <Link to={'/'} onClick={()=>setMenuOpen(false)}>Home</Link>
                <Link to={'/collection'} onClick={()=>setMenuOpen(false)}>Collection</Link>
                <Link to={'/about'} onClick={()=>setMenuOpen(false)}>About</Link>
                <Link to={'/contact'} onClick={()=>setMenuOpen(false)}>Contact</Link>

            </div>
        )}

            <h1 className="text-2xl uppercase md:text-3xl font-semibold"><Link to={'/'}>cartify.<span className="font-light">co</span></Link></h1>

        </div>

        {/* Center part of Navbar(Pages) */}

        <div className="hidden lg:flex gap-5 text-[15px] font-light">

        <NavLink to={'/'} className={({isActive})=>
            `relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-white after:duration-200 after:transition-all ${
                isActive?
                "after:w-full":"after:w-0"
            }`
        }>Home</NavLink>

        <NavLink to={'/collection'} className={({isActive})=>
            `relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-white after:duration-200 after:transition-all ${
                isActive?
                "after:w-full":"after:w-0"
            }`
        }>Collection</NavLink>

        <NavLink to={'/about'} className={({isActive})=>
            `relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-white after:duration-200 after:transition-all ${
                isActive?
                "after:w-full":"after:w-0"
            }`
        }>About</NavLink>

        <NavLink to={'/contact'} className={({isActive})=>
            `relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-white after:duration-200 after:transition-all ${
                isActive?
                "after:w-full":"after:w-0"
            }`
        }>Contact</NavLink>

        </div>

        {/* Right part of Navbar */}

        <div className="flex justify-center items-center gap-5">

        <Link to={'/collection'} className="hidden md:flex relative justify-start items-center">

            <Search size={18} strokeWidth={2.25} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"/>

            <input className="w-70 lg:w-80 px-10 py-2 bg-white text-black rounded-2xl border-none outline-0 placeholder:text-gray-500 placeholder:text-sm" type="text" placeholder="Search for products..." value={search} onChange={(e)=>setSearch(e.target.value)}/>

        </Link>

        <Link to={'/collection'} className="md:hidden" onClick={()=>{setInput(true)}}>
            <Search/>
        </Link>

        <div className="flex items-center gap-3">
            
                <Link to={'/login'}>
                <User className="cursor-pointer"/>
                </Link>

        <div className="relative">

            <Link to={'/cart'}>
            <ShoppingBag className="cursor-pointer"/>
            </Link>
            
            <span className="absolute -right-2 border-2 border-black -top-2 text-[11px] font-semibold bg-red-500 text-white rounded-full min-w-5 h-5 flex justify-center items-center">{cartCount}</span>

            </div>

        </div>
      </div>
    </div>
  )
}
export default Navbar