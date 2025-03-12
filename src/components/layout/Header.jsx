import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-yellow-500 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Tasty Wheels</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/schedule">Schedule</Link>
      </nav>
    </header>
  );
};

export default Header;