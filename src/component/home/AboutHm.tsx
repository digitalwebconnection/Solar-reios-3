import Eng from "../../assets/23.jpg"
import Pro from "../../assets/1.jpg"
import Pro1 from "../../assets/2.jpg"
import Fer from "../../assets/423131990_032d631a-cfc9-4d04-8709-9622e7ac2b4b.jpg"
import ope from "../../assets/3.jpg"
import Ere from "../../assets/4.jpg"

const services = [
  {
    icon: <img src={Eng} alt="Engineering" className="w-26 h-26 mx-auto" />,
    title: "Engineering Design",
    items: [
      "PV Array Design",
      "BOS Design and Engineering",
      "Mechanical Structure Design",
      "Civil & Electrical Design",
    ],
  },
  {
    icon: <img src={Pro} alt="Procurement" className="w-26 h-26 mx-auto" />,
    title: "Procurement",
    items: [
      "Mounting Structures",
      "PV Modules",
      "Inverter",
      "LT/HT Cables BOS Meters",
    ],
  },
  {
    icon: <img src={Pro1} alt="Project Execution" className="w-26 h-26 mx-auto" />,
    title: "Project Execution",
    items: [
      "Construction Management",
      "Inspection & QA/QC",
      "Project Management",
    ],
  },
  {
    icon: <img src={Fer} alt="Feasibility Study" className="w-26 h-26 mx-auto" />,
    title: "Feasibility Study",
    items: [
      "Radiation Data Analytics",
      "Project Feasibility",
      "Basic Layout",
      "Site Survey",
    ],
  },
  {
    icon: <img src={ope} alt="Operation and Maintenance" className="w-26 h-26 mx-auto" />,
    title: "Operation and Maintenance",
    items: [
      "Schedule Monitoring",
      "Data Collection and Analysis",
      "Operation & Results Overview",
      "Annual Maintenance Contract",
    ],
  },
  {
    icon: <img src={Ere} alt="Erection and Commissioning" className="w-26 h-26 mx-auto" />,
    title: "Erection and Commissioning",
    items: [
      "Trial Commissioning",
      "Final Commissioning",
      "Co-Ordination for Clearances",
      "Error Monitoring and Rectification",
    ],
  },
];

const AboutHm = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold  tracking-wide">
            <span className="text-5xl">E</span>ngineering  <span className="text-5xl">P</span>rocurement  <span className="text-5xl">C</span>onstruction
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 text-center">

          {services.map((service, index) => (
            <div key={index}>

              {/* Icon */}
              <div className="mb-6 flex justify-center">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>

              {/* Items */}
              <ul className="space-y-1 text-gray-700 text-sm">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AboutHm;