import { categories } from '../data/images';

function CategoryFilter({ activeCategory, onChange }) {
  return (
    <section className="category-section">
      <p>Category:</p>

      <div className="categories">
        {categories.map((category) => {
          return (
            <button
              key={category}
              onClick={() => onChange(category)}
              className={category === activeCategory ? 'selected' : ''}
            >
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default CategoryFilter;