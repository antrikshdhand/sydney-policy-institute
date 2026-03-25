import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const initiatives = [
    { name: "Economic Policy", path: "/initiatives/economic-policy" },
    { name: "Media & Democracy", path: "/initiatives/media-democracy" },
    { name: "Housing & Cities", path: "/initiatives/housing-cities" },
    { name: "AI & Tech", path: "/initiatives/ai-tech" },
    { name: "Foreign Policy", path: "/initiatives/foreign-policy" },
  ];

  const publications = [
    { name: "Op-Eds", path: "/publications/op-eds" },
    { name: "Policy Briefs", path: "/publications/briefs" },
    { name: "Comics", path: "/publications/comics" },
    { name: "Reels", path: "/publications/reels" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-heading font-bold text-academic-navy">SPI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className="px-4 py-2 text-sm font-body font-medium text-foreground hover:text-primary transition-colors">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/leadership">
                    <NavigationMenuLink className="px-4 py-2 text-sm font-body font-medium text-foreground hover:text-primary transition-colors">
                      Leadership
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-body font-medium">
                    Initiatives
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {initiatives.map((initiative) => (
                        <li key={initiative.path}>
                          <Link to={initiative.path}>
                            <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">{initiative.name}</div>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-body font-medium">
                    Publications
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      {publications.map((pub) => (
                        <li key={pub.path}>
                          <Link to={pub.path}>
                            <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">{pub.name}</div>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/events">
                    <NavigationMenuLink className="px-4 py-2 text-sm font-body font-medium text-foreground hover:text-primary transition-colors">
                      Events
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/partnerships">
                    <NavigationMenuLink className="px-4 py-2 text-sm font-body font-medium text-foreground hover:text-primary transition-colors">
                      Partnerships
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/join">
              <Button variant="default" className="font-body">Join Us</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link to="/about" className="text-sm font-body font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              
              <Link to="/leadership" className="text-sm font-body font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                Leadership
              </Link>
              
              <div>
                <p className="text-sm font-body font-semibold mb-2">Initiatives</p>
                <div className="pl-4 space-y-2">
                  {initiatives.map((initiative) => (
                    <Link
                      key={initiative.path}
                      to={initiative.path}
                      className="block text-sm text-muted-foreground hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {initiative.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-body font-semibold mb-2">Publications</p>
                <div className="pl-4 space-y-2">
                  {publications.map((pub) => (
                    <Link
                      key={pub.path}
                      to={pub.path}
                      className="block text-sm text-muted-foreground hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {pub.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/events" className="text-sm font-body font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                Events
              </Link>
              
              <Link to="/partnerships" className="text-sm font-body font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                Partnerships
              </Link>
              
              <Link to="/join" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="default" className="w-full font-body">Join Us</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
