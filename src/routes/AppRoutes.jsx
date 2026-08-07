import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";

import App from "../App";
import Home from "../pages/home";
import Live from "../pages/live";
import Discussions from "../pages/discussions";
import Thoughts from "../pages/thoughts";
import Polls from "../pages/polls";
import Events from "../pages/events";
import Profile from "../pages/profile";
import Admin from "../pages/admin";

import CampusDesk from "../pages/campusDesk";
import CampusNews from "../pages/campusNews";
import AdminCampusDesk from "../pages/adminCampusDesk";
import NewsDetails from "../pages/newsDetails";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AppLayout />}>

          <Route
            path="/"
            element={<App />}
          />

          <Route
            path="/home"
            element={<Home />}
          />

          <Route
            path="/live"
            element={<Live />}
          />

          <Route
            path="/polls"
            element={<Polls />}
          />

          <Route
            path="/events"
            element={<Events />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/thoughts"
            element={<Thoughts />}
          />

          <Route
            path="/discussions"
            element={<Discussions />}
          />

          <Route
            path="/campus-desk"
            element={<CampusDesk />}
          />

          <Route
            path="/campus-news"
            element={<CampusNews />}
          />

          <Route
            path="/campus-news/:id"
            element={<NewsDetails />}
          />

          <Route
            path="/admin"
            element={<Admin />}
          />

          <Route
            path="/admin/campus-desk"
            element={<AdminCampusDesk />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}