'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  useEffect(() => {
    // Initialize carousel
    const initCarousel = () => {
      const root = carouselRef.current;
      if (!root) return undefined;

      const imgs = Array.from(root.querySelectorAll<HTMLImageElement>('.hero-image')).filter(Boolean);
      if (imgs.length === 0) return undefined;

      let idx = 0;

      const updateSlide = (newIdx: number) => {
        imgs.forEach((img, n) => {
          img.style.transform = `translateX(${100 * (n - newIdx)}%)`;
        });
      };

      const interval = setInterval(() => {
        idx = (idx + 1) % imgs.length;
        updateSlide(idx);
      }, 6000);

      // Touch handling
      let touchStartX = 0;
      let touchEndX = 0;

      const handleTouchStart = (e: TouchEvent) => {
        touchStartX = e.touches[0].clientX;
      };

      const handleTouchEnd = (e: TouchEvent) => {
        touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > 50) {
          idx = (idx + (diff > 0 ? 1 : -1) + imgs.length) % imgs.length;
          updateSlide(idx);
        }
      };

      root.addEventListener('touchstart', handleTouchStart);
      root.addEventListener('touchend', handleTouchEnd);

      // Keyboard navigation
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
          idx = (idx - 1 + imgs.length) % imgs.length;
          updateSlide(idx);
        } else if (e.key === 'ArrowRight') {
          idx = (idx + 1) % imgs.length;
          updateSlide(idx);
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        clearInterval(interval);
        root.removeEventListener('touchstart', handleTouchStart);
        root.removeEventListener('touchend', handleTouchEnd);
        window.removeEventListener('keydown', handleKeyDown);
      };
    };

    // Initialize fade-in animations
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.16 }
    );

    document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

    const cleanup = initCarousel();
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <main>
      {/* Header */}
      <header>
        <nav aria-label="Main">
          <a className="logo" href="#overview" onClick={scrollToSection}>CS.</a>

          <button
            className="hamburger"
            aria-controls="main-menu"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            ☰
          </button>

          <ul
            id="main-menu"
            className={`nav-links ${isMenuOpen ? 'open' : ''}`}
            role="navigation"
          >
            <li><a href="#overview" onClick={scrollToSection}>Overview</a></li>
            <li><a href="#about" onClick={scrollToSection}>About</a></li>
            <li><a href="#career" onClick={scrollToSection}>Career&nbsp;Timeline</a></li>
            <li><a href="#outside" onClick={scrollToSection}>Outside&nbsp;of&nbsp;Work</a></li>
            <li><a href="#thoughts" onClick={scrollToSection}>Thoughts</a></li>
            <li><a href="#contact" onClick={scrollToSection}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="overview" className="fade-in">
        <div id="hero" ref={carouselRef}>
          <Image
            src="/img/personal1_800.jpg"
            alt="Camden with family"
            width={1400}
            height={400}
            priority
            className="hero-image"
            style={{ transform: 'translateX(0%)', objectFit: 'cover' }}
          />
          <Image
            src="/img/personal2_800.jpg"
            alt="Camden on deployment"
            width={1400}
            height={400}
            priority
            className="hero-image"
            style={{ transform: 'translateX(100%)', objectFit: 'cover' }}
          />
          <Image
            src="/img/personal3_800.jpg"
            alt="Camden running"
            width={1400}
            height={400}
            priority
            className="hero-image"
            style={{ transform: 'translateX(200%)', objectFit: 'cover' }}
          />
          <Image
            src="/img/personal4_800.jpg"
            alt="Camden speaking at VC event"
            width={1400}
            height={400}
            priority
            className="hero-image"
            style={{ transform: 'translateX(300%)', objectFit: 'cover' }}
          />
        </div>
        <div className="overlay">
          <h1 className="hero-title">From the Long Gray Line to the Bottom Line</h1>
          <h2 className="hero-subtitle">Decorated Army Officer Turning Business Leader</h2>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container fade-in">
        <div className="row">
          <div className="col-6">
            <Image
              src="/img/camden-headshot_800.jpg"
              alt="Headshot of Camden"
              width={800}
              height={800}
              loading="lazy"
            />
          </div>
          <div className="col-6">
            <p>
              Hi, I&apos;m Camden Snowden - Colorado native, married to Payson for nearly 8 years, father of Charlie and Everett, and West Point graduate (B.S. Economics, magna cum laude). After years of leading infantry and military intelligence organizations across two overseas tours. I&apos;m channeling my expertise and pursuing my MBA at Berkeley Haas.
            </p>
            <ul>
              <li><strong>Years of Army service:</strong> 13</li>
              <li><strong>Overseas tours:</strong> 2</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Career Timeline Section */}
      <section id="career" className="alt fade-in">
        <div className="container row">
          <div className="col-6">
            <h2>Career Highlights</h2>
            <ul>
              <li>Commissioned from West Point</li>
              <li>Infantry Officer with 2CR</li>
              <li>Military Intelligence Officer in South Korea</li>
              <li>Multiple Company Commands, 280 Soldiers, $280 Million of equipment</li>
              <li>Goldman Sachs VIP Program</li>
              <li>Summer Associate, Context VC</li>
              <li>MBA Candidate, Berkeley Haas</li>
            </ul>
            <p><strong>$250 Million in assets managed</strong>, <strong>0 losses</strong>. Trained <strong>thousands</strong> of soldiers.</p>
          </div>
          <div className="col-6">
            <Image
              src="/img/westpoint_800.jpg"
              alt="United States Military Academy"
              width={800}
              height={600}
              loading="lazy"
            />
            <Image
              src="/img/haas_800.jpg"
              alt="Berkeley Haas campus"
              width={800}
              height={600}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Outside of Work Section */}
      <section id="outside" className="container fade-in">
        <h2>Outside of Work</h2>
        <p>Runner 🏃 – sourdough enthusiast 🍞 – devoted family man 👨‍👩‍👦‍👦 – mentor to transitioning veterans</p>
      </section>

      {/* Thoughts Section */}
      <section id="thoughts" className="alt fade-in">
        <div className="container">
          <h2>Some of my Thoughts</h2>
          <div className="thoughts-grid">
            <div className="thought-card">
              <h3>Books I'm Loving</h3>
              <ul>
                <li><a href="https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034" target="_blank" rel="noopener noreferrer">How to Win Friends and Influence People - Dale Carnegie</a></li>
                <li><a href="https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898" target="_blank" rel="noopener noreferrer">The Lean Startup - Eric Ries</a></li>
              </ul>
            </div>
            <div className="thought-card">
              <h3>Websites I'm Using</h3>
              <ul>
                <li><a href="https://www.drudgereport.com/" target="_blank" rel="noopener noreferrer">Drudge Report</a></li>
                <li><a href="https://www.nytimes.com/" target="_blank" rel="noopener noreferrer">The New York Times</a></li>
              </ul>
            </div>
            <div className="thought-card">
              <h3>My Favorite Podcasts</h3>
              <ul>
                <li><a href="https://www.searchengine.show/" target="_blank" rel="noopener noreferrer">Search Engine</a></li>
                <li><a href="https://www.chrishutchins.com/" target="_blank" rel="noopener noreferrer">All the Hacks</a></li>
                <li><a href="https://www.churninglife.com/" target="_blank" rel="noopener noreferrer">Churning Life</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container fade-in">
        <h2>Contact</h2>
        <div className="contact-content">
          <p>Email: <a href="mailto:camdensnowden@gmail.com">camdensnowden@gmail.com</a></p>
          <p className="social">
            <a href="https://linkedin.com/in/camden-snowden">LinkedIn</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="alt">
        <div className="container">
          <p>© 2025 Camden Snowden. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
