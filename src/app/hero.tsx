"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10">
      <Image
        width={800}
        height={800}
        src="/image/image1.jpg"
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[720px] h-[600px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card   placeholder=""
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}} className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography  placeholder=""
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}}
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl"
            >
            ¡Bienvenido               a                   Cineflow!
            </Typography>
            <Typography  placeholder=""
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}} variant="lead" className="mb-10 mt-6 !text-gray-900">
            Sumérgete en un mundo de entretenimiento        sin límites con Cineflow. Disfruta de 1,425 canales,            6000 películas y 500 series en HD y 4K.
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
               <Button  placeholder=""
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}}color="gray">    see pricing</Button>
             
            </div>
           
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
