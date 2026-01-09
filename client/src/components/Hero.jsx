import React, { useState, useEffect } from 'react';
import { Activity, Code2, Music, Coffee, Server } from 'lucide-react';

const Hero = ({ theme, isDark }) => {
  const [liveStatus, setLiveStatus] = useState({
    status: 'offline', app: 'Offline', detail: 'Sleeping', uptime: '0h 0m'
  });

  useEffect(() => {
    const statuses = [
      { status: 'online', app: 'VS Code', detail: 'Refactoring Unicon Auth', icon: 'code' },
      { status: 'online', app: 'Spotify', detail: 'Deep Focus Playlist', icon: 'music' },
      { status: 'away', app: 'Idle', detail: 'Away from keyboard', icon: 'coffee' },
      { status: 'deploying', app: 'Vercel', detail: 'Deploying SuperWaitlist', icon: 'zap' },
    ];

    let i = 0;
    const interval = setInterval(() => {
      setLiveStatus({
        ...statuses[i],
        uptime: `4h ${Math.floor(Math.random() * 59)}m`
      });
      i = (i + 1) % statuses.length;
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-12 md:mt-16 mb-12">
      <div className={`${theme.cardBg} border ${theme.cardBorder} rounded-2xl p-6 md:p-8 relative overflow-hidden group transition-colors duration-500`}>
        {/* Ambient Glow */}
        <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-all duration-700 ${isDark ? 'bg-emerald-500/5 group-hover:bg-emerald-500/10' : 'bg-blue-500/5 group-hover:bg-blue-500/10'}`}></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <header>
              <h1 className={`text-4xl md:text-6xl font-bold ${theme.textHead} mb-2 tracking-tight`}>
                7 Years<span className={theme.textAccent}>.</span>
              </h1>
              <p className={`${theme.text} max-w-md text-lg`}>
                Full-stack MERN Developer. Building fast, practical digital products that scale.
              </p>
            </header>

            {/* WebSocket Widget */}
            <div className="w-full md:w-auto">
              <div className={`font-mono text-xs ${theme.text} opacity-70 mb-2 flex items-center gap-2`}>
                <Activity size={12} />
                LIVE_SOCKET_CONNECTION
              </div>
              <div className={`${isDark ? 'bg-black/50 border-gray-800' : 'bg-white/50 border-gray-200'} backdrop-blur-md border rounded-xl p-4 w-full md:w-72 shadow-lg transition-colors duration-500`}>
                <div className={`flex items-center justify-between mb-3 border-b ${theme.border} pb-2`}>
                  <span className={`text-xs font-mono ${isDark ? 'text-emerald-400' : 'text-blue-600'} flex items-center gap-1.5`}>
                    <span className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDark ? 'bg-emerald-400' : 'bg-blue-400'}`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${isDark ? 'bg-emerald-500' : 'bg-blue-600'}`}></span>
                    </span>
                    {liveStatus.status.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono opacity-60">{liveStatus.uptime}</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    liveStatus.icon === 'code' ? (isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600') :
                    liveStatus.icon === 'music' ? (isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600') :
                    liveStatus.icon === 'zap' ? (isDark ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600') :
                    (isDark ? 'bg-gray-700/20 text-gray-400' : 'bg-gray-100 text-gray-500')
                  }`}>
                    {liveStatus.icon === 'code' ? <Code2 size={18} /> :
                     liveStatus.icon === 'music' ? <Music size={18} /> :
                     liveStatus.icon === 'zap' ? <Server size={18} /> :
                     <Coffee size={18} />}
                  </div>
                  <div>
                    <div className={`text-sm font-medium ${theme.textHead}`}>{liveStatus.app}</div>
                    <div className="text-xs opacity-60 truncate max-w-[150px]">{liveStatus.detail}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;