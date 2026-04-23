import React from 'react';
import { Link } from 'react-router-dom';
import heroBonsai from '../assets/hero-bonsai.png';
import boltIcon from '../assets/bolt-icon.png';
import './LandingView.css';

const LandingView: React.FC = () => {
  return (
    <div className="bg-[#000000] text-[#f9f5f8] min-h-screen flex flex-col font-['Plus_Jakarta_Sans']">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#080808] tracking-tight flex justify-between items-center px-6 md:px-12 py-6">
        <div className="text-2xl font-bold tracking-tighter text-[#92C421] flex items-center">
          Mind<img src={boltIcon} alt="bolt" className="w-8 h-8 mx-0.5 object-contain" />Spark
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-[#92C421] font-semibold px-6 py-2 bg-[#131315] hover:bg-[#19191c] rounded-2xl transition-all scale-95 active:scale-90">
            Login
          </Link>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="flex-grow pt-[72px] pb-20 w-full flex flex-col gap-32 overflow-x-hidden">
        
        {/* Hero Section - Full Width Background */}
        <section className="flex flex-col items-center min-h-[716px] relative pt-0 gap-8 w-full">
          <div className="w-full overflow-hidden pointer-events-none z-0 mb-0 relative">
            <div className="animate-marquee text-[18vw] font-black uppercase tracking-tighter text-[#1a1a1a] select-none leading-none flex whitespace-nowrap">
              <span className="pr-[15vw] flex items-center flex-shrink-0">
                MIND<img src={boltIcon} alt="" className="h-[0.8em] w-auto ml-[0.15em] mr-[0.05em] grayscale brightness-0 invert-[0.1]" />SPARK
              </span>
              <span className="pr-[15vw] flex items-center flex-shrink-0">
                MIND<img src={boltIcon} alt="" className="h-[0.8em] w-auto ml-[0.15em] mr-[0.05em] grayscale brightness-0 invert-[0.1]" />SPARK
              </span>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0E3300,_#000000)] -z-10 rounded-full blur-3xl w-3/4 h-3/4 mx-auto mt-20"></div>
          
          <div className="w-full px-6 md:px-12 lg:px-24 flex flex-col items-start text-left relative z-40 mt-4 md:mt-8">
            <h1 className="text-5xl md:text-7xl lg:text-[clamp(4rem,9vw,8.5rem)] font-extrabold tracking-tighter text-[#f9f5f8] mb-6 leading-[0.9] relative z-10 w-full">
              <span className="block">Cultivate your thoughts.</span>
              <span className="block text-[#92C421]">Watch them grow.</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-[#adaaad] max-w-2xl mb-10 font-medium relative z-10 leading-relaxed">
              MindSpark is a high-fidelity, AI-powered Second Brain for rapid idea capture and spatial organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 relative z-20 justify-start w-full">
              <Link to="/dashboard" className="cta-gradient text-[#002109] font-bold px-10 py-5 rounded-2xl text-xl tracking-wide hover:shadow-[0_20px_40px_rgba(146,196,33,0.3)] transition-all transform hover:-translate-y-1 whitespace-nowrap text-center">
                Start Your Garden
              </Link>
              <button className="bg-[#131315] text-[#92C421] font-bold px-10 py-5 rounded-2xl text-xl tracking-wide hover:bg-[#19191c] transition-colors whitespace-nowrap">
                View Documentation
              </button>
            </div>
          </div>

          {/* Botanical Hero Image */}
          <div className="absolute left-1/2 top-4 md:top-12 -translate-x-1/2 w-full max-w-6xl flex justify-center pointer-events-none z-20">
            <img 
              alt="A lush bonsai tree symbolizing organic growth and organization" 
              className="object-contain h-[800px] md:h-[1200px] lg:h-[1500px] w-auto drop-shadow-[0_24px_48px_rgba(0,0,0,0.8)] mix-blend-normal opacity-90" 
              src={heroBonsai} 
            />
          </div>
        </section>

        {/* Bento Grid Features Section */}
        <section id="features" className="w-full max-w-7xl mx-auto px-6 md:px-12 animate-fade-in-up mt-[350px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f9f5f8] mb-16 tracking-tight">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-min">
            
            {/* Instant Brain-Dump */}
            <div className="md:col-span-7 bg-[#080808] p-8 md:p-12 rounded-3xl flex flex-col justify-between group overflow-hidden relative transition-colors hover:bg-[#131315]">
              <div className="z-10">
                <span className="text-[#92C421] text-sm font-bold uppercase tracking-widest mb-4 block">Capture</span>
                <h3 className="text-3xl font-bold text-[#f9f5f8] mb-4">Instant Brain-Dump</h3>
                <p className="text-[#adaaad] text-lg leading-relaxed max-w-md">
                  Like a resilient cactus surviving harsh conditions, quickly capture fleeting thoughts before they evaporate. Zero friction entry.
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <img 
                  alt="Cactus illustration" 
                  className="h-48 md:h-64 object-contain translate-x-4 translate-y-4 group-hover:scale-105 transition-transform duration-500 filter brightness-110 contrast-125 grayscale-[20%] sepia-[10%] hue-rotate-[70deg] saturate-150 drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_ZVtjNHrePoKsj7L8Z-Dym-eE6xyDTvinzBcgm5-n7ayKJpsrh3IvWMWnGbRagdOojOWBWYvyJ-jKDWvs5Keq782F4fDrXnAAkUw1Lc5M6JkyJwbkm5w4HtgcuxZJrG8QuQAbQLySt6LVmIQKhK71kMf9vz_711siXde1wUl9Q77po27OBZyr_wvsdEGIWR2_YfqQ9PZjfhM_x6C3sfVLSDN7qSMk9jfW2bkelSP6nfgXQKNHz-vSNQRBLJnBlSS0XxxfupRhOpE" 
                />
              </div>
            </div>

            {/* Focus Tracking */}
            <div className="md:col-span-5 bg-[#131315] p-8 md:p-12 rounded-3xl flex flex-col justify-between group overflow-hidden transition-colors hover:bg-[#19191c]">
              <div>
                <span className="text-[#92C421] text-sm font-bold uppercase tracking-widest mb-4 block">Analytics</span>
                <h3 className="text-3xl font-bold text-[#f9f5f8] mb-4">Focus Tracking</h3>
                <p className="text-[#adaaad] text-lg leading-relaxed">
                  Maintain steady growth with precision tracking. See where your attention flourishes.
                </p>
              </div>
              <div className="mt-8 flex justify-center">
                <img 
                  alt="Boxwood bush" 
                  className="h-40 md:h-48 object-contain group-hover:scale-105 transition-transform duration-500 filter brightness-110 contrast-125 grayscale-[20%] sepia-[10%] hue-rotate-[70deg] saturate-150 drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuATUcRfYhBF8XHGXGUnyviW2ky4YakoUmLB_vQk0L4L-7z6NoNY4slC49vfBYcnE9oHZ9_PIc2_Qn5rAIqhBIAZNAgTJN_3lyq4dFgi9c6NarBImelS2O5uhQZ7zsvnhRTGDqplDidYBDN9Xj7TLYYaHhhdBuHwbKYmoWymqX4BVD4teHH_BnK2tGN4HVA8rFEuHFyarkxjtMs5cQ__QetDuEMb8mtujkhNRLiqxWLSLh2CDUWGOoH1R75MgKLxDE352DJIhZQc3nY" 
                />
              </div>
            </div>

            {/* Spatial Organization */}
            <div id="spaces" className="md:col-span-12 bg-[#080808] p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-12 group overflow-hidden transition-colors hover:bg-[#131315]">
              <div className="flex-1 order-2 md:order-1 flex justify-center">
                <img 
                  alt="Fern illustration" 
                  className="h-64 md:h-80 object-contain group-hover:scale-105 transition-transform duration-500 filter brightness-110 contrast-125 grayscale-[20%] sepia-[10%] hue-rotate-[70deg] saturate-150 drop-shadow-[0_24px_48px_rgba(14,51,0,0.5)]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNMyqvYTZHBvuqf3QIkrW_hLKwPnP6o0h5x7bA93H-6LYfIsaw2xrW-QB2fwMfAKhoPpyMslWmZMV5PHbn7P_atKMAw2yqvOiSDmJRNzUJweUzfMz4oMvS2yxaxp4dHlH8hm4lFbtQluZ4kF8ct55JBJ8CA6rl105wWegLPjags_7Z3q9HQt3_Yhu0LwpSaIjpuQcWXxVHcJILrSCbhnYsKYR-co2kU_vfVoNV0mXws6fv2EOaWbbqHp4cMI_D6iFtxYH4lGopjcs" 
                />
              </div>
              <div className="flex-1 order-1 md:order-2">
                <span className="text-[#92C421] text-sm font-bold uppercase tracking-widest mb-4 block">Structure</span>
                <h3 className="text-4xl font-bold text-[#f9f5f8] mb-6">Spatial Organization</h3>
                <p className="text-[#adaaad] text-xl leading-relaxed">
                  Organize ideas naturally. Let your workspace unroll and expand like a fern frond, creating complex but intuitive structures for your most ambitious projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="w-full max-w-7xl mx-auto px-6 md:px-12 animate-fade-in-up mt-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#f9f5f8] mb-6 tracking-tight">Ditch the rigid folders.</h2>
            <p className="text-xl text-[#adaaad] max-w-2xl mx-auto">Experience the difference between traditional constraints and organic digital growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Traditional Tool Card */}
            <div className="bg-[#131315] rounded-3xl p-8 relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#080808] flex items-center justify-center">
                  <span className="material-symbols-outlined text-red-400">folder_off</span>
                </div>
                <h3 className="text-2xl font-bold text-[#f9f5f8]">Traditional Tools</h3>
              </div>
              <ul className="space-y-6 text-[#adaaad]">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-red-400 mt-1">close</span>
                  <p>Linear, rigid folder hierarchies that force ideas into strict boxes.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-red-400 mt-1">close</span>
                  <p>High friction entry. You have to decide where a thought lives before you write it.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-red-400 mt-1">close</span>
                  <p>Disconnected notes that wither away and are forgotten over time.</p>
                </li>
              </ul>
            </div>

            {/* MindSpark Card */}
            <div className="bg-[#080808] rounded-3xl p-8 relative overflow-hidden shadow-[0_0_40px_rgba(146,196,33,0.05)] group">
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#131315] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#92C421]">eco</span>
                </div>
                <h3 className="text-2xl font-bold text-[#92C421] flex items-center gap-1">
                  Mind<img src={boltIcon} alt="bolt" className="w-6 h-6 object-contain" />Spark
                </h3>
              </div>
              <ul className="space-y-6 text-[#adaaad] relative z-10">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#92C421] mt-1">check</span>
                  <p>Spatial, node-based mapping that mimics how your brain actually works.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#92C421] mt-1">check</span>
                  <p>Instant capture. Dump thoughts anywhere, organize naturally later.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#92C421] mt-1">check</span>
                  <p>AI-assisted connections that help your digital garden flourish automatically.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* App Showcase Section */}
        <section className="w-full max-w-7xl mx-auto px-6 md:px-12 animate-fade-in-up mt-12 bg-[#131315] rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0E3300] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3 z-10">
              <span className="text-[#92C421] text-sm font-bold uppercase tracking-widest mb-4 block">Ecosystem</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#f9f5f8] mb-6 tracking-tight">Your digital habitat.</h2>
              <p className="text-xl text-[#adaaad] leading-relaxed mb-8">
                Explore a workspace designed for clarity. From the serene dashboard to the infinite spatial canvas, every element is crafted to help your ideas thrive.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#080808] hover:bg-[#19191c] transition-colors cursor-pointer group">
                  <h4 className="font-bold text-[#f9f5f8] group-hover:text-[#92C421] transition-colors">The Greenhouse Dashboard</h4>
                  <p className="text-sm text-[#adaaad] mt-1">Your daily overview of growing concepts.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#131315] hover:bg-[#19191c] transition-colors cursor-pointer group">
                  <h4 className="font-bold text-[#f9f5f8] group-hover:text-[#92C421] transition-colors">Infinite Root Spaces</h4>
                  <p className="text-sm text-[#adaaad] mt-1">Map out complex architectures visually.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 z-10 w-full">
              {/* Mockup Container */}
              <div className="relative w-full rounded-3xl bg-[#353437] p-2 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="w-full aspect-[16/10] bg-[#080808] rounded-xl overflow-hidden mt-8 relative flex">
                  {/* App Sidebar Mockup */}
                  <div className="w-48 bg-[#000000] p-4 hidden md:flex flex-col gap-4">
                    <div className="h-6 w-24 bg-[#1f1f22] rounded mb-4"></div>
                    <div className="h-4 w-full bg-[#92C421]/20 rounded"></div>
                    <div className="h-4 w-3/4 bg-[#131315] rounded"></div>
                    <div className="h-4 w-5/6 bg-[#131315] rounded"></div>
                    <div className="mt-auto h-8 w-full bg-[#131315] rounded"></div>
                  </div>
                  {/* App Main Area Mockup */}
                  <div className="flex-1 p-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PGNpcmNsZSBpZD0iYSIgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9IiMzMzMiLz48L2RlZnM+PHVzZSBocmVmPSIjYSIvPjwvc3ZnPg==')]">
                    <div className="w-full h-full relative">
                      {/* Node 1 */}
                      <div className="absolute top-10 left-10 p-4 bg-[#19191c] rounded-lg shadow-lg w-48">
                        <div className="h-3 w-1/2 bg-[#92C421] rounded mb-2"></div>
                        <div className="h-2 w-full bg-[#353437] rounded mb-1"></div>
                        <div className="h-2 w-4/5 bg-[#353437] rounded"></div>
                      </div>
                      {/* Node 2 */}
                      <div className="absolute top-40 left-64 p-4 bg-[#19191c] rounded-lg shadow-lg w-56">
                        <div className="h-3 w-2/3 bg-[#adaaad] rounded mb-2"></div>
                        <div className="h-2 w-full bg-[#353437] rounded mb-1"></div>
                        <div className="h-2 w-full bg-[#353437] rounded mb-1"></div>
                        <div className="h-2 w-3/4 bg-[#353437] rounded"></div>
                      </div>
                      {/* Connection Line */}
                      <div className="absolute top-[80px] left-[150px] w-[140px] h-[80px] border-l-2 border-b-2 border-[#92C421]/30 rounded-bl-3xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-16 px-12 mt-20 bg-[#000000]">
        <div className="grid grid-cols-2 md:flex md:justify-between items-end w-full max-w-7xl mx-auto uppercase tracking-widest text-[10px]">
          <div className="col-span-2 md:col-span-1 mb-8 md:mb-0">
            <div className="text-lg font-black text-[#92C421] mb-2 normal-case tracking-normal flex items-center">
              Mind<img src={boltIcon} alt="bolt" className="w-5 h-5 mx-0.5 object-contain" />Spark
            </div>
            <div className="text-[#adaaad] normal-case tracking-normal text-sm">
              © 2024 MindSpark. Cultivating digital intelligence.
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a className="text-[#adaaad] hover:text-[#f9f5f8] transition-colors" href="#">Privacy</a>
            <a className="text-[#adaaad] hover:text-[#f9f5f8] transition-colors" href="#">Terms</a>
            <a className="text-[#adaaad] hover:text-[#f9f5f8] transition-colors" href="#">Changelog</a>
            <a className="text-[#adaaad] hover:text-[#f9f5f8] transition-colors" href="#">Community</a>
          </div>
        </div>
      </footer>
    </div>

  );
};

export default LandingView;
