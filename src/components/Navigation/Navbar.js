import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      padding: '10px',
      backgroundColor: '#f0f0f0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    link: {
      textDecoration: 'none',
      fontWeight: 'bold',
      color: '#0044cc',
    },
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/contact-us" style={styles.link}>Contact</Link>
      <Link to="/login" style={styles.link}>Login</Link>
    </nav>
  );
};

export default Navbar;