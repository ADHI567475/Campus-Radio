import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#080B14]">

      <AdminSidebar />

      <div className="ml-72">

        <AdminNavbar />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}