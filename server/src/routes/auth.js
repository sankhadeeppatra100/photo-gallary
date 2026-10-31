import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import auth from '../middleware/auth.js';

const router = Router();
const tokenFor = (user) => jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
const userData = (user) => ({ id: user._id, name: user.name, email: user.email });

router.post('/register', async (req, res, next) => {
  try {
    const body = req.body || {};
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    const { password } = body;
    if (!name || !email || !password || password.length < 6) {
      return res.status(400).json({ message: 'Name, email, and a password of at least 6 characters are required.' });
    }
    if (await User.exists({ email })) {
      return res.status(409).json({ message: 'That email is already registered.' });
    }
    const user = await User.create({ name, email, password: await bcrypt.hash(password, 12) });
    res.status(201).json({ token: tokenFor(user), user: userData(user) });
  } catch (error) { next(error); }
});

router.post('/login', async (req, res, next) => {
  try {
    const body = req.body || {};
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    const { password } = body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required.' });
    }
    const user = await User.findOne({ email }).select('+password');
    if (!user || name !== user.name || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }
    res.json({ token: tokenFor(user), user: userData(user) });
  } catch (error) { next(error); }
});

router.get('/me', auth, (req, res) => res.json({ user: userData(req.user) }));

export default router;
