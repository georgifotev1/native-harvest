import Image from "next/image";
import background from "../public/images/jacqueline-o-gara-2sfoa14KlCU-unsplash.jpg";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/image-with-content/image-with-content";
import NaturalFoods from "@/public/images/natural-food-items.jpg";
import PreFooter from "@/public/images/pre-footer-large.jpg";
import { categories } from "@/lib/constants/categories";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col text-center">
      <HomePageSection fullWidth>
        <div className="h-screen overflow-hidden relative">
          <Image
            src={background}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Crops"
            className="object-cover h-full absolute"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-black/50"></div>
          <div className="w-full absolute top-1/3 text-white flex flex-col space-y-10">
            <h1 className="text-5xl lg:text-7xl">Родна Продукция</h1>
            <Link href="/categories">
              <Button className="mx-auto">Разгледай</Button>
            </Link>
          </div>
        </div>
      </HomePageSection>
      <HomePageSection>
        <h2>Категории</h2>
        <div className="flex justify-center items-center flex-wrap">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </HomePageSection>
      <HomePageSection>
        <h2>Хранителни продукти произведени в България</h2>
        <div className="flex flex-col lg:flex-row">
          <Image
            src={NaturalFoods}
            alt="natural foods"
            className="w-full min-h-[300px] flex-1"
          />
          <div className="flex flex-col flex-1 justify-evenly space-y-8 px-8 py-6 text-center lg:py-2 lg:text-start">
            <h3>Хранителни продукти</h3>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Generate
              a random sentence. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Generate a random sentence. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Generate a random sentence.
            </p>
            <Button className="self-center">Button</Button>
          </div>
        </div>
      </HomePageSection>
      <HomePageSection fullWidth>
        <Image src={PreFooter} alt="pre-footer" className="w-full" />
      </HomePageSection>
    </main>
  );
}
const HomePageSection = ({
  fullWidth,
  children,
}: {
  fullWidth?: boolean;
  children: JSX.Element | JSX.Element[];
}) => {
  const isContentWidth = "max-w-[1600px] px-8 py-10 space-y-10";
  return (
    <section className={fullWidth ? "w-full" : isContentWidth}>
      {children}
    </section>
  );
};
