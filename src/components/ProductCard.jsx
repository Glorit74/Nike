import { star } from "../assets/icons";

function ProductCard(p) {
  return (
    <div>

      <img src={p.imgURL} alt={p.name} />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24}/>
        <p className="font-montserrat text-xl  tex-slate-gray">(4.5)</p>
      </div>
      <p className="text-2xl mt-2 mb-2  font-palanquin">{p.name}</p>
      <p className="text-2xl font-montserrat text-coral-red">{p.price}</p>
    </div>
  );
}

export default ProductCard