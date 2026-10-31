import '../styles/Navbar.css';

function Navbar({ page, setPage, favoriteCount, onLogout }) {

  const menuItems = [
    ['home', 'Home'],
    ['favorites', `Favorites (${favoriteCount})`],
    ['about', 'About']
  ];

  return (
    <header className="navbar">

      <button
        className="logo"
        onClick={() => setPage('home')}
      >
        📷 <span>Photo Gallery</span>
      </button>

      <nav>

        {menuItems.map(([id, label]) => (
          <button
            key={id}
            className={page === id ? 'active' : ''}
            onClick={() => setPage(id)}
          >
            {label}
          </button>
        ))}

        <button onClick={onLogout}>
          Logout
        </button>

      </nav>

    </header>
  );
}

export default Navbar;

