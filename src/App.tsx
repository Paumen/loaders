import React from 'react';
import './loaders.css';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-mono selection:bg-red-600 selection:text-white overflow-x-hidden">
      <header className="p-8 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent"></div>
        <div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
            Cipher<br/><span className="text-red-600">Labs</span>
          </h1>
          <p className="mt-4 text-white/50 text-xs md:text-sm uppercase tracking-[0.3em]">Experimental CSS Loaders // Pure Style // Zero JS</p>
        </div>
        <div className="text-left md:text-right text-xs text-white/30 uppercase space-y-1">
          <p className="flex items-center gap-2 md:justify-end"><span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span> Status: Unstable</p>
          <p>Warning: High GPU Usage</p>
          <p>Auth: Cipher_Admin_Override</p>
        </div>
      </header>
      <main className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <LoaderCard title="01 // Tesseract Collapse" description="4D projection mapped to 3D CSS transforms."><TesseractLoader /></LoaderCard>
        <LoaderCard title="02 // Chromatic Glitch" description="Sub-pixel rendering abuse via clip-path and text-shadow."><GlitchLoader /></LoaderCard>
        <LoaderCard title="03 // Non-Euclidean Ooze" description="Contrast/blur filter exploitation for organic merging."><LiquidLoader /></LoaderCard>
        <LoaderCard title="04 // Fractal Mandala" description="Calculated transform matrices with staggered delays."><MandalaLoader /></LoaderCard>
        <LoaderCard title="05 // Hyperspace Tear" description="Repeating conic gradients with radial masking."><HyperspaceLoader /></LoaderCard>
        <LoaderCard title="06 // Brutalist Marquee" description="Mix-blend-mode difference with skewed typography."><BrutalistLoader /></LoaderCard>
        <LoaderCard title="07 // Quantum String" description="Massive box-shadow arrays manipulated via scale transforms."><QuantumLoader /></LoaderCard>
        <LoaderCard title="08 // Void Siphon" description="Grid-based staggered animation delays simulating a gravity well."><SiphonLoader /></LoaderCard>
        <LoaderCard title="09 // Neural Collapse" description="Aggressive clip-path interpolation with exclusion blending."><NeuralLoader /></LoaderCard>
        <LoaderCard title="10 // The Singularity" description="30s narrative cycle: Birth, Expansion, and Heat Death of a universe."><SingularityLoader /></LoaderCard>
        <LoaderCard title="11 // System Virus" description="Interactive distortion using backdrop-filter to 'corrupt' the UI."><VirusLoader /></LoaderCard>
        <LoaderCard title="12 // Kinetic Reactor" description="Interactive 3D core that reacts to hover with geometry shifts."><ReactorLoader /></LoaderCard>
        <LoaderCard title="13 // Data Ghost" description="Page-wide 'haunting' effect using backdrop-filter and mix-blend-mode."><GhostLoader /></LoaderCard>
        <LoaderCard title="14 // Infinite Recursion" description="Fractal-like narrative zoom showing infinite rebirth."><RecursionLoader /></LoaderCard>
        <LoaderCard title="15 // Magnetic Field" description="Interactive grid where elements 'point' toward the cursor."><MagneticLoader /></LoaderCard>
        <LoaderCard title="16 // Entropy Clock" description="Narrative piece showing order turning into chaos and back."><EntropyLoader /></LoaderCard>
      </main>
      <footer className="p-8 border-t border-white/10 text-center text-xs text-white/20 uppercase tracking-widest">
        <p>bool ceo_bypass_triggered = true; // Enjoy the chaos.</p>
      </footer>
    </div>
  );
}

function LoaderCard({ title, description, children }: { title: string, description: string, children: React.ReactNode }) {
  return (
    <div className="border border-white/10 bg-[#0a0a0a] p-6 flex flex-col h-[400px] group hover:border-red-600/50 transition-colors duration-500 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 z-20"></div>
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      <div className="flex-1 flex items-center justify-center relative z-10">{children}</div>
      <div className="mt-6 relative z-10 border-t border-white/10 pt-4">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white/80">{title}</h2>
        <p className="text-[10px] text-white/40 mt-2 font-mono leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function TesseractLoader() {
  return (
    <div className="tesseract-container">
      <div className="tesseract">
        <div className="tesseract-cube outer">
          <div className="tesseract-face front"></div><div className="tesseract-face back"></div>
          <div className="tesseract-face right"></div><div className="tesseract-face left"></div>
          <div className="tesseract-face top"></div><div className="tesseract-face bottom"></div>
        </div>
        <div className="tesseract-cube inner">
          <div className="tesseract-face front"></div><div className="tesseract-face back"></div>
          <div className="tesseract-face right"></div><div className="tesseract-face left"></div>
          <div className="tesseract-face top"></div><div className="tesseract-face bottom"></div>
        </div>
      </div>
    </div>
  );
}

function GlitchLoader() { return <div className="glitch-loader" data-text="LOADING">LOADING</div>; }

function LiquidLoader() {
  return (
    <div className="liquid-container">
      <div className="liquid-blob blob-1"></div><div className="liquid-blob blob-2"></div>
      <div className="liquid-blob blob-3"></div><div className="liquid-blob blob-4"></div>
    </div>
  );
}

function MandalaLoader() {
  return (
    <div className="mandala-container">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="mandala-ring" style={{ width: `${(i + 1) * 8}px`, height: `${(i + 1) * 8}px`, animationDelay: `${i * -0.15}s`, borderWidth: `${(i % 2) + 1}px`, borderColor: `hsl(${i * 15}, 80%, 50%)` }}></div>
      ))}
    </div>
  );
}

