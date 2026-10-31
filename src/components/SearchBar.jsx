function SearchBar({ value, onChange }) {
  return (
    <label className="search-bar">
      <span>🔍</span>

      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search images"
        aria-label="Search images"
      />
    </label>
  );
}

export default SearchBar;