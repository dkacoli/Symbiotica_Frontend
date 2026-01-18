import React from "react"
import Sidebar from "../components/Sidebar"

function SimpleTable({ headers, rows = 4 }) {
  return (
    <div className="border border-[#0b1b2a]/35">
      {/* Header row */}
      <div className="grid grid-cols-4 text-sm text-[#0b1b2a]">
        {headers.map((h, idx) => (
          <div
            key={idx}
            className={[
              "py-3 text-center font-medium",
              idx !== headers.length - 1 ? "border-r border-[#0b1b2a]/25" : "",
            ].join(" ")}
          >
            {h}
          </div>
        ))}
      </div>

      <div className="border-t border-[#0b1b2a]/25" />

      {/* Empty body rows */}
      <div className="divide-y divide-[#0b1b2a]/25">
        {Array.from({ length: rows }).map((_, r) => (
          <div key={r} className="grid grid-cols-4">
            <div className="py-6 border-r border-[#0b1b2a]/25" />
            <div className="py-6 border-r border-[#0b1b2a]/25" />
            <div className="py-6 border-r border-[#0b1b2a]/25" />
            <div className="py-6" />
          </div>
        ))}
      </div>
    </div>
  )
}

function RentOut() {
  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar active="Rent Out" />

      <main className="flex-1 px-10 py-8">
        {/* Title + button */}
        <div className="flex items-start justify-between">
          <h1 className="text-lg font-semibold tracking-wide text-[#0b1b2a]">
            RENT OUT
          </h1>

          <button className="bg-[#0b3f93] text-white text-sm px-5 py-2 rounded-sm shadow-sm hover:opacity-95">
            + Add Device
          </button>
        </div>

        {/* Current devices */}
        <div className="mt-6 w-[760px]">
          <div className="text-sm font-medium text-[#0b1b2a] mb-2">
            Current Devices
          </div>
          <SimpleTable headers={["X", "Y", "Z", "Q"]} rows={3} />
        </div>

        {/* Profits */}
        <div className="mt-10 w-[760px]">
          <div className="text-sm font-medium text-[#0b1b2a] mb-2">
            Profits
          </div>
          <SimpleTable headers={["X", "Y", "Z", "Q"]} rows={5} />
        </div>
      </main>
    </div>
  )
}

export default RentOut
