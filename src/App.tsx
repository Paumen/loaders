import React, { useState } from 'react';
import './loaders.css';

export default function App() {
  const [page, setPage] = useState(1);

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

      <div className="p-4 md:p-8 flex flex-wrap justify-center gap-4 border-b border-white/10">
        {[1, 2, 3, 4, 5].map(p => (
          <button 
            key={p}
            onClick={() => setPage(p)}
            className={`px-6 py-2 border text-xs font-bold tracking-widest transition-colors ${page === p ? 'border-red-600 text-red-600 bg-red-600/10' : 'border-white/20 text-white/50 hover:border-white/50 hover:text-white'}`}
          >
            PAGE {p}
          </button>
        ))}
      </div>

      <main className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {page === 1 && (
          <>
            <LoaderCard 
              title="01 // Non-Euclidean Ooze" 
              description="Contrast/blur filter exploitation for organic merging."
              htmlElements={5}
              cpuCost="Low"
              gpuCost="High"
              animationDurations="4s, 5s, 6s, 7s (alternate)"
              repetitionPeriod="840s (14m)"
              cssProps="filter: blur() contrast(), mix-blend-mode: screen, transform: translate() scale()"
            ><LiquidLoader /></LoaderCard>
            <LoaderCard 
              title="02 // Alchemical Transmutation" 
              description="Story: A geometric ritual that draws, ignites, and collapses."
              htmlElements={4}
              cpuCost="Low"
              gpuCost="Medium"
              animationDurations="12s"
              repetitionPeriod="12s"
              cssProps="clip-path: polygon(), mix-blend-mode: difference, box-shadow, transform: rotate() scale()"
            ><Alchemy /></LoaderCard>
            <LoaderCard 
              title="03 // The Interrogator" 
              description="Page Interaction: A sweeping radar beam that inverts the card's text."
              htmlElements={3}
              cpuCost="Low"
              gpuCost="Medium"
              animationDurations="4s"
              repetitionPeriod="4s"
              cssProps="mix-blend-mode: difference, linear-gradient(), transform: rotate(), transform-origin"
            ><InterrogatorLoader /></LoaderCard>
            <LoaderCard 
              title="04 // Cellular Mitosis" 
              description="Story: A single cell elongates, splits into two, orbits, and merges back."
              htmlElements={4}
              cpuCost="Low"
              gpuCost="High"
              animationDurations="12s"
              repetitionPeriod="12s"
              cssProps="filter: blur() contrast(), transform: translate(), animation-delay"
            ><MitosisLoader /></LoaderCard>
          </>
        )}
        {page === 2 && (
          <>
            <LoaderCard 
              title="05 // The Grid Smasher" 
              description="Layout Animation: Animates CSS Grid tracks instead of transforms."
              htmlElements={10}
              cpuCost="High"
              gpuCost="Low"
              animationDurations="0.5s"
              repetitionPeriod="0.5s"
              cssProps="display: grid, grid-template-columns, grid-template-rows, steps()"
            ><GridSmasher /></LoaderCard>
            <LoaderCard 
              title="06 // System Virus" 
              description="Interactive distortion using backdrop-filter to 'corrupt' the UI."
              htmlElements={4}
              cpuCost="Low"
              gpuCost="High"
              animationDurations="0.1s, 4s, 8s"
              repetitionPeriod="8s"
              cssProps="backdrop-filter: invert() hue-rotate() blur(), clip-path: polygon(), transform: translate()"
            ><VirusLoader /></LoaderCard>
            <LoaderCard 
              title="07 // The UI Devourer" 
              description="Component Interaction: 'Shreds' the card content as it scans."
              htmlElements={3}
              cpuCost="Low"
              gpuCost="Medium"
              animationDurations="8s"
              repetitionPeriod="8s"
              cssProps="mix-blend-mode: difference, repeating-linear-gradient(), transform: translateY()"
            ><DevourerLoader /></LoaderCard>
          </>
        )}
        {page === 3 && (
          <>
            <LoaderCard 
              title="08 // Moiré Illusion" 
              description="Mobile Interactive: TAP to toggle a massive repeating gradient optical illusion."
              htmlElements={4}
              cpuCost="Low"
              gpuCost="High"
              animationDurations="20s (idle), 2s (active)"
              repetitionPeriod="20s (idle), 2s (active)"
              cssProps="repeating-radial-gradient(), :checked, ~ sibling selector, transform: scale() translateX() rotate()"
            ><MoireIllusion /></LoaderCard>
            <LoaderCard 
              title="09 // System Hijack" 
              description="Page Interaction: TAP to trigger a fixed-position, screen-swallowing difference mask."
              htmlElements={4}
              cpuCost="Low"
              gpuCost="Medium"
              animationDurations="0.1s, 2s"
              repetitionPeriod="2s"
              cssProps="mix-blend-mode: difference, clip-path: circle(), :checked, ~ sibling selector, position: fixed"
            ><SystemHijack /></LoaderCard>
            <LoaderCard 
              title="10 // The Truth Lens" 
              description="Page Interaction: TAP to scan the page with a color-dodge beam."
              htmlElements={4}
              cpuCost="Low"
              gpuCost="High"
              animationDurations="3s (interaction)"
              repetitionPeriod="3s"
              cssProps="mix-blend-mode: color-dodge, backdrop-filter: hue-rotate() contrast(), linear-gradient(), :checked"
            ><TruthLens /></LoaderCard>
            <LoaderCard 
              title="11 // The Black Hole" 
              description="Page Interaction: TAP to open a massive gravity well that distorts the page."
              htmlElements={5}
              cpuCost="Low"
              gpuCost="Very High"
              animationDurations="2s (interaction)"
              repetitionPeriod="2s"
              cssProps="backdrop-filter: blur() invert() grayscale(), conic-gradient(), clip-path: circle(), mix-blend-mode: overlay"
            ><BlackHole /></LoaderCard>
          </>
        )}
        {page === 4 && (
          <>
            <LoaderCard 
              title="12 // Fractal Mandala" 
              description="Calculated transform matrices with staggered delays."
              htmlElements={7}
              cpuCost="Low"
              gpuCost="Medium"
              animationDurations="6s (alternate)"
              repetitionPeriod="12s"
              cssProps="transform-style: preserve-3d, perspective, transform: rotateX() rotateZ() translateZ(), mix-blend-mode: screen"
            ><MandalaLoader /></LoaderCard>
            <LoaderCard 
              title="13 // Void Siphon" 
              description="Grid-based staggered animation delays simulating a gravity well."
              htmlElements={101}
              cpuCost="Medium"
              gpuCost="Medium"
              animationDurations="2.5s"
              repetitionPeriod="2.5s"
              cssProps="display: grid, transform: rotate() scale() translateZ(), animation-delay, cubic-bezier()"
            ><SiphonLoader /></LoaderCard>
            <LoaderCard 
              title="14 // Neural Collapse" 
              description="Aggressive clip-path interpolation with exclusion blending."
              htmlElements={4}
              cpuCost="Low"
              gpuCost="High"
              animationDurations="3s, 4s, 5s, 7s, 20s"
              repetitionPeriod="420s (7m)"
              cssProps="clip-path: polygon(), mix-blend-mode: exclusion, transform: rotate(), animation-direction"
            ><NeuralLoader /></LoaderCard>
          </>
        )}
        {page === 5 && (
          <>
            <LoaderCard 
              title="15 // Hyperspace Tear" 
              description="Repeating conic gradients with radial masking."
              htmlElements={2}
              cpuCost="Low"
              gpuCost="High"
              animationDurations="0.4s (alternate), 8s"
              repetitionPeriod="8s"
              cssProps="repeating-conic-gradient(), mask-image: radial-gradient(), box-shadow, transform: rotate() scale()"
            ><HyperspaceLoader /></LoaderCard>
            <LoaderCard 
              title="16 // Quantum String" 
              description="Massive box-shadow arrays manipulated via scale transforms."
              htmlElements={3}
              cpuCost="Low"
              gpuCost="High"
              animationDurations="2.5s (alternate)"
              repetitionPeriod="5s"
              cssProps="filter: blur() contrast(), transform: scaleY() rotate(), animation-delay"
            ><QuantumLoader /></LoaderCard>
            <LoaderCard 
              title="17 // Typographic Collapse" 
              description="Story: A narrative told purely through letter-spacing, content, and blur filters."
              htmlElements={2}
              cpuCost="Medium"
              gpuCost="Medium"
              animationDurations="8s"
              repetitionPeriod="8s"
              cssProps="letter-spacing, filter: blur(), transform: scale() rotate(), ::before pseudo-element content"
            ><TypoCollapse /></LoaderCard>
            <LoaderCard 
              title="18 // The Singularity" 
              description="30s narrative cycle: Birth, Expansion, and Heat Death of a universe."
              htmlElements={3}
              cpuCost="Low"
              gpuCost="Medium"
              animationDurations="30s"
              repetitionPeriod="30s"
              cssProps="box-shadow, transform: scale(), opacity, cubic-bezier()"
            ><SingularityLoader /></LoaderCard>
          </>
        )}
      </main>
      <footer className="p-8 border-t border-white/10 text-center text-xs text-white/20 uppercase tracking-widest">
        <p>bool ceo_bypass_triggered = true; // Enjoy the chaos.</p>
      </footer>
    </div>
  );
}

