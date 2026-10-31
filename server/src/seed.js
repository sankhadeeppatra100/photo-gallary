import 'dotenv/config';
import mongoose from 'mongoose';
import Image from './models/Image.js';

if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI is required. Create .env from .env.example first.');

const images = [
  ['Mountain', 'Nature', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=85'], ['Beach', 'Nature', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=85'], ['Classic Car', 'Vehicle', 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=85'], ['Forest', 'Nature', 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=85'], ['Bird', 'Animal', 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=700&q=85'], ['City Lights', 'Urban', 'https://images.unsplash.com/photo-1449824913935-ae79c964c9d7?auto=format&fit=crop&w=700&q=85'], ['Desert Road', 'Travel', 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85'], ['Coastal Morning', 'Travel', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85'], ['Golden Retriever', 'Animal', 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=900&q=85'], ['Autumn Path', 'Nature', 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85'], ['Tokyo After Rain', 'Urban', 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=85'], ['Vintage Motorcycle', 'Vehicle', 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85'], ['Alpine Lake', 'Nature', 'https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=900&q=85'], ['Sunlit Studio', 'People', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85'], ['Weekend Market', 'People', 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=85'], ['Delicious Pizza', 'Food', 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85'], ['Fresh Burger', 'Food', 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85'], ['Pasta', 'Food', 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85'],
];

await mongoose.connect(process.env.MONGODB_URI);
await Promise.all(images.map(([title, category, imageUrl]) => Image.updateOne({ title }, { $set: { title, category, imageUrl } }, { upsert: true })));
console.log(`${images.length} images are ready.`);
await mongoose.disconnect();
