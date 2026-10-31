import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import About from './pages/About';
import Login from './pages/Login';
import './App.css';
import { api } from './api';

function App() {

  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('authToken')));

  const [page, setPage] = useState('home');
  const [images, setImages] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGallery() {
      try {
        setImages(await api.getImages());
        if (loggedIn) setFavorites((await api.getFavorites()).map((image) => image.id));
      } catch (error) { console.error(error); }
      finally { setLoading(false); }
    }
    loadGallery();
  }, [loggedIn]);

  const login = async (credentials, isRegistering) => {
    const response = isRegistering
      ? await api.register(credentials.name, credentials.email, credentials.password)
      : await api.login(credentials.email, credentials.password, credentials.name);
    localStorage.setItem('authToken', response.token);
    setLoggedIn(true);
  };

  const toggleFavorite = async (id) => {
    const { favorite } = await api.toggleFavorite(id);
    setFavorites((current) => favorite ? [...current, id] : current.filter((item) => item !== id));
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setFavorites([]);
    setLoggedIn(false);
    setPage('home');
  };

  if (!loggedIn) {
    return <Login onLogin={login} />;
  }

  return (
    <div className="app">

      <Navbar
        page={page}
        setPage={setPage}
        favoriteCount={favorites.length}
        onLogout={logout}
      />

      {page === 'home' && (
        <Home
          images={images}
          loading={loading}
          favorites={favorites}
          onFavorite={toggleFavorite}
        />
      )}

      {page === 'favorites' && (
        <Favorites
          images={images}
          loading={loading}
          favorites={favorites}
          onFavorite={toggleFavorite}
        />
      )}

      {page === 'about' && <About />}

      <Footer />

    </div>
  );
}

export default App;
