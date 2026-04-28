import { useState } from 'react';

const UserIcon = () => (
    <svg style={{ width: '48px', height: '48px', marginBottom: '15px', color: '#4facfe'}} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4A4 4 0 0 1 16 8A4 4 0 0 1 12 12A4 4 0 0 1 8 8A4 4 0 0 1 12 4M12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z" />
    </svg>
);

function Reclutamiento() {
  const [cadete, setCadete] = useState('');
  const [destino, setDestino] = useState('marte');

  const procesarSolicitud = (e) => {
    e.preventDefault(); 
    alert(`🛰️ ¡Solicitud recibida!\nCadete: ${cadete}\nDestino: ${destino.toUpperCase()}`);
    setCadete('');
    setDestino('marte');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', lineHeight: '1.6', color: '#fff' }}>
      
      {/* Título con gradiente */}
      <h1 style={{ textAlign: 'center', marginBottom: '40px', background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '2.5rem' }}>
        Portal de Reclutamiento Interestelar
      </h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        
        <section style={{ flex: '1 1 450px' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>¿Por qué unirte a AstroWeb?</h2>
          <p style={{ color: '#b0b8c4', marginBottom: '20px' }}>
            Buscamos mentes brillantes y corazones valientes listos para la exploración del espacio profundo. Nuestra agencia ofrece capacitación simulada de vanguardia.
          </p>
          
          {/* Aplicamos glass-panel aquí */}
          <div className="glass-panel" style={{ padding: '20px' }}>
            <h3 style={{ marginTop: '0', color: '#4facfe' }}>Requisitos Mínimos:</h3>
            <ul style={{ color: '#e6edf3', marginLeft: '15px', paddingLeft: '10px' }}>
              <li>Edad: 18 - 45 años estándar terrestre.</li>
              <li>Aptitud física y psicológica de Grado B-4.</li>
            </ul>
          </div>
        </section>

        {/* Aplicamos glass-panel al formulario completo */}
        <section className="glass-panel" style={{ flex: '1 1 350px', padding: '30px' }}>
          <UserIcon />
          <h2 style={{ marginTop: '0', color: '#fff', marginBottom: '20px' }}>Solicitud de Cadete</h2>
          
          <form onSubmit={procesarSolicitud} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ fontWeight: 'bold', marginBottom: '8px', color: '#b0b8c4' }}>Nombre del Cadete:</label>
              <input 
                type="text" 
                value={cadete} 
                onChange={(e) => setCadete(e.target.value)} 
                required
                style={{ 
                  padding: '12px', borderRadius: '6px', 
                  border: '1px solid rgba(255,255,255,0.2)', 
                  background: 'rgba(0,0,0,0.3)', color: '#fff', outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ fontWeight: 'bold', marginBottom: '8px', color: '#b0b8c4' }}>Planeta Destino:</label>
              <select 
                value={destino} 
                onChange={(e) => setDestino(e.target.value)}
                style={{ 
                  padding: '12px', borderRadius: '6px', 
                  border: '1px solid rgba(255,255,255,0.2)', 
                  background: 'rgba(0,0,0,0.3)', color: '#fff', outline: 'none' 
                }}
              >
                {/* Opciones en negro para que se lean bien al desplegarse en navegadores */}
                <option style={{color: '#000'}} value="luna">Base Lunar Alpha</option>
                <option style={{color: '#000'}} value="marte">Colonia en Marte</option>
                <option style={{color: '#000'}} value="titan">Estación en Titán</option>
              </select>
            </div>

            <button type="submit" style={{ 
              padding: '15px', background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)', 
              color: '#000', fontWeight: 'bold', fontSize: '1.1rem', border: 'none', 
              borderRadius: '6px', cursor: 'pointer', transition: 'transform 0.2s'
            }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
              Iniciar Simulación
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Reclutamiento;