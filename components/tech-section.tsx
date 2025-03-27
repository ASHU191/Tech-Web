export default function TechSection() {
  return (
    <div id="services" className="relative bg-black text-white py-20 overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              We Use Top Notch
              <br />
              100% Technologies
            </h2>
            <p className="text-lg opacity-90 max-w-xl">
              We leverage cutting-edge, 100% reliable technologies to deliver robust, high-performance solutions. Our
              focus on innovation ensures you get the best tools and systems tailored to your needs, driving success and
              efficiency.
            </p>
          </div>

          {/* Right side - Technology orbit */}
          <div className="relative h-[400px]">
            {/* Center company name */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <h3 className="text-3xl font-semibold text-rose-400">Saylani</h3>
              <p className="text-xl">Tech limited</p>
            </div>

            {/* Orbit circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-gray-700 border-dashed"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full border border-gray-700 border-dashed"></div>

            {/* Tech icons */}
            <div className="absolute top-[10%] right-[30%] bg-cyan-500 w-14 h-14 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">R</span>
            </div>
            <div className="absolute top-[40%] right-[5%] bg-red-500 w-14 h-14 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">A</span>
            </div>
            <div className="absolute bottom-[15%] right-[20%] bg-blue-500 w-14 h-14 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">C++</span>
            </div>
            <div className="absolute bottom-[30%] left-[10%] bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">F</span>
            </div>

            {/* Red dots */}
            <div className="absolute top-[5%] right-[5%] w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute top-[40%] left-[5%] w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-[10%] right-[10%] w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-[30%] left-[30%] w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#000"
            d="M0,224L120,213.3C240,203,480,181,720,181.3C960,181,1200,203,1320,213.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

