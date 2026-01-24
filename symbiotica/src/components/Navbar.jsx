import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="w-full px-12 py-6 flex justify-between items-center">
      <Link to="/" className="text-teal-400 font-semibold tracking-widest hover:text-white transition-colors">
        SYMBIOTICA
      </Link>
      <ul className="flex gap-8 text-sm text-teal-300">
        <li><Link to="/" className="hover:text-white cursor-pointer transition-colors">Home</Link></li>
        <li className="hover:text-white cursor-pointer">About Us</li>
        <li className="hover:text-white cursor-pointer">Our Services</li>
        <li><Link to="/dashboard" className="hover:text-white cursor-pointer transition-colors">Dashboard</Link></li>
        <li><Link to="/login" className="hover:text-white cursor-pointer transition-colors">Login</Link></li>
      
      </ul>
    </nav>
  )
}

export default Navbar
