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
          <a className="logo" href="#overview">CS.</a>

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
            <li><a href="#overview">Overview</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#career">Career&nbsp;Timeline</a></li>
            <li><a href="#outside">Outside&nbsp;of&nbsp;Work</a></li>
            <li><a href="#thoughts">Thoughts</a></li>
            <li><a href="#blog">Personal&nbsp;Blog</a></li>
            <li><a href="#contact">Contact</a></li>
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
          <div className="overlay">
            <h1>From the Long Gray Line to the Bottom Line™</h1>
            <h2>Decorated Army Officer Turning Business Leader</h2>
            <a href="#about" className="btn">Learn More</a>
          </div>
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
              Hi, I&apos;m Camden Snowden - Colorado native, married to Payson for nearly 8 years, father of Charlie and Everett, and West Point graduate (B.S. Economics, magna cum laude). After 9 years of leading infantry and military intelligence organizations across two overseas tours and one operational deployment to Poland, I&apos;m channeling my strategic-intelligence expertise into venture and real-estate innovation while pursuing my MBA at Berkeley Haas.
            </p>
            <ul>
              <li><strong>Years of Army service:</strong> 13</li>
              <li><strong>Overseas tours:</strong> 2</li>
              <li><strong>Operational deployments:</strong> 1</li>
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
              <li><time dateTime="2016">2016</time> – Commissioned from West Point</li>
              <li><time dateTime="2016">2016-2020</time> – Infantry Officer</li>
              <li><time dateTime="2017">2017</time> – Operational deployment</li>
              <li><time dateTime="2022">2022-2024</time> – Command, 280 soldiers, $250 M equipment</li>
              <li><time dateTime="2025">April 2025</time> – Summer Associate, Context VC</li>
              <li><time dateTime="2025">August 2025</time> – MBA candidate, Berkeley Haas</li>
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
        <p>Runner 🏃 – sourdough enthusiast 🍞 – devoted family man 👨‍👩‍👦‍👦 – mentor to transitioning veterans.</p>
      </section>

      {/* Thoughts Section */}
      <section id="thoughts" className="alt fade-in">
        <div className="container">
          <h2>Thoughts</h2>
          <div className="thoughts-grid">
            <div className="thought-card">
              <h3>Books</h3>
              <ul>
                <li><a href="https://www.amazon.com/dp/0062315005" target="_blank" rel="noopener noreferrer">The Alchemist - Paulo Coelho</a></li>
                <li><a href="https://www.amazon.com/dp/0062315005" target="_blank" rel="noopener noreferrer">Atomic Habits - James Clear</a></li>
              </ul>
            </div>
            <div className="thought-card">
              <h3>Websites</h3>
              <ul>
                <li><a href="https://www.farnamstreetblog.com/" target="_blank" rel="noopener noreferrer">Farnam Street</a></li>
                <li><a href="https://www.collaborativefund.com/blog/" target="_blank" rel="noopener noreferrer">Collaborative Fund</a></li>
              </ul>
            </div>
            <div className="thought-card">
              <h3>Podcasts</h3>
              <ul>
                <li><a href="https://www.hubermanlab.com/" target="_blank" rel="noopener noreferrer">Huberman Lab</a></li>
                <li><a href="https://tim.blog/podcast/" target="_blank" rel="noopener noreferrer">The Tim Ferriss Show</a></li>
                <li><a href="https://www.searchengine.show/" target="_blank" rel="noopener noreferrer">Search Engine</a></li>
                <li><a href="https://www.chrishutchins.com/" target="_blank" rel="noopener noreferrer">All the Hacks</a></li>
                <li><a href="https://www.churninglife.com/" target="_blank" rel="noopener noreferrer">Churning Life</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="alt fade-in">
        <div className="container">
          <h2>Personal Blog</h2>
          <div className="row">
            <div className="col-4 post-card">
              <h3>Coming Soon</h3>
              <p>Stay tuned for insights on leadership, military-to-civilian transition, and business strategy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container fade-in">
        <h2>Contact</h2>
        <form action="https://formspree.io/f/xovdjwaw" method="POST">
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="_replyto" required />
          </label>
          <label>
            Subject
            <input type="text" name="_subject" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} required></textarea>
          </label>
          <button className="btn" type="submit">Send Message</button>
        </form>
        <p>Or email directly: <a href="mailto:camden.snowden@contextvc.com">camden.snowden@contextvc.com</a></p>
        <p className="social">
          <a href="https://linkedin.com/in/camden-snowden">LinkedIn</a>
        </p>
      </section>

      {/* Footer */}
      <footer className="alt">
        <div className="container">
          <div className="footer-content">
            <p>© 2025 Camden Snowden. All rights reserved.</p>
            <nav>
              <ul>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#career">Career</a></li>
                <li><a href="#outside">Outside of Work</a></li>
                <li><a href="#thoughts">Thoughts</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}
