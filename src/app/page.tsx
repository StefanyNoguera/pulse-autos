export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll">
      <div
      className="snap-start h-screen lg:bg-bugatti-lg md:bg-bugatti-md bg-bugatti-sm bg-center bg-cover bg-no-repeat">
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
