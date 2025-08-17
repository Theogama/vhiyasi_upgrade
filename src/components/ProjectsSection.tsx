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
import project1_2 from "@/assets/p1/project1_2.jpg";
import project1_3 from "@/assets/p1/project1_3.jpg";
import project1_4 from "@/assets/p1/project1_4.jpg";
import project1_5 from "@/assets/p1/project1_5.jpg";
import BAB_2 from "@/assets/p2/BAB_2.jpg";
import BAB_3 from "@/assets/p2/BAB_3.jpg";
import BAB_4 from "@/assets/p2/BAB_4.jpg";
import BAB_5 from "@/assets/p2/BAB_5.jpg";
import BASIL_1 from "@/assets/p3/BASIL_1.jpg";
import BASIL_3 from "@/assets/p3/BASIL_3.jpg";
import BASIL_10 from "@/assets/p3/BASIL_10.jpg";
import BASIL_36 from "@/assets/p3/BASIL_36.jpg";
import BASIL_38 from "@/assets/p3/BASIL_38.jpg";
import BQKfin_13 from "@/assets/p4/BQKfin_13.jpg";
import BQKfin_14 from "@/assets/p4/BQKfin_14.jpg";
import BQKfin_15 from "@/assets/p4/BQKfin_15.jpg";
import BQKfin_16 from "@/assets/p4/BQKfin_16.jpg";
import CHRIS_1 from "@/assets/p5/CHRIS_1.jpg";
import CHRIS_2 from "@/assets/p5/CHRIS_2.jpg";
import CHRIS_4 from "@/assets/p5/CHRIS_4.jpg";
import CHRIS_5 from "@/assets/p5/CHRIS_5.jpg";
import CHRIS_10 from "@/assets/p5/CHRIS_10.jpg";
import DER_1 from "@/assets/p6/DER_1.jpg";
import DER_2 from "@/assets/p6/DER_2.jpg";
import DER_3 from "@/assets/p6/DER_3.jpg";
import DER_4 from "@/assets/p6/DER_4.jpg";
import DER_5 from "@/assets/p6/DER_5.jpg";
import frt_1 from "@/assets/p7/frt_1.jpg";
import frt_3 from "@/assets/p7/frt_3.jpg";
import frt_4 from "@/assets/p7/frt_4.jpg";
import frt_5 from "@/assets/p7/frt_5.jpg";
import frt_6 from "@/assets/p7/frt_6.jpg";
import KWA_1 from "@/assets/p8/KWA_1.jpg";
import KWA_2 from "@/assets/p8/KWA_2.jpg";
import KWA_3 from "@/assets/p8/KWA_3.jpg";
import KWA_4 from "@/assets/p8/KWA_3.jpg";
import KWA_6 from "@/assets/p8/KWA_6.jpg";
import NM_1 from "@/assets/p9/NM_1.jpg";
import NM_2 from "@/assets/p9/NM_2.jpg";
import NM_3 from "@/assets/p9/NM_3.jpg";
import NM_4 from "@/assets/p9/NM_4.jpg";
import NM_5 from "@/assets/p9/NM_5.jpg";
import NN_1 from "@/assets/p10/NN_1.jpg";
import NN_2 from "@/assets/p10/NN_2.jpg";
import NN_3 from "@/assets/p10/NN_3.jpg";
import NN_5 from "@/assets/p10/NN_5.jpg";
import NN_8 from "@/assets/p10/NN_8.jpg";
import NN_19 from "@/assets/p10/NN_19.jpg";




export const ProjectsSection = () => {
  const projects = [
    {
      title: "The Hills Game Reserve Estate",
      details: "5 Bedrooms l 520m2 l Year: 2021",
      images: [project1, project1_2, project1_3, project1_4, project1_5], // multiple images for carousel
      description:
        "Luxury residential estate with modern architectural design and premium finishes.",
    },
    {
      title: "Sunward Park, Boksburg",
      details: "6 bedroom l 550m2 l Year 2022",
      images: [project2, BAB_2, BAB_3, BAB_4, BAB_5],
      description:
        "Contemporary family home featuring open-plan living and seamless indoor-outdoor flow.",
    },
    {
      title: "Seasons Lifestyle Estate",
      details: "5 bedrooms l 535m2 l Year 2023",
      images: [BASIL_1, BASIL_3, BASIL_10, BASIL_36, BASIL_38],
      description:
        "Modern commercial dining space with sophisticated interior design and ambient lighting.",
    },
    {
      title: "Ebotse golf & country estate ",
      details: "5 bedroom l 650m2 l Year 2020",
      images: [project4, BQKfin_13, BQKfin_14, BQKfin_15, BQKfin_16],
      description:
        "A contemporary mixed-use design that seamlessly integrates residential, retail, and commercial spaces into a cohesive, pedestrian-friendly environment.",
    },
    {
      title: "Akwande Glamping Bar and Restaurant",
      details: "Restaurant, Bar & Day club l 3000m2 l Year 2023",
      images: [CHRIS_1, CHRIS_2, CHRIS_4, CHRIS_5, CHRIS_10],
      description:
        "Modern commercial dining space with sophisticated interior design and ambient lighting.",
    },
    {
      title: "Parkmore, Sandton",
      details: "6 bedroom l 470m2 l Year 2021",
      images: [DER_1, DER_2, DER_3, DER_4, DER_5],
      description:
        "Modern commercial dining space with sophisticated interior design and ambient lighting.",
    },
    {
      title: "President Park, Midrand",
      details: "4 bedroom l 355m2 l Year 2022",
      images: [frt_1, frt_3, frt_4, frt_5, frt_6],
      description:
        "Modern commercial dining space with sophisticated interior design and ambient lighting.",
    },
    {
      title: "Summerplace Estate",
      details: "5 bedroom l 550m2 l Year 2024",
      images: [KWA_1, KWA_2, KWA_3, KWA_4, KWA_6],
      description:
        "Modern commercial dining space with sophisticated interior design and ambient lighting.",
    },
    {
      title: "Summerplace Estate",
      details: "5 bedroom l 550m2 l Year 2024",
      images: [NM_1, NM_2, NM_3, NM_4, NM_5],
      description:
        "Modern commercial dining space with sophisticated interior design and ambient lighting.",
    },
    {
      title: "Thorny bush estate",
      details: "5 bedroom l 500m2 l Year 2025",
      images: [NN_1, NN_2, NN_5, NN_8, NN_1],
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
