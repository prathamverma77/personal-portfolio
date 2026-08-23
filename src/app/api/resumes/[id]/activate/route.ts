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

// PATCH /api/resumes/:id/activate: Set selected resume active and all others inactive
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

    // Check if target resume exists
    const targetResume = await Resume.findById(id);
    if (!targetResume) {
      return NextResponse.json({ success: false, message: 'Resume not found' }, { status: 404 });
    }

    // Step 1: Deactivate ALL resumes on server
    await Resume.updateMany({}, { isActive: false });

    // Step 2: Set target resume active
    targetResume.isActive = true;
    await targetResume.save();

    // Return updated resume list
    const updatedResumes = await Resume.find({}).sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      message: `"${targetResume.title}" is now the active resume!`,
      data: updatedResumes,
    });
  } catch (error) {
    console.error('API /api/resumes/:id/activate Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to activate resume' }, { status: 500 });
  }
}
