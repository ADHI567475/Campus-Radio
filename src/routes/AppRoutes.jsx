import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Polls from "../pages/polls";
import Events from "../pages/events";
import Profile from "../pages/profile";

import Live from "../pages/live";
import Discussions from "../pages/discussions";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live" element={<Live />} />
        <Route path="/polls" element={<Polls />} />
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}