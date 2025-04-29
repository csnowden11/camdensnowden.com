'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Blog() {
  useEffect(() => {
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
  }, []);

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
          <div className="col-12 post-card">
            <h1>Life Lessons for My Sons</h1>
            <p className="subtitle">What I Hope Charlie and Everett Will Always Remember</p>
            
            <div className="blog-content">
              <p className="intro">
                The wisdom I want to pass down to my boys isn't just parental advice—it's a roadmap for becoming good men in a complex world. These ten principles have guided me through life's challenges, and I hope they'll serve Charlie and Everett just as well.
              </p>

              <div className="stats">
                <div className="stat">
                  <h3>40%</h3>
                  <p>Value Formation</p>
                  <p>Portion of children's core values shaped by parental guidance</p>
                </div>
                <div className="stat">
                  <h3>35%</h3>
                  <p>Resilience Boost</p>
                  <p>How much more likely kids with clear family values overcome adversity</p>
                </div>
                <div className="stat">
                  <h3>10</h3>
                  <p>Principles</p>
                  <p>Life-tested lessons that have guided me through challenges</p>
                </div>
              </div>

              <p className="note">
                According to a 2023 Harvard study, the character lessons we teach our children stick with them far longer than academic ones. These aren't just nice ideas—they're the foundation of who my sons will become.
              </p>

              <h2>Be Kind to Others</h2>
              <div className="lesson-content">
                <div className="lesson-point">
                  <h3>Brain Chemistry</h3>
                  <p>When you choose kindness, your brain releases dopamine and oxytocin—the same chemicals that make you feel good when you eat ice cream or receive a hug.</p>
                </div>
                <div className="lesson-point">
                  <h3>Happiness Boost</h3>
                  <p>Remember how happy you were, Charlie, when you gave half your Halloween candy to that kid who dropped his? Oxford research shows kind acts increase your own happiness by 23%.</p>
                </div>
                <div className="lesson-point">
                  <h3>Ripple Effect</h3>
                  <p>Everett, when you invited the new boy to join your lunch table, his mom told me he went home and helped his sister with homework—this is how 60% of kind acts inspire others to "pay it forward."</p>
                </div>
              </div>

              <p className="lesson-summary">
                Boys, when you share your LEGO sets, include the shy kid at recess, you're not just being nice—you're making the world better and yourself happier. These aren't small things—they're the building blocks of the good men I know you'll become.
              </p>

              <h2>Make Your Bed Every Day</h2>
              <div className="lesson-content">
                <div className="lesson-point">
                  <h3>First Achievement</h3>
                  <p>Admiral McRaven: "If you want to change the world, start by making your bed"</p>
                </div>
                <div className="lesson-point">
                  <h3>Momentum Effect</h3>
                  <p>2.5x more likely to complete additional tasks after this first win</p>
                </div>
                <div className="lesson-point">
                  <h3>Productivity Boost</h3>
                  <p>Navy SEALs report 32% better productivity with morning routines</p>
                </div>
              </div>

              <h2>Practice the Ten-Minute Tidy</h2>
              <div className="lesson-content">
                <div className="lesson-point">
                  <h3>Time Saved</h3>
                  <p>Average American wastes 55 minutes daily looking for misplaced items; 10-minute daily tidy saves 5+ hours weekly</p>
                </div>
                <div className="lesson-point">
                  <h3>Stress Reduction</h3>
                  <p>Reduces household stress by 27% according to home organization studies</p>
                </div>
                <div className="lesson-point">
                  <h3>Sustainable Habits</h3>
                  <p>Creates manageable daily practice instead of overwhelming "deep cleaning" sessions</p>
                </div>
              </div>

              <p className="lesson-summary">
                Charlie and Everett, this small daily habit will save you countless hours and arguments as adults. The best part? It's just ten minutes!
              </p>

              <h2>Financial Savvy in a Debt-Driven World</h2>
              <p>
                With 77% of American adults carrying personal debt (averaging $92,727 per household), financial literacy isn't optional—it's essential. Boys, start investing early: $100/month from age 18 could mean $1.5M by retirement.
              </p>
              <p>
                Remember that $5,000 invested at age 20 becomes $160,000+ by 65 (at 8% return). Learning delayed gratification now predicts 30% higher income in your adulthood.
              </p>

              <h2>Standing Your Ground</h2>
              <div className="lesson-content">
                <div className="lesson-point">
                  <h3>De-escalation First</h3>
                  <p>93% of physical confrontations can be avoided through proper techniques</p>
                </div>
                <div className="lesson-point">
                  <h3>Self-Defense Works</h3>
                  <p>Reduces victimization risk by 50-60% according to Justice Department data</p>
                </div>
                <div className="lesson-point">
                  <h3>Mental Strength</h3>
                  <p>Psychological resilience comes from knowing you can defend yourself when necessary</p>
                </div>
              </div>

              <p className="lesson-summary">
                Remember Theodore Roosevelt's wisdom: "Speak softly and carry a big stick." Don't go looking for trouble, but be prepared if it finds you.
              </p>

              <h2>Embracing Diversity of Thought</h2>
              <div className="lesson-content">
                <div className="lesson-point">
                  <h3>Innovation Boost</h3>
                  <p>72% of innovation comes from cross-disciplinary collaboration</p>
                </div>
                <div className="lesson-point">
                  <h3>Cognitive Flexibility</h3>
                  <p>Exposure to different viewpoints increases mental flexibility by 45%</p>
                </div>
                <div className="lesson-point">
                  <h3>Team Performance</h3>
                  <p>Diverse teams outperform homogeneous ones by 35% (McKinsey)</p>
                </div>
              </div>

              <p className="lesson-summary">
                Sons, the most interesting people learn from everyone they meet. Different perspectives don't threaten your views—they enhance them. This world takes all kinds to make it go round.
              </p>

              <h2>Betting on Yourself</h2>
              <div className="lesson-content">
                <div className="lesson-point">
                  <h3>Build Confidence</h3>
                  <p>Self-confidence correlates with 40% higher career advancement rates. Trust your abilities even when others doubt.</p>
                </div>
                <div className="lesson-point">
                  <h3>Embrace Failure</h3>
                  <p>76% of successful entrepreneurs failed multiple times before breakthrough. Each setback teaches valuable lessons.</p>
                </div>
                <div className="lesson-point">
                  <h3>Take Smart Risks</h3>
                  <p>Risk-taking within reasonable bounds builds resilience and problem-solving. Learn new skills, start projects, pursue passions.</p>
                </div>
              </div>

              <p className="lesson-summary">
                Charlie and Everett, no one will believe in you more than you do in yourself. Make that belief your superpower.
              </p>

              <h2>Honesty and Integrity First</h2>
              <div className="lesson-content">
                <div className="lesson-point">
                  <h3>Foundation of Trust</h3>
                  <p>94% cite honesty as the top trait they seek in partners and friends</p>
                </div>
                <div className="lesson-point">
                  <h3>Mental Wellbeing</h3>
                  <p>Studies show honest people experience 26% less stress and anxiety</p>
                </div>
                <div className="lesson-point">
                  <h3>Professional Edge</h3>
                  <p>Integrity ranks #1 in leadership qualities according to Forbes surveys</p>
                </div>
              </div>

              <p className="lesson-summary">
                As Warren Buffett wisely noted, "It takes 20 years to build a reputation and 5 minutes to ruin it." Boys, your word must be your bond.
              </p>

              <h2>Cultivating a Sense of Humor</h2>
              <p>
                The Benefits of Laughter: Laughter isn't just fun—it's medicine. It releases endorphins and reduces stress hormones by up to 70%. People who laugh 15+ times daily live an average of 8 years longer.
              </p>
              <p>
                Humor and Connection: Being able to laugh, especially at yourself, shows confidence and builds connection. It's why humor ranks in the top 3 most attractive traits across all cultures.
              </p>

              <h2>Looking Out for Your Mom</h2>
              <div className="lesson-content">
                <div className="lesson-point">
                  <h3>Model of Respect</h3>
                  <p>How you treat your mother demonstrates your respect for women in general</p>
                </div>
                <div className="lesson-point">
                  <h3>Recognizing Sacrifice</h3>
                  <p>Mothers typically perform 2.5x more unpaid labor in households</p>
                </div>
                <div className="lesson-point">
                  <h3>Family Happiness</h3>
                  <p>Families with equal respect show 43% greater overall happiness</p>
                </div>
              </div>

              <p className="lesson-summary">
                Boys, the way you treat your mom doesn't just affect her—it shapes you. Never forget the woman who would move mountains to protect you deserves your protection too.
              </p>

              <div className="button-group">
                <a href="https://life-lessons-sons-gsj2i5x.gamma.site/" className="btn" target="_blank" rel="noopener noreferrer">Read Full Article</a>
                <Link href="/" className="btn">Back to Main</Link>
              </div>
            </div>
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