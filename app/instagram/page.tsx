import { Metadata } from 'next';
import { getInstagramFeed } from '@/lib/instagram';
import InstagramFeed from '@/components/instagram-feed';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Instagram } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Instagram Feed | MB Media House',
  description: 'Check out our latest Instagram posts and follow us for updates on our projects and services.',
};

export default async function InstagramPage() {
  // Fetch Instagram posts server-side for initial render
  const posts = await getInstagramFeed(12);

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <Instagram className="h-5 w-5 text-primary mr-2" />
            <span className="text-primary font-medium">@mb.mediahouse</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Instagram Feed</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow us on Instagram for the latest updates, behind-the-scenes content, and inspiration from our digital marketing projects.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <a 
                href="https://www.instagram.com/mb.mediahouse?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Follow on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <InstagramFeed initialPosts={posts} limit={12} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Social Media Presence?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-purple-100">
            Our social media management services can help you build a strong online presence and engage with your audience effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-mbpurple-dark hover:bg-purple-100">
              <Link href="/services#social-media">Learn About Our Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}