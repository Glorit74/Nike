import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-12 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <h2 className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </h2>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          facilis nostrum pariatur.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex  justify-center items-start flex-wrap w-full mt-20 gap-20">
          {statistics.map((statistic) => (
            <div key={statistic.index}>
              <p className="text-4xl font-palanquin font-bold">
                {statistic.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe"
          width={610}
          height={500}
          className="object-contained relative z-10"
        />
        <div className=" flex sm:gap-6 gap-4 absolute lg:gap-10  -bottom-[5%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.index}>
              <ShoeCard
                shoeURL={shoe}
				index={shoe}
                bigShoeImage={bigShoeImg}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
