import on from "../../assets/ongrid.mp4";
import off from "../../assets/offGrid.mp4";

const SolarSolutions = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-4xl font-bold mb-10">
          Our Range of Solar Solutions
        </h2>

        {/* ON GRID */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row items-center gap-8">

            <video
              src={on}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full md:w-1/2 h-62.5 md:h-87.5 object-cover rounded-xl"
            />

            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mt-3 mb-2">
                On-Grid Solar System
              </h3>

              <p className="text-lg text-gray-700 mb-4">
                An on-grid solar system is connected to the utility grid.
                Surplus electricity is exported via net metering while ensuring
                continuous power supply.
              </p>

              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded">
                Enquiry Now
              </button>
            </div>
          </div>
        </div>

        {/* OFF GRID */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">

            <video
              src={off}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full md:w-1/2 h-62.5 md:h-87.5 object-cover rounded-xl"
            />

            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mt-3 mb-2">
                Off-Grid Solar System
              </h3>

              <p className="text-lg text-gray-700 mb-4">
                A battery-based system that operates independently of the
                utility grid, ideal for remote locations and uninterrupted
                power supply.
              </p>

              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded">
                Enquiry Now
              </button>
            </div>
          </div>
        </div>

        {/* GROUND MOUNTED */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row items-center gap-8">

            <video
              src={on}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full md:w-1/2 h-62.5 md:h-87.5 object-cover rounded-xl"
            />

            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mt-3 mb-2">
                Ground Mounted Solar System
              </h3>

              <p className="text-lg text-gray-700 mb-4">
                Ideal for large-scale installations where rooftop space is limited.
                Offers higher efficiency and flexibility in panel positioning.
              </p>

              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded">
                Enquiry Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolarSolutions;