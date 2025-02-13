"use client";

export default function Home() {

  const handleClickCatalog = () => {
    const element = document.getElementById('catalog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickRemapping = () => {
    const element = document.getElementById('remapping');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll">
      <div className="snap-start h-screen relative lg:bg-bugatti-lg md:bg-bugatti-md bg-bugatti-sm bg-center bg-cover bg-no-repeat overflow-hidden">
        <div className="bg-black opacity-75 lg:h-16 h-14 lg:m-10 md:m-8 m-5 rounded-full flex justify-between items-center ">
          <div className="text-white">
            <span className="italic tracking-tighter lg:pl-6 pl-4 lg:text-xl md:text-lg text-md">PULSE</span>
            <span className="lg:text-md md:text-sm text-xs text-green">autos</span>
          </div>
          <div className="flex items-center text-xxs md:text-sm lg:text-md">
            <h1 className="text-white lg:p-5 md:p-4 p-2">
              <button onClick={handleClickRemapping}>
                <span className="hidden md:inline">Vehicle remapping</span>
                <span className="md:hidden">Remapping</span>
              </button>
            </h1>
            <h1 className="text-white lg:p-5 md:p-4 p-2"><button onClick={handleClickCatalog}>Catalog</button></h1>
            <h1 className="text-white bg-green rounded-full lg:px-6 px-3 lg:h-11 h-9 flex items-center justify-center mr-3">
              <button onClick={handleClickContact}>
                <span className="hidden md:inline">Contact us</span>
                <span className="md:hidden">Contact</span>
              </button>
            </h1>
          </div>
        </div>

        <div className="text-right pr-10 lg:mt-1 mt-36">
          <h1 className="text-white lg:text-5xl md:text-3xl text-2xl italic">
            <span className="block sm:inline">Performance &</span> <span className="block sm:inline">Precision.</span>
          </h1>
          <p className="text-dark-gray lg:text-lg md:text-md text-sm hidden md:block">
            Premium Auto Parts & Expert Vehicle Remapping Services
          </p>

          <p className="text-dark-gray lg:text-lg md:text-md text-sm block md:hidden">
            <span className="block">Premium Auto Parts</span>
            <span className="block">Remapping Services</span>
          </p>
        </div>

        <div className="bg-gradient-to-b from-transparent to-black h-28 absolute bottom-0 left-0 w-full overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-px h-full bg-white transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-0 w-full border-t border-white transform -translate-y-1/2"></div>

          <div className="absolute italic top-3/4 left-0 transform -translate-y-1/2 text-white pl-4 text-sm md:text-md">
            Explore our catalog
          </div>
          <div className="absolute italic top-3/4 left-1/2 transform -translate-y-1/2 translate-x-4 text-white text-sm md:text-md">
            Book a remap
          </div>

          <button onClick={handleClickCatalog} className="absolute top-3/4 left-1/2 transform -translate-y-1/2 -translate-x-12 text-green p-2">
            →
          </button>
          <button onClick={handleClickRemapping} className="absolute top-3/4 right-4 transform -translate-y-1/2 p-2 text-green ">
            →
          </button>
        </div>
      </div>











      <div className="snap-start h-screen" id="remapping">
        <div className="flex flex-col md:flex-row items-start lg:pt-16 md:pt-20 pt-20">
          <div className="lg:text-lg md:text-md text-sm flex items-center md:pl-16 pl-10">
            <div className="w-8 h-px bg-green mr-2"></div>
            <h1 className="italic lg:pl-3">Remapping</h1>
          </div>
          <div>
            <h1 className="lg:text-3xl md:text-2xl text-xl lg:pl-28 lg:pr-16 lg:pt-0 md:pt-16 md:pr-16 pl-10 pt-12 pr-10">
              Unlock Your Car’s True Potential with Vehicle Remapping.
              <span className="text-light-gray"> More power, better fuel efficiency, and a smoother drive—all tailored to your vehicle.</span>
            </h1>
            <div className="hidden lg:flex pt-14">
              <div className="pl-28">
                <div className="h-px mt-3 w-96 bg-green mr-2 flex-shrink-0"></div>
              </div>
              <div>
                <h1 className="text-light-gray pr-10 md:pr-16 text-md pl-4">
                  At Pulse Autos, we offer professional vehicle remapping tailored to unleash the best performance from your car.
                  Using advanced ECU tuning, we fine-tune your engine for more power, improved fuel efficiency, and a smoother driving
                  experience.
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-10 pt-10 md:pt-28 md:pl-16 flex lg:hidden">
          <div className="md:w-80 w-16 h-px mt-3 bg-green mr-2 flex-shrink-0"></div>
          <div>
            <h1 className="text-light-gray pr-10 md:pr-16 md:text-sm text-xxs pl-3">
              At Pulse Autos, we offer professional vehicle remapping tailored to unleash the best performance from your car.
              Using advanced ECU tuning, we fine-tune your engine for more power, improved fuel efficiency, and a smoother driving
              experience.
            </h1>
          </div>
        </div>

        <div>
          <h1 className="border-2 rounded-full border-green flex items-center justify-center">Explore catalog</h1>
          <h1 className="bg-green rounded-full flex items-center justify-center">Book a remap</h1>
        </div>

      </div>













      <div className="snap-start h-screen bg-white" id="catalog">
      </div>

      <div className="snap-start h-screen relative flex flex-col" id="contact">
        <div className="mt-auto">
          <div className="lg:flex lg:justify-between lg:px-24 flex flex-col lg:flex-row flex-grow lg:pb-28 lg:pl-24 pl-16">
            <div>
              <span className="italic tracking-tighter lg:text-5xl md:text-3xl text-2xl text-white">PULSE</span>
              <span className="lg:text-2xl text-xl text-green">autos</span>
              <h1 className="text-light-gray lg:text-md md:text-sm text-xxs pb-14">
                Unlock your vehicle’s true potential
                <span className="block">and drive with confidence.</span>
              </h1>
            </div>
            <div>
              <h1 className="text-light-gray lg:text-md md:text-sm text-xxs">Address</h1>
              <h1 className="text-white lg:text-lg md:text-md text-sm lg:pb-20">
                3717 GRANDEWOOD BLVD
                <span className="block">ORLANDO, FL, 32837 USA</span>
              </h1>
              <h1 className="text-light-gray lg:text-md md:text-sm text-xxs lg:pt-0 pt-14">Contact Us</h1>
              <h1 className="text-white lg:text-lg md:text-md text-sm">+1 407 6339443</h1>
              <h1 className="text-white lg:text-lg md:text-md text-sm lg:pb-0 pb-24">pulseautosco@hotmail.com</h1>
            </div>
          </div>
        </div>
        <div className="h-16 flex items-center justify-between border-t border-white px-10">
          <h1 className="text-white md:text-md text-sm">Terms and Conditions</h1>
          <h1 className="text-white md:text-md text-sm">Privacy Policy</h1>
        </div>
      </div>

    </div>
  );
}
