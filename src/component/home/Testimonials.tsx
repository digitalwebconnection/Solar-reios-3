import React from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Residential Customer",
    review:
      "The solar installation process was smooth and professional. We are already seeing savings on our electricity bills.",
  },
  {
    name: "Priya Mehta",
    role: "Commercial Client",
    review:
      "Excellent service and timely execution. The team handled everything from approvals to commissioning.",
  },
  {
    name: "Amit Verma",
    role: "Industrial Client",
    review:
      "Highly professional EPC team. Quality materials and proper project management throughout.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className=" py-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <p className="text-gray-600 mt-2">
            Trusted by residential and commercial customers across India.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            >
              <p className="text-gray-700 text-sm mb-4">
                “{item.review}”
              </p>

              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;