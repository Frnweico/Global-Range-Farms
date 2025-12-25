import OurServices from "@/components/homepage/services";
import ProductsHero from "@/components/products/hero";
import ImageGallery from "@/components/products/imageGallery";
import Order from "@/components/products/order";
import ProductCarousel from "@/components/products/productCarousel";

const Products = () => {
  return (
    <div>
      <ProductsHero />
      <ProductCarousel />
      <OurServices />
      <ImageGallery />
      <Order />
    </div>
  )
}

export default Products
