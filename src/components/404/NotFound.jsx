import { Link } from "react-router-dom"

const NotFound = () => {

    return (
        <div className="h-screen p-5 bg-[#0D0D0D] w-full flex justify-center items-center">

            <div className="w-full max-w-md text-white h-80 rounded-xl bg-[#181818] border border-[#2A2A2A] p-4 flex flex-col items-center justify-center gap-3 shadow-2xl">

                <h1 className="text-7xl font-bold tracking-tight text-white">
                    404
                </h1>

                <p className="text-lg font-medium text-white">
                    Page Not Found
                </p>

                <p className="text-center text-gray-400 text-sm leading-6">
                    Oops! The page you are looking for does not exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="font-medium px-12 py-2.5 mt-2 bg-white text-black rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
                >
                    Go to Home
                </Link>

            </div>
        </div>
    )
}
export default NotFound