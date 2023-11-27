import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes, statistics } from "../constants";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center gap-10 min-h-screen max-container"
    >
      <div className="relative w-full xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28">
        <p className="text-coral-red text-xl font-montserrat">
          Our Summer Collections
        </p>

        <h1 className="mt-10 font-palanquin font-bold text-8xl max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival </span>
          <br/>
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>

        <Button 
          label="Shop Now"
          iconUrl={arrowRight}
        />

        <div className="flex justify-start items-start flex-wrap gap-16 w-full mt-20">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>  
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="Shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe) => (
              <div key={shoe}>
                <ShoeCard
                  imgUrl={shoe}
                  changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImage={bigShoeImg}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
