import React from "react";
import ReactDOM from "react-dom/client";

import AppRoutes from "./routes/AppRoutes";

import { AudioPlayerProvider } from "./context/AudioPlayerContext";
import { DiscussionProvider } from "./context/DiscussionContext";
import { NewsProvider } from "./context/NewsContext";
import { LiveProvider } from "./context/LiveContext";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";

import "./styles/theme.css";
import "./styles/animations.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

   <AuthProvider>

  <TooltipProvider>

    <LiveProvider>

      <DiscussionProvider>

        <NewsProvider>

          <AudioPlayerProvider>

            <ThemeProvider>

              <AppRoutes />

            </ThemeProvider>

          </AudioPlayerProvider>

        </NewsProvider>

      </DiscussionProvider>

    </LiveProvider>

  </TooltipProvider>

</AuthProvider>
  </React.StrictMode>
);