import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import Speakers from "@/components/sections/Speakers";
import Agenda from "@/components/sections/Agenda";

export default function Home() {
  return (
    <main className=" ">
      <Hero />
      <Overview />
      <Speakers />
      <Agenda />
    </main>
  );
}
