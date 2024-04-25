import { Link } from "react-router-dom";
import { FooterUtils } from "./Utils";

const Footer = () => {
  return (
    <div className="flex flex-col gap-8 bg-black" id="footer">
      <div className="relative lg:px-20">
        <div className="container mx-auto flex justify-evenly lg:flex-row md:flex-row flex-col py-20 gap-[3rem]">
          {FooterUtils.map((item, index) => (
            <div className="w-32 flex flex-col gap-5" key={index}>
              <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#ffadd5c5] via-[#ade2ffc7] to-[#e16affb9]">
                {item.header}
              </h1>
              <div className="flex flex-col gap-2">
                {item.sub.map((item, index) => (
                  <Link
                    href={item.link}
                    className="text-neutral-100 hover:text-pink-3"
                    key={index}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 h-[2px] px-20">
          <div className="container mx-auto bg-gradient-to-r h-full from-[#E32882] via-[#2C8BC0] to-[#BB0CE7]"></div>
        </div>
      </div>
      <div className="lg:px-20 pb-20">
        <div className="container mx-auto flex justify-between">
          <h1 className="py-3 text-3xl tracking-widest font-light font-hanken text-neutral-200">
            NFTix
          </h1>
          <p className="flex gap-2 mt-4 text-neutral-100">
            <span>© 2023, All rights reserved</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
