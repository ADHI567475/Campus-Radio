import AnimatedBackground from "../components/background/AnimatedBackground";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import LiveNow from "../components/live/LiveNow";
import ThoughtsSection from "../components/thoughts/ThoughtsSection";
import PollSection from "../components/polls/PollSection";
import EventsSection from "../components/events/EventsSection";
import Schedule from "../components/live/Schedule";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />

      <Hero />
      <LiveNow />
      <ThoughtsSection />
      <PollSection />
      <EventsSection />
      <Schedule />
      <Footer />
    </>
  );
}