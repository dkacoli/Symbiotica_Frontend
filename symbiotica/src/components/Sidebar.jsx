function Sidebar() {
  return (
    <aside className="w-56 bg-[#0b2a3a] text-white flex flex-col">
      <div className="px-6 pt-6 pb-4">
        <div className="text-sm tracking-wide font-semibold">SYMBIOTICA</div>
        <div className="mt-4 h-px bg-white/25" />
      </div>

      <nav className="px-6 flex-1">
        <ul className="space-y-3 text-sm text-white/90">
          <li className="cursor-pointer hover:text-white">Dashboard</li>
          <li className="cursor-pointer hover:text-white">Purchase</li>
          <li className="cursor-pointer hover:text-white">Rent Out</li>
          <li className="cursor-pointer hover:text-white">History</li>
          <li className="cursor-pointer hover:text-white">Dataset</li>
          <li className="cursor-pointer hover:text-white">Train</li>
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
