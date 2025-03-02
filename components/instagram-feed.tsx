'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, ExternalLink, Play } from 'lucide-react';
import { InstagramPost, formatInstagramCaption, formatInstagramDate } from '@/lib/instagram';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import useSWR from 'swr';

interface InstagramFeedProps {
  initialPosts?: InstagramPost[];
  limit?: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function InstagramFeed({ initialPosts = [], limit = 6 }: InstagramFeedProps) {
  const { data, error, isLoading } = useSWR<{ data: InstagramPost[] }>(
    `/api/instagram?limit=${limit}`,
    fetcher,
    {
      fallbackData: { data: initialPosts },
      refreshInterval: 3600000, // Refresh every hour
    }
  );

  const posts = data?.data || initialPosts;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (error) {
    console.error('Error loading Instagram feed:', error);
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Instagram className="h-6 w-6 text-primary mr-2" />
          <h3 className="text-2xl font-bold">Instagram Feed</h3>
        </div>
        <a
          href="https://www.instagram.com/mb.mediahouse?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline flex items-center"
        >
          Follow us <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>

      {isLoading && !isClient ? (
        // Loading skeleton
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array(limit).fill(0).map((_, index) => (
            <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
              <Skeleton className="h-full w-full" />
            </div>
          ))}
        </div>
      ) : posts.length > 0 ? (
        // Instagram posts grid
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group aspect-square relative rounded-lg overflow-hidden border border-border"
            >
              {post.media_type === 'VIDEO' ? (
                <>
                  <Image
                    src={post.thumbnail_url || post.media_url}
                    alt={post.caption || 'Instagram video'}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-black/70 p-1 rounded-full">
                    <Play className="h-4 w-4 text-white" />
                  </div>
                </>
              ) : (
                <Image
                  src={post.media_url}
                  alt={post.caption || 'Instagram post'}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <p className="text-white text-sm line-clamp-2">
                  {formatInstagramCaption(post.caption)}
                </p>
                <span className="text-white/80 text-xs mt-1">
                  {formatInstagramDate(post.timestamp)}
                </span>
              </div>
            </a>
          ))}
        </div>
      ) : (
        // No posts or error state
        <div className="bg-muted rounded-lg p-8 text-center">
          <Instagram className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
          <h4 className="text-lg font-semibold mb-2">No Instagram Posts Found</h4>
          <p className="text-muted-foreground mb-4">
            We couldn't load posts from our Instagram feed. Please check back later.
          </p>
          <Button asChild variant="outline">
            <a
              href="https://www.instagram.com/mb.mediahouse?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Our Instagram
            </a>
          </Button>
        </div>
      )}
    </div>
  );
}