import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Message from '@/models/Message';

// POST: Public endpoint to submit contact form message
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields (name, email, message) are required' },
        { status: 400 }
      );
    }

    await connectDB();

    const newMessage = await Message.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully!',
        data: newMessage,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('API /api/contact POST Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}

// GET: Retrieve all contact form messages (for Dashboard view)
export async function GET() {
  try {
    await connectDB();

    const messages = await Message.find({}).sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        count: messages.length,
        data: messages,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API /api/contact GET Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}
