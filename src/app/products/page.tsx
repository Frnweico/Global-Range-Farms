import ServicesAbout from "@/components/about/services";
import ProductsHero from "@/components/products/hero";
import ImageGallery from "@/components/products/imageGallery";
import Order from "@/components/products/order";
import ProductCarousel from "@/components/products/productCarousel";

const Products = () => {
  return (
    <div>
      <ProductsHero />
      <ProductCarousel />
      <ServicesAbout />
      <ImageGallery />
      <Order />
    </div>
  )
}

export default Products
