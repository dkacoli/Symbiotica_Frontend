import React from "react"
import Sidebar from "../components/Sidebar"

function TrainRow({ label }) {
  return (
    <div className="w-[680px]">
      <div className="flex items-center h-7 bg-[#d9d9d9] rounded-sm overflow-hidden">
        <div className="flex-1 px-3 text-[12px] font-medium text-[#0b1b2a]">
          {label}
        </div>
        <div className="w-[44px] h-full bg-[#3b2bd6]" />
      </div>
    </div>
  )
}

function Train() {
  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />

      <main className="flex-1 px-10 py-8">
        <h1 className="text-sm font-semibold tracking-wide text-[#1b2a7a] mb-6">
          TRAIN
        </h1>

        <div className="space-y-4">
          <TrainRow label="Choose Dataset" />
          <TrainRow label="Select Devices" />
          <TrainRow label="Choose Algorithm" />
        </div>
      </main>
    </div>
  )
}

export default Train
