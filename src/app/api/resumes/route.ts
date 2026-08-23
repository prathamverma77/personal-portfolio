import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Resume from '@/models/Resume';
import { verifyToken } from '@/lib/jwt';
import { uploadPdfToCloudinary } from '@/lib/cloudinary';

// Helper to authenticate admin
async function checkAdminAuth(request: NextRequest) {
  const token = request.cookies.get('admin_token')?.value;
  if (!token) return false;
  const payload = await verifyToken(token);
  return !!payload;
}

// GET /api/resumes: Protected endpoint returning all uploaded resumes
export async function GET(request: NextRequest) {
  try {
    const isAuthenticated = await checkAdminAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const resumes = await Resume.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: resumes }, { status: 200 });
  } catch (error) {
    console.error('API /api/resumes GET Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch resumes' }, { status: 500 });
  }
}

// POST /api/resumes: Protected endpoint to upload a new resume PDF to Cloudinary & MongoDB
export async function POST(request: NextRequest) {
  try {
    const isAuthenticated = await checkAdminAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    const title = formData.get('title') as string;
    const file = formData.get('file') as File | null;

    if (!title || !title.trim()) {
      return NextResponse.json({ success: false, message: 'Resume title is required' }, { status: 400 });
    }

    if (!file) {
      return NextResponse.json({ success: false, message: 'PDF file is required' }, { status: 400 });
    }

    // Validate MIME type
    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      return NextResponse.json({ success: false, message: 'Uploaded file must be a valid PDF document' }, { status: 400 });
    }

    // Validate File Size (10 MB limit)
    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ success: false, message: 'File size exceeds 10 MB limit' }, { status: 400 });
    }

    // Convert file to Buffer for Cloudinary stream upload
    const arrayBuffer = await file.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);

    // Upload to Cloudinary
    const cloudinaryResult = await uploadPdfToCloudinary(fileBuffer, file.name);

    await connectDB();

    // Create MongoDB Document (isActive defaults to false)
    const newResume = await Resume.create({
      title: title.trim(),
      cloudinaryUrl: cloudinaryResult.secure_url,
      cloudinaryPublicId: cloudinaryResult.public_id,
      isActive: false,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Resume uploaded successfully!',
        data: newResume,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('API /api/resumes POST Error:', error);
    const msg = error?.message || (typeof error === 'string' ? error : 'Failed to upload resume');
    return NextResponse.json(
      { success: false, message: `Cloudinary upload error: ${msg}` },
      { status: 500 }
    );
  }
}
