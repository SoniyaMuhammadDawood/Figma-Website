"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Men product const
const mensProducts = [
  {
    id: 1,
    name: "Nike Dri-FIT TechKnit",
    category: "Men's Short-Sleeve Running Top",
    price: 3895,
    image: "/images/men1.png",
  },
  {
    id: 2,
    name: "Nike Dri-FIT Challenger",
    category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    price: 2495,
    image: "/images/men2.png",
  },
  {
    id: 3,
    name: "Nike Dri-FIT Rise 365",
    category: "Men's Short-Sleeve Running Top",
    price: 2695,
    image: "/images/men1.png",
  },
  {
    id: 4,
    name: "Nike Flex Stride",
    category: "Men's 18cm (approx.) Running Shorts",
    price: 2895,
    image: "/images/men2.png",
  },
  {
    id: 5,
    name: "Nike Dri-FIT Element",
    category: "Men's Running Top",
    price: 2995,
    image: "/images/men1.png",
  },
]

// WomeMen product const
const womensProducts = [
  {
    id: 1,
    name: "Nike Dri-FIT Run",
    category: "Women's Long-Sleeve Running Top",
    price: 5295,
    image: "/images/women1.png",
  },
  {
    id: 2,
    name: "Nike Fast",
    category: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
    price: 3795,
    image: "/images/women2.png",
  },
  {
    id: 3,
    name: "Nike Dri-FIT One",
    category: "Women's Mid-Rise Leggings",
    price: 2895,
    image: "/images/women1.png",
  },
  {
    id: 4,
    name: "Nike Epic Fast",
    category: "Women's Mid-Rise Running Leggings",
    price: 3495,
    image: "/images/women2.png",
  },
  {
    id: 5,
    name: "Nike Pro",
    category: "Women's Training Tights",
    price: 2995,
    image: "/images/women1.png",
  },
]

interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
}

interface ProductCarouselProps {
  title: string
  products: Product[]
  shopLink: string
}

export default function Carousal2() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Gear Up</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <ProductCarousel
          title=""
          products={mensProducts}
          shopLink="Shop Men's"
        />
        <ProductCarousel
          title=""
          products={womensProducts}
          shopLink="Shop Women's"
        />
      </div>
    </div>
  )
}

export function ProductCarousel({ title, products, shopLink }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const slideRef = React.useRef<HTMLDivElement>(null);

  const next = () => {
    if (currentIndex < products.length - 4) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) { // Ensure the currentIndex is not less than 0
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  React.useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentIndex * 50}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium">{title}</span>
        <div className="flex items-center gap-2">
          <a href="#" className="text-sm font-medium hover:underline">
            {shopLink}
          </a>

          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            className="p-2 rounded-full hover:bg-gray-200 bg-gray-300"
            aria-label="Previous products">
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            className="p-2 rounded-full hover:bg-gray-200 bg-gray-300"
            aria-label="Next products">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={slideRef}
          className="flex transition-transform duration-300 ease-out"
        >
          {products.map((product) => (
            <div key={product.id} className="w-1/2 flex-shrink-0 px-2">
              <div className="bg-[#f5f5f5] rounded-lg mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            

            <div className="space-y-1 mx-4">
              <div className="flex justify-between items-center ">
                <h3 className="font-semibold text-md mr-4">{product.name}</h3>
                <p className="font-semibold text-sm">₹{product.price.toLocaleString()}</p>
              </div>
              <p className="text-gray-600 text-sm">{product.category}</p>
            </div> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

