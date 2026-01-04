import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center',
      padding: '20px',
    }}>
      <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Page non trouvée</h2>
      <p style={{ marginBottom: '24px', color: '#666' }}>La page que vous recherchez n&apos;existe pas.</p>
      <Link
        href="/"
        style={{
          padding: '12px 24px',
          backgroundColor: '#A01ED9',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontSize: '16px',
        }}
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}


