"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const COURSES = [
  {
    img: "/image/image2.jpg",
link:"https://buy.stripe.com/7sI17E2c19EHcrC3cc",
    title: "Suscripción 1 Mes",
    label: "desde $12",
    desc: "Sumérgete en un mundo de entretenimiento sin límites con Cineflow. Disfruta de 1,425 canales, 6000 películas y 500 series en español e inglés, todo en Full HD y 4K. Mantente actualizado con los últimos estrenos.",
  },
  {
    img: "/image/image3.jpg",
    tag:"$26",
    link:"https://buy.stripe.com/cN22bI7wl0479fqaEF",
    title: "Suscripción 6 Meses",
    label: "desde $46",
    desc: "Sumérgete en un mundo de entretenimiento sin límites con Cineflow. Disfruta de 1,425 canales, 6000 películas y 500 series en español e inglés, todo en Full HD y 4K. Mantente actualizado con los últimos estrenos.",
  },
  {
    img: "/image/image4.jpg",
    tag:"$64",
    link:"https://buy.stripe.com/bIY9EadUJ0474Za5km",
    title: "Suscripción 1 Año",
    label: "desde $80",
    desc: "Sumérgete en un mundo de entretenimiento sin límites con Cineflow. Disfruta de 1,425 canales, 6000 películas y 500 series en español e inglés, todo en Full HD y 4K. Mantente actualizado con los últimos estrenos.",
  }
];

export function ExploreCourses() {
  return (
    <section className="px-8 mt-52">
      <div className="container mx-auto mb-24 text-center">
        <Typography  placeholder=""
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}} variant="h2" color="blue-gray">
        Suscripciones
        </Typography>
        <Typography  placeholder=""
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}}
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          Después de hacer el pago de su suscripción contáctenos por WhatsApp para configurar el servicio. Gracias
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {COURSES.map((props, idx) => (
          <CourseCard  key={idx} tag= {props.tag?? ''} {...props} />
        ))}
      </div>
    </section>
  );
}

export default ExploreCourses;
