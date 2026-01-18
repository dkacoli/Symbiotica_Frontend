import React from "react"
import Sidebar from "../components/Sidebar"

function SectionTitle({ children }) {
  return (
    <div className="text-[10px] font-medium text-[#0b1b2a] mb-2">
      {children}
    </div>
  )
}

function GridTable({ columns = 4, rows = 3, headers = [] }) {
  return (
    <div className="border border-[#0b1b2a]/40">
      {headers.length > 0 && (
        <div
          className="grid text-[11px] font-medium text-[#0b1b2a]"
          style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
        >
          {headers.map((h, idx) => (
            <div
              key={h + idx}
              className={[
                "py-2 px-4 text-center",
                idx !== headers.length - 1 ? "border-r border-[#0b1b2a]/25" : "",
              ].join(" ")}
            >
              {h}
            </div>
          ))}
        </div>
      )}

      <div className="divide-y divide-[#0b1b2a]/25">
        {Array.from({ length: rows }).map((_, r) => (
          <div
            key={r}
            className="grid"
            style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
          >
            {Array.from({ length: columns }).map((__, c) => (
              <div
                key={c}
                className={[
                  "h-10",
                  c !== columns - 1 ? "border-r border-[#0b1b2a]/25" : "",
                ].join(" ")}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function History() {
  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />

      <main className="flex-1 px-10 py-8">
        <h1 className="text-sm font-semibold tracking-wide text-[#1b2a7a] mb-6">
          HISTORY
        </h1>

        <div className="w-[700px] space-y-10">
          {/* Purchases */}
          <div>
            <SectionTitle>Purchases</SectionTitle>
            <GridTable
              columns={4}
              rows={3}
              headers={["Resource", "Person", "Trustability", "Price"]}
            />
          </div>

          {/* Devices */}
          <div>
            <SectionTitle>Devices</SectionTitle>

            {/* header line (X Y Z Q) */}
            <div className="grid grid-cols-4 text-[11px] font-medium text-[#0b1b2a] mb-2">
              {["X", "Y", "Z", "Q"].map((h) => (
                <div key={h} className="px-4">
                  {h}
                </div>
              ))}
            </div>

            {/* lines */}
            <div className="border-t border-[#0b1b2a]/40" />
            <div className="divide-y divide-[#0b1b2a]/25">
              {[0, 1].map((i) => (
                <div key={i} className="grid grid-cols-4">
                  <div className="h-10 border-r border-[#0b1b2a]/25" />
                  <div className="h-10 border-r border-[#0b1b2a]/25" />
                  <div className="h-10 border-r border-[#0b1b2a]/25" />
                  <div className="h-10" />
                </div>
              ))}
            </div>
          </div>

          {/* Profits */}
          <div>
            <SectionTitle>Profits</SectionTitle>

            <div className="grid grid-cols-4 text-[11px] font-medium text-[#0b1b2a] mb-2">
              {["X", "Y", "Z", "Q"].map((h) => (
                <div key={h} className="px-4">
                  {h}
                </div>
              ))}
            </div>

            <div className="border-t border-[#0b1b2a]/40" />
            <div className="divide-y divide-[#0b1b2a]/25">
              {[0, 1].map((i) => (
                <div key={i} className="grid grid-cols-4">
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
  )
}

export default History
