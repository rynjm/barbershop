import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: "📊",
      title: "Dashboard",
      description: "Real-time overview of today's appointments, revenue, and upcoming bookings"
    },
    {
      icon: "👥",
      title: "Client Management",
      description: "Full client database with loyalty points, visit history, and preferences"
    },
    {
      icon: "📅",
      title: "Smart Calendar",
      description: "Month/week/day views with drag-drop appointments and status tracking"
    },
    {
      icon: "💰",
      title: "Financial Tracking",
      description: "Track payments, expenses, and profits with beautiful charts"
    },
    {
      icon: "✂️",
      title: "Services",
      description: "Manage services with pricing, duration, and popularity stats"
    },
    {
      icon: "👨‍💼",
      title: "Staff Management",
      description: "Track barber performance, commissions, and schedules"
    },
    {
      icon: "📈",
      title: "Analytics",
      description: "Revenue trends, client growth, and peak hours analysis"
    },
    {
      icon: "🌙",
      title: "Dark Mode",
      description: "Beautiful dark and light themes for comfortable use"
    },
    {
      icon: "💾",
      title: "Local & Secure",
      description: "100% offline with automatic local backups"
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for small shops",
      features: ["Up to 2 barbers", "Unlimited clients", "Appointments", "Payments tracking", "Basic analytics"],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      description: "Most popular choice",
      features: ["Up to 5 barbers", "All Starter features", "Advanced analytics", "Expense tracking", "Priority support"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      description: "For large salons",
      features: ["Unlimited barbers", "All Pro features", "Multi-branch support", "Custom branding", "Dedicated support"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.15),_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(16,185,129,0.1),_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#6366f1] to-[#4f46e5] rounded-xl flex items-center justify-center text-2xl">
              ✂️
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-[#818cf8] bg-clip-text text-transparent">
              BarberPro
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-400 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</a>
            <a 
              href="#download" 
              className="bg-gradient-to-r from-[#6366f1] to-[#4f46e5] px-6 py-3 rounded-xl font-semibold shadow-lg shadow-[#6366f1]/25 hover:shadow-[#6366f1]/40 transition-all hover:-translate-y-0.5"
            >
              Download Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse" />
                <span className="text-[#818cf8] text-sm font-medium">Version 1.0.0 Released</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                The Ultimate <br />
                <span className="bg-gradient-to-r from-[#6366f1] to-[#818cf8] bg-clip-text text-transparent">
                  Barbershop Management
                </span> System
              </h1>
              
              <p className="text-xl text-slate-400 mb-10 max-w-xl">
                Run your barbershop 100% offline with powerful tools for appointments, payments, clients, and analytics. Beautiful, fast, and designed for modern barbershops.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-16">
                <a 
                  href="#download"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#6366f1] to-[#4f46e5] px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-[#6366f1]/25 hover:shadow-[#6366f1]/40 transition-all hover:-translate-y-1"
                >
                  <span>⬇️</span>
                  Download for Windows
                </a>
                <a 
                  href="#features"
                  className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  Learn More
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#10b981] mb-1">100%</div>
                  <div className="text-slate-400 text-sm">Offline</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#6366f1] mb-1">∞</div>
                  <div className="text-slate-400 text-sm">Clients</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#f59e0b] mb-1">9</div>
                  <div className="text-slate-400 text-sm">Modules</div>
                </div>
              </div>
            </div>

            {/* App Preview */}
            <div className="relative">
              <div className="bg-[#1e293b] border border-white/10 rounded-3xl p-4 shadow-2xl">
                <div className="flex items-center gap-2 mb-4 px-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="bg-[#0f172a] rounded-2xl aspect-video overflow-hidden relative">
                  {/* Sidebar */}
                  <div className="absolute left-0 top-0 bottom-0 w-16 bg-[#1e293b] border-r border-white/5 flex flex-col items-center py-4 gap-3">
                    <div className="w-10 h-10 bg-[#6366f1] rounded-xl flex items-center justify-center">📊</div>
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">👥</div>
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">📅</div>
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">💰</div>
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">✂️</div>
                  </div>
                  {/* Content */}
                  <div className="absolute left-16 right-0 top-0 bottom-0 p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Today</div>
                        <div className="text-2xl font-bold text-[#10b981]">12</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Revenue</div>
                        <div className="text-2xl font-bold text-[#10b981]">د.ت 450</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Clients</div>
                        <div className="text-2xl font-bold">156</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Monthly</div>
                        <div className="text-2xl font-bold text-[#10b981]">د.ت 8,500</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -right-8 top-1/4 bg-[#1e293b] border border-white/10 rounded-2xl p-4 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <div className="text-sm font-semibold">Offline First</div>
                    <div className="text-xs text-slate-400">No internet required</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Powerful features to run your barbershop efficiently
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#6366f1]/30 transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-slate-400 text-lg">One-time payment, lifetime access</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, i) => (
              <div 
                key={i}
                className={`relative bg-white/5 border rounded-3xl p-8 ${
                  plan.popular 
                    ? 'border-[#6366f1] bg-[#6366f1]/10' 
                    : 'border-white/10 hover:border-white/20'
                } transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6366f1] text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-5xl font-bold mb-2">{plan.price}</div>
                <p className="text-slate-400 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-300">
                      <span className="text-[#10b981]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#download"
                  className={`block text-center py-4 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#6366f1] to-[#4f46e5] hover:shadow-lg hover:shadow-[#6366f1]/25'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-b from-[#6366f1]/10 to-transparent border border-[#6366f1]/20 rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-4">Download BarberPro</h2>
            <p className="text-slate-400 text-lg mb-8">
              Get started in minutes — 100% offline, no internet required
            </p>
            
            <div className="bg-[#1e293b] rounded-2xl p-8 mb-8">
              <div className="text-sm text-slate-400 mb-4">BarberPro v1.0.0 for Windows</div>
              <a 
                href="/BarberPro_1.0.0_x64-setup.exe"
                download
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#6366f1] to-[#4f46e5] px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-[#6366f1]/25 hover:shadow-[#6366f1]/40 transition-all hover:-translate-y-1"
              >
                <span>⬇️</span>
                Download Installer (3.5 MB)
              </a>
              <div className="text-sm text-slate-500 mt-4">Requires Windows 10 or later</div>
            </div>

            <div className="flex justify-center gap-8 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <span>✓</span> Virus Free
              </span>
              <span className="flex items-center gap-2">
                <span>✓</span> No Installation Required
              </span>
              <span className="flex items-center gap-2">
                <span>✓</span> Lifetime License
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#6366f1] to-[#4f46e5] rounded-xl flex items-center justify-center text-xl">
              ✂️
            </div>
            <span className="text-xl font-bold">BarberPro</span>
          </div>
          <p className="text-slate-500">© 2024 BarberPro. Built with ❤️ for barbershops everywhere.</p>
        </div>
      </footer>
    </div>
  );
}
