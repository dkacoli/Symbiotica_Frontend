import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="w-56 bg-[#0b2a3a] text-white flex flex-col">
      <div className="px-6 pt-6 pb-4">
        <div className="text-sm tracking-wide font-semibold">SYMBIOTICA</div>
        <div className="mt-4 h-px bg-white/25" />
      </div>

      <nav className="px-6 flex-1">
        <ul className="space-y-3 text-sm text-white/90">
          <li><Link to="/dashboard" className="cursor-pointer hover:text-white transition-colors">Dashboard</Link></li>
          <li><Link to="/purchase" className="cursor-pointer hover:text-white transition-colors">Purchase</Link></li>
          <li><Link to="/rentout" className="cursor-pointer hover:text-white transition-colors">Rent Out</Link></li>
          <li><Link to="/history" className="cursor-pointer hover:text-white transition-colors">History</Link></li>
          <li><Link to="/dataset" className="cursor-pointer hover:text-white transition-colors">Dataset</Link></li>
           <li><Link to="/train" className="cursor-pointer hover:text-white transition-colors">Train</Link></li>
          <li className="cursor-pointer hover:text-white">Settings</li>
        </ul>
      </nav>

      <div className="px-6 pb-6">
        <button className="text-sm text-white/90 hover:text-white">
          Log Out
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
