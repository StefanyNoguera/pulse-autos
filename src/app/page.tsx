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
      <div className="snap-start h-screen lg:bg-bugatti-lg md:bg-bugatti-md bg-bugatti-sm bg-center bg-cover bg-no-repeat overflow-hidden">
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
      </div>

      <div className="snap-start h-screen" id="remapping">
      </div>

      <div className="snap-start h-screen bg-white" id="catalog">
      </div>

      <div className="snap-start h-screen" id="contact">
      </div>
    </div>
  );
}
