import LiveHeader from "../components/live/LiveHeader";
import NowPlaying from "../components/live/NowPlaying";
import LiveControls from "../components/live/LiveControls";
import LiveChat from "../components/live/LiveChat";
import CurrentRJ from "../components/live/CurrentRJ";
import SongRequest from "../components/live/SongRequest";
import LiveStats from "../components/live/LiveStats";
import OfflineState from "../components/live/OfflineState";

import { useLive } from "../context/LiveContext";

export default function Live() {
  const { isLive } = useLive();

  return (
    <div className="min-h-screen bg-[#080B14] px-6 pt-32 pb-12">
      <div className="mx-auto max-w-7xl">

        <LiveHeader />

        <div className="mt-10 grid gap-8 lg:grid-cols-3">

          {/* Left */}
          <div className="space-y-8 lg:col-span-2">

            <NowPlaying />

            {isLive ? (
              <>
                <CurrentRJ />

                <LiveControls />

                <SongRequest />

                <LiveStats />
              </>
            ) : (
              <>
                <OfflineState />

                <SongRequest />
              </>
            )}

          </div>

          {/* Right */}

          {isLive && (
            <div className="sticky top-32 h-fit">
              <LiveChat />
            </div>
          )}

        </div>

      </div>
    </div>
  );
}