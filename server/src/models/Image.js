import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 120 },
    category: { type: String, required: true, trim: true, maxlength: 50 },
    imageUrl: { type: String, required: true, trim: true },
    description: { type: String, trim: true, maxlength: 500 },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true },
);

imageSchema.virtual('image').get(function image() {
  return this.imageUrl;
});
imageSchema.set('toJSON', { virtuals: true });

export default mongoose.model('Image', imageSchema);
