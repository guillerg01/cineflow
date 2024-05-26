"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href="https://wa.me/qr/NUKEBLIRSCWZE1" target="_blank">
      <Button
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >

        
        <Image
          width={128}
          height={128}
          className="w-36 h-10"
          alt="Material Tailwind"
          src="/logos/whatsapplogo.png"
        />

      </Button>
    </a>
  );
}
