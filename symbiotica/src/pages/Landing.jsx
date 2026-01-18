import Navbar from '../components/Navbar'

function Landing() {
  return (
    <div className="min-h-screen bg-[#071f2e] text-white font-sans">
      <Navbar />

      <section className="flex flex-col items-center justify-center text-center px-6 mt-20">
        <img
          src="/icons/symbiotica.png"
          alt="Symbiotica logo"
          className="w-96 mb-8"
        />

        <p className="max-w-3xl text-gray-300 leading-relaxed text-base">
          Inspired by the balance of natural ecosystems, Symbiotica brings together
          AI creators and users in a decentralized marketplace where innovation grows symbiotically.
        </p>

        <p className="mt-4 text-gray-400 text-sm">
          No barriers. No gatekeepers. Just a thriving network of intelligence,
          collaboration, and shared growth.
        </p>
      </section>

      <section className="mt-28 px-10 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div className="rounded-2xl bg-gradient-to-b from-[#1b4f72] to-[#143a52] p-8 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Decentralized GPU Marketplace
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Access powerful GPUs from providers around the world instantly.
              Symbiotica connects users who need compute with those who have it,
              creating a decentralized GPU network that is fast, affordable, and transparent.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-b from-[#10b981] to-[#059669] p-8 shadow-xl scale-105">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Distributed Model Training
            </h3>
            <p className="text-sm text-gray-900 leading-relaxed">
              Train AI models using community-powered compute. Our system distributes
              training workloads across available GPUs, ensuring efficiency,
              reliability, and scalability for both small and large projects.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-b from-[#1b4f72] to-[#143a52] p-8 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Secure & Transparent Infrastructure
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Every training job runs through a trustless, verifiable system.
              Data privacy, encrypted workloads, and transparent execution ensure
              users only pay for the compute they use.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Landing
