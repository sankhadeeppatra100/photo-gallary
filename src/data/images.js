const images = [
  { id: 1, title: 'Mountain', category: 'Nature', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=85' },
  { id: 2, title: 'Beach', category: 'Nature', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=85' },
  { id: 3, title: 'Classic Car', category: 'Vehicle', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=85' },
  { id: 4, title: 'Forest', category: 'Nature', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=85' },
  { id: 5, title: 'Bird', category: 'Animal', image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=700&q=85' },
  { id: 6, title: 'City Lights', category: 'Urban', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=700&q=85' },
  { id: 7, title: 'Desert Road', category: 'Travel', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85' },
  { id: 8, title: 'Coastal Morning', category: 'Travel', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85' },
  { id: 9, title: 'Golden Retriever', category: 'Animal', image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=900&q=85' },
  { id: 10, title: 'Autumn Path', category: 'Nature', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85' },
  { id: 11, title: 'Tokyo After Rain', category: 'Urban', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=85' },
  { id: 12, title: 'Vintage Motorcycle', category: 'Vehicle', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85' },
  { id: 13, title: 'Alpine Lake', category: 'Nature', image: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=900&q=85' },
  { id: 14, title: 'Sunlit Studio', category: 'People', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85' },
  { id: 15, title: 'Weekend Market', category: 'People', image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=85' },
  { id: 16, title: 'Delicious Pizza', category: 'Food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85' },
  { id: 17, title: 'Fresh Burger', category: 'Food', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85' },
  { id: 18, title: 'Pasta', category: 'Food', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85' }

]

export const categories = ['All', 'Nature', 'Animal', 'Vehicle', 'Urban', 'Travel', 'People', 'Food',]
export default images
