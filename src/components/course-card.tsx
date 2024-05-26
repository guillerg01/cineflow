import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";


interface CourseCardProps {
  img: string;
  tag: string;
  title: string;
  link:string;
  desc: string;
  label: string;
}

export function CourseCard({ img, link,tag, title, desc, label }: CourseCardProps) {
  return (
    <Card  placeholder=""
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}} className="border">
      <CardHeader placeholder=""
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}} className="h-64">
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full object-cover scale-[1.1]"
        />
      </CardHeader>
      <CardBody placeholder=""
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}}>
      
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-900"
        >
          <Typography  placeholder=""
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}} variant="h5" className="mb-2 normal-case">
            {title}
          </Typography>
        </a>
        <Typography  placeholder=""
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}} className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <div className="flex flex-row space-x-2">
        <a href={link} target="_blank"><Button   placeholder=""
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}} variant="outlined">{label}</Button></a>
      { tag!==''&&<div className="flex justify-center items-center flex-row space-x-1"> <span className="text-center relative">{tag??tag}<div className="w-full absolute top-[48%]  bg-black/60 h-[1px]"></div></span ><span>Save</span></div>}
        </div>
      </CardBody>
    </Card>
  );
}

export default CourseCard;