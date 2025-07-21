import { useState } from 'react';
import ProfileCard from './Profilecard'; 
import './App.css';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [animation, setAnimation] = useState('');

  const toggleProfile = () => {
    if (!showProfile) {
      setAnimation('fade-in');
      setShowProfile(true);
    } else {
      setAnimation('fade-out');
      setTimeout(() => setShowProfile(false), 500); // Hide after animation
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 className="fade-in">Hello! I am V. Saiganesh</h1>

      <p style={{ fontSize: '18px', marginTop: '10px', color: '#555' }}>
        A passionate web developer and tech enthusiast.
      </p>

      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={toggleProfile}
          style={{
            margin: '10px',
            padding: '12px 20px',
            fontSize: '16px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {showProfile ? 'Hide Profile' : 'Show Profile'}
        </button>
      </div>

      {showProfile && (
        <div className={animation} style={{ marginTop: '20px' }}>
          <img
            src="https://imgur.com/OM5wuPR.jpg"
            alt="V.Saiganesh"
            style={{
              width: '200px', // Adjusted size
              height: '200px',
              objectFit: 'cover',
              border: '3px solid #007BFF',
              borderRadius: '50%', // Circular image
              marginBottom: '15px',
            }}
          />

          <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', background: '#f9f9f9', maxWidth: '400px', margin: 'auto' }}>
            <h2>About Me</h2>
            <p><strong>Name:</strong> V. Saiganesh</p>
            <p><strong>Profession:</strong> Web Developer</p>
            <p><strong>Interests:</strong> Coding, AI, Cloud Computing</p>
            <p><strong>Skills:</strong> JavaScript, React, Node.js, AWS</p>
            <p><strong>Email:</strong> <a href="mailto:saiganesh30691@gmail.com">saiganesh30691@gmail.com</a></p>
            <p><strong>Phone:</strong> 6302434729</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
