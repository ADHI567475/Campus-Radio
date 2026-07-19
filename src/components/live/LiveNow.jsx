import StudioStatus from "./StudioStatus";
import LiveChat from "./LiveChat";

export default function LiveNow() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-6">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <StudioStatus />
        </div>

        <LiveChat />
      </div>
    </section>
  );
}