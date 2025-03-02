# MB Media House - Instagram Integration

This document provides instructions on how to set up the Instagram integration for the MB Media House website.

## Prerequisites

To use the Instagram Graph API, you need:

1. An Instagram Business Account or Creator Account
2. A Facebook Page connected to your Instagram account
3. A Facebook Developer Account
4. A Facebook App with Instagram Graph API enabled

## Setup Instructions

### 1. Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "My Apps" and then "Create App"
3. Select "Business" as the app type
4. Fill in the required information and create the app
5. In the app dashboard, add the "Instagram Graph API" product

### 2. Configure Instagram Graph API

1. In your Facebook App dashboard, go to "Instagram Graph API" > "Basic Display"
2. Add your website URL to the "Valid OAuth Redirect URIs"
3. Note your App ID and App Secret

### 3. Get Access Tokens

#### Get Short-Lived Access Token:

1. Go to [Facebook Graph API Explorer](https://developers.facebook.com/tools/explorer/)
2. Select your app from the dropdown
3. Request the following permissions: `instagram_basic`, `instagram_content_publish`, `pages_read_engagement`
4. Generate an access token
5. Use this token to get a long-lived token

#### Convert to Long-Lived Access Token:

Make a GET request to:
```
https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret={app-secret}&access_token={short-lived-token}
```

### 4. Get Instagram User ID

Make a GET request to:
```
https://graph.instagram.com/me?fields=id,username&access_token={your-access-token}
```

### 5. Update Environment Variables

Add the following to your `.env.local` file:

```
INSTAGRAM_APP_SECRET=your_app_secret
INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token
INSTAGRAM_USER_ID=your_instagram_user_id
```

### 6. Token Refresh

Instagram access tokens expire after 60 days. Set up a cron job or scheduled task to call the token refresh endpoint:

```
/api/instagram/refresh-token
```

This will extend your token's validity.

## Testing

After setup, visit the `/instagram` page on your website to see if your Instagram feed is displaying correctly.

## Troubleshooting

- If posts aren't showing, check your browser console for errors
- Verify your access token is valid by testing it with the Graph API Explorer
- Ensure your Instagram account is a Business or Creator account
- Check that your Facebook Page is correctly linked to your Instagram account