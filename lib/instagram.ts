import { cache } from 'react';

export interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  thumbnail_url?: string;
}

// Sample Instagram posts for fallback when API credentials are not available
export const sampleInstagramPosts: InstagramPost[] = [
  {
    id: 'sample1',
    caption: 'Excited to share our latest branding project for a tech startup! #branding #design #digitalmarketing',
    media_url: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    permalink: 'https://www.instagram.com/mb.mediahouse/',
    timestamp: new Date().toISOString(),
    media_type: 'IMAGE'
  },
  {
    id: 'sample2',
    caption: 'Behind the scenes of our latest video production. Creating engaging content for our clients! #videoproduction #contentcreation',
    media_url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    permalink: 'https://www.instagram.com/mb.mediahouse/',
    timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    media_type: 'IMAGE'
  },
  {
    id: 'sample3',
    caption: 'Social media strategy session with our team. Planning content that converts! #socialmedia #digitalmarketing #strategy',
    media_url: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    permalink: 'https://www.instagram.com/mb.mediahouse/',
    timestamp: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    media_type: 'IMAGE'
  },
  {
    id: 'sample4',
    caption: 'Just launched a new website for our client in the finance sector. Modern design with powerful functionality! #webdesign #uxdesign',
    media_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
    permalink: 'https://www.instagram.com/mb.mediahouse/',
    timestamp: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
    media_type: 'IMAGE'
  },
  {
    id: 'sample5',
    caption: 'SEO success story! Our client is now ranking #1 for their target keywords. #SEO #digitalmarketing #results',
    media_url: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    permalink: 'https://www.instagram.com/mb.mediahouse/',
    timestamp: new Date(Date.now() - 345600000).toISOString(), // 4 days ago
    media_type: 'IMAGE'
  },
  {
    id: 'sample6',
    caption: 'Team building day at MB Media House! Creativity thrives when we collaborate. #teamwork #agencylife #creativity',
    media_url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    permalink: 'https://www.instagram.com/mb.mediahouse/',
    timestamp: new Date(Date.now() - 432000000).toISOString(), // 5 days ago
    media_type: 'IMAGE'
  },
  {
    id: 'sample7',
    caption: "Celebrating our client's successful product launch! Their social media engagement has increased by 200%! #success #socialmedia",
    media_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    permalink: 'https://www.instagram.com/mb.mediahouse/',
    timestamp: new Date(Date.now() - 518400000).toISOString(), // 6 days ago
    media_type: 'IMAGE'
  },
  {
    id: 'sample8',
    caption: "Content creation day! Shooting photos for our client's new campaign. #contentcreation #photography #marketing",
    media_url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    permalink: 'https://www.instagram.com/mb.mediahouse/',
    timestamp: new Date(Date.now() - 604800000).toISOString(), // 7 days ago
    media_type: 'IMAGE'
  },
  {
    id: 'sample9',
    caption: 'Digital marketing workshop with our team. Always learning and improving our skills! #learning #digitalmarketing #workshop',
    media_url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    permalink: 'https://www.instagram.com/mb.mediahouse/',
    timestamp: new Date(Date.now() - 691200000).toISOString(), // 8 days ago
    media_type: 'IMAGE'
  },
  {
    id: 'sample10',
    caption: 'New brand identity for a luxury real estate company. Elegant, sophisticated, and memorable! #branding #design #luxury',
    media_url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
    permalink: 'https://www.instagram.com/mb.mediahouse/',
    timestamp: new Date(Date.now() - 777600000).toISOString(), // 9 days ago
    media_type: 'IMAGE'
  },
  {
    id: 'sample11',
    caption: 'Website analytics review day. Data-driven decisions lead to better results for our clients! #analytics #data #results',
    media_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    permalink: 'https://www.instagram.com/mb.mediahouse/',
    timestamp: new Date(Date.now() - 864000000).toISOString(), // 10 days ago
    media_type: 'IMAGE'
  },
  {
    id: 'sample12',
    caption: "Brainstorming session for our new client's campaign. Creativity in action! #brainstorming #creativity #marketing",
    media_url: 'https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    permalink: 'https://www.instagram.com/mb.mediahouse/',
    timestamp: new Date(Date.now() - 950400000).toISOString(), // 11 days ago
    media_type: 'IMAGE'
  }
];

// Cache the fetch request for 1 hour (3600 seconds)
export const getInstagramFeed = cache(async (limit: number = 6): Promise<InstagramPost[]> => {
  try {
    // Use environment variables for API credentials
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    const userId = process.env.INSTAGRAM_USER_ID;
    
    if (!accessToken || !userId) {
      console.log('Instagram API credentials are missing - using sample data');
      return sampleInstagramPosts.slice(0, limit);
    }

    // Fetch media from Instagram Graph API
    const response = await fetch(
      `https://graph.instagram.com/v18.0/${userId}/media?fields=id,caption,media_url,permalink,timestamp,media_type,thumbnail_url&limit=${limit}&access_token=${accessToken}`,
      { next: { revalidate: 3600 } } // Revalidate every hour
    );

    if (!response.ok) {
      console.log(`Instagram API error: ${response.statusText} - using sample data`);
      return sampleInstagramPosts.slice(0, limit);
    }

    const data = await response.json();
    return data.data as InstagramPost[];
  } catch (error) {
    console.log('Error fetching Instagram feed:', error);
    // Return sample data as fallback
    return sampleInstagramPosts.slice(0, limit);
  }
});

// Function to format Instagram caption
export function formatInstagramCaption(caption: string | null): string {
  if (!caption) return '';
  
  // Limit caption length and add ellipsis if needed
  const maxLength = 100;
  if (caption.length > maxLength) {
    return caption.substring(0, maxLength) + '...';
  }
  
  return caption;
}

// Function to format Instagram post date
export function formatInstagramDate(timestamp: string): string {
  const date = new Date(timestamp);
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(date);
}