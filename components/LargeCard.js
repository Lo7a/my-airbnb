/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className=" relative py-16 cursor-pointer ">
      <div className="relative h-96 min-w-[300px] ">
        <Image
          className="rounded-lg  "
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-20 md:w-60 lg:w-72 xl:w-96 absolute top-32 left-12 ">
        <h3 className="text-2xl mb-3 lg:text-3xl xl:text-4xl  ">{title}</h3>
        <p className="lg:text-xl">{description}</p>
        <button className=" text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 ">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
