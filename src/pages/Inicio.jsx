const ExplorerIcon = () => (
    <svg style={{ width: '40px', height: '40px', marginBottom: '15px', color: '#4facfe'}} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2M12 20A8 8 0 1 1 20 12A8 8 0 0 1 12 20M13 7H11V11H7V13H11V17H13V13H17V11H13Z" />
    </svg>
);

function Inicio() {
  const programas = [
    { id: 1, title: 'Colonización de Marte', desc: 'Únete a la primera oleada de colonos en el Planeta Rojo.' },
    { id: 2, title: 'Base Lunar Alpha', desc: 'Desarrolla infraestructura para la minería de Helio-3.' },
    { id: 3, title: 'Sonda Europa', desc: 'Investigación de vida en los océanos subsuperficiales.' }
  ];

  return (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
      {/* Usamos la clase glass-panel aquí */}
      <header className="glass-panel" style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3.5rem', margin: '0 0 15px 0', background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Explorando la Frontera Final
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: '#b0b8c4' }}>
          AstroWeb SPA democratiza el acceso a la simulación de misiones espaciales. Aquí te preparas para el futuro de la humanidad en las estrellas.
        </p>
      </header>

      <section>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#fff', fontWeight: '300', letterSpacing: '2px' }}>PROGRAMAS ACTIVOS</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          {programas.map((programa) => (
            /* Y también usamos glass-panel en las tarjetas */
            <div key={programa.id} className="glass-panel" style={{ transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <ExplorerIcon />
              <h3 style={{ marginTop: '0', color: '#fff' }}>{programa.title}</h3>
              <p style={{ color: '#8b949e', fontSize: '0.95rem' }}>{programa.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Inicio;