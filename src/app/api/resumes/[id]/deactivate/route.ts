import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Resume from '@/models/Resume';
import { verifyToken } from '@/lib/jwt';

async function checkAdminAuth(request: NextRequest) {
  const token = request.cookies.get('admin_token')?.value;
  if (!token) return false;
  const payload = await verifyToken(token);
  return !!payload;
}

// PATCH /api/resumes/:id/deactivate: Deactivate selected resume
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const isAuthenticated = await checkAdminAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    if (!id) {
      return NextResponse.json({ success: false, message: 'Resume ID is required' }, { status: 400 });
    }

    await connectDB();

    const targetResume = await Resume.findById(id);
    if (!targetResume) {
      return NextResponse.json({ success: false, message: 'Resume not found' }, { status: 404 });
    }

    targetResume.isActive = false;
    await targetResume.save();

    const updatedResumes = await Resume.find({}).sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      message: `"${targetResume.title}" deactivated`,
      data: updatedResumes,
    });
  } catch (error) {
    console.error('API /api/resumes/:id/deactivate Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to deactivate resume' }, { status: 500 });
  }
}
