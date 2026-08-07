import Hero from "../components/hero/Hero";
import LiveNow from "../components/live/LiveNow";
import ThoughtsSection from "../components/thoughts/ThoughtsSection";
import PollSection from "../components/polls/PollSection";
import EventsSection from "../components/events/EventsSection";
import Schedule from "../components/live/Schedule";

export default function Home() {
  return (
    <>
      <Hero />
      <LiveNow />
      <ThoughtsSection />
      <PollSection />
      <EventsSection />
      <Schedule />
    </>
  );
}