import React from "react";

const stages = [
  {
    color: "bg-red-700 text-white",
    ring: "ring-red-700",
    number: "01",
    title: "Stage 1",
    description:
      "Consultation meeting with the client to discuss the project brief, project budget, site constraints, project initiation, site visits and inspections, advises on the possible outcomes of the proposed project.",
  },
  {
    color: "bg-gray-500 text-white",
    ring: "ring-gray-500",
    number: "02",
    title: "Stage 2",
    description:
      "Provide an initial design and advice on technical and functional characteristics of the design, along with proposed materials and building services, space planning, client approval, and 3D rendering and visualization of the design.",
  },
  {
    color: "bg-black text-white",
    ring: "ring-black",
    number: "03",
    title: "Stage 3",
    description:
      "Prepare and present the final design from the initial design, review the design and consult with other consultants such as structural engineers, Quantity surveyors, Building contractors, etc.",
  },
  {
    color: "bg-red-700 text-white",
    ring: "ring-red-700",
    number: "04",
    title: "Stage 4",
    description:
      "Prepare documentation for council submission and/or Home owners association, Submit plans for approval.",
  },
  {
    color: "bg-gray-500 text-white",
    ring: "ring-gray-500",
    number: "05",
    title: "Stage 5",
    description:
      "Prepare for construction and give possession of the site to the building contractor, Administer the building contract, Manage the project, inspect the works for conformity to the approved plans.",
  },
  {
    color: "bg-black text-white",
    ring: "ring-black",
    number: "06",
    title: "Stage 6",
    description:
      "Project handover to the client, issuing of occupation certificate and completion certificates.",
  },
];

const Timeline3D = () => {
  return (
    <div className="group bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-border/50 mb-5 mt-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-accent mb-4 tracking-wider">HOW WE WORK</p>
          <h2 className="heading-section text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 sm:mb-10">Our Stages Work</h2>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {/* Right column - Descriptions */}
        <div className="flex text-center flex-col justify-center gap-8 sm:gap-10 lg:gap-14 p-4 sm:p-8 lg:p-15">
          {stages.map((stage, index) => (
            <div key={index} className="flex gap-3 sm:gap-4">
              <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${index % 2 === 0 ? "text-red-700" : "text-gray-500"} flex-shrink-0`}>
                {stage.number}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{stage.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center p-4 sm:p-8">
            <img 
              src="/src/assets/walking-man-removebg.png" 
              alt="Walking man illustration" 
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto"
            />
        </div>
        
      </div>
    </div>
  );
};

export default Timeline3D;
