
import NavbarSearch from "@/components/NavbarSearch";
import PackageCardHome from "@/components/PackageCardHome";
import SearchBar from "@/components/SearchBar";
import AboutUs from "@/components/AboutUs";
import ActivitiesCarousel from "@/components/ActivitiesCarousell";
import ReviewCard from "@/components/ReviewCard";
import Space from "@/components/Space";
import SectionHeader from "@/components/SectionHeader";




export default function Home() {
  return (
   
    <div className="home-page">
  <NavbarSearch />
  <SearchBar />
  <SectionHeader text="Tailored Retreats for Every Budget" />
  <PackageCardHome />
  <AboutUs />
  <Space />
  <SectionHeader text="Explore our activities" />
  <ActivitiesCarousel />
  <Space />
  <SectionHeader text="Discover Memorable Retreat Experiences" />
  <Space />
    <ReviewCard />
    <Space />
   

  
  
   
   
    </div>

  )
}