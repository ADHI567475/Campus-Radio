import Container from "../ui/Container";
import HeroContent from "./HeroContent";
import HeroPlayer from "./HeroPlayer";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-36 pb-24">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <HeroContent />
          <HeroPlayer />
        </div>
      </Container>
    </section>
  );
}