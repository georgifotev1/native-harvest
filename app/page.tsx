import Image from "next/image";
import background from "../public/images/jacqueline-o-gara-2sfoa14KlCU-unsplash.jpg";
import Honey from "../public/images/Honey.jpg";
import Vegetables from "../public/images/Vegetables.jpg";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/image-with-content/image-with-content";
import NaturalFoods from "@/public/images/natural-food-items.jpg";
import PreFooter from "@/public/images/pre-footer-large.jpg";
import Apple from "@/public/images/Apple.jpg";
import Cheese from "@/public/images/Cheese.jpg";
import Meat from "@/public/images/Meat.jpg";
import Nuts from "@/public/images/Nuts.jpg";
import WinterAndSweets from "@/public/images/WinterAndSweets.jpg";

const categories = [
  {
    image: Honey,
    content: "Мед",
    href: "/categories/honey",
  },
  {
    image: Apple,
    content: "Плодове",
    href: "/categories/fruits",
  },
  {
    image: Vegetables,
    content: "Зеленчуци",
    href: "/categories/vegetables",
  },
  {
    image: Cheese,
    content: "Млечни Продукти",
    href: "/categories/dairy-products",
  },
  {
    image: Meat,
    content: "Месни Продукти",
    href: "/categories/meat-products",
  },
  {
    image: Nuts,
    content: "Ядки и Семена",
    href: "/categories/nuts-and-seeds",
  },
  {
    image: WinterAndSweets,
    content: "Зимнина и Сладки",
    href: "/categories/winter-food",
  },
];

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
            <Button className="mx-auto">Разгледай</Button>
          </div>
        </div>
      </HomePageSection>
      <HomePageSection>
        <H2 title="Категории" />
        <div className="flex justify-center items-center flex-wrap">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </HomePageSection>
      <HomePageSection>
        <H2 title="Хранителни продукти произведени в България" />
        <div className="flex flex-col lg:flex-row">
          <Image src={NaturalFoods} alt="natural foods" className="w-full min-h-[300px] flex-1" />
          <div className="flex flex-col flex-1 justify-evenly space-y-1 px-8 py-6 text-center border-b-2 lg:py-2 lg:text-start">
            <H3 title="Хранителни продукти"></H3>
            <H4 title="Lorem ipsum dolor sit amet consectetur adipisicing elit."></H4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Generate a random sentence. Lorem ipsum dolor sit amet consectetur adipisicing elit. Generate a random sentence. Lorem ipsum dolor sit amet consectetur adipisicing elit. Generate a random sentence.</p>
            <Button className="self-center">Button</Button>
          </div>
        </div>
      </HomePageSection>
      <HomePageSection fullWidth>
          <Image src={PreFooter} alt="pre-footer" className="w-full"/>
      </HomePageSection>
    </main>
  );
}

const H2 = ({ title }: { title: string }) => {
  return <h2 className="font-bold text-2xl">{title}</h2>;
};

const H3 = ({ title }: { title: string }) => {
  return <h2 className="font-bold text-xl">{title}</h2>;
};

const H4 = ({ title }: { title: string }) => {
  return <h2 className="font-bold text-lg">{title}</h2>;
};


const HomePageSection = ({
  fullWidth,
  children,
}: {
  fullWidth?: boolean;
  children: JSX.Element | JSX.Element[];
}) => {
  const isContentWidth = "max-w-[1600px] p-8 space-y-10";
  return (
    <section className={fullWidth ? "w-full" : isContentWidth}>{children}</section>
  );
};
