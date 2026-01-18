import React from "react"
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function StatCard({ children }) {
  return (
    <div className="bg-[#bcdcff] rounded-sm shadow-sm flex items-center justify-center h-28">
      <div className="text-[#0b1b2a] font-medium">{children}</div>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />

      <main className="flex-1 px-10 py-8">
        <h1 className="text-lg font-semibold tracking-wide text-[#0b1b2a] mb-8">
          MAIN DASHBOARD
        </h1>

        <div className="flex gap-10 items-start">
          <div className="w-[520px]">
            <div className="bg-[#bcdcff] rounded-sm shadow-sm p-4">
              <div className="text-center text-sm font-medium text-[#0b1b2a] mb-2">
                Training Accuracy
              </div>

              <div className="h-44">
                <svg viewBox="0 0 520 180" className="w-full h-full">
                  <path
                    d="M40 140
                       C90 110, 130 60, 190 80
                       C240 95, 260 150, 310 135
                       C360 120, 370 70, 430 85
                       C470 95, 485 60, 500 45"
                    fill="none"
                    stroke="#1b2a7a"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-56">
            <StatCard>Runtime: 1.2h</StatCard>
            <StatCard>Machines: 4</StatCard>
          </div>
        </div>

        <div className="mt-10 w-[740px]">
          <div className="grid grid-cols-4 text-sm text-[#0b1b2a] font-medium">
            <div className="py-2 text-center">Machine</div>
            <div className="py-2 text-center">RAM</div>
            <div className="py-2 text-center">Storage</div>
            <div className="py-2 text-center">Cost</div>
          </div>

          <div className="border-t border-[#0b1b2a]/40" />

          <div className="divide-y divide-[#0b1b2a]/25">
            {[1, 2, 3].map((i) => (
              <div key={i} className="grid grid-cols-4 text-sm text-[#0b1b2a]">
                <div className="py-6 border-r border-[#0b1b2a]/25" />
                <div className="py-6 border-r border-[#0b1b2a]/25" />
                <div className="py-6 border-r border-[#0b1b2a]/25" />
                <div className="py-6" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
