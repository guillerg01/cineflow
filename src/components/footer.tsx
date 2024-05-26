import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Company",
    items: ["About Us", "Careers", "Premium Tools", "Blog"],
  },
  {
    title: "Pages",
    items: ["Login", "Register", "Add List", "Contact"],
  },
  {
    title: "Legal",
    items: ["Terms", "Privacy", "Team", "About Us"],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-24 pb-8">
      <div className="container max-w-xl flex flex-col mx-auto">
     
          {/* <div className="flex col-span-2 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography  placeholder=""
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}} variant="h6" color="blue-gray" className="mb-4">
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography  placeholder=""
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}}
                      as="a"
                      href="#"
                      className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div> */}
          <div className="w-full">
            <Typography  placeholder=""
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}} variant="h6" className="mb-3 text-center">
              Subscribe
            </Typography>
            <Typography  placeholder=""
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}} className="!text-gray-500 font-normal mb-4 text-base">
              Get access to subscriber exclusive deals and be the first who gets
              informed about fresh sales.
            </Typography>
            <Typography  placeholder=""
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}} variant="small" className="font-medium mb-2 text-left">
              Your Email
            </Typography>
            <div className="flex mb-3 flex-col lg:flex-row items-start gap-4">
              <div className="w-full">
                {/* @ts-ignore */}
                <Input label="Email" color="gray" />
               
              </div>
              <Button   placeholder=""
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}} color="gray" className="w-full lg:w-fit" size="md">
                button
              </Button>
            </div>
          </div>
        
    
      </div>
    </footer>
  );
}

export default Footer;
