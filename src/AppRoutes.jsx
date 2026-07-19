import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Polls from "./pages/polls/polls";
import Thoughts from "./pages/thoughts/thoughts";
import Events from "./pages/events/events";
import Profile from "./pages/profile/profile";
import Admin from "./pages/admin/admin";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/polls" element={<Polls />} />
        <Route path="/thoughts" element={<Thoughts />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}