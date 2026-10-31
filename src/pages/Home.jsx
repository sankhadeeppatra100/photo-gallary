import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import Gallery from '../components/Gallery';

function Home({ images, loading, favorites, onFavorite }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const displayedImages = images.filter((item) => {
    const categoryMatch =
      category === 'All' || item.category === category;

    const searchMatch =
      item.title.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  if (loading) return <main className="page"><p className="empty-state">Loading gallery...</p></main>;

  return (
    <main className="page">
      <section className="page-intro">
        <p className="overline">CAPTURED MOMENTS</p>

        

        
      </section>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <CategoryFilter
        activeCategory={category}
        onChange={setCategory}
      />

      <Gallery
        images={displayedImages}
        favorites={favorites}
        onFavorite={onFavorite}
      />
    </main>
  );
}

export default Home;
