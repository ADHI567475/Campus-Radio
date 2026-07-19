import Aurora from "./Aurora";
import FloatingOrbs from "./FloatingOrbs";
import NoiseOverlay from "./NoiseOverlay";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050816]">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.18),transparent_55%)]" />

  <Aurora />
  <FloatingOrbs />
  <NoiseOverlay />
</div>
  );
}