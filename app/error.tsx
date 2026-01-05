'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
      <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Une erreur s&apos;est produite</h2>
      <button
        onClick={reset}
        style={{
          padding: '12px 24px',
          backgroundColor: '#A01ED9',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Réessayer
      </button>
    </div>
  );
}



