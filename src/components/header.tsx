import { Button } from "./ui/button";
import Link from "next/link";
import { Coffee, Menu, X } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative p-1 bg-brand rounded-md text-brand-foreground">
            <Coffee className="h-5 w-5" />
            <div className="absolute -inset-0.5 rounded-md bg-brand/20 blur-sm animate-pulse"></div>
          </div>
          <span className="font-bold text-xl">Lumiso</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#services" className="text-foreground/70 hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="#projects" className="text-foreground/70 hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="#process" className="text-foreground/70 hover:text-foreground transition-colors">
            Process
          </Link>
          <Link href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
            About
          </Link>
          <ModeToggle />
          <Button size="sm">Contact Us</Button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <ModeToggle />
          <button 
            className="p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="container flex flex-col py-4">
            <Link 
              href="#services" 
              className="py-3 text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#projects"
              className="py-3 text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="#process"
              className="py-3 text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </Link>
            <Link 
              href="#about"
              className="py-3 text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Button className="mt-3" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
} 