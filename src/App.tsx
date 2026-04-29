/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap } from 'gsap';
import CanvasConfetti from 'canvas-confetti';
import { 
  History, 
  Dices, 
  RotateCw, 
  Zap, 
  Trophy, 
  Info, 
  School,
  Calculator,
  LineChart,
  ClipboardCheck,
  FileText,
  AlertCircle,
  ScrollText
} from 'lucide-react';

const SYMBOLS = ["π", "∑", "∫", "√", "∞", "Ω", "Δ", "θ", "x²", "sin", "log", "P(x)", "λ", "σ", "φ"];

const MathStuffPage = () => {
  const trialResults = [
    { r: 1, v: 5 }, { r: 2, v: 3 }, { r: 3, v: 6 }, { r: 4, v: 3 }, { r: 5, v: 2 },
    { r: 6, v: 5 }, { r: 7, v: 4 }, { r: 8, v: 4 }, { r: 9, v: 4 }, { r: 10, v: 3 },
    { r: 11, v: 4 }, { r: 12, v: 2 }, { r: 13, v: 1 }, { r: 14, v: 4 }, { r: 15, v: 6 },
    { r: 16, v: 5 }, { r: 17, v: 1 }, { r: 18, v: 4 }, { r: 19, v: 6 }, { r: 20, v: 4 },
    { r: 21, v: 6 }, { r: 22, v: 3 }, { r: 23, v: 5 }, { r: 24, v: 4 }, { r: 25, v: 1 },
    { r: 26, v: 3 }, { r: 27, v: 3 }, { r: 28, v: 5 }, { r: 29, v: 5 }, { r: 30, v: 1 }
  ];

  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar bg-slate-50/50 font-sans relative">
      <div className="max-w-5xl mx-auto py-16 px-8 lg:px-16 space-y-24 relative z-10">
        
        {/* 1. Game Title */}
        <header className="space-y-6">
          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-blue">(super awesome math)</p>
            <h1 className="text-6xl font-black tracking-tighter uppercase leading-none">
              Our Super Cool and <br/>
              <span className="text-brand-green">Awesome Game</span>
            </h1>
          </div>
          <div className="h-2 w-32 bg-brand-pink" />
        </header>

        {/* 2 & 3. Description & Rules */}
        <section className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-sm font-black uppercase tracking-widest border-b-2 border-slate-900 pb-2 inline-block">02. Description</h3>
            <p className="text-lg font-medium leading-relaxed text-slate-600">
              The player uses a standard six-sided dice for this game of chance. The objective is to roll the dice once to see if it lands on a specific target number.
            </p>
          </div>
          <div className="bg-slate-50 p-10 rounded-[3rem] space-y-6 border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:shadow-brand-blue/5">
            <h3 className="text-sm font-black uppercase tracking-widest text-brand-blue flex items-center gap-2">
              <ScrollText size={18} /> 03. Rules
            </h3>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-tight leading-relaxed">
              <li className="flex gap-4"><span className="text-brand-blue">●</span> The player rolls one six-sided die.</li>
              <li className="flex gap-4"><span className="text-brand-green">●</span> If the die lands on the number 3, the player wins.</li>
              <li className="flex gap-4"><span className="text-brand-pink">●</span> If the die lands on any other number (1, 2, 4, 5, or 6), the player loses.</li>
            </ul>
          </div>
        </section>

        {/* 4. All Possible Outcomes */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b-2 border-slate-900 pb-4">
            <h3 className="text-sm font-black uppercase tracking-widest">04. All Possible Outcomes</h3>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Organized Representation</span>
          </div>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
             {trialResults.map((t) => (
               <div key={t.r} className="aspect-square bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-center shadow-sm hover:border-brand-blue/30 transition-all">
                  <p className="text-[8px] font-black text-slate-300 uppercase leading-none mb-1">{t.r}</p>
                  <p className={`text-xl font-black ${t.v === 3 ? 'text-brand-green' : 'text-slate-900'}`}>{t.v}</p>
               </div>
             ))}
          </div>
        </section>

        {/* 5 & 6. Probabilities */}
        <section className="grid md:grid-cols-2 gap-8">
           <div className="p-12 bg-slate-900 text-white rounded-[4rem] space-y-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-[10px] font-black uppercase tracking-widest text-brand-blue">05. Theoretical Probability</h3>
              <div className="space-y-2">
                <p className="text-5xl font-black tracking-tighter">16.66%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Calculation: ⅙ = 0.16</p>
              </div>
           </div>
           <div className="p-12 bg-white border border-slate-100 rounded-[4rem] space-y-8 shadow-sm">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-brand-pink">06. Complementary Event</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <p className="text-xs font-black uppercase tracking-widest">P(Win)</p>
                  <p className="text-xl font-black text-brand-green">16.66%</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-black uppercase tracking-widest">P(Loss)</p>
                  <p className="text-xl font-black text-brand-pink">83.84%</p>
                </div>
              </div>
           </div>
        </section>

        {/* 7. Experimental Trials */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h3 className="text-sm font-black uppercase tracking-widest border-b-2 border-slate-900 pb-2">07. Experimental Trials</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">(n=30 sample set)</p>
          </div>
          <div className="overflow-x-auto rounded-[2rem] border border-slate-100 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100">Roll #</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100">Outcome</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100">Roll #</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100">Outcome</th>
                </tr>
              </thead>
              <tbody className="text-sm font-bold uppercase tracking-tight">
                {[...Array(15)].map((_, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 border-b border-slate-50 text-slate-400">{trialResults[i].r}</td>
                    <td className={`p-6 border-b border-slate-50 ${trialResults[i].v === 3 ? 'text-brand-green' : 'text-slate-900'}`}>{trialResults[i].v}</td>
                    <td className="p-6 border-b border-slate-50 text-slate-400">{trialResults[i+15].r}</td>
                    <td className={`p-6 border-b border-slate-50 ${trialResults[i+15].v === 3 ? 'text-brand-green' : 'text-slate-900'}`}>{trialResults[i+15].v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 8, 9 & 10. Data Analysis */}
        <section className="space-y-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 bg-brand-green text-white rounded-[4rem] space-y-6 shadow-xl shadow-brand-green/20">
               <h3 className="text-[10px] font-black uppercase tracking-widest opacity-60">08. Experimental Probability</h3>
               <div className="space-y-2">
                 <p className="text-5xl font-black tracking-tighter">13.33%</p>
                 <p className="text-xs font-bold uppercase tracking-widest opacity-40">Calculation: 4/30</p>
               </div>
            </div>
            <div className="p-12 bg-white border border-slate-100 rounded-[4rem] space-y-6 shadow-sm">
               <h3 className="text-[10px] font-black uppercase tracking-widest text-brand-blue">09. Comparison</h3>
               <p className="text-sm font-bold leading-relaxed uppercase italic text-slate-600">
                 Theoretical: 16.66% vs Experimental: 13.33%. They are pretty close to each other, with only a 3.33% difference. They might be a little different just because of luck during our 30 trials.
               </p>
            </div>
          </div>

          <div className="p-12 lg:p-20 bg-slate-900 text-white rounded-[4rem] space-y-8 shadow-2xl relative overflow-hidden">
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-pink/10 blur-[100px] -mr-48 -mb-48" />
             <div className="space-y-4 max-w-3xl relative z-10">
               <h3 className="text-[10px] font-black uppercase tracking-widest text-brand-pink italic">10. Fairness Conclusion</h3>
               <p className="text-2xl font-bold tracking-tighter uppercase leading-tight italic">
                 "Our game is <span className="text-brand-pink">mathematically unfair</span>. This is because the probability of winning (16.66%) is much lower than the probability of losing (83.84%). A game is only fair if you have an equal chance to win or lose."
               </p>
             </div>
          </div>
        </section>

        {/* 11. Recommendation */}
        <section className="bg-brand-blue p-12 lg:p-16 rounded-[4rem] text-white flex flex-col md:flex-row items-center gap-12 shadow-xl shadow-brand-blue/20 mb-24">
           <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-brand-blue shrink-0 shadow-lg">
              <Trophy size={48} />
           </div>
           <div className="space-y-4 text-center md:text-left">
              <h3 className="text-[10px] font-black uppercase tracking-widest opacity-60">11. Recommendation</h3>
              <p className="text-lg font-bold uppercase tracking-tight leading-relaxed">
                We recommend our game because it is really fun and simple to play. Even though it is hard to win, that makes it more of a challenge for people who play. The math shows it's a good game of chance.
              </p>
           </div>
        </section>

        <footer className="pt-24 border-t border-slate-100 text-center space-y-4 pb-20">
           <School className="mx-auto text-slate-200" size={32} strokeWidth={1} />
        </footer>
      </div>
    </div>
  );
};

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [lastRoll, setLastRoll] = useState<number | null>(null);
  const [history, setHistory] = useState<number[]>([]);
  const [isRolling, setIsRolling] = useState(false);
  const [showResultOverlay, setShowResultOverlay] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // PARTY & SIM STATES
  const [isPartyActive, setIsPartyActive] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  
  const vortexRef = useRef<HTMLDivElement>(null);
  const symbolRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const partyDiceRef = useRef<HTMLDivElement>(null);
  const mainWrapperRef = useRef<HTMLDivElement>(null);
  const simBurstContainer = useRef<HTMLDivElement>(null);

  const [activeOutcome, setActiveOutcome] = useState<number | null>(null);
  
  // PAGE & TRANSITION STATES
  const [activePage, setActivePage] = useState<'game' | 'math'>('game');

  const stats = useMemo(() => {
    if (history.length === 0) return 0;
    const wins = history.filter(v => v === 3).length;
    return (wins / history.length) * 100;
  }, [history]);

  // Number Tweening for Stats
  const [displayStats, setDisplayStats] = useState(0);
  useEffect(() => {
    const obj = { val: displayStats };
    gsap.to(obj, {
      val: stats,
      duration: 0.8,
      ease: "power2.out",
      onUpdate: () => setDisplayStats(obj.val)
    });
  }, [stats]);

  const theoreticalProb = "16.66%";
  const complementProb = "83.34%";

  useEffect(() => {
    setMounted(true);
    const handleMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const rollThirty = () => {
    if (isRolling || isSimulating) return;
    setIsSimulating(true);
    const newRolls: number[] = [];
    
    for (let i = 0; i < 30; i++) {
        newRolls.push(Math.floor(Math.random() * 6) + 1);
    }

    newRolls.forEach((val, i) => {
      const el = document.createElement('div');
      el.innerText = val.toString();
      el.className = `fixed z-[120] font-black pointer-events-none font-mono text-xl ${val === 3 ? 'text-cyan-500 scale-150' : 'text-slate-400 opacity-50'}`;
      el.style.left = '50%';
      el.style.top = '50%';
      simBurstContainer.current?.appendChild(el);

      gsap.to(el, {
        x: -window.innerWidth * 0.4 + (Math.random() * 200),
        y: -300 + (Math.random() * 600),
        rotation: Math.random() * 720,
        opacity: 0,
        scale: 0.2,
        duration: 0.8,
        delay: i * 0.012,
        ease: "expo.out",
        onComplete: () => el.remove()
      });
    });

    setTimeout(() => {
      setHistory(prev => [...newRolls, ...prev].slice(0, 100));
      setIsSimulating(false);
      if (newRolls.includes(3)) {
        CanvasConfetti({ 
          particleCount: 50, 
          spread: 60, 
          origin: { x: 0.2, y: 0.5 },
          colors: ['#06b6d4', '#ec4899', '#ffffff']
        });
      }
    }, 600);
  };

  const triggerPartyMode = () => {
    setIsPartyActive(true);
    const tl = gsap.timeline();
    tl.to(mainWrapperRef.current, { rotation: 1080, duration: 8, ease: "power2.inOut" });
    tl.to(partyDiceRef.current, {
      rotation: 5000, scale: 150, duration: 6, ease: "expo.in",
      onStart: () => {
        const interval = setInterval(() => {
          CanvasConfetti({ 
            particleCount: 15, spread: 360, 
            origin: { x: Math.random(), y: Math.random() },
            colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'] 
          });
        }, 80);
        setTimeout(() => clearInterval(interval), 6000);
      }
    }, 2);
    tl.to({}, { 
      duration: 2, 
      onComplete: () => {
        setIsPartyActive(false);
        gsap.set([mainWrapperRef.current, partyDiceRef.current], { clearProps: "all" });
      } 
    });
  };

  useEffect(() => {
    if (!mounted || !isUnlocked || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let particles: any[] = [];
    const createParticle = (isStorm?: boolean) => ({
      x: isStorm ? (Math.random() > 0.5 ? -40 : window.innerWidth + 40) : Math.random() * window.innerWidth,
      y: isStorm ? Math.random() * window.innerHeight : Math.random() * -window.innerHeight,
      size: Math.random() * 6 + 2,
      speed: Math.random() * 0.8 + 0.2,
      angle: Math.random() * Math.PI * 2,
      spin: Math.random() * 0.02 - 0.01,
      windOffset: Math.random() * 2000,
      type: Math.random() > 0.5 ? 'flower' : 'symbol',
      content: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      isStorm: isStorm || false
    });
    for (let i = 0; i < 80; i++) particles.push(createParticle());
    
    const drawCherryBlossom = (ctx: CanvasRenderingContext2D, size: number) => {
      ctx.beginPath();
      ctx.fillStyle = isPartyActive ? `hsl(${Math.random() * 360}, 100%, 50%)` : 'rgba(255, 182, 193, 0.6)';
      for (let i = 0; i < 5; i++) {
        ctx.rotate((Math.PI * 2) / 5);
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(size, -size, size * 1.5, size, 0, size / 4);
      }
      ctx.fill();
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        const swayIntensity = activePage === 'math' ? 1.5 : 0.8;
        p.y += isPartyActive ? p.speed * 25 : p.speed;
        p.x += Math.sin((time + p.windOffset) / 2500) * swayIntensity;
        p.angle += p.spin;
        
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        if (p.type === 'flower') drawCherryBlossom(ctx, p.size);
        else {
          ctx.fillStyle = isPartyActive ? `hsl(${Math.random()*360}, 100%, 50%)` : 'rgba(6, 182, 212, 0.2)'; 
          ctx.font = `bold ${p.size * (isPartyActive ? 8 : 4)}px "JetBrains Mono"`;
          ctx.fillText(p.content, 0, 0);
        }
        ctx.restore();
        
        if (p.y > canvas.height + 40) {
           p.y = -40;
           p.x = Math.random() * window.innerWidth;
        }
      });
      requestAnimationFrame(animate);
    };
    const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', handleResize);
    handleResize();
    requestAnimationFrame(animate);
    return () => window.removeEventListener('resize', handleResize);
  }, [mounted, isUnlocked, isPartyActive, activePage]);

  const handlePageChange = (page: 'game' | 'math') => {
    setActivePage(page);
  };

  useEffect(() => {
    if (!mounted || !vortexRef.current) return;
    
    // Optimized whirlpool setup
    const symbolCount = 120;
    symbolRefs.current = symbolRefs.current.slice(0, symbolCount);
    
    symbolRefs.current.forEach((sym, i) => {
      if (!sym) return;
      const angle = (i / symbolCount) * Math.PI * 10; 
      const radius = 60 + (i * 3.5); 
      
      gsap.set(sym, {
        xPercent: -50, yPercent: -50,
        x: Math.cos(angle) * radius, y: Math.sin(angle) * radius,
        rotation: angle * (180 / Math.PI), 
        scale: 0.5 + (i / symbolCount),
        opacity: 0.1 + (i / symbolCount) * 0.4
      });
    });

    const triggerExplosion = () => {
      if (isUnlocked) return;
      const tl = gsap.timeline({ onComplete: () => setIsUnlocked(true) });
      
      // Smooth Whirlpool Sweep
      tl.to(symbolRefs.current, {
        x: (i, target) => (gsap.getProperty(target, "x") as number) * 15,
        y: (i, target) => (gsap.getProperty(target, "y") as number) * 15,
        rotation: "+=1080", 
        opacity: 0, 
        scale: 12, 
        duration: 1.6,
        stagger: { amount: 0.3, from: "center" }, 
        ease: "power2.in"
      });
      
      tl.to(vortexRef.current, { 
        opacity: 0, 
        duration: 0.8,
        ease: "power1.inOut" 
      }, "-=1.0");
    };

    window.addEventListener('click', triggerExplosion);
    return () => window.removeEventListener('click', triggerExplosion);
  }, [mounted, isUnlocked]);

  const rollDice = () => {
    setIsRolling(true);
    setShowResultOverlay(false);
    setActiveOutcome(null);
    setTimeout(() => {
      const res = Math.floor(Math.random() * 6) + 1;
      setLastRoll(res);
      setHistory(prev => [res, ...prev].slice(0, 100));
      setIsRolling(false);
      setShowResultOverlay(true);
      setActiveOutcome(res);
      if (res === 3) {
        CanvasConfetti({ 
          particleCount: 200, 
          spread: 80,
          colors: ['#06b6d4', '#ec4899', '#ffffff']
        });
      }
    }, 1200);
  };

  if (!mounted) return null;

  return (
    <div className={`relative w-full h-screen transition-colors duration-1000 overflow-hidden font-sans ${isPartyActive ? 'bg-red-600' : 'bg-slate-50'} text-slate-900`}>
      <div className="absolute inset-0 math-grid pointer-events-none opacity-40" />
      <div ref={simBurstContainer} className="fixed inset-0 pointer-events-none z-[130]" />

      {!isPartyActive && (
        <button 
          onClick={triggerPartyMode} 
          className="fixed bottom-6 right-6 z-[110] bg-red-600 hover:bg-red-700 border border-red-500 text-white px-5 py-2.5 rounded-full font-bold text-[9px] items-center gap-2 flex uppercase tracking-[0.2em] transition-all shadow-lg shadow-red-500/20 active:scale-95"
        >
          <Zap size={10} className="fill-current" />
          click this lmao
        </button>
      )}

      <motion.div animate={{ x: mousePos.x - 200, y: mousePos.y - 200 }} className="fixed w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none z-0" />
      
      {/* Background Auras */}
      <motion.div 
        animate={{ 
          x: [100, 300, 100], 
          y: [100, 400, 100],
          scale: [1, 1.2, 1]
        }} 
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="fixed w-[600px] h-[600px] bg-emerald-400/5 rounded-full blur-[120px] pointer-events-none z-0 left-[-200px] top-[-200px]" 
      />
      <motion.div 
        animate={{ 
          x: [-100, -400, -100], 
          y: [200, -100, 200],
          scale: [1, 1.3, 1]
        }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="fixed w-[700px] h-[700px] bg-pink-400/5 rounded-full blur-[150px] pointer-events-none z-0 right-[-300px] bottom-[-200px]" 
      />
      <motion.div 
        animate={{ 
          x: [0, 200, 0], 
          y: [0, -200, 0],
          scale: [1, 1.1, 1]
        }} 
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="fixed w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[100px] pointer-events-none z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" 
      />

      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" />
      
      <AnimatePresence>
        {!isUnlocked && (
          <motion.div 
            ref={vortexRef} 
            exit={{ opacity: 0, scale: 1.1 }} 
            className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center cursor-pointer overflow-hidden"
          >
            {/* Immersive Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 math-grid animate-[spin_120s_linear_infinite]" />
            </div>

            {/* Symbols Loop */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="relative w-0 h-0"
            >
              {[...Array(120)].map((_, i) => (
                <span 
                  key={i} 
                  ref={el => { symbolRefs.current[i] = el; }} 
                  className={`absolute font-black select-none pointer-events-none drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] ${
                    i % 3 === 0 ? 'text-cyan-400' : i % 3 === 1 ? 'text-pink-400' : 'text-white'
                  } ${i % 5 === 0 ? 'text-8xl' : 'text-4xl'}`}
                >
                  {SYMBOLS[i % SYMBOLS.length]}
                </span>
              ))}
            </motion.div>

            {/* Central Content */}
            <div className="absolute text-center z-10 space-y-10">
              <div className="relative">
                <h1 className="text-sm font-black tracking-[1.5em] text-white uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                  our super cool and <span className="text-cyan-400">awesome game</span>
                </h1>
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" />
              </div>
              
              <div className="flex flex-col items-center gap-6">
                <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                <p className="text-[11px] font-black uppercase tracking-[1em] text-cyan-200/50 animate-pulse">
                  by phoebe and miko
                </p>
              </div>

              <div className="pt-24">
                 <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em] animate-bounce">Click to Enter</p>
              </div>
            </div>

            {/* Vignette Depth */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,rgba(2,6,23,0.9)_100%)]" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div ref={mainWrapperRef} initial={{ opacity: 0 }} animate={isUnlocked ? { opacity: 1, scale: 1 } : {}} className="h-full flex flex-col relative z-20">
        {/* TOP BAR */}
        <header className="flex justify-between items-center px-12 py-5 border-b border-slate-200 bg-white/80 backdrop-blur-xl shrink-0">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-slate-200">
                <School size={20} />
             </div>
             <div className="space-y-0">
               <h2 className="font-extrabold text-xs tracking-tight uppercase">I-SHOU INTERNATIONAL SCHOOL // 7B</h2>
               <p className="text-[9px] text-slate-500 font-bold uppercase tracking-tight flex items-center gap-2">
                 <span>website created by phoebe // project by phoebe & miko</span>
               </p>
             </div>
          </div>

          <div className="flex items-center gap-10">
             <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em]">
               <button 
                onClick={() => handlePageChange('game')}
                className={`transition-all pb-1 border-b-2 ${activePage === 'game' ? 'text-pink-500 border-pink-500' : 'text-slate-300 border-transparent hover:text-slate-900'}`}
               >
                 game
               </button>
               <button 
                onClick={() => handlePageChange('math')}
                className={`transition-all pb-1 border-b-2 ${activePage === 'math' ? 'text-pink-500 border-pink-500' : 'text-slate-300 border-transparent hover:text-slate-900'}`}
               >
                 math stuff
               </button>
             </div>
             
             <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="flex items-center gap-4 pl-10 border-l border-slate-200">
                <div className="text-right">
                  <p className="text-[9px] font-black text-slate-400 uppercase leading-none mb-1">Experimental Prob.</p>
                  <p className="text-2xl font-black leading-none text-slate-900 font-mono tracking-tighter">{displayStats.toFixed(1)}%</p>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${displayStats > 15 ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-300'}`}>
                  <LineChart size={18} />
                </div>
             </motion.div>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          {activePage === 'game' ? (
            <>
              {/* LEFT: HISTORY & SAMPLE SPACE */}
              <aside className="w-80 border-r border-slate-200 bg-white/30 backdrop-blur-md flex flex-col">
                <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2 italic">
                    <History size={12} className="text-cyan-500" /> history log ({history.length})
                  </h3>
                </div>
                
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  <AnimatePresence mode='popLayout'>
                    {history.map((val, i) => (
                      <motion.div 
                        layout
                        initial={{ x: -20, opacity: 0 }} 
                        animate={{ x: 0, opacity: 1 }} 
                        key={`${i}-${val}`} 
                        className={`flex items-center justify-between p-4 rounded-xl border transition-all ${val === 3 ? 'bg-cyan-50 border-cyan-200 shadow-sm' : 'bg-white border-slate-100 shadow-sm'}`}
                      >
                         <div className="flex items-center gap-3">
                           <span className={`w-2 h-2 rounded-full ${val === 3 ? 'bg-cyan-500 animate-pulse' : 'bg-slate-100'}`} />
                           <span className="text-[9px] font-bold text-slate-300 font-mono tracking-tighter">TRL_{history.length - i}</span>
                         </div>
                         <span className={`text-3xl font-black font-mono ${val === 3 ? 'text-cyan-600' : 'text-slate-800'}`}>{val}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* SAMPLE SPACE SECTION */}
                <div className="p-6 border-t border-slate-200 bg-slate-50/80">
                  <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                    <FileText size={10} /> All Possible Outcomes
                  </h4>
                  <div className="grid grid-cols-6 gap-1">
                    {[1,2,3,4,5,6].map(n => (
                      <motion.div 
                        key={n} 
                        animate={activeOutcome === n ? { 
                          scale: [1, 1.2, 1],
                          backgroundColor: ['#fff', '#06b6d4', '#fff'],
                          color: ['#cbd5e1', '#fff', '#cbd5e1']
                        } : {}}
                        className={`h-8 rounded border flex items-center justify-center font-mono text-[10px] font-bold transition-all ${n === 3 ? 'bg-cyan-50 border-cyan-100 text-cyan-500' : 'bg-white border-slate-100 text-slate-300'}`}
                      >
                        {n}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </aside>

              {/* CENTER: SIMULATION STAGE */}
              <main className="flex-1 flex flex-col items-center justify-center relative bg-white/20 px-8 pt-24">
                <div className="absolute top-8 flex flex-col items-center gap-2">
                  <div className="px-5 py-2 bg-slate-900 text-white rounded-full flex items-center gap-3 shadow-2xl">
                    <Dices size={14} className="text-cyan-400" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Our Super Cool and Awesome Game</span>
                  </div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em] italic text-center">
                    "Like you roll the dice and if it lands on 3 u win"
                  </p>
                </div>
                
                <div className="relative scale-100 mb-8 pt-8">
                  <div className="absolute -inset-12 bg-cyan-400/5 rounded-full blur-[60px] animate-pulse" />
                  
                  <motion.div 
                    ref={partyDiceRef}
                    animate={isRolling ? { 
                      rotateX: [0, 720, 1440], 
                      rotateY: [0, 720, 1440], 
                      scale: [1, 1.2, 1],
                      y: [0, -120, 0] 
                    } : { y: [0, -12, 0] }}
                    transition={{ duration: isRolling ? 1.2 : 5, repeat: isRolling ? 0 : Infinity, ease: "easeInOut" }}
                    className={`w-52 h-52 bg-white border-[3px] border-slate-900 shadow-[32px_32px_0px_rgba(15,23,42,0.03)] rounded-[44px] flex items-center justify-center text-9xl font-black text-slate-900 relative group select-none ${isRolling ? 'cursor-wait' : 'cursor-default'} overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 pointer-events-none" />
                    <span className="relative z-10 font-mono tracking-tighter drop-shadow-sm transition-all group-hover:scale-105">{isRolling ? "●" : (lastRoll || "•")}</span>
                    
                    <div className="absolute top-4 left-4 w-4 h-4 rounded-full bg-slate-100 opacity-30" />
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-slate-100 opacity-20" />
                  </motion.div>
                </div>

                <div className="flex flex-col gap-6 w-full max-w-sm">
                  <div className="flex gap-4 p-2 bg-slate-900/5 rounded-[32px] border border-slate-900/5 backdrop-blur-md">
                    <button 
                      onClick={rollDice}
                      disabled={isRolling || isSimulating || isPartyActive}
                      className="flex-1 group relative flex items-center justify-center gap-3 px-8 py-5 bg-slate-900 text-white rounded-[24px] font-black uppercase tracking-widest text-[10px] hover:bg-cyan-600 transition-all shadow-xl hover:shadow-cyan-500/20 active:scale-95 disabled:opacity-30 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <RotateCw size={14} className={isRolling ? 'animate-spin' : ''} />
                      <span>{isRolling ? "rolling..." : "roll single"}</span>
                    </button>
                    
                    <button 
                      onClick={rollThirty}
                      disabled={isRolling || isSimulating || isPartyActive}
                      className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-white border-2 border-slate-900 text-slate-900 rounded-[24px] font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 hover:text-white transition-all shadow-md active:scale-95 disabled:opacity-30"
                    >
                      <Zap size={14} />
                      <span>roll 30</span>
                    </button>
                  </div>
                  
                  <div className="p-5 bg-white/50 border border-slate-200 rounded-3xl space-y-3 relative overflow-hidden backdrop-blur-sm">
                     <div className="absolute top-0 right-0 p-3 opacity-10 text-slate-400">
                        <Calculator size={40} />
                     </div>
                     <div className="space-y-1">
                        <p className="text-[11px] font-black uppercase text-slate-900 tracking-wider">MYP SUMMATIVE ASSESSMENT</p>
                        <p className="text-[9px] text-slate-500 font-medium leading-relaxed italic">
                          Unit 6 probability project by phoebe & miko
                        </p>
                     </div>
                  </div>
                </div>

                <p className="mt-12 text-[10px] font-black text-slate-300 uppercase tracking-widest flex items-center gap-3 group transition-all">
                   "pls can i have 8... bcuz i worked super hard.. 🥹"
                </p>
              </main>

              {/* RIGHT: ANALYSIS PANEL */}
              <aside className="w-96 border-l border-slate-200 bg-white/30 backdrop-blur-md p-8 flex flex-col gap-6">
                 <div className="space-y-6 flex-1">
                   <div className="space-y-3">
                     <div className="flex items-center gap-2">
                        <Calculator size={14} className="text-cyan-500" />
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-900">theoretical stuff</h3>
                     </div>
                     <div className="grid grid-cols-2 gap-3">
                        <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-xl">
                          <p className="text-[9px] font-bold text-slate-400 uppercase mb-1 whitespace-nowrap">Theoretical P(W)</p>
                          <p className="text-2xl font-black font-mono tracking-tighter">{theoreticalProb}</p>
                          <div className="h-1 bg-cyan-500 w-1/3 mt-3 rounded-full" />
                        </div>
                        <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
                          <p className="text-[9px] font-bold text-slate-400 uppercase mb-1 whitespace-nowrap">Complement P(L)</p>
                          <p className="text-2xl font-black font-mono tracking-tighter text-slate-900">{complementProb}</p>
                          <div className="h-1 bg-slate-200 w-full mt-3 rounded-full" />
                        </div>
                     </div>
                   </div>

                   <div className="space-y-3">
                     <div className="flex items-center gap-2">
                        <LineChart size={14} className="text-cyan-500" />
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-900">Live Delta Analysis</h3>
                     </div>
                     <div className="bg-white/80 p-5 rounded-2xl border border-slate-200 space-y-4">
                        <div className="flex justify-between items-end">
                           <span className="text-[11px] font-black uppercase">Variance</span>
                           <span className="text-[10px] font-mono font-bold text-slate-400">
                             Δ {(Math.abs(displayStats - 16.66)).toFixed(2)}%
                           </span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex">
                           <div 
                             className="h-full bg-cyan-500 transition-all duration-300" 
                             style={{ width: `${Math.min(displayStats * 3, 100)}%` }} 
                           />
                        </div>
                        <p className="text-[9px] text-slate-500 font-medium leading-relaxed italic">
                          Commentary: High deviation observed during low trial counts. Stability expected at n &gt; 100.
                        </p>
                     </div>
                   </div>

                   <div className="space-y-3">
                     <div className="flex items-center gap-2">
                        <ClipboardCheck size={14} className="text-cyan-500" />
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-900">Fairness Conclusion</h3>
                     </div>
                     <div className={`p-5 rounded-2xl border flex items-center gap-4 transition-colors ${history.length === 0 ? 'bg-slate-50 border-slate-100' : 'bg-emerald-50 border-emerald-100'}`}>
                        <div className="p-3 bg-white rounded-xl shadow-sm overflow-hidden">
                           <Trophy size={20} className={history.length === 0 ? 'text-slate-200' : 'text-emerald-500'} />
                        </div>
                        <div className="space-y-1">
                           <p className="text-[10px] font-black uppercase text-slate-900">Conclusion</p>
                           <p className="text-[9px] text-slate-500 font-bold uppercase tracking-tight">The game is unfair.</p>
                        </div>
                     </div>
                   </div>
                 </div>

                 <div className="bg-slate-900 p-6 rounded-3xl text-white space-y-4 shadow-2xl relative overflow-hidden group">
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-500 rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity" />
                    <h4 className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                       <AlertCircle size={12} className="text-cyan-400" /> Recommendation
                    </h4>
                    <p className="text-[11px] font-bold leading-relaxed opacity-80 uppercase tracking-tight">
                       TO: SCHOOL FESTIVAL COMMITTEE<br/>
                       FROM: PHOEBE & MIKO (7B)<br/><br/>
                       WE RECOMMEND THIS GAME BECAUSE IT IS FUN AND EASY TO TEST. THE PROBABILITY IS CLEAR AND FAIR FOR A FESTIVAL CONTEXT.
                    </p>
                 </div>
              </aside>
            </>
          ) : (
            <MathStuffPage />
          )}
        </div>
      </motion.div>

      {/* OVERLAYS */}
      <AnimatePresence>
        {showResultOverlay && !isPartyActive && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className={`fixed inset-0 z-[200] flex items-center justify-center ${lastRoll === 3 ? 'bg-emerald-600' : 'bg-red-700'}`} 
            onClick={() => setShowResultOverlay(false)}
          >
            <motion.div 
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              className="text-center px-10 space-y-10"
            >
              {lastRoll === 3 ? (
                <>
                  <div className="flex justify-center">
                    <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-8 border-white overflow-hidden">
                      <Trophy size={80} strokeWidth={3} />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-[10vw] font-black text-white leading-none tracking-tighter uppercase italic select-none drop-shadow-2xl">YAYYY YOU WON</h2>
                    <div className="bg-emerald-600 py-6 px-12 inline-block shadow-2xl border-4 border-white">
                       <p className="text-white font-black text-3xl md:text-5xl uppercase tracking-[0.2em] leading-tight">
                         YAYYY YOU WON YAYYY YOU WON <br/>YAYYY YOU WON
                       </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-6">
                    <div className="flex justify-center mb-16 opacity-30">
                       <div className="text-[14vw] font-black text-white select-none whitespace-nowrap tracking-tighter">OUTCOME_FAIL</div>
                    </div>
                    <h2 className="text-[11vw] font-black text-white leading-none tracking-tighter uppercase relative z-10 select-none drop-shadow-2xl">YOU LOST...</h2>
                    <div className="space-y-4">
                       <div className="bg-red-900/40 backdrop-blur-md p-8 border-2 border-white/20 rounded-3xl max-w-2xl mx-auto overflow-hidden">
                          <p className="text-white font-black text-4xl md:text-5xl uppercase tracking-tighter italic leading-none mb-4">YOU LOST LOSER LOSER YOU SUCK STUPID FAT LOSER</p>
                          <div className="h-4 w-full bg-slate-900 rounded-full overflow-hidden flex border-2 border-slate-900">
                             <div className="h-full bg-white w-1/4" />
                          </div>
                       </div>
                       <div className="inline-block px-12 py-4 bg-white text-red-600 rounded-full border-4 border-red-600 font-black text-2xl uppercase italic shadow-2xl">
                          Fat Loser Loser
                       </div>
                    </div>
                  </div>
                </>
              )}
              <p className="text-[10px] font-black text-white uppercase tracking-[1.5em] pt-24 animate-pulse select-none">Click to Re-Simulate</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
