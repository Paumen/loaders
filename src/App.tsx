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
        <LoaderCard title="10 // The Grid Smasher" description="Layout Animation: Animates CSS Grid tracks instead of transforms."><GridSmasher /></LoaderCard>
        <LoaderCard title="11 // Moiré Illusion" description="Mobile Interactive: TAP to toggle a massive repeating gradient optical illusion."><MoireIllusion /></LoaderCard>
        <LoaderCard title="12 // System Hijack" description="Page Interaction: TAP to trigger a fixed-position, screen-swallowing difference mask."><SystemHijack /></LoaderCard>
        <LoaderCard title="13 // Typographic Collapse" description="Story: A narrative told purely through letter-spacing, content, and blur filters."><TypoCollapse /></LoaderCard>
        <LoaderCard title="14 // Z-Index Slicer" description="Animation: Uses clip-path to slice a block, animating pieces through different z-indexes."><ZIndexSlicer /></LoaderCard>
        <LoaderCard title="15 // The Truth Lens" description="Page Interaction: TAP to scan the page with a color-dodge beam."><TruthLens /></LoaderCard>
        <LoaderCard title="16 // Alchemical Transmutation" description="Story: A geometric ritual that draws, ignites, and collapses."><Alchemy /></LoaderCard>
        <LoaderCard title="17 // The Black Hole" description="Page Interaction: TAP to open a massive gravity well that distorts the page."><BlackHole /></LoaderCard>
        <LoaderCard title="18 // Evolution of a Div" description="Story: A single div transforming through the history of web design."><DivEvolution /></LoaderCard>
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

function GridSmasher() {
  return (
    <div className="grid-smasher">
      <div></div><div></div><div></div>
      <div></div><div></div><div></div>
      <div></div><div></div><div></div>
    </div>
  );
}

function MoireIllusion() {
  return (
    <div className="moire-wrapper">
      <input type="checkbox" id="moire-toggle" className="moire-toggle hidden" />
      <label htmlFor="moire-toggle" className="absolute inset-0 z-10 cursor-pointer"></label>
      <div className="moire-bg"></div>
      <div className="moire-fg"></div>
      <div className="absolute bottom-2 left-2 text-[10px] text-red-600 font-bold pointer-events-none mix-blend-difference z-20">TAP TO DISTORT</div>
    </div>
  );
}

function SystemHijack() {
  return (
    <div className="flex items-center justify-center w-full h-full relative">
      <input type="checkbox" id="hijack-toggle" className="hijack-toggle hidden" />
      <label htmlFor="hijack-toggle" className="hijack-btn">HIJACK</label>
      <div className="hijack-overlay">
        <div className="hijack-text">SYSTEM OVERRIDE</div>
      </div>
    </div>
  );
}

function TypoCollapse() {
  return (
    <div className="typo-container">
      <div className="typo-text"></div>
    </div>
  );
}

function ZIndexSlicer() {
  return (
    <div className="slicer-container">
      <div className="slice"></div>
      <div className="slice"></div>
      <div className="slice"></div>
      <div className="slice"></div>
    </div>
  );
}

function TruthLens() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <input type="checkbox" id="lens-toggle" className="lens-toggle hidden" />
      <label htmlFor="lens-toggle" className="lens-btn">SCAN</label>
      <div className="lens-beam"></div>
    </div>
  );
}

function Alchemy() {
  return (
    <div className="alchemy-wrapper">
      <div className="alc-circle"></div>
      <div className="alc-triangle"></div>
      <div className="alc-core"></div>
    </div>
  );
}

function BlackHole() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <input type="checkbox" id="bh-toggle" className="bh-toggle hidden" />
      <label htmlFor="bh-toggle" className="bh-label">VOID</label>
      <div className="bh-event-horizon"></div>
      <div className="bh-singularity"></div>
    </div>
  );
}

function DivEvolution() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="evo-div"></div>
    </div>
  );
}

