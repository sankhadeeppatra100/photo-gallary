const API_URL = import.meta.env.VITE_API_URL || '/api';

async function request(path, options = {}) {
  const token = localStorage.getItem('authToken');
  let response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...options.headers },
      ...options,
    });
  } catch {
    throw new Error('Cannot reach the gallery API. Start MongoDB, then run `npm run dev` from the project root.');
  }

  const responseText = await response.text();
  let data = {};
  try {
    data = responseText ? JSON.parse(responseText) : {};
  } catch {
    data = {};
  }
  if (!response.ok) {
    const message = data.message || `API returned HTTP ${response.status}${response.statusText ? ` ${response.statusText}` : ''}.`;
    throw new Error(response.status >= 500 ? `${message} Check that MongoDB and the API server are running.` : message);
  }
  return data;
}

export const api = {
  getImages: () => request('/images'),
  getFavorites: () => request('/images/favorites'),
  toggleFavorite: (id) => request(`/images/${id}/favorite`, { method: 'PUT' }),
  login: (email, password, name) => request('/auth/login', { method: 'POST', body: JSON.stringify({ email, password, name }) }),
  register: (name, email, password) => request('/auth/register', { method: 'POST', body: JSON.stringify({ name, email, password }) }),
};
