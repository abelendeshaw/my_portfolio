import { Container } from "@/components/Container";
import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

import { Metadata } from "next";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export const metadata: Metadata = {
  title: "Projects | John Doe",
  description:
    "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function Projects() {
  const data = [
    {
      href: "https://aceternity.com",
      title: "Aceternity",
      description:
        "A design and development studio that focuses on building quality apps.",
      thumbnail: sidefolioAceternity,
      images: [sidefolioAceternity, sidefolioAceternity2],
      stack: ["Nextjs", "Tailwindcss"],
      slug: "aceternity",
      content: (
        <div >
          <Image
          src={sidefolioAceternity}
          alt={"Aceternity"}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          ></Image>
        
          <p className="mt-5">
            Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
            Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
            sit aute fugiat incididunt nostrud consequat proident fugiat id.
            Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
            reprehenderit. Cillum Lorem veniam eu magna exercitation.
            Reprehenderit adipisicing minim et officia enim et veniam Lorem
            excepteur velit adipisicing et Lorem magna.
          </p>{" "}
        </div>
      ),
    },
    {
      href: "https://algochurn.com",
      title: "Algochurn",
      description:
        "Practice for technical interviews with hands on coding challenges.",
      thumbnail: sidefolioAlgochurn,
      images: [sidefolioAlgochurn, sidefolioAlgochurn2],
      stack: ["Nextjs", "Tailwindcss"],
      slug: "algochurn",
      content: (
        <div>
         
        <Image src={sidefolioAlgochurn} alt={"Algo Churn"}
        height={500}
        width={500}
        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        >

        </Image>
          <p className="mt-5">
            Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
            Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
            sit aute fugiat incididunt nostrud consequat proident fugiat id.
            Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
            reprehenderit. Cillum Lorem veniam eu magna exercitation.
            Reprehenderit adipisicing minim et officia enim et veniam Lorem
            excepteur velit adipisicing et Lorem magna.
          </p>{" "}
        </div>
      ),
    },
    {
      href: "https://gomoonbeam.com",
      title: "Moonbeam",
      description:
        "Never write from scratch again with Moonbeam, your AI first writing tool",
      thumbnail: sidefolioMoonbeam,
      images: [sidefolioMoonbeam, sidefolioMoonbeam2],
      stack: ["Nextjs", "Tailwindcss"],
      slug: "moonbeam",
      content: (
        <div>
         <Image src={sidefolioMoonbeam} alt={"Moon Beam"}
          height={500}
          width={500}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
         >

         </Image>
          <p className="mt-5">
            Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
            Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
            sit aute fugiat incididunt nostrud consequat proident fugiat id.
            Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
            reprehenderit. Cillum Lorem veniam eu magna exercitation.
            Reprehenderit adipisicing minim et officia enim et veniam Lorem
            excepteur velit adipisicing et Lorem magna.
          </p>{" "}
        </div>
      ),
    },
    {
      href: "https://tailwindmasterkit.com",
      title: "Tailwind Master Kit",
      description:
        "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
      thumbnail: sidefolioTailwindMasterKit,
     
      stack: ["Nextjs", "Tailwindcss"],
      slug: "tailwindmasterkit",
      content: (
        <div>
          <Image
          src={sidefolioTailwindMasterKit}
          alt="Tailwind Master Kit"
          height={500}
          width={500}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          >

          </Image>
          
          <p className="mt-5">
            Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
            Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
            sit aute fugiat incididunt nostrud consequat proident fugiat id.
            Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
            reprehenderit. Cillum Lorem veniam eu magna exercitation.
            Reprehenderit adipisicing minim et officia enim et veniam Lorem
            excepteur velit adipisicing et Lorem magna.
          </p>{" "}
        </div>
      ),
    },
  ]
  return (
    <Container>

    <Timeline data={data}/>
    
    </Container>
  );
}
