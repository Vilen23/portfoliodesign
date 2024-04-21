import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <TracingBeam>
        <Navbar />
        <div className="w-[100vw] my-10 md:my-20 flex justify-center">
          <Hero />
        </div>
        <div className="w-[100vw] my-10 md:my-20 flex justify-center">
          <Skills />
        </div>
      </TracingBeam>
    </div>
  );
}
