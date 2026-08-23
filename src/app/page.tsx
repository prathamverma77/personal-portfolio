import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import MyStack from "@/components/sections/MyStack";
import ExpTimeline from "@/components/sections/ExpTimeline";
import Projects from "@/components/sections/Projects";
import GithubStats from "@/components/sections/GithubStats";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <AboutMe />
      <MyStack />
      <ExpTimeline />
      <Projects />
      {/* <GithubStats /> */}
      <Contact />
    </main>
  );
}
