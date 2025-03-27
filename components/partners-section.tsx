"use client";
import Image from "next/image";
import Img1 from "../public/images/partners-section.png";
import Logo1 from "../public/images/1.png";
import Logo2 from "../public/images/2.png";
import Logo3 from "../public/images/3.png";
import Logo4 from "../public/images/4.png";
import Logo5 from "../public/images/5.png";

export default function PartnersSection() {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5]; // ✅ Store logos in an array

  return (
    <div id="about" className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Partners Section in a Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20">

          {/* Text Section */}
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold">Proud partners of</h2>
            <p className="text-xl">Saylani Tech Limited</p>
          </div>

          {/* Partner Logos in a Single Row */}
          <div className="flex flex-wrap justify-center lg:justify-end items-center gap-12">
            {logos.map((logo, index) => (
              <div key={index} className="w-32 h-16 flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full"
                />
              </div>
            ))}
          </div>

        </div>

        {/* Software Services (Row Layout) */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-20">

          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            {/* Icon */}
            <div className="w-16 h-16 border-2 border-purple-900 rounded-lg flex items-center justify-center mb-6">
              <div className="w-8 h-8 border-2 border-purple-900"></div>
            </div>

            <h2 className="text-4xl font-bold mb-6">Software Services</h2>

            <p className="text-gray-600 max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu. In hac habitasse platea dictumst.
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu. In hac habitasse platea dictumst.
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 rounded-xl overflow-hidden">
            <Image
              src={Img1}
              alt="Data center with blue lighting"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
