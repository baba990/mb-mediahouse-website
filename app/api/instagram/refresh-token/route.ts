import { NextResponse } from 'next/server';

// This endpoint should be called periodically to refresh the long-lived access token
// Instagram long-lived tokens are valid for 60 days and need to be refreshed
export async function GET() {
  try {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    const appSecret = process.env.INSTAGRAM_APP_SECRET;
    
    if (!accessToken || !appSecret) {
      return NextResponse.json(
        { error: 'Missing required environment variables' },
        { status: 500 }
      );
    }

    // Call the Instagram Graph API to refresh the token
    const response = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${accessToken}`
    );

    if (!response.ok) {
      throw new Error(`Failed to refresh token: ${response.statusText}`);
    }

    const data = await response.json();

    return NextResponse.json({
      success: true,
      expires_in: data.expires_in,
      message: 'Token refreshed successfully'
    });
  } catch (error) {
    console.error('Error refreshing Instagram token:', error);
    return NextResponse.json(
      { error: 'Failed to refresh token' },
      { status: 500 }
    );
  }
}