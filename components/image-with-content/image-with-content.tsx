import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type CategoryCardType = {
  image: StaticImageData,
  content: string,
  href: string
}

export default function CategoryCard(props: CategoryCardType) {
  return (
    <Link href={props.href} className="mx-3 my-6 space-y-5 group">
      <Image src={props.image} alt="content image" className="w-[300px] h-[300px] object-cover transform transition-transform duration-300 scale-90 group-hover:scale-100" />
      <h3 className="border-t">{props.content}</h3>
    </Link>
  );
}
