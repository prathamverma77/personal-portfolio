import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IResume extends Document {
  title: string;
  cloudinaryUrl: string;
  cloudinaryPublicId: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ResumeSchema: Schema<IResume> = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Resume title is required'],
      trim: true,
    },
    cloudinaryUrl: {
      type: String,
      required: [true, 'Cloudinary URL is required'],
    },
    cloudinaryPublicId: {
      type: String,
      required: [true, 'Cloudinary Public ID is required'],
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Resume: Model<IResume> =
  mongoose.models.Resume || mongoose.model<IResume>('Resume', ResumeSchema);

export default Resume;