function LoaderCard({ 
  title, 
  description, 
  cssProps,
  htmlElements,
  cpuCost,
  gpuCost,
  animationDurations,
  repetitionPeriod,
  children 
}: { 
  title: string, 
  description: string, 
  cssProps?: string,
  htmlElements?: number,
  cpuCost?: string,
  gpuCost?: string,
  animationDurations?: string,
  repetitionPeriod?: string,
  children: React.ReactNode 
}) {
  return (
    <div className="border border-white/10 bg-[#0a0a0a] p-6 flex flex-col h-[400px] group hover:border-red-600/50 transition-colors duration-500 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 z-20"></div>
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      <div className="flex-1 flex items-center justify-center relative z-10">{children}</div>
      <div className="mt-6 relative z-10 border-t border-white/10 pt-4">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white/80">{title}</h2>
        <p className="text-[10px] text-white/40 mt-2 font-mono leading-relaxed">{description}</p>
        {(cssProps || htmlElements || cpuCost || gpuCost || animationDurations || repetitionPeriod) && (
          <div className="text-[10px] text-white/40 border-t border-white/10 pt-2 mt-2 grid grid-cols-2 gap-2">
            {htmlElements && <div><span className="text-white/60">Elements:</span> {htmlElements}</div>}
            {cpuCost && <div><span className="text-white/60">CPU:</span> {cpuCost}</div>}
            {gpuCost && <div><span className="text-white/60">GPU:</span> {gpuCost}</div>}
            {animationDurations && <div><span className="text-white/60">Durations:</span> {animationDurations}</div>}
            {repetitionPeriod && <div><span className="text-white/60">True Period:</span> {repetitionPeriod}</div>}
            {cssProps && <div className="col-span-2"><span className="text-white/60">CSS:</span> {cssProps}</div>}
          </div>
        )}
      </div>
    </div>
  );
}

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

function DevourerLoader() {
  return (
    <div className="devourer-container">
      <div className="devourer-scanner"></div>
      <div className="devourer-mask"></div>
    </div>
  );
}

function InterrogatorLoader() {
  return (
    <div className="interrogator-container">
      <div className="interrogator-beam"></div>
    </div>
  );
}

function MitosisLoader() {
  return (
    <div className="mitosis-container">
      <div className="mitosis-cell"></div>
      <div className="mitosis-cell b"></div>
    </div>
  );
}

