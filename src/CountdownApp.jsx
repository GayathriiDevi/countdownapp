import React, { useEffect, useState } from 'react';

const CountdownApp = () => {
  const targetDate = new Date('July 31, 2025 14:08:00').getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({});
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        ❤️ Countdown to July 31st, 2:08 PM ❤️
      </h1>
      {timeLeft.days !== undefined ? (
        <div style={styles.countdown}>
          {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, i) => {
            const value = timeLeft[label.toLowerCase()];
            return (
              <div key={label} style={styles.timeBox}>
                <span style={styles.time}>{value}</span>
                <span style={styles.label}>{label}</span>
                <div className="heart" style={styles.heart}>❤️</div>
              </div>
            );
          })}
        </div>
      ) : (
        <h2 style={styles.ended}>💖 Countdown Ended! 💖</h2>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    color: '#660024',
    textShadow: '1px 1px 2px #ffb6c1',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    fontWeight: 'bold',
  },
  countdown: {
    display: 'flex',
    gap: '2rem',
  },
  timeBox: {
    background: 'white',
    padding: '1.5rem 2rem',
    borderRadius: '20px',
    boxShadow: '0 8px 15px rgba(255, 105, 180, 0.4)',
    textAlign: 'center',
    position: 'relative',
    width: '100px',
    userSelect: 'none',
    transition: 'transform 0.3s ease',
    cursor: 'default',
  },
  time: {
    fontSize: '2.5rem',
    fontWeight: '900',
    color: '#D81E5B',
  },
  label: {
    display: 'block',
    marginTop: '0.4rem',
    fontSize: '1.1rem',
    color: '#C2185B',
    letterSpacing: '1.2px',
  },
  heart: {
    position: 'absolute',
    bottom: '-15px',
    right: '10px',
    fontSize: '1.5rem',
    animation: 'pulse 2s infinite',
  },
  ended: {
    fontSize: '2rem',
    color: '#D81E5B',
    fontWeight: 'bold',
    textShadow: '0 0 8px #FF4081',
  },
  '@keyframes pulse': {
    '0%, 100%': { transform: 'scale(1)', opacity: 1 },
    '50%': { transform: 'scale(1.3)', opacity: 0.7 },
  },
};

export default CountdownApp;
