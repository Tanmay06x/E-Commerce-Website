import { useContext, useState} from 'react'
import { ProductContext } from '../Context/Context'
import { InputContext } from '../Context/Input'
import {ChevronDown, ChevronRight, Search, X, SearchX, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import MainFooter from '../Footer/MainFooter'
import CopyRight from '../Footer/CopyRight'

const Collection = () => {

  const [selectedProductCategory, setSelectedProductCategory]=useState("all");
  const [selectedCategory, setSelectedCategory]=useState("all");
  const [selectedType, setSelectedType]=useState("all");
  const [price,setPrice]= useState(100)
  const [filter, setFilter] =useState(false)
  const{products, search, setSearch, selectedStyle, setSelectedStyle}=useContext(ProductContext);
  const{input,setInput}=useContext(InputContext);
  const [sort, setSort]=useState("relavent")

  const filteredProducts= products.filter((product)=>{

    const productCategoryMatch=
      selectedProductCategory==="all" || product.productCategory===selectedProductCategory

    const priceMatch = product.price <= price;

      const styleMatch=
      selectedStyle==="all" || product.style ===selectedStyle

      const categoryMatch=
      selectedCategory==="all" || product.category ===selectedCategory

      const typeMatch=
      selectedType==="all" || product.type ===selectedType

      const query=search.toLowerCase();

      return (productCategoryMatch && priceMatch && styleMatch && categoryMatch && typeMatch  &&
        (

              product.title.toLowerCase().includes(query)||
              product.category.toLowerCase().includes(query)||
              product.description.toLowerCase().includes(query) ||
              product.productCategory.toLowerCase().includes(query) ||
              product.style.toLowerCase().includes(query) 

        )
       )
  })

   const sortedProducts=[...filteredProducts].sort((a,b)=>{

    if(sort==="low-to-high"){
      return a.price-b.price
    }

    if(sort==="high-to-low"){
      return b.price-a.price
    }

  })
      
  const clearFilters=()=>{
    setSelectedProductCategory("all");
    setSelectedStyle("all");
    setSelectedCategory("all");
    setSelectedType("all");
    setPrice(100);
    setSearch("");
  }

  return (
    <div className='min-h-screen'>

      <div className='flex flex-col md:flex-row justify-between items-start gap-10 p-4 md:p-10'>

      <div className='w-full md:w-1/3 lg:w-1/4'>
        
        <div className='min-h-full relative w-full '>

        <div className="flex items-center justify-between">

        <span className='text-3xl md:text-4xl font-semibold'>Filter </span>
        
          <button
          className='md:hidden'
           onClick={()=>{setFilter(!filter)}}
          aria-label="Toggle Filter">
          {filter?<ChevronDown />:<ChevronRight />}
          </button>

          </div>
          
          {filter &&(
            <div className='mt-5 bg-white shadow-xl rounded-lg w-full flex flex-col gap-5 px-2 py-5 md:hidden'> 

              <hr />

              <div className='flex flex-col w-full gap-1 text-sm text-gray-800 font-light'>
            
                <div className='flex w-ful justify-between items-center'>

                 <span className={`cursor-pointer transition-all duration-200 ${
                  selectedProductCategory==="t-shirt"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`} 
                onClick={()=>{
                  setSelectedProductCategory("t-shirt")
                }}>T-shirts</span>

                <div>

                  <button className='cursor-pointer underline text-sm font-semibold text-black' onClick={clearFilters}>Clear Filters</button>

                </div>
            
                </div>

                <span className={`cursor-pointer transition-all duration-200 ${
                  selectedProductCategory==="lower"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`} 
                onClick={()=>{
                  setSelectedProductCategory("lower")
                }}>Lower</span>

                <span className={`cursor-pointer transition-all duration-200 ${
                  selectedProductCategory==="shirt"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedProductCategory("shirt")
                }}>Shirts</span>

                <span className={`cursor-pointer transition-all duration-200 ${
                  selectedProductCategory==="jeans"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedProductCategory("jeans")
                }}>Jeans</span>

                <span className={`cursor-pointer transition-all duration-200 ${
                  selectedProductCategory==="hoodie"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`} 
                onClick={()=>{
                  setSelectedProductCategory("hoodie")
                }}>Hoodie</span>

                <span className={`cursor-pointer transition-all duration-200 ${
                  selectedProductCategory==="dress"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                onClick={()=>{
                  setSelectedProductCategory("dress")
                }}>Dress</span>


              <p className='text-base font-semibold'>${price}</p>
              
              <input className="w-full" type="range" min={0} max={100} step={1} value={price} onChange={((e)=>{
                setPrice(Number(e.target.value));
              })}/>

              </div>

               <hr />
            
            <div className='flex flex-col gap-1'>

              <h3 className='text-base font-semibold'>Dress Style</h3>

              <div className='text-sm text-gray-800 font-light flex flex-col gap-1'>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedStyle==="casual"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`} onClick={()=>{
                  setSelectedStyle("casual")
                }}>Casual</p>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedStyle==="formal"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`} onClick={()=>{
                  setSelectedStyle("formal")
                }}>Formal</p>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedStyle==="party"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`} onClick={()=>{
                  setSelectedStyle("party")
                }}>Party</p>
                
                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedStyle==="gym"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`} onClick={()=>{
                  setSelectedStyle("gym")
                }}>Gym</p>

              </div>

            </div>

            <hr/>

             <div className='flex flex-col gap-1'>

              <h3 className='text-base font-semibold'>Categories</h3>

              <div className='text-sm text-gray-800 font-light flex flex-col gap-1'>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedCategory==="women"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`} 
                onClick={()=>{
                  setSelectedCategory("women")
                }}>Women</p>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedCategory==="men"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedCategory("men")
                }}>Men</p>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedCategory==="kids"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedCategory("kids")
                }}>Kids</p>

              </div>

            </div>

            <hr />

             <div className='flex flex-col gap-1'>

              <h3 className='text-base font-semibold'>Type</h3>

              <div className='text-sm text-gray-800 font-light flex flex-col gap-1'>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedType==="topwear"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedType("topwear")
                }}>Topwear</p>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedType==="bottomwear"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedType("bottomwear")
                }}>Bottomwear</p>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedType==="winterwear"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedType("winterwear")
                }}>Winterwear</p>

              </div>
            
            </div>

          </div>
          )}

