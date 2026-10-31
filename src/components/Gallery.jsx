import { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import '../styles/Gallery.css';

function Gallery({ images, favorites, onFavorite }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    function closePhoto(event) {
      if (event.key === 'Escape') {
        setSelectedPhoto(null);
      }
    }

    window.addEventListener('keydown', closePhoto);

    return () => {
      window.removeEventListener('keydown', closePhoto);
    };
  }, []);

  if (images.length === 0) {
    return (
      <p className="empty-state">
        No images found. Try a different search or category.
      </p>
    );
  }

  return (
    <>
      <div className="gallery-summary">
        <span>
          {images.length} {images.length === 1 ? 'photo' : 'photos'} to explore
        </span>

        <span>Click a photo to view it</span>
      </div>

      <div className="gallery-grid">
        {images.map((item) => (
          <ImageCard
            key={item.id}
            item={item}
            isFavorite={favorites.includes(item.id)}
            onFavorite={onFavorite}
            onPreview={setSelectedPhoto}
          />
        ))}
      </div>

      {selectedPhoto && (
        <div
          className="photo-modal"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="modal-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close photo viewer"
            ></button>

            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
            />

            <div>
              <span className="card-category">
                {selectedPhoto.category}
              </span>

              <h2>{selectedPhoto.title}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;