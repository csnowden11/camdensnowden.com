'use client';

import Link from 'next/link';

export default function Blog() {
  return (
    <main>
      {/* Header */}
      <header>
        <nav aria-label="Main">
          <Link href="/" className="logo">CS.</Link>
        </nav>
      </header>

      {/* Blog Content */}
      <section className="container fade-in">
        <div className="row">
          <div className="col-4 post-card">
            <h2>Life Lessons for My Sons</h2>
            <p>Wisdom and guidance for Charlie and Everett's journey through life.</p>
            <a href="https://life-lessons-sons-gsj2i5x.gamma.site/" className="btn" target="_blank" rel="noopener noreferrer">Read Article</a>
          </div>
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