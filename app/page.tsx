import Image from "next/image";
import background from "../public/images/jacqueline-o-gara-2sfoa14KlCU-unsplash.jpg";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="px-8">
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
            <h1 className="text-5xl lg:text-7xl text-center">
              Родна Продукция
            </h1>
            <Button className="mx-auto">Разгледай</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
