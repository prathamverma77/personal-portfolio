import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Resume from '@/models/Resume';
import { verifyToken } from '@/lib/jwt';
import { deletePdfFromCloudinary } from '@/lib/cloudinary';

async function checkAdminAuth(request: NextRequest) {
  const token = request.cookies.get('admin_token')?.value;
  if (!token) return false;
  const payload = await verifyToken(token);
  return !!payload;
}

// DELETE /api/resumes/:id: Delete inactive resume from Cloudinary and MongoDB
export async function DELETE(
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

    // Security Rule: Active resume CANNOT be deleted
    if (targetResume.isActive) {
      return NextResponse.json(
        {
          success: false,
          message: 'Deactivate this resume before deleting it.',
        },
        { status: 400 }
      );
    }

    // Step 1: Delete file from Cloudinary using cloudinaryPublicId
    if (targetResume.cloudinaryPublicId) {
      try {
        await deletePdfFromCloudinary(targetResume.cloudinaryPublicId);
      } catch (err) {
        console.warn('Cloudinary delete warning (proceeding with DB deletion):', err);
      }
    }

    // Step 2: Delete document from MongoDB
    await Resume.findByIdAndDelete(id);

    const updatedResumes = await Resume.find({}).sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      message: 'Resume deleted successfully from Cloudinary & Database',
      data: updatedResumes,
    });
  } catch (error) {
    console.error('API /api/resumes/:id DELETE Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to delete resume' }, { status: 500 });
  }
}
