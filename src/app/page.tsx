"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [screenWidth, setScreenWidth] = useState(0);

  const products = [
    {
      name: "StopTech Big Brake Kit",
      price: "$1,250",
      image: "/stoptech-brake-kit.jpg",
      description: "High-performance front and rear brake kit with slotted rotors and 6-piston calipers for enhanced braking power."
    },
    {
      name: "PowerStop Z36 Truck & Tow Brake Kit",
      price: "$750",
      image: "/powerstop-z36-kit.webp",
      description: "Heavy-duty brake pads and rotors built for towing, off-roading, and high-load applications."
    },
    {
      name: "Hawk Performance Ceramic Brake Pads (Set of 4)",
      price: "$390",
      image: "/hawk-ceramic-pads.webp",
      description: "Premium ceramic brake pads designed for quiet operation, low dust, and excellent stopping performance."
    },
    {
      name: "Flowmaster American Thunder Exhaust System",
      price: "$1,100",
      image: "/flowmaster-exhaust.webp",
      description: "Aggressive-sounding stainless steel cat-back exhaust system optimized for power and torque gains."
    },
    {
      name: "Corsa Sport Axle-Back Exhaust",
      price: "$1,180",
      image: "/corsa-axle-exhaust.webp",
      description: "Performance-focused axle-back exhaust system with a deep tone and improved exhaust flow."
    },
    {
      name: "KYB MonoMax Performance Shocks (Set of 4)",
      price: "$940",
      image: "/kyb-monotube-shocks.jpeg",
      description: "Gas-charged shock absorbers engineered for better handling, control, and durability in extreme conditions."
    },
    {
      name: "AEM Cold Air Intake System",
      price: "$440",
      image: "/aem-cold-air-intake.jpg",
      description: "Advanced air intake system designed to improve throttle response and boost horsepower."
    },
    {
      name: "FiTech Go EFI 4 Master Kit",
      price: "$1,375",
      image: "/fitech-efi-kit.webp",
      description: "Self-learning EFI conversion kit for carbureted engines, improving fuel efficiency and overall performance."
    },
    {
      name: "Whipple Stage 2 Supercharger Kit",
      price: "$5,950",
      image: "/whipple-supercharger-kit.jpg",
      description: "Complete supercharger system engineered for maximum horsepower gains in street and track applications."
    },
    {
      name: "Haltech Elite 1500 Engine Management System",
      price: "$1,650",
      image: "/haltech-engine-management.jpeg",
      description: "Advanced standalone ECU with full tuning capabilities for high-performance and racing applications."
    },
    {
      name: "Griffin Performance Aluminum Radiator",
      price: "$470",
      image: "/griffin-aluminum-radiator.jpg",
      description: "High-performance aluminum radiator designed for superior cooling efficiency and durability."
    },
    {
      name: "Odyssey Extreme Series AGM Battery",
      price: "$360",
      image: "/odyssey-agm-battery.jpg",
      description: "Deep-cycle AGM battery offering high cranking power and reliability for performance vehicles."
    },
    {
      name: "Odyssey Extreme Series AGM Battery",
      price: "$360",
      image: "/odyssey-agm-battery.jpg",
      description: "Deep-cycle AGM battery offering high cranking power and reliability for performance vehicles."
    },
  ];

  const productsPerPage = {
    lg: 8, // 8 products on large screens
    md: 4, // 4 products on medium screens
    sm: 2, // 2 products on small screens
  };

  useEffect(() => {
    // Function to update screen width
    const handleResize = () => setScreenWidth(window.innerWidth);

    // Initial check
    handleResize();

    // Add event listener on mount
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const goToNextPage = () => {
    let itemsPerPage;

    if (screenWidth >= 1024) {
      itemsPerPage = productsPerPage.lg;
    } else if (screenWidth >= 768) {
      itemsPerPage = productsPerPage.md;
    } else {
      itemsPerPage = productsPerPage.sm;
    }

    const maxPage = Math.ceil(products.length / itemsPerPage);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, maxPage));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const getVisibleProducts = () => {
    // Determine the number of products to display based on screen size
    let itemsToShow;

    if (screenWidth >= 1024) {
      itemsToShow = productsPerPage.lg;
    } else if (screenWidth >= 768) {
      itemsToShow = productsPerPage.md;
    } else {
      itemsToShow = productsPerPage.sm;
    }

    const startIndex = (currentPage - 1) * itemsToShow;
    const endIndex = startIndex + itemsToShow;
    return products.slice(startIndex, endIndex);
  };

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

      <div className="snap-start h-screen flex flex-col" id="remapping">
        <div className="flex flex-col md:flex-row items-start lg:pt-16 md:pt-20 pt-8">
          <div className="lg:text-lg md:text-md text-sm flex items-center md:pl-16 pl-10">
            <div className="w-8 h-px bg-green mr-2"></div>
            <h1 className="italic text-white lg:pl-3">Remapping</h1>
          </div>
          <div>
            <h1 className="lg:text-3xl md:text-2xl text-xl lg:pl-28 lg:pr-16 lg:pt-0 md:pt-16 md:pr-16 pl-10 pt-12 text-white pr-10">
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

        <div className="flex grow justify-between items-end md:p-16 p-10">
          <div>
            <div className="flex items-center">
              <div className="w-8 h-px bg-green mr-2"></div>
              <h1 className="italic text-white lg:pl-3 lg:text-lg md:text-md text-sm">Optimize. Enhance.</h1>
            </div>
            <h1 className="text-light-gray md:text-sm text-xxs">Have questions? We’re here to <span className="block">help—call us!</span></h1>
          </div>
          <div className="md:text-sm text-xxs flex flex-col">
            <button onClick={handleClickCatalog}>
              <h1 className="border-2 rounded-full border-green flex items-center justify-center text-green md:w-36 w-28 h-8">Explore catalog</h1>
            </button>
            <button onClick={handleClickContact}>
              <h1 className="bg-green text-black rounded-full flex items-center justify-center mt-2 md:w-36 w-28 h-8">Book a remap</h1>
            </button>
          </div>
        </div>
      </div>

      <div className="snap-start h-screen flex flex-col" id="catalog">
        <div className='lg:flex'>
          <h1 className="text-white pt-6 md:pt-6 lg:pt-4 pb-2 md:pb-6 lg:pb-4 md:text-2xl text-lg px-6" >High-Quality Auto Parts </h1>
          <div className="flex items-center px-6 pb-5 lg:pt-5">
            <div className="w-8 h-px bg-green mr-2"></div>
            <h1 className="text-light-gray lg:pl-3 md:text-sm text-xxs ">Explore our extensive selection of performance and replacement parts.</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 lg:px-6 gap-4 flex-grow">
          {getVisibleProducts().map((product, index) => (
            <div key={index} className="p-1 ">
              <div className="relative h-40 mb-4">
                <Image
                  src={product.image}
                  layout="fill"
                  objectFit="cover"
                  alt={product.name}
                />
              </div>
              <div className="flex justify-between">
                <h3 className="text-white font-bold line-clamp-1">{product.name}</h3>
                <p className="text-green font-bold">{product.price}</p>
              </div>
              <p className="text-light-gray mt-2 line-clamp-2">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-end md:pb-2 pb-5">
          {currentPage > 1 && (
            <button
              onClick={goToPreviousPage}
              className="text-gray bg-transparent p-2 rounded-full text-white"
            >
              ←
            </button>
          )}

          {currentPage * (screenWidth >= 1024 ? productsPerPage.lg : screenWidth >= 768 ? productsPerPage.md : productsPerPage.sm) < products.length && (
            <button
              onClick={goToNextPage}
              className="text-gray bg-transparent p-2 rounded-full text-white"
            >
              →
            </button>
          )}
        </div>
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
          <Link href="/terms-and-conditions">
            <h1 className="text-white md:text-md text-sm">Terms and Conditions</h1>
          </Link>
          <Link href="/privacy-policy">
            <h1 className="text-white md:text-md text-sm">Privacy Policy</h1>
          </Link>
        </div>
      </div>

    </div>
  );
}