{/* Desktop */}

          <div className='hidden md:flex flex-col gap-5 p-5'>
            
           <hr />

            <div className='flex flex-col w-full gap-1 text-sm md:text-base text-gray-800 font-light'>
              
                <span className={`cursor-pointer transition-all duration-200 ${
                  selectedProductCategory==="t-shirt"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedProductCategory("t-shirt")
                }}>T-shirts</span>

                <span className={`cursor-pointer transition-all duration-200 ${
                  selectedProductCategory==="lower"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedProductCategory("lower")
                }}>Lower</span>

                <span className={`cursor-pointer transition-all duration-200 ${
                  selectedProductCategory==="shirt"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`} 
                onClick={()=>{
                  setSelectedProductCategory("shirt")
                }}>Shirts</span>

                <span className={`cursor-pointer transition-all duration-200 ${
                  selectedProductCategory==="jeans"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`} 
                onClick={()=>{
                  setSelectedProductCategory("jeans")
                }}>Jeans</span>

                <span className={`cursor-pointer transition-all duration-200 ${
                  selectedProductCategory==="hoodie"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedProductCategory("hoodie")
                }}>Hoodie</span>

                <span className={`cursor-pointer transition-all duration-200 ${
                  selectedProductCategory==="dress"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedProductCategory("dress")
                }}>Dress</span>
            
              <p className='text-base font-semibold'>${price}</p>
              
              <input className="w-full" type="range" min={0} max={100} step={5} value={price} onChange={((e)=>{
                setPrice(Number(e.target.value));
              })}/>
            </div>

            <hr />
            
            <div className='flex flex-col gap-1'>
              <h3 className='text-base font-semibold'>Dress Style</h3>
              <div className='text-sm text-gray-800 font-light flex flex-col gap-1'>
                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedStyle==="casual"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedStyle("casual")
                }}>Casual</p>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedStyle==="formal"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedStyle("formal")
                }}>Formal</p>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedStyle==="party"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedStyle("party")
                }}>Party</p>
                
                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedStyle==="gym"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                 onClick={()=>{
                  setSelectedStyle("gym")
                }}>Gym</p>

              </div>

            </div>

            <hr />

             <div className='flex flex-col gap-1'>

              <h3 className='text-base font-semibold'>Categories</h3>

              <div className='text-sm text-gray-800 font-light flex flex-col gap-1'>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedCategory==="women"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                  onClick={()=>{
                  setSelectedCategory("women")
                }}>Women</p>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedCategory==="men"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                onClick={()=>{
                  setSelectedCategory("men")
                }}>Men</p>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedCategory==="kids"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                  onClick={()=>{
                  setSelectedCategory("kids")
                }}>Kids</p>

              </div>
            </div>

            <hr />

             <div className='flex flex-col gap-1'>

              <h3 className='text-base font-semibold'>Type</h3>

              <div className='text-sm text-gray-800 font-light flex flex-col gap-1'>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedType==="topwear"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`}
                  onClick={()=>{
                  setSelectedType("topwear")
                }}>Topwear</p>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedType==="bottomwear"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`} 
                onClick={()=>{
                  setSelectedType("bottomwear")
                }}>Bottomwear</p>

                <p className={`cursor-pointer transition-all duration-200 ${
                  selectedType==="winterwear"
                  ?"text-white bg-black px-2 rounded py-1":"text-gray-800"
                }`} 
                onClick={()=>{
                  setSelectedType("winterwear")
                }}>Winterwear</p>

              </div>
            </div>

            <div>

              <button className='cursor-pointer underline text-sm font-semibold' onClick={clearFilters}>Clear Filters</button>

            </div>
          </div>
        </div>
      </div>

        <div className='w-full min-h-[600px]'>

          <div className='mb-5'>

          {input && (
          <div className='relative w-full lg:hidden flex gap-2 items-center justify-center'>

            <Search size={18} strokeWidth={2.25} className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-500"/>
            <input className="w-full px-10 py-2 bg-white text-black rounded-2xl border outline-0 placeholder:text-gray-500 placeholder:text-sm" type="text" placeholder="Search for products..." value={search} onChange={(e)=>setSearch(e.target.value)}/>

            <div className='cursor-pointer text-gray-800' onClick={()=>{setInput(false)}}><X/></div>

          </div>
        )}
          </div>
          
            {filteredProducts.length===0?

            <div className='min-h-[600px] flex flex-col justify-center gap-5 items-center'>
            
            <div>

            <SearchX strokeWidth={1} size={100}/>

            </div>
            
            <h1 className='text-2xl md:text-3xl font-semibold'>No Products Found</h1>

            <p className='w-full text-xs md:text-sm text-gray-800 text-center'>
              We couldn't find any products matching your selected filters.<br/>
              Try changing or clearing your filters.
            </p>

            <button onClick={clearFilters} className='px-10 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition duration-100'>Clear Filters</button>

            </div>

            :

            <div className='w-full flex flex-col gap-5'>
             
            <div className='flex flex-col md:flex-row md:items-center gap-3 md:gap-0 justify-between'>

              <h1 className='text-3xl md:text-4xl font-semibold'>All Collections</h1>

              <div>

                <select className="px-4 py-2 border border-gray-300 rounded text-sm bg-white text-gray-900 outline-none focus:border-black cursor-pointer" value={sort} onChange={(e)=>setSort(e.target.value)}>
                  <option value="relavent" className='bg-black text-white w-2 text-[10px]'>Sort by: Relavent</option>
                  <option value="low-to-high" className='bg-black text-white w-2  text-[10px]'>Sort by: Low to High</option>
                  <option value="high-to-low" className='bg-black text-white w-2 text-[10px]'>Sort by: High to Low</option>
                </select>

              </div>
            </div>  

            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-10'>

                {sortedProducts.map((elem)=>{
                    return <Link key={elem.id} to={`/eachproduct/${elem.id}`} className='w-full flex justify-center flex-col gap-5'>
               
                        <img className="w-full aspect-[3/4] object-cover cursor-pointer rounded" src={elem.image} alt={elem.title} />
                    
                    <div className='flex flex-col gap-1'>

                        <p className='text-sm font-light md:text-base min-h-[48px] line-clamp-2'>{elem.title}</p>
                        <p className='flex items-center gap-1 text-sm'>{elem.rating}<Star fill='#FFC633' size={15} stroke='none' /></p>
                        <p className='font-semibold text-base md:text-lg'>${elem.price}</p>

                    </div>
                    
                </Link>
                })}
              
              </div>
            </div>
            }
        </div>

      </div>

        <div className="flex justify-center items-center">
        <div className='max-w-7xl px-4 sm:px-6 lg:px-8 w-full mx-auto flex flex-col justify-center items-center gap-16 mt-20'>

             <MainFooter/>
             <CopyRight/>

        </div>
      </div>
    </div>
  )
}

export default Collection;