import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "The Future of Work: AI, Automation, and Employment",
      date: "2024-04-15",
      time: "6:00 PM - 8:00 PM",
      location: "University of Sydney, Quadrangle Building",
      description: "Join us for a panel discussion on how artificial intelligence and automation are reshaping the workforce and what policy responses can ensure equitable transitions.",
      type: "Panel Discussion",
    },
    {
      title: "Housing Policy Workshop: Zoning Reform in Sydney",
      date: "2024-04-22",
      time: "2:00 PM - 5:00 PM",
      location: "Online via Zoom",
      description: "An interactive workshop exploring zoning reform strategies to address Sydney's housing affordability crisis with case studies from international best practices.",
      type: "Workshop",
    },
  ];

  const pastEvents: Array<{
    title: string;
    date: string;
    description: string;
  }> = [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="bg-academic-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-academic-navy mb-6">
              Events
            </h1>
            <p className="text-xl text-muted-foreground">
              Join us for panels, workshops, and symposiums on pressing policy issues
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8">Upcoming Events</h2>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        {event.type}
                      </span>
                      <Button variant="default" size="sm">Register</Button>
                    </div>
                    <CardTitle className="font-heading text-2xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar size={16} className="mr-2" />
                        <span>{new Date(event.date).toLocaleDateString('en-AU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock size={16} className="mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin size={16} className="mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      {event.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-16 bg-academic-light">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8">Past Events</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((event, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="font-heading text-lg">{event.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {new Date(event.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Events;
