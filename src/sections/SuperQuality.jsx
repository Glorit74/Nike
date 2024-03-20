import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="quality"
      className="flex flex-col md:flex-row max-container justify-center items-center gap-5 w-full"
    >
      <main className="flex-1 flex flex-col justify-between gap-4">
        <h3 className=" capitalize lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality </span>
          Shoes
        </h3>
        <p className="lg:max-w-lg info-text mt-4">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, touch of elegance.
        </p>
        <p className="lg:max-w-lg info-text mt-6">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
          <Button label="View details" iconURL="" />
        </div>
      </main>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
