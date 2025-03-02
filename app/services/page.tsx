import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, BarChart, PenTool, Video, Search, CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "web-design",
      icon: <Monitor className="h-12 w-12 text-primary" />,
      title: "Web Design",
      description: "We create beautiful, responsive websites that are optimized for performance and conversion.",
      features: [
        "Custom website design",
        "Responsive development",
        "E-commerce solutions",
        "Content management systems",
        "Website maintenance",
        "Performance optimization"
      ],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: "social-media",
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: "Social Media Management",
      description: "We help you build and engage your audience across all major social media platforms.",
      features: [
        "Social media strategy",
        "Content creation",
        "Community management",
        "Paid social campaigns",
        "Performance analytics",
        "Influencer partnerships"
      ],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    {
      id: "digital-marketing",
      icon: <BarChart className="h-12 w-12 text-primary" />,
      title: "Digital Marketing",
      description: "We develop comprehensive digital marketing strategies to help you reach your target audience.",
      features: [
        "Marketing strategy",
        "Email marketing",
        "PPC campaigns",
        "Conversion optimization",
        "Marketing automation",
        "Analytics and reporting"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    {
      id: "content-writing",
      icon: <PenTool className="h-12 w-12 text-primary" />,
      title: "Content Writing",
      description: "We create engaging content that tells your story and connects with your audience.",
      features: [
        "Blog posts",
        "Website copy",
        "Social media content",
        "Email newsletters",
        "Press releases",
        "Whitepapers and ebooks"
      ],
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
    },
    {
      id: "video-production",
      icon: <Video className="h-12 w-12 text-primary" />,
      title: "Video Production",
      description: "We produce high-quality videos that capture attention and convey your message effectively.",
      features: [
        "Brand videos",
        "Product demonstrations",
        "Testimonials",
        "Social media content",
        "Animation",
        "Event coverage"
      ],
      image: "https://images.unsplash.com/photo-1579165466741-7f35e4755183?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: "seo",
      icon: <Search className="h-12 w-12 text-primary" />,
      title: "Google Ads & SEO",
      description: "We help you increase visibility and drive targeted traffic to your website.",
      features: [
        "Keyword research",
        "On-page optimization",
        "Technical SEO",
        "Link building",
        "Google Ads management",
        "Local SEO"
      ],
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    }
  ];

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital marketing and media solutions tailored to help your business grow and succeed in the digital landscape.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 mb-20 scroll-mt-32`}
            >
              <div className="lg:w-1/2">
                <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="mb-4">{service.icon}</div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a proven process to ensure we deliver exceptional results for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "We start by understanding your business, goals, and target audience to create a tailored strategy."
              },
              {
                number: "02",
                title: "Strategy",
                description: "We develop a comprehensive strategy aligned with your business objectives and market opportunities."
              },
              {
                number: "03",
                title: "Implementation",
                description: "Our team executes the strategy with precision, creativity, and attention to detail."
              },
              {
                number: "04",
                title: "Optimization",
                description: "We continuously monitor, analyze, and optimize to ensure we're delivering the best possible results."
              }
            ].map((step, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-purple-100">
            Contact us today to discuss how we can help you achieve your digital marketing goals.
          </p>
          <Button asChild size="lg" className="bg-white text-mbpurple-dark hover:bg-purple-100">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}