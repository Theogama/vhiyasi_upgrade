export const AboutSection = () => {
  const services = [
    {
      title: "Residential House Designs (House plans)",
      description: "Our approach to Architectural design is to combine the use of our skills and knowledge of the Architectural discipline and the varied design software suites to create a Communicable design for both the designer and client to be able to articulate."
    },
    {
      title: "Townhouses and Apartments",
      description: "We offer 3D design services in house as part of our overall design service, through 3D illustration we are able to bring each project to life digitally and we also able to see other features like the interior décor and exterior landscaping for your project."
    },
    {
      title: "Warehouses (industrial)",
      description: "We have an established Interior Designing offering, our main focus being state of the art interior design for various clientele with varying interests."
    },
    {
      title: "House extensions (Additions and alterations)",
      description: "We also offer construction services through trade agreements with established and accomplished construction partners."
    },
    {
      title: "Site development plans",
      description: "We also extend our service offering to clients that require project management services, we manage the aspects of the client's project as per the client's needs & requirements."
    },{
      title: " 3D Rendering and visualizatio",
      description: "We also extend our service offering to clients that require project management services, we manage the aspects of the client's project as per the client's needs & requirements."
    },{
      title: "Municipal council submissions",
      description: "We also extend our service offering to clients that require project management services, we manage the aspects of the client's project as per the client's needs & requirements."
    },{
      title: "Plans approval",
      description: "plans approval is a key part of our service offering, we offer a wide range of plans approval services to our clients."
    },{
      title: "Interior design",
      description: "interior design is a key part of our service offering, we offer a wide range of interior design services to our clients."
    },
    {
      title: "Construction",
      description: "construction work is a key part of our service offering, we offer a wide range of construction services to our clients."
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-padding max-w-7xl mx-auto">
        {/* About Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 lg:mb-24">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm font-semibold text-accent mb-4 tracking-wider">ABOUT US</p>
            <h2 className="heading-section text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-rose-950 mb-4 sm:mb-6">INTRO</h2>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6 text-muted-foreground leading-relaxed">
            VHIYASI M3 ARCHITECTS is a leading architectural and construction firm dedicated to delivering innovative, sustainable, and client-focused solutions. We specialise in designing and building spaces that seamlessly combine functionality, aesthetics, and environmental responsibility.
            </h3>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-lg sm:text-xl font-bold">Our product offering caters for various types of clients.</h4>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              We offer solutions tailored to serve a wide variety of clients.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Our multidisciplinary team brings together expertise in architecture, engineering, and project management to ensure each project is executed to the highest standard — on time and within budget. From concept to completion, we work closely with clients to bring their vision to life, creating environments that inspire, endure, and enhance communities across the region. Excellence is our foundation; innovation is our craft.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left: Services */}
        <div>
          <p className="text-sm font-semibold text-accent mb-6 sm:mb-8 tracking-wider">
            SERVICES
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
              >

                {/* Text */}
                <div className="p-5 sm:p-6">
                  <div className="border-l-4 border-accent pl-4 sm:pl-6 hover:border-accent/70 transition-colors">
                    <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 group-hover:text-accent transition-colors line-clamp-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base line-clamp-4">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Architectural Picture + Historical Bio */}
        <div className="hidden lg:flex flex-col space-y-4">
          <img
            src="https://images.unsplash.com/photo-1643830133432-2982b78d24f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJjaGl0ZWN0dXJhbCUyMGRlc2lnbnN8ZW58MHx8MHx8fDA%3D"
            alt="Architecture"
            className="w-full h-[1200px] object-cover rounded-2xl shadow-lg"
          />
          <p className="text-muted-foreground italic text-sm leading-relaxed">
            *This modernist building, inspired by 20th-century Bauhaus principles, reflects the harmony between simplicity and functionality. 
            Designed with clean lines and open spaces, it echoes a timeless vision of architecture where art meets engineering.*
          </p>
        </div>
      </div>

      </div>
    </section>
  );
};