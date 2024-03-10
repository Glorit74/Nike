import CustomerCard from "../components/CustomerCard";
import { reviews } from "../constants/index";
const CustomerReviews = () => {
  return (
    <section className="max-container flex flex-col items-center ">
      <h3 className="text-4xl font-palanquin font-bold text-center mb-11">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text max-w-lg text-center mb-11">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us
      </p>
      <div className="flex flex-col md:flex-row  items-center justify-evenly gap-14">
        {reviews.map((r) => (
          <CustomerCard key={r.imgURL} r={r} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
