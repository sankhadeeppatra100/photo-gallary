import { useState } from 'react';
import '../styles/Login.css';

function Login({ onLogin }) {
  const [name, setName] = useState('');  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();

    const normalizedName = name.trim();
    const normalizedEmail = email.trim();
    if (!normalizedName || !normalizedEmail || !password) {
      setError('Please complete all required fields.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      await onLogin({ name: normalizedName, email: normalizedEmail, password }, isRegistering);
    } catch (requestError) {
      setError(requestError.message || 'Could not connect to the server. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Photo Gallery</h1>
        <h2>{isRegistering ? 'Create account' : 'Login'}</h2>

        <form onSubmit={handleLogin}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            autoComplete="name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            autoComplete="email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            autoComplete={isRegistering ? 'new-password' : 'current-password'}
            minLength={isRegistering ? 6 : undefined}
            required
          />

          {error && <p className="login-error">{error}</p>}
          <button type="submit" disabled={submitting}>
            {submitting ? 'Please wait...' : isRegistering ? 'Create account' : 'Login'}
          </button>
          <button type="button" onClick={() => { setIsRegistering(!isRegistering); setError(''); }}>
            {isRegistering ? 'Already have an account? Login' : 'New here? Create an account'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
