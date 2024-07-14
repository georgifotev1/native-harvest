import Image, { StaticImageData } from "next/image";

type ImageWithContentType = {
  image: StaticImageData,
  content: string
}

export default function ImageWithContent(props: ImageWithContentType) {
  return (
    <div>
      <Image src={props.image} alt="content image" />
      <h3>{props.content}</h3>
    </div>
  );
}
