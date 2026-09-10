import BrowseHome from "./BrowseHome";
import HeroSection from "./HeroSection";
import NewArrivals from "./NewArrivals";
import Reviews from "./Reviews";
import TopSelling from "./TopSelling";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      
       <HeroSection/>
       <NewArrivals/>
       <TopSelling/>
       <BrowseHome/>
       <Reviews/>

    <div className="flex justify-center items-center">
         <Footer/>
    </div>
    
    </div>
  )
}

export default Home