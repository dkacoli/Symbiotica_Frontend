function Navbar() {
  return (
    <nav className="w-full px-12 py-6 flex justify-between items-center">
      <div className="text-teal-400 font-semibold tracking-widest">
        SYMBIOTICA
      </div>
      <ul className="flex gap-8 text-sm text-teal-300">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">About Us</li>
        <li className="hover:text-white cursor-pointer">Our Services</li>
        <li className="hover:text-white cursor-pointer">Login</li>
      </ul>
    </nav>
  )
}

export default Navbar
