import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "TechVision Rebrand",
      category: "Branding & Web Design",
      description: "A complete rebrand and website redesign for a leading tech company, resulting in a 40% increase in user engagement and a 25% decrease in bounce rate.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      services: ["Web Design", "Branding", "UI/UX Design"]
    },
    {
      id: 2,
      title: "Eco Lifestyle Campaign",
      category: "Social Media & Content",
      description: "A comprehensive social media campaign for an eco-friendly lifestyle brand, which increased their Instagram following by 200% and engagement by 150% in just three months.",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      services: ["Social Media Management", "Content Creation", "Influencer Marketing"]
    },
    {
      id: 3,
      title: "Finance Pro Analytics",
      category: "Digital Marketing & SEO",
      description: "An SEO and digital marketing strategy for a financial services company that resulted in a 300% increase in organic traffic and a 50% increase in qualified leads.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      services: ["SEO", "Digital Marketing", "Content Strategy"]
    },
    {
      id: 4,
      title: "Luxury Real Estate",
      category: "Video Production",
      description: "A series of high-quality property videos for a luxury real estate agency, showcasing their premium properties and increasing inquiries by 75%.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      services: ["Video Production", "Aerial Photography", "Virtual Tours"]
    },
    {
      id: 5,
      title: "Organic Food Delivery",
      category: "Branding & Digital Marketing",
      description: "A complete brand identity and digital marketing strategy for an organic food delivery service, resulting in a successful launch and 5,000 subscribers in the first month.",
      image: "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      services: ["Branding", "Digital Marketing", "Social Media"]
    },
    {
      id: 6,
      title: "Fitness App Launch",
      category: "App Marketing & Content",
      description: "A comprehensive marketing campaign for a fitness app launch, including content creation, social media, and influencer partnerships, resulting in 100,000 downloads in the first week.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      services: ["App Marketing", "Content Creation", "Influencer Partnerships"]
    },
  ];

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped our clients achieve their digital marketing goals.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="portfolio-item group bg-card rounded-lg overflow-hidden border border-border">
                <div className="relative h-64 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-mbpurple-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="outline" className="border-white text-white hover:bg-white/20">
                      View Details
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary mb-2">{item.category}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.services.map((service, index) => (
                      <span key={index} className="text-xs bg-muted px-2 py-1 rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/portfolio/${item.id}`}
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    See case study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Leading Brands</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've had the privilege of working with some amazing companies across various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <div className="h-12 w-24 bg-muted-foreground/20 rounded flex items-center justify-center">
                  <span className="text-muted-foreground font-semibold">Client {index}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-purple-100">
            Let's work together to create a digital strategy that helps your business grow and succeed.
          </p>
          <Button asChild size="lg" className="bg-white text-mbpurple-dark hover:bg-purple-100">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}