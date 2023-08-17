import { Fragment } from "react";

const Hero = () => {
  return (
    <Fragment>
      <header className="bg-HeroImage bg-cover bg-center w-full h-screen py-0 px-0">
        <div className="flex items-center float-center justify-center text-white w-12/12 h-full">
          <h1 className="text-yellow-50 text-4xl font-semibold">
            Emmanuel Ruiz García
          </h1>
        </div>
      </header>
    </Fragment>
  );
};

export default Hero;
