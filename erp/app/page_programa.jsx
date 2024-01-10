import CategoryList from "@/components/frontend/CategoryList";
import CommunityTrainings from "@/components/frontend/CommunityTrainings";
import Hero from "@/components/frontend/Hero";
import MarketList from "@/components/frontend/MarketList";
import { getData } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  try {
    const categoriesData = await getData("categories");
    console.log("Categories Data:", categoriesData);

    const categories = categoriesData.filter((category) => {
      return category.products.length > 3;
    });

    return (
      <div className="min-h-screen">
        <Hero />
        <MarketList />

        {categories.map((category, i) => {
          return (
            <div className="py-8" key={i}>
              <CategoryList category={category} />
            </div>
          );
        })}

        <CommunityTrainings />
        <h2 className="text-4xl">Welcome to Limi Ecommerce </h2>

        <Link className="my-4 underline " href="/register-farmer">
          Become a farmer /Vendor/Supplier
        </Link>
      </div>
    );
  } catch (error) {
    console.error("Error fetching categories data:", error);

    // Pode adicionar um tratamento adicional aqui, como exibir uma mensagem de erro amigável.
    return (
      <div className="min-h-screen">
        <p>Oops! Something went wrong. Please try again later.</p>
      </div>
    );
  }
}
