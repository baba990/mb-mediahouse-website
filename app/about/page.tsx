import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Michael Brown",
      position: "Founder & CEO",
      bio: "With over 15 years of experience in digital marketing, Michael founded MB Media House with a vision to help businesses thrive in the digital landscape.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    {
      name: "Sarah Johnson",
      position: "Creative Director",
      bio: "Sarah leads our creative team with her innovative approach to design and branding, ensuring each project reflects the client's unique identity.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
    },
    {
      name: "David Chen",
      position: "Technical Director",
      bio: "David oversees all technical aspects of our projects, from website development to SEO implementation, ensuring optimal performance and results.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Emma Williams",
      position: "Digital Marketing Manager",
      bio: "Emma specializes in creating data-driven marketing strategies that help our clients reach their target audience and achieve their business goals.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80"
    }
  ];

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About MB Media House</h1>
              <p className="text-lg text-muted-foreground mb-6">
                We are a London-based digital marketing and media agency dedicated to helping businesses transform their digital presence and achieve their goals.
              </p>
              <p className="text-muted-foreground mb-8">
                Founded in 2018, MB Media House has grown from a small startup to a full-service agency with a team of experts in web design, digital marketing, content creation, and more. Our mission is to provide innovative, results-driven solutions that help our clients stand out in today's competitive digital landscape.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-[300px] md:h-[500px] w-full rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="MB Media House Team"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and define how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly explore new ideas and technologies to deliver cutting-edge solutions for our clients."
              },
              {
                title: "Excellence",
                description: "We are committed to delivering the highest quality work in everything we do, exceeding client expectations."
              },
              {
                title: "Integrity",
                description: "We operate with honesty, transparency, and ethical practices in all our client relationships."
              },
              {
                title: "Collaboration",
                description: "We work closely with our clients, treating their business as our own to achieve shared goals."
              },
              {
                title: "Results-Driven",
                description: "We focus on delivering measurable results that contribute to our clients' business success."
              },
              {
                title: "Adaptability",
                description: "We embrace change and continuously evolve our strategies to stay ahead in the digital landscape."
              }
            ].map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our talented team of experts is passionate about helping businesses succeed in the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden border border-border">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.position}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="MB Media House Office"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose MB Media House?</h2>
              <p className="text-muted-foreground mb-6">
                We combine creativity, technical expertise, and strategic thinking to deliver exceptional results for our clients. Here's what sets us apart:
              </p>
              <ul className="space-y-4">
                {[
                  "Experienced team of digital marketing experts",
                  "Tailored strategies based on your unique business needs",
                  "Data-driven approach to maximize ROI",
                  "Transparent communication and reporting",
                  "Commitment to staying ahead of industry trends",
                  "Proven track record of client success"
                ].map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-purple-100">
            Let's discuss how we can help you achieve your digital marketing goals and grow your business.
          </p>
          <Button asChild size="lg" className="bg-white text-mbpurple-dark hover:bg-purple-100">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}