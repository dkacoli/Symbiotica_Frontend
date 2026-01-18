import React, { useState } from "react"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

const TABS = ["RAM", "CPU", "STORAGE", "DATASET"]

function Purchase() {
  const [activeTab, setActiveTab] = useState("RAM")

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

      <main className="flex-1 px-10 py-8">
        <h1 className="text-sm font-semibold tracking-wide text-[#1b2a7a] mb-4">
          PURCHASE
        </h1>

        <div className="w-[680px] h-3 bg-[#d9d9d9] rounded-sm mb-6 overflow-hidden">
          <div className="h-full w-[44px] bg-[#3b2bd6] ml-auto" />
        </div>

        <div className="flex gap-3 mb-10">
          {TABS.map((t) => {
            const isActive = activeTab === t
            return (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTab(t)}
                className={[
                  "h-7 px-6 text-xs font-semibold rounded-sm border",
                  isActive
                    ? "bg-[#1b2a7a] text-white border-[#1b2a7a]"
                    : "bg-[#1b2a7a] text-white border-[#1b2a7a] opacity-90 hover:opacity-100",
                ].join(" ")}
              >
                {t}
              </button>
            )
          })}
        </div>

        {/* table */}
        <div className="w-[700px]">
          <div className="border border-[#0b1b2a]/40">
            <div className="grid grid-cols-4 text-[11px] font-medium text-[#0b1b2a]">
              <div className="py-2 px-4 border-r border-[#0b1b2a]/25 text-center">
                Resource
              </div>
              <div className="py-2 px-4 border-r border-[#0b1b2a]/25 text-center">
                Person
              </div>
              <div className="py-2 px-4 border-r border-[#0b1b2a]/25 text-center">
                Trustability
              </div>
              <div className="py-2 px-4 text-center">Price</div>
            </div>

            <div className="divide-y divide-[#0b1b2a]/25">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="grid grid-cols-4 text-sm text-[#0b1b2a]">
                  <div className="h-10 border-r border-[#0b1b2a]/25" />
                  <div className="h-10 border-r border-[#0b1b2a]/25" />
                  <div className="h-10 border-r border-[#0b1b2a]/25" />
                  <div className="h-10" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      </div>
    </div>
  )
}

export default Purchase
