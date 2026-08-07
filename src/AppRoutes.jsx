import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";
import App from "../App";

import Live from "../pages/live";
import Discussions from "../pages/discussions";
import Polls from "../pages/polls";
import Events from "../pages/events";
import Profile from "../pages/profile";
import Admin from "../pages/admin";
import CampusDesk from "../pages/campusDesk";

import ScrollToTop from "../components/ScrollToTop";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/live" element={<Live />} />
          <Route path="/polls" element={<Polls />} />
          <Route path="/events" element={<Events />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/discussions" element={<Discussions />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/campus-desk" element={<CampusDesk />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}