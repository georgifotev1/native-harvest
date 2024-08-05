import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type CategoryCardType = {
  image: StaticImageData,
  content: string,
  href: string
}

export default function CategoryCard(props: CategoryCardType) {
  return (
    <Link href={props.href} className="mx-3 my-6 space-y-5">
      <Image src={props.image} alt="content image" className="w-[150px] h-[150px] object-contain" />
      <h3 className="border-t">{props.content}</h3>
    </Link>
  );
}
