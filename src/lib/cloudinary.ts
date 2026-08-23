import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export interface CloudinaryUploadResult {
  secure_url: string;
  public_id: string;
}

/**
 * Uploads a PDF file buffer to Cloudinary in portfolio/resumes folder
 */
export async function uploadPdfToCloudinary(
  fileBuffer: Buffer,
  originalFilename: string
): Promise<CloudinaryUploadResult> {
  const sanitizedName = originalFilename
    .toLowerCase()
    .replace(/\.pdf$/i, '')
    .replace(/[^a-z0-9]/g, '_');

  const publicId = `resume_${Date.now()}_${sanitizedName}.pdf`;

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'portfolio/resumes',
        resource_type: 'raw',
        type: 'upload',
        access_mode: 'public',
        public_id: publicId,
      },
      (error, result) => {
        if (error || !result) {
          console.error('Cloudinary Upload Stream Error:', error);
          return reject(error || new Error('Cloudinary upload returned empty result'));
        }

        // Ensure secure_url is valid public link
        resolve({
          secure_url: result.secure_url,
          public_id: result.public_id,
        });
      }
    );

    uploadStream.end(fileBuffer);
  });
}

/**
 * Deletes a PDF file from Cloudinary given its public_id
 */
export async function deletePdfFromCloudinary(publicId: string): Promise<void> {
  try {
    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: 'raw',
    });
    if (result.result !== 'ok') {
      await cloudinary.uploader.destroy(publicId, {
        resource_type: 'image',
      });
    }
    console.log('Cloudinary Delete Result:', result);
  } catch (error) {
    console.error('Cloudinary Delete Error:', error);
    throw error;
  }
}

export default cloudinary;
