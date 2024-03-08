import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className="max-container flex flex-col max-xl:flex-row-reverse item-center gap-10">
      <main className="flex flex-1 flex-col gap-6">
        <h2 className="font-palanquin font-bold text-4xl">
          Special <span className="text-coral-red">Offer</span>
        </h2>
        <p className="info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex gap-3">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </main>
      <div className="flex-1 flex justify-center">
        <img
          src={offer}
          alt="offer"
          width={450}
          height={340}
          className="object-contain w-1/2 max-xl:w-full"
        />
      </div>
    </section>
  );
};

export default SpecialOffer;
