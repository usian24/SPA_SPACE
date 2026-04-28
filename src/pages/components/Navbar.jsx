import { Link } from 'react-router-dom';

// SVG Iconos Básicos
const HomeIcon = () => (
  <svg style={{marginRight: '8px', width: '20px', height: '20px'}} viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);

const RocketIcon = () => (
  <svg style={{marginRight: '8px', width: '20px', height: '20px'}} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.11,10L10,8.19L8.19,10L10,12.11L12.11,10M12,2A10,10 0 0,0 2,12C2,13.88 2.53,15.63 3.44,17.1L5.61,14.93L5.61,10.63C5.61,10.23 5.76,9.85 6.04,9.57C6.32,9.29 6.7,9.13 7.11,9.13L11.41,9.13L13.58,6.96C12.11,6.05 10.36,5.52 8.49,5.52C7.29,5.52 6.13,5.79 5.06,6.29L6.5,7.72C7.11,7.31 7.82,7.09 8.59,7.09C10.04,7.09 11.23,8.27 11.23,9.72C11.23,10.49 11.01,11.2 10.6,11.81L12.03,13.25C12.53,12.18 12.8,11.01 12.8,9.82C12.8,7.94 12.27,6.19 11.36,4.71L13.53,2.54C13.81,2.26 14.2,2.1 14.61,2.1C15.02,2.1 15.41,2.26 15.69,2.54L21.46,8.31C21.74,8.59 21.9,8.97 21.9,9.38C21.9,9.79 21.74,10.18 21.46,10.46L19.29,12.63C20.76,14.1 21.3,15.86 21.3,17.73C21.3,18.93 21.03,20.09 20.53,21.16L19.1,19.73C19.5,19.11 19.72,18.4 19.72,17.63C19.72,16.18 18.54,15 17.09,15C16.32,15 15.61,15.22 15,15.63L13.56,14.19C14.06,13.12 14.33,11.96 14.33,10.77C14.33,8.89 13.8,7.14 12.89,5.67L15.06,3.5L12,2Z" />
  </svg>
);

function Navbar() {
  return (
    <nav style={{ 
      background: '#1a1a1a', 
      color: '#fff',
      padding: '15px 30px', 
      borderRadius: '8px', 
      marginBottom: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
        <RocketIcon /> AstroWeb <span style={{ color: '#aaa', marginLeft: '8px' }}>SPA</span>
      </div>
      <div style={{ display: 'flex', gap: '15px' }}>
        <Link 
          to="/" 
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#fff', padding: '8px 12px', borderRadius: '4px', background: '#333' }}
        >
          <HomeIcon /> Inicio
        </Link>
        <Link 
          to="/reclutamiento" 
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#fff', padding: '8px 12px', borderRadius: '4px' }}
        >
          Unirse
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;