import { Logos3 } from "@/components/ui/logos3"

const demoData = {
  heading: "Technologies I Use",
  logos: [
    {
      id: "logo-1",
      description: "React",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-2",
      description: "Next.js",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-3",
      description: "TypeScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-4",
      description: "Tailwind CSS",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      className: "h-6 w-auto",
    },
    {
      id: "logo-5",
      description: "Framer Motion",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-6",
      description: "Node.js",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-7",
      description: "Python",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-8",
      description: "AWS",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      className: "h-6 w-auto",
    },
    {
      id: "logo-9",
      description: "Docker",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      className: "h-8 w-auto",
    },
  ],
};

function Logos3Demo() {
  return <Logos3 {...demoData} />;
}

export { Logos3Demo };