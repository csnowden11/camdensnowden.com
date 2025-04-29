'use client';

import Link from 'next/link';

export default function Blog() {
  return (
    <main className="blog-page">
      {/* Header */}
      <header>
        <nav aria-label="Main">
          <Link href="/" className="logo">CS.</Link>
        </nav>
      </header>

      {/* Blog Content */}
      <section className="container fade-in">
        <article className="blog-post">
          <h1>Life Lessons for My Sons: What I Hope Charlie and Everett Will Always Remember</h1>
          <p className="blog-meta">By Camden Snowden</p>
          
          <div className="blog-content">
            <p>The wisdom I want to pass down to my boys isn't just parental advice—it's a roadmap for becoming good men in a complex world. These ten principles have guided me through life's challenges, and I hope they'll serve Charlie and Everett just as well.</p>

            <h2>Be Kind to Others</h2>
            <p>When you choose kindness, your brain releases dopamine and oxytocin—the same chemicals that make you feel good when you eat ice cream or receive a hug. Oxford research shows kind acts increase your own happiness by 23%.</p>

            <h2>Make Your Bed Every Day</h2>
            <p>As Admiral McRaven says, "If you want to change the world, start by making your bed." This small daily habit creates momentum and order in your life.</p>

            <h2>Financial Savvy in a Debt-Driven World</h2>
            <p>With 77% of American adults carrying personal debt, financial literacy isn't optional—it's essential. Start investing early: $100/month from age 18 could mean $1.5M by retirement.</p>

            <h2>Standing Your Ground</h2>
            <p>Remember Theodore Roosevelt's wisdom: "Speak softly and carry a big stick." Don't go looking for trouble, but be prepared if it finds you.</p>

            <h2>Embracing Diversity of Thought</h2>
            <p>The most interesting people learn from everyone they meet. Different perspectives don't threaten your views—they enhance them.</p>

            <h2>Betting on Yourself</h2>
            <p>No one will believe in you more than you do in yourself. Make that belief your superpower.</p>

            <h2>Honesty and Integrity First</h2>
            <p>As Warren Buffett wisely noted, "It takes 20 years to build a reputation and 5 minutes to ruin it." Your word must be your bond.</p>

            <h2>Cultivating a Sense of Humor</h2>
            <p>Laughter isn't just fun—it's medicine. It releases endorphins and reduces stress hormones by up to 70%.</p>

            <h2>Looking Out for Your Mom</h2>
            <p>The true mark of your character is how you treat those who have sacrificed for you. Never forget the woman who would move mountains to protect you deserves your protection too.</p>

            <div className="blog-cta">
              <a href="https://life-lessons-sons-gsj2i5x.gamma.site/" className="btn" target="_blank" rel="noopener noreferrer">Read Full Article</a>
            </div>
          </div>
        </article>
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