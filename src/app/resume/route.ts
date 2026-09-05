import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Resume from '@/models/Resume';

export const dynamic = 'force-dynamic';

// GET /resume: Server-side redirect route to current active resume on Cloudinary
export async function GET(request: Request) {
  try {
    await connectDB();

    const activeResume = await Resume.findOne({ isActive: true });

    if (activeResume?.cloudinaryUrl) {
      return NextResponse.redirect(activeResume.cloudinaryUrl, 307);
    }

    // Fallback: If no active resume is set, redirect to homepage
    const origin = new URL(request.url).origin;
    return NextResponse.redirect(origin, 307);
  } catch (error) {
    console.error('Error in /resume redirect route:', error);
    const origin = new URL(request.url).origin;
    return NextResponse.redirect(origin, 307);
  }
}
