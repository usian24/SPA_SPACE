import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Reclutamiento from './pages/Reclutamiento';
import Navbar from './pages/components/Navbar';

// 👨‍🚀 ASTRONAUTA DE CÓDIGO (Hecho 100% con trazos matemáticos SVG)
const AstronautaCodigo = () => (
  <svg viewBox="0 0 200 250" style={{ width: '180px', filter: 'drop-shadow(0px 10px 20px rgba(79, 172, 254, 0.4))' }} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Antena */}
    <path d="M100 20 V 40" stroke="#fff" strokeWidth="4" />
    <circle cx="100" cy="20" r="6" fill="#4facfe" />
    {/* Mochila */}
    <rect x="40" y="70" width="120" height="110" rx="20" fill="#e2e8f0" />
    <rect x="50" y="80" width="100" height="90" rx="10" fill="#cbd5e1" />
    {/* Brazos */}
    <path d="M 50 120 Q 15 120 15 160 Q 15 190 35 190" fill="none" stroke="#f8fafc" strokeWidth="28" strokeLinecap="round" />
    <path d="M 150 120 Q 185 120 185 160 Q 185 190 165 190" fill="none" stroke="#f8fafc" strokeWidth="28" strokeLinecap="round" />
    {/* Piernas */}
    <path d="M 80 170 V 220" fill="none" stroke="#f8fafc" strokeWidth="32" strokeLinecap="round" />
    <path d="M 120 170 V 220" fill="none" stroke="#f8fafc" strokeWidth="32" strokeLinecap="round" />
    {/* Zapatos oscuros */}
    <rect x="64" y="215" width="32" height="15" rx="5" fill="#64748b" />
    <rect x="104" y="215" width="32" height="15" rx="5" fill="#64748b" />
    {/* Cuerpo principal */}
    <rect x="60" y="100" width="80" height="80" rx="30" fill="#ffffff" />
    {/* Cinturón y detalles */}
    <rect x="60" y="160" width="80" height="12" fill="#94a3b8" />
    <circle cx="100" cy="166" r="4" fill="#ef4444" />
    <circle cx="85" cy="166" r="3" fill="#4facfe" />
    {/* Casco */}
    <circle cx="100" cy="80" r="45" fill="#ffffff" />
    {/* Visor de Cristal (Reflejo del espacio) */}
    <path d="M 60 80 Q 100 120 140 80 Q 100 40 60 80 Z" fill="#0f172a" />
    <path d="M 70 75 Q 100 100 130 75 Q 100 55 70 75 Z" fill="#38bdf8" opacity="0.7" />
    <circle cx="85" cy="65" r="5" fill="#ffffff" opacity="0.9" />
  </svg>
);


function App() {
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });

  const manejarMovimientoMouse = (e) => {
    // Calculamos el movimiento para el efecto Parallax
    const x = (window.innerWidth / 2 - e.clientX) / 45;
    const y = (window.innerHeight / 2 - e.clientY) / 45;
    setPosicion({ x, y });
  };

  return (
    <div onMouseMove={manejarMovimientoMouse} style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      
      {/* 🌌 FONDO DE ESTRELLAS */}
      <div className="stars-background" style={{ transform: `translate(${posicion.x}px, ${posicion.y}px)` }}></div>

      {/* 🪐 PLANETA 1: El Gigante Turquesa con anillos (Derecha) */}
      <div className="floating" style={{ position: 'absolute', right: '10%', top: '20%', zIndex: -1, transform: `translate(${posicion.x * -1.5}px, ${posicion.y * -1.5}px)` }}>
        <div style={{
          width: '220px', height: '220px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #00C9FF 0%, #92FE9D 100%)',
          boxShadow: '0 0 80px rgba(0, 201, 255, 0.4), inset -30px -30px 50px rgba(0,0,0,0.6)',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%', width: '340px', height: '60px',
            border: '15px solid rgba(255,255,255,0.15)', borderTopColor: 'transparent', borderBottomColor: 'transparent',
            borderRadius: '50%', transform: 'translate(-50%, -50%) rotate(25deg)',
            boxShadow: '0 0 20px rgba(255,255,255,0.2)'
          }}></div>
        </div>
      </div>

      {/* 🌍 PLANETA 2: Marte / Planeta de Lava (Izquierda Abajo) */}
      <div className="floating" style={{ position: 'absolute', left: '8%', bottom: '15%', zIndex: -1, animationDelay: '1s', transform: `translate(${posicion.x * -2.5}px, ${posicion.y * -2.5}px)` }}>
        <div style={{
          width: '140px', height: '140px', borderRadius: '50%',
          background: 'linear-gradient(45deg, #ff4b1f 0%, #ff9068 100%)',
          boxShadow: '0 0 50px rgba(255, 75, 31, 0.4), inset -20px -20px 40px rgba(0,0,0,0.7)'
        }}></div>
      </div>

      {/* 🌑 PLANETA 3: Luna Morada Lejana (Arriba Izquierda) */}
      <div className="floating" style={{ position: 'absolute', left: '25%', top: '10%', zIndex: -2, animationDelay: '2s', transform: `translate(${posicion.x * -0.8}px, ${posicion.y * -0.8}px)` }}>
        <div style={{
          width: '60px', height: '60px', borderRadius: '50%',
          background: 'linear-gradient(to bottom, #8A2387, #E94057, #F27121)',
          boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.8)'
        }}></div>
      </div>

      {/* 👨‍🚀 EL ASTRONAUTA FLOTANDO (Derecha Abajo) */}
      <div className="floating" style={{ position: 'absolute', right: '25%', bottom: '10%', zIndex: 0, animationDelay: '0.5s', transform: `translate(${posicion.x * -3}px, ${posicion.y * -3}px) rotate(${posicion.x * 0.5}deg)` }}>
         <AstronautaCodigo />
      </div>

      {/* 📱 CONTENIDO PRINCIPAL DE LA APP (Tus Rutas y Páginas) */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <BrowserRouter>
          <Navbar /> 
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/reclutamiento" element={<Reclutamiento />} /> 
          </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;