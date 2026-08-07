import SectionHeader from "../components/ui/SectionHeader";

import BroadcastStatus from "../components/admin/BroadcastStatus";
import BroadcastControls from "../components/admin/BroadcastControls";
import AnnouncementPanel from "../components/admin/AnnouncementPanel";
import PlaylistQueue from "../components/admin/PlaylistQueue";
import ListenerPanel from "../components/admin/ListenerPanel";

export default function AdminLive() {
  return (
    <div className="min-h-screen bg-[#080B14] px-6 pt-32 pb-16">

      <div className="mx-auto max-w-7xl">

        <SectionHeader
          badge="🎙 ADMIN STUDIO"
          title="Broadcast"
          highlight="Studio"
          description="Manage live broadcasts, announcements, playlists and listeners."
        />

        {/* Status */}

        <div className="mt-12">
          <BroadcastStatus />
        </div>

        {/* Main Studio */}

        <div className="mt-8 grid gap-8 xl:grid-cols-2">

          <BroadcastControls />

          <AnnouncementPanel />

          <PlaylistQueue />

          <ListenerPanel />

        </div>

      </div>

    </div>
  );
}