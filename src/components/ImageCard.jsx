import '../styles/Card.css';

function ImageCard({ item, isFavorite, onFavorite, onPreview }) {
  return (
    <article className="image-card">
      <button
        className="photo-preview"
        onClick={() => onPreview(item)}
        aria-label={`View ${item.title} in full size`}
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
        />

        <span className="preview-label">
          View photo
        </span>
      </button>

      <div className="card-content">
        <span className="card-category">
          {item.category}
        </span>

        <h3>{item.title}</h3>

        <button
          className={isFavorite ? 'favorite saved' : 'favorite'}
          onClick={() => onFavorite(item.id)}
          aria-pressed={isFavorite}
        >
          {isFavorite ? '♥' : '♡'}
          <span>
            {isFavorite ? 'Saved' : 'Save photo'}
          </span>
        </button>
      </div>
    </article>
  );
}

export default ImageCard;