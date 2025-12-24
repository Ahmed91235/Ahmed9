import React from 'react'

function App() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '100%'
    }}>
      <h1 style={{
        fontSize: '4rem',
        fontWeight: 'bold',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        animation: 'pulse 2s ease-in-out infinite'
      }}>
        Ahmed
      </h1>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  )
}

export default App
