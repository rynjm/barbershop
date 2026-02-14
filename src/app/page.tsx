export default function Home() {
  const features = [
    { icon: "📅", title: "Appointments", desc: "Smart calendar with day/week/month views" },
    { icon: "👥", title: "Clients", desc: "Full database with loyalty points & history" },
    { icon: "💰", title: "Payments", desc: "Track revenue & expenses effortlessly" },
    { icon: "✂️", title: "Services", desc: "Manage pricing, duration & availability" },
    { icon: "👨‍💼", title: "Staff", desc: "Barber profiles & performance tracking" },
    { icon: "📈", title: "Analytics", desc: "Beautiful charts & insights" },
    { icon: "🌙", title: "Dark Mode", desc: "Stunning dark & light themes" },
    { icon: "💾", title: "Offline", desc: "100% local, no internet required" },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(99,102,241,0.15)_0%,_transparent_50%)]" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/80 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-xl flex items-center justify-center text-lg shadow-lg shadow-[#6366f1]/30">
              ✂️
            </div>
            <span className="text-xl font-bold tracking-tight">BarberPro</span>
          </div>
          <a 
            href="#download" 
            className="bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors"
          >
            Download
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-48 pb-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-10">
            <span className="w-2 h-2 bg-[#6366f1] rounded-full animate-pulse" />
            <span className="text-sm text-gray-400">Version 1.0.0</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            The operating system for
            <br />
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a78bfa] bg-clip-text text-transparent">
              modern barbershops
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Powerful, offline-first management software. Track appointments, payments, clients, and grow your business — 100% local, no internet required.
          </p>
          
          <a 
            href="#download"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] px-10 py-4 rounded-full font-semibold text-lg shadow-xl shadow-[#6366f1]/25 hover:shadow-[#6366f1]/40 transition-all hover:scale-105"
          >
            <span>⬇️</span>
            Download for Windows
          </a>
          
          <p className="text-sm text-gray-500 mt-6">Windows 10+ • Free updates</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Features</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="group bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 hover:border-[#6366f1]/30 transition-all"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-24 px-8">
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4">Get Started</h2>
            <p className="text-gray-400 mb-8">
              Download the installer and start managing your barbershop today.
            </p>
            
            <a 
              href="/BarberPro_1.0.0_x64-setup.exe"
              download
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors"
            >
              <span>⬇️</span>
              Download (3.5 MB)
            </a>
            
            <p className="text-xs text-gray-500 mt-6">Requires Windows 10 or later</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2024 BarberPro. Built for barbershops everywhere.</p>
        </div>
      </footer>
    </div>
  );
}
