import { Router } from 'express';
import Image from '../models/Image.js';
import User from '../models/User.js';
import auth from '../middleware/auth.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const filter = req.query.category && req.query.category !== 'All' ? { category: req.query.category } : {};
    res.json(await Image.find(filter).sort({ createdAt: -1 }));
  } catch (error) { next(error); }
});

router.post('/', auth, async (req, res, next) => {
  try {
    const { title, category, imageUrl, description } = req.body;
    if (!title || !category || !imageUrl) return res.status(400).json({ message: 'Title, category, and imageUrl are required.' });
    const image = await Image.create({ title, category, imageUrl, description, createdBy: req.user._id });
    res.status(201).json(image);
  } catch (error) { next(error); }
});

router.get('/favorites', auth, async (req, res, next) => {
  try {
    const user = await req.user.populate('favorites');
    res.json(user.favorites);
  } catch (error) { next(error); }
});

router.put('/:id/favorite', auth, async (req, res, next) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) return res.status(404).json({ message: 'Image not found.' });
    const existing = req.user.favorites.some((id) => id.equals(image._id));
    await User.updateOne({ _id: req.user._id }, existing ? { $pull: { favorites: image._id } } : { $addToSet: { favorites: image._id } });
    res.json({ imageId: image._id, favorite: !existing });
  } catch (error) { next(error); }
});

export default router;
