import Link from "next/link";
import Button from "../atoms/Button";
import Divider from "../atoms/Divider";
import { RiChatQuoteFill } from "react-icons/ri";

const Section = ({ header, src, alt, link, button, icon, children }) => {
  return (
    <div className="bg-trovador-background w-full p-4 flex flex-col gap-8 items-center">
      <div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="tracking-widest uppercase font-bold lg:text-2xl">
            {children}
          </h3>
          <div className="h-0.5 w-16 lg:h-0.5 lg:w-32 bg-black"></div>
        </div>
      </div>
      {icon && (
        <RiChatQuoteFill className="text-4xl lg:text-6xl text-trovador-primary" />
      )}
      <div className="md:flex">
        <h1 className="font-serif text-4xl text-center">{header}</h1>
        <div>
          <img src={src} alt={alt} className="rounded" />
        </div>
      </div>
      <Link href={link}>
        <Button>{button}</Button>
      </Link>
      <Divider />
    </div>
  );
};

export default Section;
