import ProductCard from "../components/ProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-2">
        <h3 >
          Our <span className="text-coral-red">Popular </span>Products
        </h3>
        <p className="font-montserrat text-slate-gray lg:max-w-lg leading-8 mt-2 ">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world fo comfort, design, and value
        </p>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap:-4 gap-14">
          {products.map((p) => (
            <div key={p.imgURL} className="text-4xl font-palanquin font-bold">
             <ProductCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
