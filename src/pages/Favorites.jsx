import Gallery from '../components/Gallery';

function Favorites({ images, loading, favorites, onFavorite }) {
  const savedImages = images.filter((item) =>
    favorites.includes(item.id)
  );

  if (loading) return <main className="page"><p className="empty-state">Loading favorites...</p></main>;

  return (
    <main className="page">
      <section className="page-intro compact">
        <p className="overline">YOUR COLLECTION</p>

        <h1>Favorite images.</h1>

        <p>
          All the photos you have saved in one place.
        </p>
      </section>

      <Gallery
        images={savedImages}
        favorites={favorites}
        onFavorite={onFavorite}
      />
    </main>
  );
}

export default Favorites;
