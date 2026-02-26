import on from "../../assets/ongred.jpg"
import off from "../../assets/off-gred.jpg"
import hybrid from "../../assets/hay.jpg"
const SolarSolutions = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <h2 className="text-center text-4xl font-bold mb-10">
          Our Range of Solar Solutions
        </h2>

        {/* ON GRID */}
        <div className=" p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            <img
              src={on}
              alt="On Grid"
              className="w-full md:w-1/2"
            />

            <div className="md:w-1/2">
             

              <h3 className="text-xl font-semibold mt-3 mb-2">
                On-Grid Solar System
              </h3>

              <p className="text-lg text-gray-700 mb-4">
                An on-grid solar system is connected to the utility grid.
                Surplus electricity is exported via net metering while ensuring
                continuous power supply. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consequuntur qui consectetur itaque maiores numquam velit quisquam assumenda laboriosam eius molestias rerum nulla omnis maxime aperiam doloribus, dolore natus! Explicabo quos aperiam nesciunt ipsum odio nostrum, beatae fugit, ad, harum esse cum amet unde veritatis sint corporis expedita perferendis aut?
              </p>

              <button className="bg-blue-600 text-white text-sm px-4 py-2">
                Enquiry Now
              </button>
            </div>
          </div>
        </div>

        {/* OFF GRID */}
        <div className=" p-6 mb-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            
            <img
              src={off}
              alt="Off Grid"
              className="w-full md:w-1/2"
            />

            <div className="md:w-1/2">
             

              <h3 className="text-xl font-semibold mt-3 mb-2">
                Off-Grid Solar System
              </h3>

              <p className="text-lg text-gray-700 mb-4">
                A battery-based system that operates independently of the
                utility grid, ideal for remote locations and uninterrupted
                power supply. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo harum animi perferendis dignissimos, nobis vel, ipsum, consequatur vero quia sapiente fugit. Quasi voluptas pariatur nam provident magnam quaerat unde accusamus suscipit, possimus autem distinctio iusto accusantium eligendi corrupti quam vero qui obcaecati! Voluptatem alias doloremque quam in repellat recusandae tempore?
              </p>

              <button className="bg-blue-600 text-white text-sm px-4 py-2">
                Enquiry Now
              </button>
            </div>
          </div>
        </div>

        {/* HYBRID */}
        <div className=" p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            <img
              src={hybrid}
              alt="Hybrid"
              className="w-full md:w-1/2"
            />

            <div className="md:w-1/2">
              

              <h3 className="text-xl font-semibold mt-3 mb-2">
                Ground mounted Solar System
              </h3>

              <p className="text-lg text-gray-700 mb-4">
                Combines grid connectivity with battery storage, allowing
                energy storage for night usage while maintaining grid backup.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ducimus? Velit dolor magni rem totam expedita, similique esse modi? Ab sapiente laborum optio! Unde expedita molestias reiciendis nisi exercitationem esse nulla pariatur odio! Consectetur eius iusto labore quia. Facilis fugit a mollitia nam amet nobis soluta quia aperiam et non.
              </p>

              <button className="bg-blue-600 text-white text-sm px-4 py-2">
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