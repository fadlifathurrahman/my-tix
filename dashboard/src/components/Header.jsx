import logo from "/logo.png";

export default function Header() {
  return (
    <header className="bg-slate-800 p-4 sticky top-0 flex items-center z-50 text-white gap-6">
      {/* logos */}
      <img src={logo} className="h-20 w-40" />
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>{" "}
    </header>
  );
}
