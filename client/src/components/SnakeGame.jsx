import React, { useState, useRef, useEffect } from 'react';
import {
  Trophy, ArrowUp, ArrowDown, ArrowLeft, ArrowRight,
  Play, RotateCcw, Volume2, VolumeX
} from 'lucide-react';

const SnakeGame = ({ theme, isDark }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Game State Refs (Mutable for game loop)
  const canvasRef = useRef(null);
  const reqRef = useRef(null);
  const snakeRef = useRef([{x: 10, y: 10}]);
  const foodRef = useRef({x: 15, y: 15});
  const dirRef = useRef({x: 1, y: 0});
  const nextDirRef = useRef({x: 1, y: 0});
  const lastTimeRef = useRef(0);
  const speedRef = useRef(120); // ms per move (lower is faster)

  // Audio Context
  const audioCtxRef = useRef(null);

  const playTone = (freq, type = 'sine', duration = 0.1) => {
    if (!soundEnabled) return;
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  };

  const startGame = () => {
    snakeRef.current = [{x: 10, y: 10}, {x: 9, y: 10}, {x: 8, y: 10}];
    foodRef.current = {x: 15, y: 10};
    dirRef.current = {x: 1, y: 0};
    nextDirRef.current = {x: 1, y: 0};
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
    lastTimeRef.current = 0;
    playTone(440, 'square', 0.2); // Start sound
  };

  const update = (time) => {
    if (!lastTimeRef.current) lastTimeRef.current = time;
    const delta = time - lastTimeRef.current;

    if (delta > speedRef.current) {
      // Move Logic
      dirRef.current = nextDirRef.current;
      const head = { ...snakeRef.current[0] };
      head.x += dirRef.current.x;
      head.y += dirRef.current.y;

      // Collision Walls
      if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
        handleGameOver();
        return;
      }

      // Collision Self
      if (snakeRef.current.some(s => s.x === head.x && s.y === head.y)) {
        handleGameOver();
        return;
      }

      const newSnake = [head, ...snakeRef.current];

      // Eat Food
      if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
        setScore(s => {
            const newScore = s + 10;
            if (newScore > highScore) setHighScore(newScore);
            return newScore;
        });
        playTone(600 + (newSnake.length * 10), 'sine', 0.1); // Eat sound
        // New Food
        let newFood;
        do {
          newFood = {
            x: Math.floor(Math.random() * 20),
            y: Math.floor(Math.random() * 20)
          };
        } while (newSnake.some(s => s.x === newFood.x && s.y === newFood.y));
        foodRef.current = newFood;
      } else {
        newSnake.pop(); // Remove tail
      }

      snakeRef.current = newSnake;
      lastTimeRef.current = time;
    }

    draw();
    reqRef.current = requestAnimationFrame(update);
  };

  const handleGameOver = () => {
    setIsPlaying(false);
    setGameOver(true);
    playTone(150, 'sawtooth', 0.5); // Game over sound
    cancelAnimationFrame(reqRef.current);
    // Draw one last time to show collision
    draw();
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const cs = canvas.width / 20; // Cell size

    // Clear with Theme Background
    ctx.fillStyle = isDark ? '#111' : '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid (Subtle)
    ctx.strokeStyle = isDark ? '#222' : '#f0f0f0';
    ctx.lineWidth = 1;
    for (let i = 0; i < 20; i++) {
      ctx.beginPath();
      ctx.moveTo(i * cs, 0);
      ctx.lineTo(i * cs, canvas.height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * cs);
      ctx.lineTo(canvas.width, i * cs);
      ctx.stroke();
    }

    // Food
    ctx.fillStyle = '#ef4444';
    ctx.shadowColor = '#ef4444';
    ctx.shadowBlur = isDark ? 10 : 0;
    ctx.fillRect(foodRef.current.x * cs + 2, foodRef.current.y * cs + 2, cs - 4, cs - 4);
    ctx.shadowBlur = 0;

    // Snake
    snakeRef.current.forEach((seg, i) => {
      // Dynamic Snake Color based on Theme
      if (i === 0) {
          ctx.fillStyle = isDark ? '#10b981' : '#2563eb'; // Head
      } else {
          ctx.fillStyle = isDark ? '#059669' : '#3b82f6'; // Body
      }

      if (i === 0 && isDark) {
        ctx.shadowColor = '#10b981';
        ctx.shadowBlur = 10;
      } else {
        ctx.shadowBlur = 0;
      }
      ctx.fillRect(seg.x * cs + 1, seg.y * cs + 1, cs - 2, cs - 2);
    });
  };

  // Re-draw when theme changes if not playing
  useEffect(() => {
    if (!isPlaying) draw();
  }, [isDark]);

  useEffect(() => {
    if (isPlaying) {
      reqRef.current = requestAnimationFrame(update);
    }
    return () => cancelAnimationFrame(reqRef.current);
  }, [isPlaying]);

  // Initial Draw
  useEffect(() => {
    draw();
  }, []);

  // Controls
  useEffect(() => {
    const handleKey = (e) => {
      if (!isPlaying) return;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
          e.preventDefault();
      }
      switch(e.key) {
        case 'ArrowUp': if (dirRef.current.y === 0) nextDirRef.current = {x: 0, y: -1}; break;
        case 'ArrowDown': if (dirRef.current.y === 0) nextDirRef.current = {x: 0, y: 1}; break;
        case 'ArrowLeft': if (dirRef.current.x === 0) nextDirRef.current = {x: -1, y: 0}; break;
        case 'ArrowRight': if (dirRef.current.x === 0) nextDirRef.current = {x: 1, y: 0}; break;
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isPlaying]);

  // Mobile Controls
  const handleDir = (x, y) => {
    if (!isPlaying) return;
    if (x !== 0 && dirRef.current.x === 0) nextDirRef.current = {x, y: 0};
    if (y !== 0 && dirRef.current.y === 0) nextDirRef.current = {x: 0, y};
  };

  return (
    <div className={`max-w-md mx-auto ${theme.cardBg} border ${theme.cardBorder} rounded-xl p-4 shadow-2xl transition-colors duration-500`}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4">
          <div className={`px-3 py-1 rounded font-mono font-bold flex items-center gap-2 ${isDark ? 'bg-gray-900 text-emerald-500' : 'bg-gray-100 text-blue-600'}`}>
            SCORE: {score}
          </div>
          <div className={`px-3 py-1 rounded font-mono font-bold flex items-center gap-2 text-xs ${isDark ? 'bg-gray-900 text-yellow-500' : 'bg-gray-100 text-yellow-600'}`}>
            <Trophy size={14}/> {highScore}
          </div>
        </div>
        <div className="flex gap-2">
            <button onClick={() => setSoundEnabled(!soundEnabled)} className={`p-2 rounded hover:bg-opacity-20 ${soundEnabled ? (isDark ? 'text-emerald-500' : 'text-blue-600') : 'text-gray-400'}`}>
                {soundEnabled ? <Volume2 size={20}/> : <VolumeX size={20}/>}
            </button>
            {!isPlaying && (
            <button
                onClick={startGame}
                className={`flex items-center gap-2 px-4 py-1 rounded font-bold text-sm transition-colors ${isDark ? 'bg-emerald-600 hover:bg-emerald-500 text-white' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}
            >
                {gameOver ? <RotateCcw size={14}/> : <Play size={14}/>}
                {gameOver ? 'RETRY' : 'START'}
            </button>
            )}
        </div>
      </div>

      <div className={`relative aspect-square ${isDark ? 'bg-[#111]' : 'bg-white'} rounded border ${theme.border} overflow-hidden mb-4 cursor-pointer`} onClick={!isPlaying ? startGame : undefined}>
        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          className="w-full h-full object-contain"
        />
        {gameOver && (
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-white">
            <h3 className="text-3xl font-black text-red-500 mb-2">GAME OVER</h3>
            <p className="font-mono text-gray-400">FINAL SCORE: {score}</p>
            <p className="text-xs text-gray-600 mt-4 animate-pulse">TAP TO RESTART</p>
          </div>
        )}
        {!isPlaying && !gameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <p className={`font-mono ${isDark ? 'text-emerald-500' : 'text-white'} animate-pulse font-bold`}>PRESS START</p>
          </div>
        )}
      </div>

      {/* Mobile D-Pad */}
      <div className="grid grid-cols-3 gap-2 max-w-[150px] mx-auto md:hidden">
        <div />
        <button className={`${isDark ? 'bg-gray-800 active:bg-emerald-600' : 'bg-gray-100 active:bg-blue-600'} p-3 rounded transition-colors`} onClick={() => handleDir(0, -1)}><ArrowUp size={20} className={theme.text}/></button>
        <div />
        <button className={`${isDark ? 'bg-gray-800 active:bg-emerald-600' : 'bg-gray-100 active:bg-blue-600'} p-3 rounded transition-colors`} onClick={() => handleDir(-1, 0)}><ArrowLeft size={20} className={theme.text}/></button>
        <button className={`${isDark ? 'bg-gray-800 active:bg-emerald-600' : 'bg-gray-100 active:bg-blue-600'} p-3 rounded transition-colors`} onClick={() => handleDir(0, 1)}><ArrowDown size={20} className={theme.text}/></button>
        <button className={`${isDark ? 'bg-gray-800 active:bg-emerald-600' : 'bg-gray-100 active:bg-blue-600'} p-3 rounded transition-colors`} onClick={() => handleDir(1, 0)}><ArrowRight size={20} className={theme.text}/></button>
      </div>

      <p className={`text-center text-xs mt-4 font-mono ${theme.text} opacity-50 hidden md:block`}>
        USE ARROW KEYS TO NAVIGATE
      </p>
    </div>
  );
};

export default SnakeGame;