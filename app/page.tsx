
import NavbarSearch from "@/components/NavbarSearch";
import NavbarGreen from "@/components/NavbarGreen";
import PackageCardHome from "@/components/PackageCardHome";
import SearchBar from "@/components/SearchBar";
import AboutUs from "@/components/AboutUs";
import ActivitiesCarousel from "@/components/ActivitiesCarousell";
import ReviewCard from "@/components/ReviewCard";
import Space from "@/components/Space";
import Footer from "@/components/Footer";





export default function Home() {
  return (
   
    <div>
  <NavbarSearch />
  <NavbarGreen />
  <SearchBar />
  <h2 className="text-4xl text-center font-custom text-black mt-12 mb-12">Tailored Retreats for Every Budget</h2>
  <PackageCardHome />
  <AboutUs />
  <Space />
  <h2 className="text-4xl text-center font-custom text-black mt-12 mb-12">Explore our activities</h2>
  <ActivitiesCarousel />
  <Space />
  <h2 className="text-4xl text-center font-custom text-black mt-12 mb-12 pb-12">Discover Memorable Retreat Experiences</h2>
    <ReviewCard />
    <Space />
    <Footer />
    </div>

  )
}