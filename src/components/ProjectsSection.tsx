import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";
import project7 from "@/assets/project7.jpg";
import project8 from "@/assets/project8.jpg";
import project9 from "@/assets/project9.jpg";
import project10 from "@/assets/project10.jpg";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Savannah Country Estate",
      details: "5 Bedrooms | 600m/2 | Year: 2020",
      images: [project1, project2, project3], // multiple images for carousel
      description:
        "Luxury residential estate with modern architectural design and premium finishes.",
    },
    {
      title: "Hartebeesport",
      details: "6 Bedrooms | 580m/2 | Year: 2020",
      images: [project2, project1, project4],
      description:
        "Contemporary family home featuring open-plan living and seamless indoor-outdoor flow.",
    },
    {
      title: "012 Lifestyle",
      details: "Restaurant/Eatery located in the heart of Pretoria",
      images: [project3, project5, project6],
      description:
        "Modern commercial dining space with sophisticated interior design and ambient lighting.",
    },
    {
      title: "Urban Nexus",
      details: "Restaurant/Eatery located in the heart of Pretoria",
      images: [project4, project6, project7],
      description:
        "A contemporary mixed-use design that seamlessly integrates residential, retail, and commercial spaces into a cohesive, pedestrian-friendly environment.",
    },
    {
      title: "012 Lifestyle",
      details: "Restaurant/Eatery located in the heart of Pretoria",
      images: [project5, project3, project8],
      description:
        "Modern commercial dining space with sophisticated interior design and ambient lighting.",
    },
    {
      title: "Haven Heights",
      details: "Estate located in the heart of Midrand",
      images: [project6, project1, project9],
      description:
        "Modern commercial dining space with sophisticated interior design and ambient lighting.",
    },
    {
      title: "Civic Core",
      details: "Resort located in the heart of Johannesburg",
      images: [project7, project4, project10],
      description:
        "Modern commercial dining space with sophisticated interior design and ambient lighting.",
    },
    {
      title: "EcoSphere",
      details: "Restaurant/Eatery located in the heart of Pretoria",
      images: [project8, project2, project5],
      description:
        "Modern commercial dining space with sophisticated interior design and ambient lighting.",
    },
    {
      title: "The Atrium",
      details: "Restaurant/Eatery located in the heart of Pretoria",
      images: [project9, project3, project7],
      description:
        "Modern commercial dining space with sophisticated interior design and ambient lighting.",
    },
    {
      title: "Harbour View Residences",
      details: "Restaurant/Eatery located in the heart of Pretoria",
      images: [project10, project8, project6],
      description:
        "Modern commercial dining space with sophisticated interior design and ambient lighting.",
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-accent mb-4 tracking-wider">
            FEATURED PROJECTS
          </p>
          <h2 className="heading-section text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Our Latest Work
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-border/50"
            >
              {/* Carousel */}
              <div className="relative overflow-hidden">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  className="w-full h-48 sm:h-56 md:h-64"
                >
                  {project.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={`${project.title} - ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                    <p className="text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.details}
                </p>
                <div className="w-12 h-px bg-accent"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <a
            href="#contact"
            className="inline-flex text-white items-center bg-accent text-accent-foreground px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-accent/90 transition-colors text-sm sm:text-base"
          >
            START YOUR PROJECT
          </a>
        </div>
      </div>
    </section>
  );
};
