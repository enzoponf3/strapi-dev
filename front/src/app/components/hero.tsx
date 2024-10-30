import { getHomeInfo } from "@/lib/get-home-info";
import { metadata } from "../layout";
import Image from "next/image";

export const Hero = async () => {
  const { Title, Description, PresentationImg } = await getHomeInfo();
  metadata.title = Title;
  metadata.description = Description;

  return (
    <>
      <div className="w-full h-40 overflow-hidden flex items-center">
        <Image
          height={1280}
          width={1920}
          src={PresentationImg}
          alt="hero image"
        />
      </div>
    </>
  );
};
