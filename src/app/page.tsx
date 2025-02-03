import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";


const words = `I'm a UI/UX designer and frontend developer that loves building products and web apps that can impact others.` 
export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Abel</Heading>
      <Paragraph className="max-w-xl mt-4">
        <TextGenerateEffect duration={2} filter={true} words={words} />
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a mid level designer with{" "}
        <Highlight>3 years of experience</Highlight> building scalable web apps
        that are performance optimized and good looking.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
