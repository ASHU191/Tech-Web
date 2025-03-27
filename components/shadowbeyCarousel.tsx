"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

// Import images directly
// In a real implementation, you would have actual image files
import Image1 from "../public/images/c1.jpg"
import Image2 from "../public/images/c2.jpg"
import Image3 from "../public/images/c3.jpg"
import Image4 from "../public/images/c5.jpg"
import Image5 from "../public/images/c6.jpg"

// Sample images for the carousel using the imported images
const images = [
  {
    main: Image1,
    next: Image2,
    bgMain: "bg-pink-500",
    bgNext: "bg-cyan-400",
  },
  {
    main: Image2,
    next: Image3,
    bgMain: "bg-cyan-400",
    bgNext: "bg-purple-500",
  },
  {
    main: Image3,
    next: Image4,
    bgMain: "bg-purple-500",
    bgNext: "bg-amber-500",
  },
  {
    main: Image4,
    next: Image5,
    bgMain: "bg-amber-500",
    bgNext: "bg-emerald-500",
  },
  {
    main: Image5,
    next: Image1,
    bgMain: "bg-emerald-500",
    bgNext: "bg-pink-500",
  },
]  

export default function ShadowbeyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-[#111116] text-white overflow-x-hidden">
      {/* Showcase heading and paragraph centered over the carousel */}
      <div className="text-center pt-10 pb-6 px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Showcase</h2>
        <p className="max-w-3xl mx-auto text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat
          molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
        </p>
      </div>

      {/* Main content area with container class for proper centering */}
      <div className="relative flex items-center py-4">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex w-full overflow-hidden">
            {/* Left spacing div to create the offset effect */}
            <div className="hidden lg:block lg:w-[20%]"></div>

            {/* Content container with proper spacing */}
            <div className="w-full lg:w-[80%] flex">
              {/* Main card - with increased height */}
              <div
                className="w-[80%] rounded-3xl overflow-hidden transition-all duration-500"
                style={{ height: "min(650px, 60vh)" }}
              >
                <div className={`w-full h-full relative ${images[currentSlide].bgMain}`}>
                  <Image
                    src={images[currentSlide].main || "/placeholder.svg"}
                    alt={`Slide ${currentSlide + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </div>

              {/* Next card preview - with increased height and cut-off effect */}
              <div
                className="w-[20%] rounded-3xl overflow-hidden ml-4 transition-all duration-500 relative"
                style={{ height: "min(650px, 60vh)" }}
              >
                <div className={`absolute inset-0 w-[200%] h-full ${images[currentSlide].bgNext}`}>
                  <div className="relative w-full h-full">
                    <Image
                      src={images[currentSlide].next || "/placeholder.svg"}
                      alt={`Next slide preview`}
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "left center",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer area with container class for proper centering */}
      <div className="container mx-auto px-6 lg:px-8 py-4 mt-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-medium">Shadowbey</h1>
            <p className="text-lg text-gray-400">App Development</p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

