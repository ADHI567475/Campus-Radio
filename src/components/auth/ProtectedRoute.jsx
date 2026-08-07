import { useState } from "react";
import { Navigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

import LoginRequiredModal from "./LoginRequiredModal";

export default function ProtectedRoute({
  children,
}) {
  const { isAuthenticated } = useAuth();

  const [open, setOpen] = useState(true);

  if (isAuthenticated) {
    return children;
  }

  return (
    <>
      <LoginRequiredModal
        open={open}
        onClose={() => window.history.back()}
        onLogin={() => {
          setOpen(false);

          // We'll connect Login Modal next
        }}
      />

      <Navigate to="/" replace />
    </>
  );
}