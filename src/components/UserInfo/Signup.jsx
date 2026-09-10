import { Link } from "react-router-dom"
import MainFooter from "../Footer/MainFooter";
import CopyRight from "../Footer/CopyRight";

const Signup = () => {
  return (

    <div className="flex flex-col">

        <div className="min-h-[calc(100vh-80px)] flex-1 max-w-5xl mx-auto w-full flex items-center justify-center">
        <form onSubmit={(e)=>{
            e.preventDefault();
            e.target.reset();
        }} className="flex gap-5 p-10 flex-col items-start w-full max-w-md rounded-2xl shadow-2xl bg-white justify-center">
            
            <div className="flex justify-center gap-2 flex-col">

                <h1 className="text-3xl font-semibold">SignUp</h1>
                <p className="text-gray-600 text-xs">Join now for a faster, smarter shopping experience.</p>

            </div>

            <div className="flex gap-2 w-full flex-col">
                
                <input className="p-3 border text-sm border-black rounded placeholder:text-sm outline-0 required:" type="text" placeholder="Full Name" id="name" name="name" required/>

                <input className="p-3 border text-sm border-black rounded placeholder:text-sm outline-0 required:" type="email" placeholder="Email" id="email" name="email" required/>

                <input className="p-3 border text-sm border-black rounded placeholder:text-sm outline-0 required:" type="password" placeholder="Password" id="pass" name="pass" required/>

            </div>

            <div className="w-full flex items-center justify-center">
                
                <Link to={'/login'} className="text-[13px] cursor-pointer">Already have an account?</Link>

            </div>

            <div className="w-full">

                <button required className="bg-black w-full text-white rounded cursor-pointer hover:bg-gray-900 transition py-2"> Sign Up</button>

            </div>

        </form>

    </div>

        <div className='max-w-7xl px-4 sm:px-6 lg:px-8 w-full mx-auto flex flex-col justify-center items-center gap-8'>

             <MainFooter/>
             <CopyRight/>

        </div>
    </div>
  )
}
export default Signup