import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import boltIcon from '../assets/bolt-icon.png';
import './LoginView.css';

const LoginView: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate('/dashboard');
  };

  return (
    <div className="login-page-container min-h-screen text-[#e5e1e4] flex items-center justify-center relative overflow-hidden surface-lowest">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <img 
          alt="Large majestic tree at night" 
          className="absolute -left-1/4 top-0 w-1/2 h-auto object-cover opacity-30 mix-blend-screen" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEsWgRd9fHzUVDzVENYQYrH7ZBg_Hyg2_Vy1TKbuoWEXvVaGCyfKoa0WZ0FNI3rd0Mb5Cd_rmCJwa77odq8dktrbG2sp5vvQY7t-9OTGCb15bC2ZSncAJE8hRiiTDtkzQ3378x2z8ZckXenBFSYuHOyEAuQX-tVZtEMsZF6hv3d9HVA40Fnu52Xa-1XWFbRoHA_roDw8NoTwyHNlA6Zb6hxxYzyJVg8-1JTn8tUfmzjwPF7E6YkTmGLhtASAI0EptwpYbwD_VAmvg" 
        />
        <img 
          alt="Fern leaves" 
          className="absolute -right-1/4 bottom-0 w-1/3 h-auto object-cover opacity-20 mix-blend-screen" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1NmRxlx6eXkf1EoyR8xCvDFQskUkNaSrHoIpMadf90zpC8ZQnAhGOX9LJTnViXpc62U1Kc9yvlstzEnvtUwAJG3yNd3ouvurEpGcWl_dL37Wq9pLZn7TCKMrLRIEnxD-r2lUH8kI5oCfi8777WsCP-ISfMFO6-yY-uYaknLuVPCOet9DtywFUHtP03XOv4cyF7l6g6L1hBYXhreD9NuqY46sR7IEpakj9Z5RWr5oSYtsScVCSKj_ETc7YI2Smeq2pXnszeIYKkIY" 
        />
        <img 
          alt="Cactus texture" 
          className="absolute top-1/4 -right-1/4 w-1/4 h-auto object-cover opacity-10 mix-blend-screen" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjErIWYDru3P5T9LPL6tj4aJtQAnMMj7aLE5SSHZG1miDC3eJlMbO3zY-A_mDrOq5fMgBVIej2ge0b82akeflSmIgGCjBoyNq5oFFw6YdjkZfWQWEmW8p0BBJBa-cwalsmzsM3TtqptEh7SQWxMFop_0Ck45_e19bZc-TLIWLMsPop7Ct8oLYCsjQTLwgpMIUSkgoykOlctMco2cW0aAjKM30AJQWwpvMJcpna91WCfWMG50MJq5QahZZcA90lHcGdWThzZ6elr_E" 
        />
      </div>

      {/* Background Icon Glows */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-3/4 z-0 pointer-events-none">
        <span className="material-symbols-outlined text-[#92C421]/5 text-[32rem] blur-2xl animate-pulse-slow filled" style={{ fontVariationSettings: "'FILL' 1, 'wght' 200" }}>bolt</span>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="material-symbols-outlined text-[#92C421]/10 text-[24rem] blur-xl animate-glow filled" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>bolt</span>
        </div>
      </div>

      <main className="relative z-10 w-full max-w-md px-6 py-12 md:py-16">
        {/* Logo Header */}
        <div className="text-left mb-10">
          <Link to="/" className="inline-flex items-center justify-start gap-2 mb-4 relative group">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <span className="material-symbols-outlined text-[#92C421]/20 text-7xl blur-xl animate-glow filled" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>bolt</span>
              <span className="material-symbols-outlined absolute text-[#92C421]/10 text-8xl blur-2xl animate-pulse-slow filled" style={{ fontVariationSettings: "'FILL' 1, 'wght' 200" }}>bolt</span>
            </div>
            <img src={boltIcon} alt="bolt" className="w-10 h-10 object-contain" />
            <span className="text-3xl font-extrabold text-[#92C421] tracking-[-0.02em]">MindSpark</span>
          </Link>
          <h1 className="text-2xl font-bold text-[#e5e1e4] tracking-[-0.02em]">Willkommen zurück</h1>
          <p className="mt-2 text-[#bccbb9] font-medium">Melden Sie sich an, um fortzufahren.</p>
        </div>

        {/* Login Card */}
        <div className="surface-base rounded-md p-8 floating-shadow">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-[#e5e1e4] uppercase tracking-[0.05em] mb-2" htmlFor="email">E-Mail-Adresse</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#bccbb9]" style={{ fontSize: '20px' }}>mail</span>
                <input 
                  className="w-full surface-low text-[#e5e1e4] rounded-md pl-12 pr-4 py-3 border-none focus:ring-0 focus:surface-high focus:border-b-2 focus:border-[#92C421] transition-all placeholder:text-[#bccbb9]/40" 
                  id="email" 
                  name="email" 
                  placeholder="name@beispiel.de" 
                  required 
                  type="email" 
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-bold text-[#e5e1e4] uppercase tracking-[0.05em] mb-2" htmlFor="password">Passwort</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#bccbb9]" style={{ fontSize: '20px' }}>lock</span>
                <input 
                  className="w-full surface-low text-[#e5e1e4] rounded-md pl-12 pr-4 py-3 border-none focus:ring-0 focus:surface-high focus:border-b-2 focus:border-[#92C421] transition-all placeholder:text-[#bccbb9]/40" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••" 
                  required 
                  type="password" 
                />
              </div>
              <div className="mt-2 text-right">
                <a className="text-sm text-[#92C421] hover:brightness-110 transition-all font-medium" href="#">Passwort vergessen?</a>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              className="w-full cta-soul-gradient text-[#003915] font-bold rounded-md py-4 px-6 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group text-lg" 
              type="submit"
            >
              <span>Anmelden</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </form>

          <div className="mt-12 mb-8 relative">
            <div className="relative flex justify-start text-sm">
              <span className="text-[#bccbb9] font-bold uppercase tracking-[0.05em] text-[10px]">Oder mit Google fortfahren</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="flex justify-center">
            <button className="w-full surface-low hover:surface-high text-[#e5e1e4] font-semibold py-3 px-4 rounded-md flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
              <span className="material-symbols-outlined text-[#bccbb9]" style={{ fontSize: '20px' }}>login</span>
              <span>Google</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginView;
