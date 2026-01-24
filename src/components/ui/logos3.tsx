"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading,
  logos = [
    {
      id: "logo-1",
      description: "React",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-2",
      description: "Vercel",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-3",
      description: "Python",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-4",
      description: "GitHub",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-5",
      description: "HTML5",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-6",
      description: "Next.js",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-7",
      description: "JavaScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-8",
      description: "Apache Spark",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-9",
      description: "TypeScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-10",
      description: "Figma",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-11",
      description: "Tailwind CSS",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-12",
      description: "Canva",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-13",
      description: "MongoDB",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-14",
      description: "Dribbble",
      image: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/dribbble.svg",
      className: "h-8 w-auto dribbble-pink",
    },
    {
      id: "logo-15",
      description: "CSS3",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-16",
      description: "Node.js",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-17",
      description: "Supabase",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-18",
      description: "AWS",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      className: "h-6 w-auto",
    },
    {
      id: "logo-19",
      description: "MySQL",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      className: "h-8 w-auto",
    },
  ],
  className = "",
}: Logos3Props) => {
  return (
    <section className={`w-full bg-white ${className}`}>
      {heading && (
        <div className="container flex flex-col items-center text-center py-8">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
            {heading}
          </h2>
        </div>
      )}
      <div className={heading ? "pb-8" : "py-8"}>
        <div className="relative mx-auto flex items-center justify-center max-w-xl">
          <Carousel
            opts={{ loop: true, align: "start", dragFree: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 0.8, stopOnInteraction: false })]}
          >
            <CarouselContent className="ml-0 -ml-2">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-2 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-1 flex shrink-0 items-center justify-center">
                    <div className="transition-all duration-500 ease-out hover:scale-125 hover:rotate-3 hover:brightness-110">
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={`${logo.className} transition-all duration-500 ease-out filter hover:drop-shadow-lg`}
                        style={logo.description === 'Dribbble' ? 
                          { filter: "invert(56%) sepia(63%) saturate(6613%) hue-rotate(313deg) brightness(98%) contrast(95%)" } : 
                          undefined
                        }
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };