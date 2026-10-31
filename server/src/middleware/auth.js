import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export default async function auth(req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'Authentication is required.' });

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(userId);
    if (!user) return res.status(401).json({ message: 'User no longer exists.' });
    req.user = user;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid or expired token.' });
  }
}
