import Image from "next/image";
import background from "../public/images/jacqueline-o-gara-2sfoa14KlCU-unsplash.jpg";
import Honey from "../public/images/Honey.jpeg";
import Tomatoes from "../public/images/Tomatos.jpeg";
import { Button } from "@/components/ui/button";
import ImageWithContent from "@/components/image-with-content/image-with-content";

const categories = [
  {
    image: Honey,
    content: "Honey",
    href: "/"
  },
  {
    image: Tomatoes,
    content: "Tomatoes",
    href: "/"
  },
  {
    image: Honey,
    content: "Honey",
    href: "/"
  },
  {
    image: Tomatoes,
    content: "Tomatoes",
    href: "/"
  },
  {
    image: Honey,
    content: "Honey",
    href: "/"
  },
  {
    image: Tomatoes,
    content: "Tomatoes",
    href: "/"
  },
  {
    image: Honey,
    content: "Honey",
    href: "/"
  },
  {
    image: Tomatoes,
    content: "Tomatoes",
    href: "/"
  },
];

export default function Home() {
  return (
    <main className="flex flex-col text-center">
      <section id="main-banner">
        <div className="h-screen overflow-hidden relative">
          <Image
            src={background}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Crops"
            className="object-cover h-full absolute"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-black/50"></div>
          <div className="w-full absolute top-1/3 text-white flex flex-col space-y-10">
            <h1 className="text-5xl lg:text-7xl">
              Родна Продукция
            </h1>
            <Button className="mx-auto">Разгледай</Button>
          </div>
        </div>
      </section>
      <section id="categories" className="max-w-[1600px] p-8 space-y-10">
        <h2 className="font-bold text-2xl">Категории</h2>
        <div className="flex justify-center items-center flex-wrap">
          {categories.map((category, index) => (
            <ImageWithContent key={index} {...category} />
          ))}
        </div>
      </section>
    </main>
  );
}
