import { NextRequest, NextResponse } from 'next/server';
import { getInstagramFeed, InstagramPost } from '@/lib/instagram';

export async function GET(request: NextRequest) {
  try {
    // Get limit from query parameters or default to 6
    const searchParams = request.nextUrl.searchParams;
    const limit = parseInt(searchParams.get('limit') || '6', 10);
    
    // Fetch Instagram posts
    const posts = await getInstagramFeed(limit);
    
    return NextResponse.json({ data: posts });
  } catch (error) {
    console.error('Error in Instagram API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Instagram posts' },
      { status: 500 }
    );
  }
}