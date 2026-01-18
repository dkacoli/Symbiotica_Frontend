import React from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

function Datasets() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex flex-1">
        <Sidebar active="Dataset" />

        <main className="flex-1 px-10 py-8">
          <div className="flex items-start justify-between">
            <h1 className="text-lg font-semibold tracking-wide text-[#0b1b2a]">
              DATASETS
            </h1>

            <div className="flex gap-3">
              <button className="bg-[#0b3f93] text-white text-sm px-5 py-2 rounded-sm shadow-sm hover:opacity-95">
                + Add
              </button>
              <button className="bg-[#0b3f93] text-white text-sm px-5 py-2 rounded-sm shadow-sm hover:opacity-95">
                Upload
              </button>
            </div>
          </div>

          <div className="mt-24 w-[740px]">
            <div className="text-sm font-semibold text-[#1b2a7a] mb-2">
              Dataset Locations
            </div>

            <div className="border border-[#0b1b2a]/35">
              {[
                { left: "UBUNTU", right: "Part 1" },
                { left: "LINUX", right: "Part 2" },
                { left: "UBUNTU", right: "Part 3" },
                { left: "UBUNTU", right: "Part 4" },
              ].map((row, idx) => (
                <div key={idx} className="grid grid-cols-2 text-sm text-[#0b1b2a]">
                  <div className="px-4 py-3 border-r border-[#0b1b2a]/25">
                    {row.left}
                  </div>
                  <div className="px-4 py-3">{row.right}</div>

                  {idx !== 3 && (
                    <div className="col-span-2 border-t border-[#0b1b2a]/25" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Datasets
