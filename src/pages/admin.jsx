import Sidebar from "../components/admin/Sidebar";
import DashboardCards from "../components/admin/DashboardCards";

import BroadcastStatus from "../components/admin/BroadcastStatus";
import BroadcastControls from "../components/admin/BroadcastControls";
import PlaylistQueue from "../components/admin/PlaylistQueue";
import AnnouncementPanel from "../components/admin/AnnouncementPanel";
import ListenerPanel from "../components/admin/ListenerPanel";

export default function Admin() {
  return (
    <div className="min-h-screen bg-[#080B14] px-6 pt-32 pb-20">

      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[280px_1fr]">

        <Sidebar />

        <div className="space-y-8">

          <DashboardCards />

          <BroadcastStatus />

          <BroadcastControls />

          <PlaylistQueue />

          <AnnouncementPanel />

          <ListenerPanel />

        </div>

      </div>

    </div>
  );
}