import { Link } from "react-router-dom"
import MainFooter from "../Footer/MainFooter";
import CopyRight from "../Footer/CopyRight";

const Login = () => {
  return (

    <div className="flex flex-col">

        <div className="min-h-[calc(100vh-80px)] flex-1 max-w-5xl mx-auto w-full flex items-center justify-center">

        <form onSubmit={(e)=>{
            e.preventDefault();
            e.target.reset();
        }} className="flex gap-5 p-10 flex-col items-start min-w-90 md:min-w-110 bg-white shadow-2xl rounded-2xl justify-center"
        >

            <div className="flex justify-center gap-2 flex-col">

                <h1 className="text-3xl font-semibold">Login</h1>
                <p className="text-xs text-gray-600">Welcome back. Please enter your details.</p>

            </div>

            <div className="flex gap-1 w-full flex-col">
                
                <input className="p-3 border text-sm border-black rounded placeholder:text-sm outline-0" type="email" placeholder="Email" id="email" required/>
               
                <input className="p-3 border text-sm border-black rounded placeholder:text-sm outline-0" type="password" placeholder="Password" id="pass" required/>

            </div>

            <div className="w-full flex items-center justify-between">

                <span className="text-[13px] cursor-pointer">Forgot your password?</span>
                <span className="text-[13px] cursor-pointer">
                <Link to={'/signup'}>Create Account</Link></span>

            </div>

            <div className="w-full">

                <button className="bg-black w-full text-white rounded hover:bg-gray-900 cursor-pointer py-2" required>Sign In</button>

            </div>

        </form>

    </div>

    <div className="flex justify-center items-center">

        <div className='max-w-7xl px-4 sm:px-6 lg:px-8 w-full mx-auto flex flex-col justify-center items-center gap-8'>

             <MainFooter/>
             <CopyRight/>

        </div>
    </div>
</div>
  )
}
export default Login