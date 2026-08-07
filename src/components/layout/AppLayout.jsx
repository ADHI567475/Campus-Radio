import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
//import Footer from "./Footer";
import AnimatedBackground from "../background/AnimatedBackground";
import ScrollToTopButton from "../ui/ScrollToTopButton";

export default function AppLayout() {
  return (
    <div className="relative min-h-screen bg-[#080B14] text-white">
      <AnimatedBackground />
      <ScrollToTopButton />

      <Navbar />

      <main className="relative z-10">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}