function HyperspaceLoader() { return <div className="hyperspace-container"><div className="hyperspace-core"></div></div>; }

function BrutalistLoader() {
  return (
    <div className="brutalist-container">
      <div className="brutalist-track track-1"><span>LOADING</span><span>LOADING</span><span>LOADING</span><span>LOADING</span></div>
      <div className="brutalist-track track-2"><span>SYSTEM</span><span>SYSTEM</span><span>SYSTEM</span><span>SYSTEM</span></div>
      <div className="brutalist-track track-3"><span>FAILURE</span><span>FAILURE</span><span>FAILURE</span><span>FAILURE</span></div>
      <div className="brutalist-overlay"></div>
    </div>
  );
}

function QuantumLoader() {
  const particles = 60;
  const shadows = Array.from({ length: particles }).map((_, i) => `${(i - particles/2) * 5}px 0px 0px rgba(255, ${i * 4}, 50, 0.8)`).join(', ');
  return (
    <div className="quantum-container">
      <div className="quantum-string" style={{ boxShadow: shadows }}></div>
      <div className="quantum-string delay" style={{ boxShadow: shadows }}></div>
    </div>
  );
}

function SiphonLoader() {
  return (
    <div className="siphon-grid">
      {Array.from({ length: 100 }).map((_, i) => {
        const dist = Math.sqrt(Math.pow((i % 10) - 4.5, 2) + Math.pow(Math.floor(i / 10) - 4.5, 2));
        return <div key={i} className="siphon-cell" style={{ animationDelay: `${dist * -0.2}s` }}></div>;
      })}
    </div>
  );
}

function NeuralLoader() {
  return (
    <div className="neural-container">
      <div className="neural-poly poly-1"></div><div className="neural-poly poly-2"></div><div className="neural-poly poly-3"></div>
    </div>
  );
}

function SingularityLoader() {
  return (
    <div className="singularity-container">
      <div className="singularity-core"></div>
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="singularity-ring" style={{ width: `${(i + 1) * 20}px`, height: `${(i + 1) * 20}px`, animationDelay: `${i * -2.5}s` }}></div>
      ))}
    </div>
  );
}

function VirusLoader() {
  return (
    <div className="virus-container">
      <div className="flex flex-col gap-2 p-4 opacity-20">
        <div className="h-4 w-full bg-white/20 rounded"></div>
        <div className="h-4 w-3/4 bg-white/20 rounded"></div>
        <div className="h-4 w-1/2 bg-white/20 rounded"></div>
      </div>
      <div className="virus-scanner"></div>
      <div className="virus-distortion"></div>
      <div className="virus-text">CRITICAL_ERROR: MEMORY_LEAK_DETECTED // OVERRIDE_ACTIVE</div>
    </div>
  );
}

function ReactorLoader() {
  return (
    <div className="reactor-container">
      <div className="reactor-core"></div>
      <div className="reactor-part p1"></div>
      <div className="reactor-part p2"></div>
      <div className="reactor-part p3"></div>
      <div className="reactor-part p4"></div>
    </div>
  );
}

function GhostLoader() {
  return (
    <div className="ghost-container">
      <div className="ghost-layer"></div>
      <div className="ghost-figure"></div>
      <div className="ghost-glitch"></div>
    </div>
  );
}

function RecursionLoader() {
  return (
    <div className="recursion-container">
      <div className="recursion-box">
        <div className="recursion-box" style={{ transform: 'scale(0.5)' }}>
          <div className="recursion-box" style={{ transform: 'scale(0.5)' }}></div>
        </div>
      </div>
    </div>
  );
}

function MagneticLoader() {
  return (
    <div className="magnetic-grid">
      {Array.from({ length: 64 }).map((_, i) => {
        const x = (i % 8) - 3.5;
        const y = Math.floor(i / 8) - 3.5;
        const angle = Math.atan2(y, x) * (180 / Math.PI);
        return <div key={i} className="magnetic-needle" style={{ '--rot': `${angle + 90}deg` } as React.CSSProperties}></div>;
      })}
    </div>
  );
}

function EntropyLoader() {
  return (
    <div className="entropy-container">
      <div className="entropy-hand"></div>
    </div>
  );
}
