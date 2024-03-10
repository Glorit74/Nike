import { star } from "../assets/icons";

const CustomerCard = ({ r }) => {
  return (
    <section className="flex flex-col items-center gap-2">
      <div className="rounded-full truncate  w-[120px]">
        <img src={r.imgURL} alt="customer" height={120} />
      </div>
      <p className="info-text mt-2 text-center">{r.feedback}</p>
      <div className="flex gap-5">
        <div>
          <img src={star} alt="rating stars" width={24} height={24} />
        </div>
        <div className="text-slate-gray font-montserrat text-xl">
          ({r.rating})
        </div>
      </div>
      <p className="text-3xl font-palanquin font-bold">{r.customerName}</p>
    </section>
  );
};

export default CustomerCard;
