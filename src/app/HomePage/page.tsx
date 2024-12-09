"use client";

import React from "react";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import { bestOfAirMaxData, CartContentType } from "../data/best-of-air-max";
import { men, MenCartContentType } from "../data/men";
import { women, WomenCartContentType } from "../data/women";
import Footer from "../components/Footer";

const Homepage = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="homepage">
      <Topbar />
      <Header />

      {/* Hero Section */}
      <section>
        <div className="text-center bg-[#F5F5F5] py-3 md:py-[0.625vw]">
          <h6 className="font-medium text-sm md:text-[1.042vw] leading-5 md:leading-[1.111vw]">
            Hello Nike App
          </h6>
          <p className="text-center font-normal text-xs md:text-[0.764vw] leading-5 md:leading-[1.667vw]">
            Download the app to access everything Nike.{" "}
            <span className="underline font-medium">Get Your Great</span>
          </p>
        </div>

        <div className="max-w-[95%] md:max-w-[93.333vw] max-h-auto md:max-h-[67.847vw] m-auto">
          <img
            src="/assets/images/hero-image.png"
            className="w-full h-auto"
            alt="image"
          />

          <div className="text-center pt-4 md:pt-[2.778vw]">
            <h6 className="font-medium text-base md:text-[1.042vw] leading-6 md:leading-[1.667vw]">
              First Look
            </h6>
            <h2 className="text-2xl md:text-[3.889vw] font-medium leading-7 md:leading-[4.167vw]">
              Nike Air Max Pulse
            </h2>
            <p className="pt-4 md:pt-[1.667vw] w-[90%] md:w-[35.486vw] m-auto text-sm md:text-[1.042vw] leading-5 md:leading-[1.667vw]">
              Extreme comfort. Hyper durable. Max volume. Introducing the Air
              Max Pulse — designed to push you past your limits and help you go
              to the max.
            </p>

            {/* Buttons */}
            <div className="mt-4 md:mt-[2.083vw] flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[0.556vw]">
              <button className="bg-[#111111] text-[#FFFFFF] w-[50%] md:w-[7.679vw] h-10 md:h-[2.708vw] rounded-3xl md:rounded-[2.083vw] text-sm md:text-[1.042vw] leading-5 md:leading-[1.667vw]">
                Notify Me
              </button>
              <button className="bg-[#111111] text-[#FFFFFF] w-[50%] md:w-[9.594vw] h-10 md:h-[2.708vw] rounded-3xl md:rounded-[2.083vw] text-sm md:text-[1.042vw] leading-5 md:leading-[1.667vw]">
                Shop Air Max
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Best of Air Max */}
      <section className="mx-2 md:ml-[3.333vw] mt-12 mb-12 md:mt-[5.833vw] md:mb-[2.083vw]">
        <div className="flex justify-between items-center">
          <h3 className="text-lg md:text-[1.528vw] md:leading-[1.944vw] font-medium">
            Best of Air Max
          </h3>
          <div className="flex justify-center items-center gap-1 md:gap-[0.86vw] mr-2 md:mr-[3.306vw]">
            <p className="text-base md:text-[1.042vw] md:leading-[1.667vw] font-medium">
              Shop
            </p>
            <button
              onClick={scrollLeft}
              className="flex justify-center items-center bg-[#E5E5E5] w-6 h-6 rounded-full md:w-[3.333vw] md:h-[3.333vw] md:rounded-[1.667vw]"
            >
              <img
                src="/assets/images/left-arrow.png"
                className="w-4 md:w-[1.667vw]"
                alt="Left arrow"
              />
            </button>
            <button
              onClick={scrollRight}
              className="flex justify-center items-center bg-[#E5E5E5] w-6 h-6 rounded-full md:w-[3.333vw] md:h-[3.333vw] md:rounded-[1.667vw]"
            >
              <img
                src="/assets/images/right-arrow.png"
                className="w-4 md:w-[1.667vw]"
                alt="Right arrow"
              />
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="flex overflow-x-auto md:overflow-hidden snap-x snap-mandatory gap-2 md:gap-[0.833vw] mt-4 md:mt-[0.833vw] scrollbar-hide"
        >
          {bestOfAirMaxData?.map((data: CartContentType) => (
            <div
              key={data?.id}
              className="min-w-[50%] md:min-w-[30.65vw] max-w-[50%] md:max-w-[30.65vw] snap-center"
            >
              <img
                src={data?.img}
                className="w-full h-auto md:w-[30.65vw] md:h-[30.65vw]"
                alt={data?.title}
              />
              <div className="flex flex-col md:flex-row justify-center text-center md:justify-between items-center mt-2">
                <div>
                  <h4 className="text-base md:text-[1.042vw] md:leading-[1.667vw] font-medium">
                    {data?.title}
                  </h4>
                  <p className="text-sm md:text-[1.042vw] md:leading-[1.667vw] text-gray-500 font-normal">
                    {data?.category}
                  </p>
                </div>
                <div>
                  <p className="text-base md:text-[1.042vw] md:leading-[1.667vw] font-medium">
                    {data?.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="w-[95%] md:w-[93.333vw] m-auto mt-12 md:mt-[5.833vw]">
        <h3 className="font-medium text-lg leading-6 mb-4 md:text-[1.597vw] md:leading-[1.944vw] md:mb-[1.736vw]">
          Featured
        </h3>
        <img
          src="/assets/images/feature-image.png"
          className="w-full h-auto md:w-[93.333vw] md:h-[48.611vw]"
          alt="Feature image"
        />
        <div className="text-center mt-4 mx-4 md:mt-[3.333vw] md:m-auto md:max-w-[70vw]">
          <h2 className="font-medium text-xl leading-7 md:text-[3.75vw] md:leading-[4.167vw]">
            STEP INTO WHAT FEELS GOOD
          </h2>
          <p className="text-sm leading-5 font-medium mt-2 mb-4 md:text-[1.042vw] md:leading-[1.667vw] md:mt-[1.667vw] md:mb-[2.083vw]">
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
          <button className="w-40 h-12 rounded-full bg-[#111111] text-[#FFFFFF] text-sm leading-5 font-medium md:w-[10.585vw] md:h-[2.708vw] md:rounded-[2.083vw] md:text-[1.042vw] md:leading-[1.667vw]">
            Find Your Shoe
          </button>
        </div>
      </section>

      {/* Gear Up */}
      <section className="w-[93.333vw] m-auto mt-12 md:mt-[5.833vw]">
        <h3 className="font-medium text-lg md:text-[1.597vw] leading-[1.944vw] mb-[1.736vw]">
          Gear Up
        </h3>
        <div className="flex justify-center items-center flex-wrap gap-[0.833vw] mb-[3.75vw]">
          <div className="mb-[3.75vw] w-full mt-8 md:mt-0 md:w-[46.25vw]">
            <div className="flex justify-end items-center gap-[0.833vw] mb-[0.833vw]">
              <p className="text-base md:text-[1.042vw] leading-[1.667vw] font-medium">
                Shop Men's
              </p>
              <button className="flex justify-center items-center  bg-[#E5E5E5] w-6 h-6 md:w-[3.333vw] md:h-[3.333vw] rounded-full md:rounded-[1.667vw]">
                <img
                  src="/assets/images/left-arrow.png"
                  className="md:w-[1.667vw] w-4"
                />
              </button>
              <button className="flex justify-center items-center bg-[#E5E5E5] w-6 h-6 md:w-[3.333vw] md:h-[3.333vw] rounded-full md:rounded-[1.667vw]">
                <img
                  src="/assets/images/right-arrow.png"
                  className="md:w-[1.667vw] w-4"
                />
              </button>
            </div>
            <div className="flex justify-end items-center w-full md:w-[46.25vw]">
              <div className="flex justify-evenly md:justify-end items-center flex-wrap gap-2 md:gap-[0.833vw] w-full">
                {men?.map((data: MenCartContentType) => (
                  <div className="w-[46%] md:w-[20.833vw]">
                    <img
                      src={data?.img}
                      alt={data?.title}
                      className="w-full h-auto md:h-[20.833vw]"
                    />
                    <div className="flex flex-col md:flex-row justify-start md:justify-between items-start mt-[1.458vw] w-full">
                      <div className="w-full md:w-[16.078vw] text-center md:text-left">
                        <h4 className="text-base pt-1 md:pt-0 md:text-[1.042vw] md:leading-[1.667vw] font-medium">
                          {data?.title}
                        </h4>
                        <p className="text-sm py-1 text-[#757575] md:text-[1.042vw] md:leading-[1.667vw] font-normal w-full md:w-[14.123vw]">
                          {data?.description}
                        </p>
                      </div>
                      <div className="text-center md:text-left w-full md:w-[3.658vw]">
                        <p className="text-base md:text-[1.042vw] md:leading-[1.667vw] font-medium ">
                          {data?.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mb-[3.75vw] w-full mt-5 md:mt-0 md:w-[46.25vw]">
            <div className="flex justify-end items-center gap-[0.833vw] mb-[0.833vw]">
              <p className="text-base md:text-[1.042vw] leading-[1.667vw] font-medium">
                Shop Women's
              </p>
              <button className="flex justify-center items-center  bg-[#E5E5E5] w-6 h-6 md:w-[3.333vw] md:h-[3.333vw] rounded-full md:rounded-[1.667vw]">
                <img
                  src="/assets/images/left-arrow.png"
                  className="md:w-[1.667vw] w-4"
                />
              </button>
              <button className="flex justify-center items-center bg-[#E5E5E5] w-6 h-6 md:w-[3.333vw] md:h-[3.333vw] rounded-full md:rounded-[1.667vw]">
                <img
                  src="/assets/images/right-arrow.png"
                  className="md:w-[1.667vw] w-4"
                />
              </button>
            </div>
            <div className="flex justify-end items-center w-full md:w-[46.25vw]">
              <div className="flex justify-evenly md:justify-end items-center flex-wrap gap-2 md:gap-[0.833vw] w-full">
                {women?.map((data: WomenCartContentType) => (
                  <div className="w-[46%] md:w-[20.833vw]">
                    <img
                      src={data?.img}
                      alt={data?.title}
                      className="w-full h-auto md:h-[20.833vw]"
                    />
                    <div className="flex flex-col md:flex-row justify-start md:justify-between items-start mt-[1.458vw] w-full">
                      <div className="w-full md:w-[16.078vw] text-center md:text-left">
                        <h4 className="text-base pt-1 md:pt-0 md:text-[1.042vw] md:leading-[1.667vw] font-medium">
                          {data?.title}
                        </h4>
                        <p className="text-sm py-1 text-[#757575] md:text-[1.042vw] md:leading-[1.667vw] font-normal w-full md:w-[14.123vw]">
                          {data?.description}
                        </p>
                      </div>
                      <div className="text-center md:text-left w-full md:w-[3.658vw]">
                        <p className="text-base md:text-[1.042vw] md:leading-[1.667vw] font-medium ">
                          {data?.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Don't Miss */}
      <section className="w-[93.333vw] m-auto mt-12 md:mt-[5.833vw]">
        <h3 className="font-medium text-lg md:text-[1.528vw] leading-[5vw] md:leading-[1.944vw] mb-[4vw] md:mb-[1.736vw]">
          Don't Miss
        </h3>
        <img
          src="/assets/images/Don't-Miss.png"
          alt="Don't Miss"
          className="w-full h-auto"
        />
        <div className="w-[90%] md:w-[70vw] m-auto text-center mt-[5vw] md:mt-[3.333vw]">
          <h2 className="text-xl md:text-[3.611vw] font-medium">
            FLIGHT ESSENTIALS
          </h2>
          <p className="mt-[1.667vw] mb-[2.083vw] text-sm md:text-[1.042vw] md:leading-[1.667vw] leading-[5vw]">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>
          <button className="text-sm md:text-[1.042vw] leading-[1.667vw] font-medium w-[35vw] md:w-[5.582vw] h-10 md:h-[2.708vw] rounded-[5vw] md:rounded-[2.083vw] bg-[#111111] text-[#FFFFFF]">
            Shop
          </button>
        </div>
      </section>

      {/* The Essentials */}
      <section className="w-[93.333vw] m-auto mt-[5.833vw]">
        <h3 className="font-medium text-lg md:text-[1.597vw] md:leading-[1.944vw] mb-[1.736vw]">
          The Essentials
        </h3>
        <div className="flex justify-center items-center flex-wrap gap-[0.833vw]">
          <div className="relative">
            <img
              src="/assets/images/men.png"
              alt="men"
              className="w-full sm:w-[45vw] md:w-[30.556vw]"
            />
            <button className="text-base md:text-[1.042vw] md:leading-[1.667vw] font-medium w-[25%] h-8 md:w-[5.916vw] md:h-[2.708vw] bg-[#FFFFFF] absolute bottom-[3vw] left-[2vw] rounded-full md:rounded-[2.083vw]">
              Men's
            </button>
          </div>
          <div className="relative">
            <img
              src="/assets/images/women.png"
              alt="women"
              className="w-full sm:w-[45vw] md:w-[30.556vw]"
            />
            <button className="text-base md:text-[1.042vw] md:leading-[1.667vw] font-medium w-[33%] h-8 md:w-[7.562vw] md:h-[2.708vw] bg-[#FFFFFF] absolute bottom-[3vw] left-[2vw] rounded-full md:rounded-[2.083vw]">
              Women's
            </button>
          </div>
          <div className="relative">
            <img
              src="/assets/images/kids.png"
              alt="kids"
              className="w-full sm:w-[45vw] md:w-[30.556vw]"
            />
            <button className="text-base md:text-[1.042vw] md:leading-[1.667vw] font-medium w-[25%] h-8 md:w-[5.36vw] md:h-[2.708vw] bg-[#FFFFFF] absolute bottom-[3vw] left-[2vw] rounded-full md:rounded-[2.083vw]">
              Kid's
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="flex flex-col md:flex-row items-start md:justify-center md:items-center gap-[3.333vw] mt-[5.833vw] mb-[3.889vw] m-auto w-[80%] md:w-[61.111vw]">
        <div>
          <h5 className="text-base md:w-[12.778vw] mb-[1.944vw] md:text-[1.042vw] md:leading-[1.667vw] font-medium">
            Icon
          </h5>
          <ul className="md:w-[12.778vw]">
            <li className="mb-[0.833vw] text-[#757575] text-base md:text-[1.042vw] md:leading-[1.667vw]">
              Air Force 1
            </li>
            <li className="mb-[0.833vw] text-[#757575] text-base md:text-[1.042vw] md:leading-[1.667vw]">
              Huarache
            </li>
            <li className="mb-[0.833vw] text-[#757575] text-base md:text-[1.042vw] md:leading-[1.667vw]">
              Air Max 90
            </li>
            <li className="mb-[0.833vw] text-[#757575] text-base md:text-[1.042vw] md:leading-[1.667vw]">
              Air Max 95
            </li>
          </ul>
        </div>
        <div>
          <h5 className="md:w-[12.778vw] mb-[1.944vw] text-base md:text-[1.042vw] md:leading-[1.667vw] font-medium">
            Shoes
          </h5>
          <ul className="md:w-[12.778vw]">
            <li className="mb-[0.833vw] text-[#757575] text-base md:text-[1.042vw] md:leading-[1.667vw] font-medium">
              All Shoes
            </li>
            <li className="mb-[0.833vw] text-[#757575] ttext-base md:text-[1.042vw] md:leading-[1.667vw] font-medium">
              Custom Shoes
            </li>
            <li className="mb-[0.833vw] text-[#757575] text-base md:text-[1.042vw] md:leading-[1.667vw] font-medium">
              Jordan Shoes
            </li>
            <li className="mb-[0.833vw] text-[#757575] text-base md:text-[1.042vw] md:leading-[1.667vw] font-medium">
              Running Shoes
            </li>
          </ul>
        </div>
        <div>
          <h5 className="w-[12.778vw] mb-[1.944vw] text-base md:text-[1.042vw] md:leading-[1.667vw] font-medium">
            Clothing
          </h5>
          <ul className="md:w-[12.778vw]">
            <li className="mb-[0.833vw] text-[#757575] text-base md:text-[1.042vw] md:leading-[1.667vw] font-medium">
              All Clothing
            </li>
            <li className="mb-[0.833vw] text-[#757575] text-base md:text-[1.042vw] md:leading-[1.667vw]font-medium">
              Modest Wear
            </li>
            <li className="mb-[0.833vw] text-[#757575] text-base md:text-[1.042vw] md:leading-[1.667vw]font-medium">
              Hoodies & Pullovers
            </li>
            <li className="mb-[0.833vw] text-[#757575] text-base md:text-[1.042vw] md:leading-[1.667vw] font-medium">
              Shirts & Tops
            </li>
          </ul>
        </div>
        <div>
          <h5 className="md:w-[12.778vw] mb-[1.944vw] text-base md:text-[1.042vw] md:leading-[1.667vw] font-medium">
            Kids'
          </h5>
          <ul className="md:w-[12.778vw]">
            <li className="mb-[0.833vw] text-[#757575] text-base md:text-[1.042vw] md:leading-[1.667vw] font-medium">
              Infant & Toddler Shoes
            </li>
            <li className="mb-[0.833vw] text-[#757575] text-base md:text-[1.042vw] md:leading-[1.667vw] font-medium">
              Kids' Shoes
            </li>
            <li className="mb-[0.833vw] text-[#757575] text-base md:text-[1.042vw] md:leading-[1.667vw] font-medium">
              Kids' Jordan Shoes
            </li>
            <li className="mb-[0.833vw] text-[#757575] text-base md:text-[1.042vw] md:leading-[1.667vw] font-medium">
              Kids' Basketball Shoes
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
