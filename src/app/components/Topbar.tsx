import React from "react";
import Image from "next/image";

const Topbar = () => {
  return (
    <section className="topbar flex justify-between items-center bg-[#F5F5F5] py-1 md:py-[0.417vw] px-[3.194vw]">
      <div>
        <Image
          src="/assets/images/topbar_logo.png"
          alt="Description of the image"
          width={24}
          height={24}
          className="w-4 h-4 md:w-[1.667vw] md:h-[1.667vw]"
        />
      </div>
      <div>
        <ul className="list-none flex justify-center items-center gap-1 md:gap-[1vw]">
          <li className="text-[8px] md:text-[0.764vw] md:leading-[0.972vw] font-medium border-r-[1px] md:border-r-[0.208vw] pr-1 md:pr-[1.068vw] border-[#111111]">
            Find a Store
          </li>
          <li className="text-[8px] md:text-[0.764vw] md:leading-[0.972vw] font-medium border-r-[1px] md:border-r-[0.208vw] pr-1 md:pr-[1.068vw] border-[#111111]">
            Help
          </li>

          <li className="text-[8px] md:text-[0.764vw] md:leading-[0.972vw] font-medium border-r-[1px] md:border-r-[0.208vw] pr-1 md:pr-[1.068vw] border-[#111111]">
            Join Us
          </li>
          <li className="text-[8px] md:text-[0.764vw] md:leading-[0.972vw] font-medium">
            Sign In
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Topbar;
