import logo from "/logo.png";

export default function Header() {
  return (
    <header 
    className="bg-slate-900 p-4 sticky top-0 flex justify-between items-center z-50">
      {/* logos */}
      <img src={logo} className="h-20 w-40" />

      {/* menu */}
      <nav className="text-white" style={{ backdropFilter: 'blur(10px)' }}>
        <ul className="flex gap-5">
          <li>Home</li> 
          <li>About</li> 
          <li>Contact</li>
          <li>My Ticket</li>
          <li>Account</li>
        </ul>
      </nav>
    </header>
  );
}
