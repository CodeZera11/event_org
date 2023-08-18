import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Videos from "@/sections/Videos";

export default function Home() {
  return (
    <div className="bg-black overflow-hidden">
      <div className="relative">
        <div className="gradient-01 z-0" />
        <Hero />
        <div className="gradient-02 z-0" />
        <Projects />
        <div className="gradient-03 z-0" />
        <Videos />
      </div>
    </div>
  );
}
