import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Resume from '@/models/Resume';

export const dynamic = 'force-dynamic';

// GET /api/resume/active: Public endpoint returning current active resume URL
export async function GET() {
  try {
    await connectDB();

    const activeResume = await Resume.findOne({ isActive: true });

    if (!activeResume) {
      return NextResponse.json(
        {
          success: false,
          message: 'No active resume found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        resume: {
          title: activeResume.title,
          url: activeResume.cloudinaryUrl,
        },
      },
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        },
      }
    );
  } catch (error) {
    console.error('API /api/resume/active GET Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch active resume',
      },
      { status: 500 }
    );
  }
}
