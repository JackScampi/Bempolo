import Image from "next/image";

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #ff77ff 0%, #00ffff 100%)',
    }}>
      <Image
        src="/bempolo.png"
        alt="Bempolo mascot"
        width={256}
        height={256}
        style={{ borderRadius: '24px', boxShadow: '0 0 32px #00ffff' }}
        priority
      />
      <h1 className="neon-glow" style={{ fontSize: '3rem', color: 'var(--vaporwave-yellow)', marginTop: '2rem' }}>
        Welcome to Bempolo
      </h1>
      <p className="neon-border" style={{
        padding: '1rem 2rem',
        borderRadius: '10px',
        marginTop: '2rem',
        background: 'rgba(34, 34, 34, 0.8)',
        color: 'var(--vaporwave-pink)'
      }}>
        Your vaporwave-themed Next.js starter.<br/>
        <strong>Bempolo</strong> is your mascot and the visual reference for the AI in this project.
      </p>
    </main>
  );
}