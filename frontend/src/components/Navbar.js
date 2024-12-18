import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <Link to="/" style={styles.logo}>
        YouTube Clone
      </Link>

      {/* Navigation Links */}
      <div style={styles.links}>
        <Link to="/" style={styles.navLink}>
          Home
        </Link>

        {isAuthenticated ? (
          <>
            <Link to="/upload" style={styles.navLink}>
              Upload Video
            </Link>
            <button onClick={logout} style={styles.logoutButton}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.navButton}>
              Login
            </Link>
            <Link to="/signup" style={styles.navButton}>
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#FF0000', // YouTube red
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  logo: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'none',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.3s',
  },
  navButton: {
    padding: '8px 16px',
    backgroundColor: '#fff',
    color: '#FF0000',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'background-color 0.3s',
  },
  logoutButton: {
    padding: '8px 16px',
    backgroundColor: '#fff',
    color: '#FF0000',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'background-color 0.3s',
  },
};

export default Navbar;
