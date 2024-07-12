import Image from "next/image";
import background from "../public/images/jacqueline-o-gara-2sfoa14KlCU-unsplash.jpg"
export default function Home() {
  return (
    <main className="px-8">
      <div className="h-screen overflow-hidden relative">
          <Image src={background} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="Crops" className="object-cover h-full absolute"/>
          <div className="absolute top-0 left-0 h-full w-full bg-black/50"></div>
          <div className="absolute top-52 left-28 text-white">
            <h1 className="text-7xl">Родна Продукция</h1>
          </div>
      </div>
    </main>
  );
}
