
import NavbarSearch from "@/components/NavbarSearch";
import NavbarGreen from "@/components/NavbarGreen";
import PackageCardHome from "@/components/PackageCardHome";




export default function Home() {
  return (
   
    <div>
   <NavbarSearch />
    <NavbarGreen />
    <h2 className="text-4xl text-center font-custom text-black mt-12 mb-12">Tailored Retreats for Every Budget</h2>
  <PackageCardHome />
 
    
    
     
    </div>

  )
}