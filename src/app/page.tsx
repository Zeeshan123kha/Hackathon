import Categories from "@/components/Categories";
import CompanyLogo from "@/components/companyLogo";
import Hero from "@/components/Hero";
import HotProduct from "@/components/hotProducts";


export default function Home() {
  return (
    <>
      <Hero />
      <CompanyLogo />
      

      <Categories />
      <HotProduct />
    
    </>
  );
}
