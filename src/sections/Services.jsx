import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
  
{services.map((s) => (
	<div key={s.label}><ServiceCard {...s} /></div>
))}

    </section>
  );
};

export default Services;
