import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Smartphone, PenTool, Video, BarChart, Search, Instagram } from "lucide-react";
import { getInstagramFeed } from "@/lib/instagram";
import InstagramFeed from "@/components/instagram-feed";

export default async function Home() {
  // Fetch Instagram posts for the homepage
  const instagramPosts = await getInstagramFeed(6);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Transform Your Digital Presence
              </h1>
              <p className="text-lg md:text-xl mb-8 text-purple-100">
                London's premier digital marketing and media agency delivering creative solutions that drive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-mbpurple-dark hover:bg-purple-100">
                  <Link href="/services">Our Services</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10 animate-slideUp">
              <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Digital Marketing Team"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to elevate your brand and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Monitor className="h-10 w-10 mb-4 text-primary" />,
                title: "Web Design",
                description: "Beautiful, responsive websites that convert visitors into customers.",
                link: "/services#web-design",
              },
              {
                icon: <Smartphone className="h-10 w-10 mb-4 text-primary" />,
                title: "Social Media Management",
                description: "Strategic social media campaigns to build your brand and engage your audience.",
                link: "/services#social-media",
              },
              {
                icon: <BarChart className="h-10 w-10 mb-4 text-primary" />,
                title: "Digital Marketing",
                description: "Data-driven marketing strategies to reach your target audience effectively.",
                link: "/services#digital-marketing",
              },
              {
                icon: <PenTool className="h-10 w-10 mb-4 text-primary" />,
                title: "Content Writing",
                description: "Compelling content that tells your story and engages your audience.",
                link: "/services#content-writing",
              },
              {
                icon: <Video className="h-10 w-10 mb-4 text-primary" />,
                title: "Video Production",
                description: "High-quality videos that capture attention and convey your message.",
                link: "/services#video-production",
              },
              {
                icon: <Search className="h-10 w-10 mb-4 text-primary" />,
                title: "Google Ads & SEO",
                description: "Increase visibility and drive targeted traffic to your website.",
                link: "/services#seo",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="service-card bg-card p-6 rounded-lg border border-border"
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-primary hover:underline"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore some of our recent projects and see how we've helped our clients succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                title: "TechVision Rebrand",
                category: "Branding & Web Design",
              },
              {
                image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                title: "Eco Lifestyle Campaign",
                category: "Social Media & Content",
              },
              {
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
                title: "Finance Pro Analytics",
                category: "Digital Marketing & SEO",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="portfolio-item group bg-card rounded-lg overflow-hidden"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-mbpurple-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="outline" className="border-white text-white hover:bg-white/20">
                      View Project
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    See details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
              <Instagram className="h-5 w-5 text-primary mr-2" />
              <span className="text-primary font-medium">@mb.mediahouse</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Follow Us on Instagram</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest projects, behind-the-scenes content, and digital marketing tips.
            </p>
          </div>

          <InstagramFeed initialPosts={instagramPosts} limit={6} />

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/instagram">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "MB Media House transformed our online presence completely. Their strategic approach to digital marketing has resulted in a 200% increase in our leads.",
                author: "Sarah Johnson",
                position: "CEO, TechVision",
              },
              {
                quote: "The team's creativity and attention to detail is unmatched. They delivered a website that perfectly captures our brand essence and has significantly improved user engagement.",
                author: "Michael Chen",
                position: "Marketing Director, Eco Lifestyle",
              },
              {
                quote: "Working with MB Media House has been a game-changer for our business. Their SEO expertise has put us on the first page of Google for our key search terms.",
                author: "Emma Williams",
                position: "Founder, Finance Pro",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border border-border"
              >
                <div className="mb-4 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
                <p className="mb-6 text-foreground italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-purple-100">
            Let's work together to create a digital strategy that helps your business grow and succeed.
          </p>
          <Button asChild size="lg" className="bg-white text-mbpurple-dark hover:bg-purple-100">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}